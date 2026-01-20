import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { format, parseISO, addDays, isBefore } from 'date-fns';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET /api/bookings/dates - Get all booked dates for calendar display
// Query params: unitType=apartment|studio|both (optional, defaults to both)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const unitType = searchParams.get('unitType') || 'both';

    // Determine which apartment IDs to fetch
    let apartmentIds: number[] = [];
    if (unitType === 'apartment') {
      apartmentIds = [1];
    } else if (unitType === 'studio') {
      apartmentIds = [2];
    } else {
      // 'both' - get both apartments
      apartmentIds = [1, 2];
    }

    const { data, error } = await supabase
      .from('Booking')
      .select('CheckInDT, CheckOutDT, apartmentid')
      .in('apartmentid', apartmentIds);

    if (error) {
      console.error('Supabase load error:', error);
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    const bookedDates: Record<string, boolean> = {};
    const bookedDatesByApartment: Record<number, Record<string, boolean>> = {};

    // Initialize apartment-specific tracking
    apartmentIds.forEach(id => {
      bookedDatesByApartment[id] = {};
    });

    if (data) {
      data.forEach(({ CheckInDT, CheckOutDT, apartmentid }) => {
        if (!CheckInDT || !CheckOutDT) return;

        let current = parseISO(CheckInDT);
        const end = parseISO(CheckOutDT);

        // Only include dates up to the day *before* CheckOutDT
        while (isBefore(current, end)) {
          const dateStr = format(current, 'yyyy-MM-dd');
          
          // Mark as booked in general list
          bookedDates[dateStr] = true;
          
          // Mark as booked in apartment-specific list
          if (bookedDatesByApartment[apartmentid]) {
            bookedDatesByApartment[apartmentid][dateStr] = true;
          }
          
          current = addDays(current, 1);
        }
      });
    }

    return NextResponse.json({
      success: true,
      bookedDates,
      bookedDatesByApartment,
    });
  } catch (error) {
    console.error('Error in dates API:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
