'use client';

import { GuideCategory } from '../page';
import { useTranslations } from '@/app/lib/translations';

interface GuideFiltersProps {
  activeCategory: GuideCategory;
  onCategoryChange: (category: GuideCategory) => void;
}

const categoryKeys: GuideCategory[] = ['All', 'Taverns', 'Beaches', 'Walks', 'Events', 'Day Trips'];

export function GuideFilters({ activeCategory, onCategoryChange }: GuideFiltersProps) {
  const t = useTranslations();
  
  const getCategoryLabel = (category: GuideCategory): string => {
    if (category === 'All') return t.guide.categories.all;
    if (category === 'Taverns') return t.guide.categories.taverns;
    if (category === 'Beaches') return t.guide.categories.beaches;
    if (category === 'Walks') return t.guide.categories.walks;
    if (category === 'Events') return t.guide.categories.events;
    if (category === 'Day Trips') return t.guide.categories.dayTrips;
    return category;
  };

  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {categoryKeys.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-zinc-900 text-white'
                : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
            }`}
          >
            {getCategoryLabel(category)}
          </button>
        ))}
      </div>
    </div>
  );
}

