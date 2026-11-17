import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import {
  getSupabaseAdminClient,
  createSignedAdminSessionToken,
  createAdminSessionCookie,
} from '@/app/lib/adminAuth';
import { checkRateLimit, createRateLimitResponse } from '@/app/lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting: 5 login attempts per 15 minutes per IP
    const rateLimit = await checkRateLimit(request, {
      maxRequests: 5,
      windowSeconds: 900,
      keyPrefix: 'auth_login',
    });

    if (!rateLimit.success) {
      return createRateLimitResponse(
        rateLimit.reset,
        'Too many login attempts. Please try again in a few minutes.'
      );
    }

    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    const supabase = getSupabaseAdminClient();

    // Fetch user from database
    const { data: user, error } = await supabase
      .from('admin_users')
      .select('id, username, password_hash, is_active')
      .eq('username', username)
      .eq('is_active', true)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Verify password with bcrypt
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Create cryptographically signed HMAC-SHA256 session token
    const sessionToken = createSignedAdminSessionToken(user.id);
    const cookie = createAdminSessionCookie(sessionToken);

    const response = NextResponse.json({ success: true, message: 'Login successful' });
    response.headers.set('Set-Cookie', cookie);
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
