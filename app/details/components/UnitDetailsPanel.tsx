'use client';

import { UnitDetails } from '../types';
import { RoomList } from './RoomList';
import { AmenityGrid } from './AmenityGrid';
import { BottomCtas } from './BottomCtas';

interface UnitDetailsPanelProps {
  unit: UnitDetails;
  reserveText: string;
  galleryText: string;
  roomsTitle: string;
  amenitiesTitle: string;
}

export function UnitDetailsPanel({ unit, reserveText, galleryText, roomsTitle, amenitiesTitle }: UnitDetailsPanelProps) {
  return (
    <div className="space-y-12">
      <RoomList rooms={unit.rooms} title={roomsTitle} />
      <AmenityGrid amenities={unit.amenities} title={amenitiesTitle} />
      <BottomCtas
        primaryText={reserveText}
        primaryHref={`/reserve?villa=${unit.key}`}
        secondaryText={galleryText}
        secondaryHref="/gallery"
      />
    </div>
  );
}

