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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <GettingHereHero
          caption={t.gettingHere.hero.caption}
          title={t.gettingHere.hero.title}
          subtitle={t.gettingHere.hero.subtitle}
          ctaReserve={t.gettingHere.hero.cta.reserve}
          ctaContact={t.gettingHere.hero.cta.contact}
          images={heroImages}
        />

        {/* Directions Section */}
        <div className="mb-8">
          <JourneySection
            showHeader={false}
            sectionTitle={t.gettingHere.sectionTitle}
          />
        </div>

        {/* Helper Note */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8">
            <p className="text-sm text-zinc-600 leading-relaxed">
              {t.gettingHere.helperNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

