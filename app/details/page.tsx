'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/app/lib/translations';
import { UnitKey, UnitDetails } from './types';
import { DetailsHero } from './components/DetailsHero';
import { DetailsTabs } from './components/DetailsTabs';
import { UnitDetailsPanel } from './components/UnitDetailsPanel';

function DetailsPageContent() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<UnitKey>('apartment');

  // Read tab from URL parameter on mount
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'studio' || tabParam === 'apartment') {
      setActiveTab(tabParam as UnitKey);
    }
  }, [searchParams]);

  // Build unit details from translations
  const units: UnitDetails[] = [
    {
      key: 'apartment',
      tabLabel: t.details.tabs.apartment,
      rooms: t.details.apartment.rooms.map(room => ({
        label: room.label,
        details: room.details,
        icon: room.icon,
      })),
      amenities: t.details.apartment.amenities.map(amenity => ({
        title: amenity.title,
        description: amenity.description,
        icon: amenity.icon,
      })),
    },
    {
      key: 'studio',
      tabLabel: t.details.tabs.studio,
      rooms: t.details.studio.rooms.map(room => ({
        label: room.label,
        details: room.details,
        icon: room.icon,
      })),
      amenities: t.details.studio.amenities.map(amenity => ({
        title: amenity.title,
        description: amenity.description,
        icon: amenity.icon,
      })),
    },
  ];

  const activeUnit = units.find(u => u.key === activeTab) || units[0];

  // Hero images - using gallery images
  const heroImages = [
    '/Images/Gallery/LivingArea1.jpg',
    '/Images/Gallery/BigTerrace.jpg',
    '/Images/Gallery/KitchenArea.jpg',
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#F5F2ED] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <DetailsHero
          eyebrow={t.details.hero.eyebrow}
          title={t.details.hero.title}
          subtitle={t.details.hero.subtitle}
          highlights={t.details.hero.highlights}
          images={heroImages}
        />

        {/* General Description */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-serif text-zinc-900 mb-4">
            {t.details.general.welcome}
          </h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            {t.details.general.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8">
          <DetailsTabs
            tabs={units.map(u => ({ key: u.key, label: u.tabLabel }))}
            activeTab={activeTab}
            onTabChange={(key) => setActiveTab(key as UnitKey)}
          />

          {/* Tab Content */}
          <div className="mt-8">
            <UnitDetailsPanel
              unit={activeUnit}
              reserveText={t.details.cta.reserve}
              galleryText={t.details.cta.gallery}
              roomsTitle={activeTab === 'apartment' ? t.details.apartment.roomsTitle : t.details.studio.roomsTitle}
              amenitiesTitle={activeTab === 'apartment' ? t.details.apartment.amenitiesTitle : t.details.studio.amenitiesTitle}
            />
            
            {/* Studio Note */}
            {activeTab === 'studio' && t.details.studio.note && (
              <div className="mt-8 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                <p className="text-sm text-zinc-600">{t.details.studio.note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DetailsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5F2ED] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9D7F5F]"></div>
      </div>
    }>
      <DetailsPageContent />
    </Suspense>
  );
}

