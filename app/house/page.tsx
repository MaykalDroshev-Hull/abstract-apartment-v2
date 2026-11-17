'use client';

import { HouseHero } from './components/HouseHero';
import { HouseRoomsSection } from './components/HouseRoomsSection';
import { HouseAmenitiesSection } from './components/HouseAmenitiesSection';
import { HouseLocationSection } from './components/HouseLocationSection';
import { HouseCtaSection } from './components/HouseCtaSection';

export default function HousePage() {
  return (
    <main>
      <HouseHero />
      <HouseRoomsSection />
      <HouseAmenitiesSection />
      <HouseLocationSection />
      <HouseCtaSection />
    </main>
  );
}
