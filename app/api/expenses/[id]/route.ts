import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdminClient, requireAdminAuth } from '@/app/lib/adminAuth';

// DELETE /api/expenses/[id] - Delete expense (Admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAdminAuth(request);
    if (!auth.authorized) {
      return auth.response;
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: 'Expense ID is required' }, { status: 400 });
    }

    const supabase = getSupabaseAdminClient();
    const { error } = await supabase
      .from('expenses')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting expense:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT /api/expenses/[id] - Update expense (Admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAdminAuth(request);
    if (!auth.authorized) {
      return auth.response;
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: 'Expense ID is required' }, { status: 400 });
    }

    const { name, month, year, price } = await request.json();

    const updateData: Record<string, any> = {};
    if (name !== undefined) updateData.name = String(name).trim().slice(0, 200);
    if (month !== undefined) updateData.month = month ? String(month).trim().slice(0, 50) : null;
    if (year !== undefined) updateData.year = Number(year);
    if (price !== undefined) updateData.price = Number(price);

    const supabase = getSupabaseAdminClient();
    const { error } = await supabase
      .from('expenses')
      .update(updateData)
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating expense:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
