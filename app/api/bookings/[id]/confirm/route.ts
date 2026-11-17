import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient, requireAdminAuth } from '@/app/lib/adminAuth';

// PATCH /api/bookings/[id]/confirm - Confirm booking and send email (Admin only)
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAdminAuth(request);
    if (!auth.authorized) {
      return auth.response;
    }

    const params = await context.params;
    const bookingId = params.id;

    if (!bookingId) {
      return NextResponse.json({ error: 'Booking ID is required' }, { status: 400 });
    }

    const supabase = getSupabaseAdminClient();

    // First, fetch the booking with customer details
    const { data: booking, error: fetchErr } = await supabase
      .from('Booking')
      .select(`
        BookingID,
        CheckInDT,
        CheckOutDT,
        FullPrice,
        PaidPrice,
        Comments,
        apartmentid,
        rfstatusid,
        Customer:CustomerID (
          FirstName,
          LastName,
          Telephone,
          Email
        )
      `)
      .eq('BookingID', bookingId)
      .single();

    if (fetchErr || !booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    // Check if booking is already confirmed
    if (booking.rfstatusid === 2) {
      return NextResponse.json({ error: 'Booking is already confirmed' }, { status: 400 });
    }

    // Update booking status to confirmed (rfstatusid = 2)
    const { error: updateErr } = await supabase
      .from('Booking')
      .update({ rfstatusid: 2 })
      .eq('BookingID', bookingId);

    if (updateErr) {
      return NextResponse.json({ error: updateErr.message }, { status: 500 });
    }

    // Send confirmation email to customer
    const customer = Array.isArray(booking.Customer) ? booking.Customer[0] : booking.Customer;
    if (customer?.Email) {
      try {
        const emailResponse = await fetch(`${request.nextUrl.origin}/api/send-booking-confirmation`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            cookie: request.headers.get('cookie') || '',
          },
          body: JSON.stringify({
            bookingId: booking.BookingID,
            checkIn: booking.CheckInDT,
            checkOut: booking.CheckOutDT,
            firstName: customer.FirstName,
            lastName: customer.LastName,
            email: customer.Email,
            telephone: customer.Telephone,
            fullPrice: booking.FullPrice,
            paidPrice: booking.PaidPrice,
            apartmentid: booking.apartmentid,
            comments: booking.Comments,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Failed to send confirmation email, status:', emailResponse.status);
        }
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error confirming booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
