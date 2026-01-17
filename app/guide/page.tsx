'use client';

import { useState, useMemo } from 'react';
import { GuideHero } from './components/GuideHero';
import { GuideFilters } from './components/GuideFilters';
import { GuideGrid } from './components/GuideGrid';
import { GuideModal } from './components/GuideModal';
import { guideDataRaw } from './data';
import { useLanguage } from '../lib/translations';

export type GuideCategory = 'All' | 'Taverns' | 'Beaches' | 'Walks' | 'Events' | 'Day Trips';

export type GuideItem = {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<GuideCategory, 'All'>;
  imageSrc: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  tips?: string[];
  distance: string;
  mapsUrl: string;
};

export default function GuidePage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GuideCategory>('All');
  const [selectedItem, setSelectedItem] = useState<GuideItem | null>(null);

  const guideData = useMemo<GuideItem[]>(() => {
    return guideDataRaw.map(item => ({
      id: item.id,
      category: item.category,
      imageSrc: item.imageSrc,
      mapsUrl: item.mapsUrl,
      ...item.translations[language]
    }));
  }, [language]);

  const filteredItems = activeCategory === 'All' 
    ? guideData 
    : guideData.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F5F2ED] dark:bg-zinc-900">
      <GuideHero />
      
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GuideFilters 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <GuideGrid 
            items={filteredItems}
            onItemClick={setSelectedItem}
          />
        </div>
      </div>

      <GuideModal 
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </main>
  );
}

