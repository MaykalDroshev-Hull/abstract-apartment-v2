import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
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

export async function POST(request: NextRequest) {
  try {
    const { name, month, year, price } = await request.json();

    if (!name || !year || price === undefined) {
      return NextResponse.json({ error: 'Name, year, and price are required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('expenses')
      .insert([{ name, month: month || null, year, price }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error adding expense:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
