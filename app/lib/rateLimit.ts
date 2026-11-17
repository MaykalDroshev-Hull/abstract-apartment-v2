import { NextRequest, NextResponse } from 'next/server';

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory sliding-window store
const memoryStore = new Map<string, RateLimitRecord>();

// Periodic cleanup of expired rate limit entries every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupExpired() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [key, record] of memoryStore.entries()) {
    if (record.resetAt <= now) {
      memoryStore.delete(key);
    }
  }
}

export interface RateLimitConfig {
  maxRequests: number;
  windowSeconds: number;
  keyPrefix?: string;
}

/**
 * Extracts a client IP from request headers (supports proxies, Cloudflare, Vercel)
 */
export function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const ips = forwardedFor.split(',');
    if (ips.length > 0 && ips[0].trim()) {
      return ips[0].trim();
    }
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp.trim();

  return '127.0.0.1';
}

/**
 * Rate limiter supporting both in-memory and Upstash Redis (if configured in env)
 */
export async function checkRateLimit(
  request: NextRequest,
  config: RateLimitConfig
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  const ip = getClientIp(request);
  const prefix = config.keyPrefix || 'global';
  const key = `${prefix}:${ip}`;
  const now = Date.now();
  const windowMs = config.windowSeconds * 1000;

  // Check if Upstash Redis credentials exist for distributed rate limiting
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (upstashUrl && upstashToken) {
    try {
      // Use Upstash REST API for distributed atomic rate limiting
      const redisKey = `rl:${key}`;
      const response = await fetch(`${upstashUrl}/pipeline`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${upstashToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          ['INCR', redisKey],
          ['EXPIRE', redisKey, config.windowSeconds, 'NX'],
          ['TTL', redisKey],
        ]),
      });

      if (response.ok) {
        const results = await response.json();
        const count = results[0]?.result || 1;
        const ttl = results[2]?.result || config.windowSeconds;
        const remaining = Math.max(0, config.maxRequests - count);

        return {
          success: count <= config.maxRequests,
          limit: config.maxRequests,
          remaining,
          reset: Math.max(1, ttl),
        };
      }
    } catch (err) {
      console.warn('Upstash rate limit error, falling back to memory store:', err);
    }
  }

  // Fast in-memory rate limiting fallback
  cleanupExpired();

  let record = memoryStore.get(key);
  if (!record || record.resetAt <= now) {
    record = { count: 1, resetAt: now + windowMs };
    memoryStore.set(key, record);
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      reset: Math.ceil((record.resetAt - now) / 1000),
    };
  }

  record.count += 1;
  const remaining = Math.max(0, config.maxRequests - record.count);
  const resetSeconds = Math.ceil((record.resetAt - now) / 1000);

  return {
    success: record.count <= config.maxRequests,
    limit: config.maxRequests,
    remaining,
    reset: resetSeconds,
  };
}

/**
 * Helper to build 429 Too Many Requests response with standard headers
 */
export function createRateLimitResponse(resetSeconds: number, message = 'Too many requests. Please try again later.') {
  return NextResponse.json(
    { error: message, retryAfter: resetSeconds },
    {
      status: 429,
      headers: {
        'Retry-After': String(resetSeconds),
        'X-RateLimit-Reset': String(resetSeconds),
      },
    }
  );
}
