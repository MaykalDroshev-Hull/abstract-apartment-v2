'use client';

import { useEffect } from 'react';
import { Hero } from '@/app/components/Hero';
import { VillasSection } from '@/app/components/VillasSection';
import { AmenitiesSection } from '@/app/components/AmenitiesSection';
import { JourneySection } from '@/app/components/JourneySection';
import { CtaAndReviewsSection } from '@/app/components/CtaAndReviewsSection';

export default function ApartmentsHomePage() {
  useEffect(() => {
    // Redirect #reviews hash to dedicated reviews page
    if (window.location.hash === '#reviews') {
      window.location.href = '/apartments/reviews';
    }
  }, []);

  return (
    <div>
      <Hero />
      <VillasSection />
      <AmenitiesSection />
      <JourneySection />
      <CtaAndReviewsSection />
    </div>
  );
}
