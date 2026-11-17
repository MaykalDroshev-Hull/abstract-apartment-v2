import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient, requireAdminAuth } from '@/app/lib/adminAuth';
import { checkRateLimit, createRateLimitResponse } from '@/app/lib/rateLimit';

// GET /api/bookings - Fetch all bookings (Admin only: protected to prevent PII customer leaks)
export async function GET(request: NextRequest) {
  const auth = await requireAdminAuth(request);
  if (!auth.authorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const apartmentid = searchParams.get('apartmentid');
  const supabase = getSupabaseAdminClient();

  let query = supabase
    .from('Booking')
    .select(`
      BookingID,
      CheckInDT,
      CheckOutDT,
      CustomerID,
      apartmentid,
      rfstatusid,
      apartment:apartmentid (
        cleaning_price_per_hour
      ),
      Customer:CustomerID (
        FirstName,
        LastName,
        Telephone,
        Email
      ),
      FullPrice,
      PaidPrice,
      Comments,
      cleaning_hours
    `)
    .order('CheckInDT');

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ bookings: data });
}

// POST /api/bookings - Add new booking (Public with rate limit & validation)
export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting: 10 booking requests per 10 minutes per IP
    const rateLimit = await checkRateLimit(request, {
      maxRequests: 10,
      windowSeconds: 600,
      keyPrefix: 'booking_create',
    });

    if (!rateLimit.success) {
      return createRateLimitResponse(
        rateLimit.reset,
        'Too many booking attempts. Please wait a few minutes before trying again.'
      );
    }

    const body = await request.json();
    const {
      CheckInDT,
      CheckOutDT,
      FirstName,
      LastName,
      Telephone,
      Email,
      FullPrice,
      PaidPrice,
      Comments,
      apartmentid,
      cleaning_hours,
    } = body;

    // 2. Strict Input Validation
    if (!CheckInDT || !CheckOutDT || !FirstName || !LastName || !Telephone) {
      return NextResponse.json(
        { error: 'Check-in, check-out, first name, last name, and telephone are required' },
        { status: 400 }
      );
    }

    const checkInDate = new Date(CheckInDT);
    const checkOutDate = new Date(CheckOutDT);
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime()) || checkOutDate <= checkInDate) {
      return NextResponse.json(
        { error: 'Invalid check-in or check-out date range' },
        { status: 400 }
      );
    }

    const safeFullPrice = typeof FullPrice === 'number' && FullPrice >= 0 ? FullPrice : 0;
    const safePaidPrice = typeof PaidPrice === 'number' && PaidPrice >= 0 ? PaidPrice : 0;
    const safeApartmentId = typeof apartmentid === 'number' ? apartmentid : parseInt(apartmentid, 10) || 1;
    const safeCleaningHours = typeof cleaning_hours === 'number' && cleaning_hours >= 0 ? cleaning_hours : 0;

    const supabase = getSupabaseAdminClient();

    // 3. Insert customer record
    const customerData: Record<string, any> = {
      FirstName: String(FirstName).trim().slice(0, 100),
      LastName: String(LastName).trim().slice(0, 100),
      Telephone: String(Telephone).trim().slice(0, 50),
    };

    if (Email && typeof Email === 'string') {
      customerData.Email = Email.trim().slice(0, 255);
    }

    const insertResult = await supabase
      .from('Customer')
      .insert([customerData])
      .select()
      .single();

    let customer = insertResult.data;
    let custErr = insertResult.error;

    // Fallback if Email column is not in schema cache
    if (custErr && custErr.message && custErr.message.includes('Email') && custErr.message.includes('schema cache')) {
      const retryResult = await supabase
        .from('Customer')
        .insert([{
          FirstName: customerData.FirstName,
          LastName: customerData.LastName,
          Telephone: customerData.Telephone,
        }])
        .select()
        .single();
      customer = retryResult.data;
      custErr = retryResult.error;
    }

    if (custErr || !customer) {
      console.error('Error creating customer:', custErr);
      return NextResponse.json({ error: custErr?.message || 'Failed to create customer' }, { status: 500 });
    }

    // 4. Insert booking (rfstatusid = 1: pending/unconfirmed by default)
    const { error: bookErr } = await supabase.from('Booking').insert([
      {
        CheckInDT,
        CheckOutDT,
        CustomerID: customer.CustomerID,
        FullPrice: safeFullPrice,
        PaidPrice: safePaidPrice,
        Comments: Comments ? String(Comments).slice(0, 2000) : null,
        apartmentid: safeApartmentId,
        rfstatusid: 1,
        cleaning_hours: safeCleaningHours,
      },
    ]);

    if (bookErr) {
      console.error('Error adding booking:', bookErr);
      return NextResponse.json({ error: bookErr.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error adding booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
