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
