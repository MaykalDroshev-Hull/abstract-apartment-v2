import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET /api/bookings - Fetch all bookings
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const apartmentid = searchParams.get('apartmentid');

  let query = supabase
    .from('Booking')
    .select(`
      BookingID,
      CheckInDT,
      CheckOutDT,
      CustomerID,
      apartmentid,
      Customer:CustomerID (
        FirstName,
        LastName,
        Telephone
      ),
      FullPrice,
      PaidPrice,
      Comments
    `)
    .order('CheckInDT');

  // Filter by apartmentid if provided
  //if (apartmentid) {
    //query = query.eq('apartmentid', parseInt(apartmentid));
  //}

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ bookings: data });
}

// POST /api/bookings - Add new booking
export async function POST(request: NextRequest) {
  try {
    const { CheckInDT, CheckOutDT, FirstName, LastName, Telephone, FullPrice, PaidPrice, Comments, apartmentid } = await request.json();

    // First, insert the customer
    const { data: customer, error: custErr } = await supabase
      .from('Customer')
      .insert([{ FirstName, LastName, Telephone }])
      .select()
      .single();

    if (custErr) {
      return NextResponse.json({ error: custErr }, { status: 500 });
    }

    // Then, insert the booking
    const { error: bookErr } = await supabase
      .from('Booking')
      .insert([{ CheckInDT, CheckOutDT, CustomerID: customer.CustomerID, FullPrice, PaidPrice, Comments, apartmentid }]);

    if (bookErr) {
      return NextResponse.json({ error: bookErr }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error adding booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}