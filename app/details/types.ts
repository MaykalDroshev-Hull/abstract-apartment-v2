import { ReactNode } from 'react';

export type UnitKey = "apartment" | "studio";

export interface RoomItem {
  label: string;
  details: string;
  icon: string;
}

export interface AmenityItem {
  title: string;
  description?: string;
  icon: string;
}

export interface UnitDetails {
  key: UnitKey;
  tabLabel: string;
  rooms: RoomItem[];
  amenities: AmenityItem[];
}

