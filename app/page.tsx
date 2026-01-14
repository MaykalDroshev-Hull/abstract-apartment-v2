'use client';

import { useEffect } from 'react';
import { Hero } from '@/app/components/Hero';
import { VillasSection } from '@/app/components/VillasSection';
import { AmenitiesSection } from '@/app/components/AmenitiesSection';
import { JourneySection } from '@/app/components/JourneySection';
import { CtaAndReviewsSection } from '@/app/components/CtaAndReviewsSection';

export default function Home() {
  useEffect(() => {
    // Redirect #reviews hash to dedicated reviews page
    if (window.location.hash === '#reviews') {
      window.location.href = '/reviews';
    }
  }, []);

  return (
    <main>
      <Hero />
      <VillasSection />
      <AmenitiesSection />
      <JourneySection />
      <CtaAndReviewsSection />
    </main>
  );
}
