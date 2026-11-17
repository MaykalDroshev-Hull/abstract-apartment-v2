import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient, requireAdminAuth } from '@/app/lib/adminAuth';

// GET /api/expenses - Fetch expenses (Admin only)
export async function GET(request: NextRequest) {
  const auth = await requireAdminAuth(request);
  if (!auth.authorized) {
    return auth.response;
  }

  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from('expenses')
    .select('*')
    .order('year', { ascending: false })
    .order('month', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching expenses:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ expenses: data });
}

// POST /api/expenses - Add expense (Admin only)
export async function POST(request: NextRequest) {
  try {
    const auth = await requireAdminAuth(request);
    if (!auth.authorized) {
      return auth.response;
    }

    const { name, month, year, price } = await request.json();

    if (!name || !year || price === undefined) {
      return NextResponse.json({ error: 'Name, year, and price are required' }, { status: 400 });
    }

    const safePrice = Number(price);
    const safeYear = Number(year);
    if (isNaN(safePrice) || isNaN(safeYear) || safePrice < 0) {
      return NextResponse.json({ error: 'Price and year must be valid numbers' }, { status: 400 });
    }

    const supabase = getSupabaseAdminClient();
    const { error } = await supabase
      .from('expenses')
      .insert([{
        name: String(name).trim().slice(0, 200),
        month: month ? String(month).trim().slice(0, 50) : null,
        year: safeYear,
        price: safePrice,
      }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error adding expense:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
