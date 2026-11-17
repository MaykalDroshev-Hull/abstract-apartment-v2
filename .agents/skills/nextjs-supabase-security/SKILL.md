---
name: nextjs-supabase-security
description: Audits Next.js and Supabase projects for critical security vulnerabilities, including rate limiting, environment variable exposure, and Supabase Row Level Security (RLS) policies.
---
# Next.js & Supabase Security Auditor

## Summary
Audits the current Next.js App Router and Supabase project for common AI-wrapper vulnerabilities, ensuring environment variables are safe, endpoints are rate-limited, and database rows are protected.

## When to Use
Trigger when the user asks to "secure the website", "audit security", "check for vulnerabilities", or "enable RLS".

## Steps

1. **Environment Variable Audit:**
   - Scan `.env` and Next.js code for leaked secrets.
   - Ensure NO sensitive keys (e.g., OpenAI API keys, Anthropic keys, Supabase Service Role keys) are prefixed with `NEXT_PUBLIC_`.
   - Verify that AI API keys are only accessed server-side (in Route Handlers or Server Actions).

2. **Supabase Row Level Security (RLS):**
   - Verify that all tables have RLS enabled (`ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;`).
   - Audit or generate policies to ensure users can only access/modify their own data (e.g., `auth.uid() = user_id`).
   - Check Supabase client initialization to ensure the anonymous/public client is properly restricted by these policies.

3. **Rate Limiting & Abuse Prevention:**
   - Audit API routes and Server Actions that call expensive external AI APIs.
   - Implement or generate code for Upstash Redis rate limiting (or standard Next.js Middleware rate limiting) to prevent wallet-draining attacks and API abuse.

4. **Authentication Checks:**
   - Ensure all protected Server Actions and API routes explicitly await `supabase.auth.getUser()` to verify the session before executing any backend logic. 
   - Never rely solely on client-side middleware for securing sensitive server-side actions.

## Gotchas
- Never expose the `SUPABASE_SERVICE_ROLE_KEY` in the frontend codebase.
- Always execute AI API calls on the server to protect the provider API keys from being scraped by the client.
