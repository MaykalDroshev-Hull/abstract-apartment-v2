import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// PATCH /api/bookings/[id]/confirm - Confirm booking and send email
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const bookingId = params.id;

    if (!bookingId) {
      return NextResponse.json({ error: 'Booking ID is required' }, { status: 400 });
    }

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
      return NextResponse.json({ error: updateErr }, { status: 500 });
    }

    // Send confirmation email to customer
    const customer = Array.isArray(booking.Customer) ? booking.Customer[0] : booking.Customer;
    if (customer?.Email) {
      try {
        const emailResponse = await fetch(`${request.nextUrl.origin}/api/send-booking-confirmation`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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
          console.error('Failed to send confirmation email');
          // Don't fail the confirmation if email fails
        }
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
        // Don't fail the confirmation if email fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error confirming booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
