'use client';

import { useEffect } from 'react';
import { Hero } from '@/app/components/Hero';
import { VillasSection } from '@/app/components/VillasSection';
import { AmenitiesSection } from '@/app/components/AmenitiesSection';
import { JourneySection } from '@/app/components/JourneySection';
import { CtaAndReviewsSection } from '@/app/components/CtaAndReviewsSection';

export default function Home() {
  useEffect(() => {
    // Handle scroll to reviews section if hash is present
    if (window.location.hash === '#reviews') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const reviewsSection = document.getElementById('reviews');
        if (reviewsSection) {
          const headerOffset = 100;
          const elementPosition = reviewsSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
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
