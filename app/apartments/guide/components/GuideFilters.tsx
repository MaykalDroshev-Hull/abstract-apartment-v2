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
      <div
        role="group"
        aria-label="Filter guide categories"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
      >
        {categoryKeys.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 active:scale-[0.98] ${
                isActive
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-white/60 border border-zinc-300/70 text-zinc-700 hover:text-zinc-900 hover:bg-white'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
