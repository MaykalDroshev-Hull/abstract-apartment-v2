import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET /api/bookings/availability - Check date availability for multiple apartment IDs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const apartmentIds = searchParams.get('apartmentIds');

    if (!checkIn || !checkOut) {
      return NextResponse.json(
        { error: 'checkIn and checkOut parameters are required' },
        { status: 400 }
      );
    }

    if (!apartmentIds) {
      return NextResponse.json(
        { error: 'apartmentIds parameter is required' },
        { status: 400 }
      );
    }

    // Parse apartment IDs (comma-separated string like "1,2")
    const apartmentIdArray = apartmentIds.split(',').map(id => parseInt(id.trim(), 10));

    // Check for overlapping bookings
    // A booking overlaps if:
    // - CheckInDT <= checkOut AND CheckOutDT >= checkIn
    // This covers all overlap cases: partial overlaps, full containment, etc.
    const { data: bookings, error } = await supabase
      .from('Booking')
      .select('apartmentid, CheckInDT, CheckOutDT')
      .in('apartmentid', apartmentIdArray)
      .lte('CheckInDT', checkOut)
      .gte('CheckOutDT', checkIn);

    if (error) {
      console.error('Error checking availability:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Group bookings by apartment ID
    const availability: Record<number, boolean> = {};
    
    // Initialize all apartments as available
    apartmentIdArray.forEach(id => {
      availability[id] = true;
    });

    // Check if any bookings overlap for each apartment
    if (bookings && bookings.length > 0) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      bookings.forEach((booking: any) => {
        const bookingCheckIn = new Date(booking.CheckInDT);
        const bookingCheckOut = new Date(booking.CheckOutDT);
        const apartmentId = booking.apartmentid;

        // Check if dates overlap
        const overlaps = 
          (checkInDate >= bookingCheckIn && checkInDate < bookingCheckOut) ||
          (checkOutDate > bookingCheckIn && checkOutDate <= bookingCheckOut) ||
          (checkInDate <= bookingCheckIn && checkOutDate >= bookingCheckOut);

        if (overlaps) {
          availability[apartmentId] = false;
        }
      });
    }

    // Return availability status for each apartment
    return NextResponse.json({
      availability,
      allAvailable: Object.values(availability).every(avail => avail === true),
    });
  } catch (error) {
    console.error('Error in availability check:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
