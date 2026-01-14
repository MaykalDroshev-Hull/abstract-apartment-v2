-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.Booking (
  BookingID bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  CheckInDT date NOT NULL UNIQUE,
  CustomerID bigint,
  CheckOutDT date,
  FullPrice double precision CHECK ("FullPrice" >= 0.0::double precision),
  PaidPrice double precision CHECK ("PaidPrice" >= 0.0::double precision),
  Comments text,
  apartmentid bigint NOT NULL,
  CONSTRAINT Booking_pkey PRIMARY KEY (BookingID),
  CONSTRAINT Booking_CustomerID_fkey FOREIGN KEY (CustomerID) REFERENCES public.Customer(CustomerID),
  CONSTRAINT booking_apartmentid_fkey FOREIGN KEY (apartmentid) REFERENCES public.apartment(apartmentid)
);
CREATE TABLE public.Customer (
  CustomerID bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  FirstName text NOT NULL,
  LastName text,
  Telephone text,
  CONSTRAINT Customer_pkey PRIMARY KEY (CustomerID)
);
CREATE TABLE public.admin_users (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  username character varying NOT NULL UNIQUE,
  password_hash character varying NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  is_active boolean DEFAULT true,
  CONSTRAINT admin_users_pkey PRIMARY KEY (id)
);
CREATE TABLE public.apartment (
  apartmentid bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text NOT NULL,
  slug text UNIQUE,
  CONSTRAINT apartment_pkey PRIMARY KEY (apartmentid)
);
CREATE TABLE public.heartbeat (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  source text NOT NULL DEFAULT 'vercel-cron'::text,
  note text,
  CONSTRAINT heartbeat_pkey PRIMARY KEY (id)
);