import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// PUT /api/bookings/[id] - Update booking
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
    try {
    // Fix: Await params in Next.js 15+
    const params = await context.params;
    const bookingId = params.id;

    if (!bookingId) {
      // #region agent log - missing booking ID
      fetch('http://127.0.0.1:7245/ingest/fcedc78c-139b-4d26-92b1-3c89299a6d76', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'api/bookings/[id]/route.ts:PUT:missing-id',
          message: 'Booking ID is missing from URL params',
          data: { params: params },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'edit-debug',
          hypothesisId: 'A'
        })
      }).catch(() => {});
      // #endregion

      return NextResponse.json({ error: 'Booking ID is required' }, { status: 400 });
    }
    const requestBody = await request.json();
    const { newCheckInDT, newCheckOutDT, FullPrice, PaidPrice, Comments, apartmentid } = requestBody;

    const updateData: any = { CheckInDT: newCheckInDT, CheckOutDT: newCheckOutDT, FullPrice, PaidPrice, Comments };
    if (apartmentid !== undefined) {
      updateData.apartmentid = apartmentid;
    }

    const { error } = await supabase
      .from('Booking')
      .update(updateData)
      .eq('BookingID', bookingId);

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE /api/bookings/[id] - Delete booking
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Fix: Await params in Next.js 15+
    const params = await context.params;
    const bookingId = params.id;

    // First, get the customer ID associated with this booking
    const { data: booking, error: fetchErr } = await supabase
      .from('Booking')
      .select('CustomerID')
      .eq('BookingID', bookingId)
      .single();

    if (fetchErr) {
      return NextResponse.json({ error: fetchErr }, { status: 500 });
    }

    // Delete the booking
    const { error: deleteBookingErr } = await supabase
      .from('Booking')
      .delete()
      .eq('BookingID', bookingId);

    if (deleteBookingErr) {
      return NextResponse.json({ error: deleteBookingErr }, { status: 500 });
    }

    // Delete the customer
    const { error: deleteCustomerErr } = await supabase
      .from('Customer')
      .delete()
      .eq('CustomerID', booking.CustomerID);

    if (deleteCustomerErr) {
      return NextResponse.json({ error: deleteCustomerErr }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}