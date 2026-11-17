import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient, requireAdminAuth } from '@/app/lib/adminAuth';

// GET /api/statistics - Fetch financial and booking statistics (Admin only)
export async function GET(request: NextRequest) {
  try {
    const auth = await requireAdminAuth(request);
    if (!auth.authorized) {
      return auth.response;
    }

    const supabase = getSupabaseAdminClient();

    // Fetch all bookings (using PaidPrice as revenue)
    const { data: bookings, error: bookingsError } = await supabase
      .from('Booking')
      .select('CheckInDT, PaidPrice, cleaning_hours, apartmentid, rfstatusid');

    if (bookingsError) {
      throw bookingsError;
    }

    // Fetch apartments to get cleaning_price_per_hour
    const { data: apartments, error: apartmentsError } = await supabase
      .from('apartment')
      .select('apartmentid, cleaning_price_per_hour');

    if (apartmentsError) {
      throw apartmentsError;
    }

    const apartmentMap = new Map(
      (apartments || []).map((a) => [a.apartmentid, a.cleaning_price_per_hour])
    );

    // Fetch manual expenses
    const { data: manualExpenses, error: expensesError } = await supabase
      .from('expenses')
      .select('*');

    if (expensesError) {
      throw expensesError;
    }

    const stats = {
      allTime: { revenue: 0, expenses: 0, profit: 0 },
      byYear: {} as Record<string, { revenue: number; expenses: number; profit: number }>,
      byMonth: {} as Record<string, { revenue: number; expenses: number; profit: number }>,
    };

    const addToStats = (
      periodStats: { revenue: number; expenses: number; profit: number },
      rev: number,
      exp: number
    ) => {
      periodStats.revenue += rev;
      periodStats.expenses += exp;
      periodStats.profit += (rev - exp);
    };

    // Process bookings
    (bookings || []).forEach((b) => {
      if (!b.PaidPrice && !b.cleaning_hours) return;
      
      const rev = b.PaidPrice || 0;
      const hours = b.cleaning_hours || 0;
      const rate = apartmentMap.get(b.apartmentid) || 15;
      const exp = hours * rate;

      if (rev === 0 && exp === 0) return;

      const date = new Date(b.CheckInDT);
      const year = date.getFullYear().toString();
      const monthStr = (date.getMonth() + 1).toString().padStart(2, '0');
      const monthKey = `${year}-${monthStr}`;

      if (!stats.byYear[year]) stats.byYear[year] = { revenue: 0, expenses: 0, profit: 0 };
      if (!stats.byMonth[monthKey]) stats.byMonth[monthKey] = { revenue: 0, expenses: 0, profit: 0 };

      addToStats(stats.allTime, rev, exp);
      addToStats(stats.byYear[year], rev, exp);
      addToStats(stats.byMonth[monthKey], rev, exp);
    });

    // Process manual expenses
    (manualExpenses || []).forEach((e) => {
      const exp = e.price || 0;
      const rev = 0;

      const year = e.year.toString();
      let monthStr = '';
      if (e.month) {
        monthStr = e.month.toString().padStart(2, '0');
      } else {
        const date = new Date(e.created_at);
        monthStr = (date.getMonth() + 1).toString().padStart(2, '0');
      }
      
      const monthKey = `${year}-${monthStr}`;

      if (!stats.byYear[year]) stats.byYear[year] = { revenue: 0, expenses: 0, profit: 0 };
      if (!stats.byMonth[monthKey]) stats.byMonth[monthKey] = { revenue: 0, expenses: 0, profit: 0 };

      addToStats(stats.allTime, rev, exp);
      addToStats(stats.byYear[year], rev, exp);
      addToStats(stats.byMonth[monthKey], rev, exp);
    });

    return NextResponse.json({ stats });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
