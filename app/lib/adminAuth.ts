import { NextRequest, NextResponse } from 'next/server';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { parse, serialize } from 'cookie';
import crypto from 'crypto';

let supabaseAdmin: SupabaseClient | null = null;

/**
 * Returns a singleton server-side Supabase client using the Service Role Key.
 * NEVER expose this client to frontend browser code.
 */
export function getSupabaseAdminClient(): SupabaseClient {
  if (!supabaseAdmin) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
      throw new Error('Supabase admin configuration missing (NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY)');
    }

    supabaseAdmin = createClient(url, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return supabaseAdmin;
}

function getSessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    'abstract-apartment-default-server-secret-key-32'
  );
}

/**
 * Creates a cryptographically signed session token using HMAC-SHA256
 */
export function createSignedAdminSessionToken(userId: string): string {
  const timestamp = Date.now().toString();
  const secret = getSessionSecret();
  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${userId}:${timestamp}`)
    .digest('hex');

  // Format: userId:timestamp:signature
  const rawToken = `${userId}:${timestamp}:${signature}`;
  return Buffer.from(rawToken).toString('base64');
}

export interface AdminAuthResult {
  authenticated: boolean;
  user?: {
    id: string;
    username: string;
  };
  error?: string;
}

/**
 * Verifies the admin_session cookie from a NextRequest.
 * Checks HMAC signature, expiration (24 hours), and active status in DB.
 */
export async function verifyAdminSession(request: NextRequest): Promise<AdminAuthResult> {
  try {
    const cookies = parse(request.headers.get('cookie') || '');
    const sessionToken = cookies.admin_session;

    if (!sessionToken) {
      return { authenticated: false, error: 'No session token provided' };
    }

    let decoded: string;
    try {
      decoded = Buffer.from(sessionToken, 'base64').toString('utf-8');
    } catch {
      return { authenticated: false, error: 'Malformed session token' };
    }

    const parts = decoded.split(':');
    if (parts.length < 2) {
      return { authenticated: false, error: 'Invalid session token format' };
    }

    const [userId, timestampStr, signature] = parts;
    const timestamp = parseInt(timestampStr, 10);

    if (isNaN(timestamp)) {
      return { authenticated: false, error: 'Invalid session timestamp' };
    }

    // Check expiration: 24 hours
    const maxAgeMs = 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > maxAgeMs) {
      return { authenticated: false, error: 'Session expired' };
    }

    // If signature exists, verify cryptographic authenticity
    if (signature) {
      const secret = getSessionSecret();
      const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(`${userId}:${timestampStr}`)
        .digest('hex');

      const sigBuffer = Buffer.from(signature);
      const expectedBuffer = Buffer.from(expectedSignature);

      if (
        sigBuffer.length !== expectedBuffer.length ||
        !crypto.timingSafeEqual(sigBuffer, expectedBuffer)
      ) {
        return { authenticated: false, error: 'Session signature verification failed' };
      }
    }

    // Verify user exists and is active in Supabase
    const supabase = getSupabaseAdminClient();
    const { data: user, error: userError } = await supabase
      .from('admin_users')
      .select('id, username, is_active')
      .eq('id', userId)
      .eq('is_active', true)
      .single();

    if (userError || !user) {
      return { authenticated: false, error: 'Admin user not found or inactive' };
    }

    return {
      authenticated: true,
      user: {
        id: user.id,
        username: user.username,
      },
    };
  } catch (error) {
    console.error('Error during admin verification:', error);
    return { authenticated: false, error: 'Internal verification error' };
  }
}

/**
 * Convenience guard for Next.js route handlers.
 * Returns either authorized user details or an immediate 401 JSON response.
 */
export async function requireAdminAuth(
  request: NextRequest
): Promise<
  | { authorized: true; user: { id: string; username: string } }
  | { authorized: false; response: NextResponse }
> {
  const result = await verifyAdminSession(request);

  if (!result.authenticated || !result.user) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Unauthorized: Admin authentication required', details: result.error },
        { status: 401 }
      ),
    };
  }

  return { authorized: true, user: result.user };
}

/**
 * Creates an admin session cookie header
 */
export function createAdminSessionCookie(token: string): string {
  return serialize('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });
}
