-- ==============================================================================
-- Abstract Apartment v2 - Supabase Security & Row Level Security (RLS) Migration
-- Target Database: qbtdpmhqqosozdjxiixj (abstract-apartment)
-- Safety Guarantee: NO DATA WILL BE DELETED, TRUNCATED, OR ALTERED.
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1. Enable Row Level Security (RLS) on all production tables
-- ------------------------------------------------------------------------------
ALTER TABLE IF EXISTS "expenses" ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS "admin_users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS "Booking" ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS "Customer" ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS "apartment" ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS "rfstatus" ENABLE ROW LEVEL SECURITY;

-- ------------------------------------------------------------------------------
-- 2. Hardening table "expenses"
-- Threat: Previously allowed anonymous users to SELECT all rows and DELETE rows.
-- Fix: Remove all public policies. All expense operations must go through the
-- authenticated backend using SUPABASE_SERVICE_ROLE_KEY.
-- ------------------------------------------------------------------------------
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'expenses' AND schemaname = 'public') LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.expenses;', r.policyname);
    END LOOP;
END $$;

-- ------------------------------------------------------------------------------
-- 3. Hardening table "admin_users"
-- Threat: Credential dumping or username discovery.
-- Fix: Restrict access entirely to service_role. Anon and standard authenticated
-- users have 0 access.
-- ------------------------------------------------------------------------------
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'admin_users' AND schemaname = 'public') LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.admin_users;', r.policyname);
    END LOOP;
END $$;

-- ------------------------------------------------------------------------------
-- 4. Hardening table "Customer"
-- Threat: Personally Identifiable Information (PII) leak (names, phones, emails).
-- Fix: Restrict all direct queries via anon key. Public booking submissions
-- go through the secured Next.js server route (/api/bookings) using service_role.
-- ------------------------------------------------------------------------------
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'Customer' AND schemaname = 'public') LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public."Customer";', r.policyname);
    END LOOP;
END $$;

-- ------------------------------------------------------------------------------
-- 5. Hardening table "Booking"
-- Threat: Direct tampering or PII leakage of customer reservations.
-- Fix: Drop public policies. Reads and modifications go through Next.js server routes.
-- ------------------------------------------------------------------------------
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'Booking' AND schemaname = 'public') LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public."Booking";', r.policyname);
    END LOOP;
END $$;

-- ------------------------------------------------------------------------------
-- 6. Read-Only Policies for Reference Tables ("apartment" & "rfstatus")
-- Safe: Allows public visitors to view unit pricing/amenities & status names,
-- while completely disallowing unauthorized INSERT, UPDATE, or DELETE.
-- ------------------------------------------------------------------------------
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'apartment' AND schemaname = 'public') LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.apartment;', r.policyname);
    END LOOP;
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'rfstatus' AND schemaname = 'public') LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.rfstatus;', r.policyname);
    END LOOP;
END $$;

-- Public can read apartment specifications
CREATE POLICY "Public read apartment specifications"
ON public.apartment
FOR SELECT
TO anon, authenticated
USING (true);

-- Public can read status labels
CREATE POLICY "Public read booking statuses"
ON public.rfstatus
FOR SELECT
TO anon, authenticated
USING (true);

-- ==============================================================================
-- End of Migration
-- Result:
-- - expenses: 100% protected (service_role only)
-- - admin_users: 100% protected (service_role only)
-- - Customer: 100% protected (service_role only)
-- - Booking: 100% protected (service_role only)
-- - apartment: SELECT allowed to public, modifications blocked
-- - rfstatus: SELECT allowed to public, modifications blocked
-- ==============================================================================
