import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient, requireAdminAuth } from '@/app/lib/adminAuth';

// PUT /api/bookings/[id] - Update booking (Admin only)
export async function PUT(
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

    const requestBody = await request.json();
    const { 
      newCheckInDT, 
      newCheckOutDT, 
      FullPrice, 
      PaidPrice, 
      Comments, 
      apartmentid, 
      cleaning_hours,
      FirstName,
      LastName,
      Telephone,
      Email
    } = requestBody;

    const supabase = getSupabaseAdminClient();

    const updateData: Record<string, any> = {
      CheckInDT: newCheckInDT,
      CheckOutDT: newCheckOutDT,
      FullPrice,
      PaidPrice,
      Comments,
      cleaning_hours,
    };
    if (apartmentid !== undefined) {
      updateData.apartmentid = apartmentid;
    }

    const { data: booking, error: fetchErr } = await supabase
      .from('Booking')
      .select('CustomerID')
      .eq('BookingID', bookingId)
      .single();

    if (fetchErr) {
      return NextResponse.json({ error: fetchErr.message }, { status: 500 });
    }

    if (booking?.CustomerID && (FirstName !== undefined || LastName !== undefined || Telephone !== undefined || Email !== undefined)) {
      const customerUpdate: Record<string, any> = {};
      if (FirstName !== undefined) customerUpdate.FirstName = FirstName;
      if (LastName !== undefined) customerUpdate.LastName = LastName;
      if (Telephone !== undefined) customerUpdate.Telephone = Telephone;
      if (Email !== undefined) customerUpdate.Email = Email;

      const { error: customerError } = await supabase
        .from('Customer')
        .update(customerUpdate)
        .eq('CustomerID', booking.CustomerID);

      if (customerError) {
        console.error('Error updating customer:', customerError);
      }
    }

    const { error } = await supabase
      .from('Booking')
      .update(updateData)
      .eq('BookingID', bookingId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE /api/bookings/[id] - Delete booking (Admin only)
export async function DELETE(
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

    // First, get the customer ID associated with this booking
    const { data: booking, error: fetchErr } = await supabase
      .from('Booking')
      .select('CustomerID')
      .eq('BookingID', bookingId)
      .single();

    if (fetchErr) {
      return NextResponse.json({ error: fetchErr.message }, { status: 500 });
    }

    // Delete the booking
    const { error: deleteBookingErr } = await supabase
      .from('Booking')
      .delete()
      .eq('BookingID', bookingId);

    if (deleteBookingErr) {
      return NextResponse.json({ error: deleteBookingErr.message }, { status: 500 });
    }

    // Delete the customer
    if (booking?.CustomerID) {
      const { error: deleteCustomerErr } = await supabase
        .from('Customer')
        .delete()
        .eq('CustomerID', booking.CustomerID);

      if (deleteCustomerErr) {
        console.warn('Customer delete notice:', deleteCustomerErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
