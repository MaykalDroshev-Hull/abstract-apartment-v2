'use client';

import { RatesHero } from './components/RatesHero';
import { AvailabilitySearchBar } from './components/AvailabilitySearchBar';
import { RatesSection } from './components/RatesSection';
import { PoliciesFaq } from '@/app/components/PoliciesFaq';

export default function RatesPage() {
  return (
    <main className="min-h-screen bg-[#F5F2ED]bg-zinc-900">
      <RatesHero />
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AvailabilitySearchBar />
          <RatesSection />
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <PoliciesFaq />
          </div>
        </div>
      </div>
    </main>
  );
}

