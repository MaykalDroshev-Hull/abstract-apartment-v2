-- Step 1: Create the rfstatus table
CREATE TABLE IF NOT EXISTS public.rfstatus (
  id bigint NOT NULL,
  name text NOT NULL,
  CONSTRAINT rfstatus_pkey PRIMARY KEY (id)
);

-- Step 2: Insert the two status records
INSERT INTO public.rfstatus (id, name) VALUES 
  (1, 'not confirmed'),
  (2, 'confirmed')
ON CONFLICT (id) DO NOTHING;

-- Step 3: Add Email column to Customer table (if it doesn't exist)
ALTER TABLE public.Customer 
ADD COLUMN IF NOT EXISTS Email text;

-- Step 4: Add rfstatusid column to Booking table with default value
ALTER TABLE public.Booking 
ADD COLUMN IF NOT EXISTS rfstatusid bigint NOT NULL DEFAULT 1;

-- Step 5: Add foreign key constraint (if it doesn't exist)
-- Note: This will fail if constraint already exists, which is fine
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'booking_rfstatusid_fkey'
  ) THEN
    ALTER TABLE public.Booking
    ADD CONSTRAINT booking_rfstatusid_fkey 
    FOREIGN KEY (rfstatusid) REFERENCES public.rfstatus(id);
  END IF;
END $$;

-- Step 6: Update existing bookings to have rfstatusid = 1 (not confirmed) if they are NULL
-- This handles any existing bookings that might have NULL values
UPDATE public.Booking 
SET rfstatusid = 1 
WHERE rfstatusid IS NULL;

-- Step 7: Enable Row Level Security (RLS) on apartment and rfstatus to make them restricted
ALTER TABLE public.apartment ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rfstatus ENABLE ROW LEVEL SECURITY;

-- Step 8: Create public read-only policies (SELECT) for everyone
DROP POLICY IF EXISTS "Allow public read access to apartment" ON public.apartment;
CREATE POLICY "Allow public read access to apartment" 
ON public.apartment 
FOR SELECT 
TO public 
USING (true);

DROP POLICY IF EXISTS "Allow public read access to rfstatus" ON public.rfstatus;
CREATE POLICY "Allow public read access to rfstatus" 
ON public.rfstatus 
FOR SELECT 
TO public 
USING (true);

-- Step 9: Add cleaning features
ALTER TABLE public.Booking
ADD COLUMN IF NOT EXISTS cleaning_hours double precision;

ALTER TABLE public.apartment
ADD COLUMN IF NOT EXISTS cleaning_price_per_hour double precision DEFAULT 15.0;

-- Step 10: Create expenses table
CREATE TABLE IF NOT EXISTS public.expenses (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  month integer,
  year integer NOT NULL,
  price double precision NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT expenses_pkey PRIMARY KEY (id)
);

-- Step 11: Enable RLS on expenses
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;

-- Allow public read access to expenses (adjust as needed for security)
DROP POLICY IF EXISTS "Allow public read access to expenses" ON public.expenses;
CREATE POLICY "Allow public read access to expenses" 
ON public.expenses 
FOR SELECT 
TO public 
USING (true);

-- Allow public insert/update/delete to expenses (assuming admin dashboard handles auth before DB)
-- We might want to lock this down later but for now we mirror other public access.
-- Wait, the admin dashboard API does the insert using a service role key or user key.
-- Usually we don't need public insert if we use service role key in API routes,
-- but just in case, we can keep it simple or not add public write policies.
-- Let's just provide SELECT, API routes using service role will bypass RLS.

