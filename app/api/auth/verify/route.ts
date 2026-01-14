import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { parse } from 'cookie';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const cookies = parse(request.headers.get('cookie') || '');
    const sessionToken = cookies.admin_session;

    if (!sessionToken) {
      return NextResponse.json({ authenticated: false });
    }

    // Decode session token
    const decoded = Buffer.from(sessionToken, 'base64').toString('utf-8');
    const [userId, timestamp] = decoded.split(':');

    // Check if session is not expired (24 hours)
    const sessionAge = Date.now() - parseInt(timestamp);
    const maxAge = 60 * 60 * 24 * 1000; // 24 hours in milliseconds

    if (sessionAge > maxAge) {
      return NextResponse.json({ authenticated: false });
    }

    // Verify user still exists and is active
    const { data: user, error } = await supabase
      .from('admin_users')
      .select('id, username, is_active')
      .eq('id', userId)
      .eq('is_active', true)
      .single();

    if (error || !user) {
      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({
      authenticated: true,
      user: { id: user.id, username: user.username }
    });

  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}