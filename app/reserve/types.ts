export type VillaType = "apartment" | "studio";

export interface ReservationDraft {
  villa?: VillaType;
  checkIn?: string;
  checkOut?: string;
  adults: number;
  children?: number;
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  notes?: string;
}

export interface VillaInfo {
  type: VillaType;
  name: string;
  description: string;
  features: string[];
  maxGuests: number;
  nightlyRate: number;
}

