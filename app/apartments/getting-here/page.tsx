'use client';

import { useTranslations } from '@/app/lib/translations';
import { JourneySection } from '@/app/components/JourneySection';
import { GettingHereHero } from './components/GettingHereHero';

export default function GettingHerePage() {
  const t = useTranslations();

  // Hero images
  const heroImages = [
    '/Images/Gallery/LivingArea1.jpg',
    '/Images/Gallery/BigTerrace.jpg',
    '/Images/Gallery/KitchenArea.jpg',
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <GettingHereHero
          caption={t.gettingHere.hero.caption}
          title={t.gettingHere.hero.title}
          subtitle={t.gettingHere.hero.subtitle}
          ctaReserve={t.gettingHere.hero.cta.reserve}
          ctaContact={t.gettingHere.hero.cta.contact}
          images={heroImages}
        />

        {/* Directions & Travel Times Section */}
        <JourneySection
          showHeader={false}
          sectionTitle={t.gettingHere.sectionTitle}
        />

        {/* Helper Note: Clean typography, no arbitrary white bounding box */}
        <div className="pb-16 sm:pb-20 text-center max-w-2xl mx-auto px-4">
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed text-pretty">
            {t.gettingHere.helperNote}
          </p>
        </div>
      </div>
    </div>
  );
}
