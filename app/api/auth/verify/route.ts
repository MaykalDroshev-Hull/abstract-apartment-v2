import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminSession } from '@/app/lib/adminAuth';

export async function GET(request: NextRequest) {
  try {
    const authResult = await verifyAdminSession(request);

    if (!authResult.authenticated || !authResult.user) {
      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({
      authenticated: true,
      user: authResult.user,
    });
  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
