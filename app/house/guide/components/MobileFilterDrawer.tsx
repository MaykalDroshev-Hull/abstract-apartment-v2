'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  SlidersHorizontal,
  ChevronDown,
  RotateCcw,
  Compass,
  Check,
  Trees,
  Mountain,
  Landmark,
  Waves,
} from 'lucide-react';
import { DriveRadiusFilter } from './RadiusDial';

type AttractionCategory = 'all' | 'nature' | 'caves' | 'historic' | 'lakes';

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
  activeCategory: AttractionCategory;
  onCategoryChange: (cat: AttractionCategory) => void;
  activeRadius: DriveRadiusFilter;
  onRadiusChange: (radius: DriveRadiusFilter) => void;
  radiusCounts: Record<DriveRadiusFilter, number>;
  totalResults: number;
  labels: {
    toggleTitle: string;
    reset: string;
    apply: string;
    radiusHeading: string;
    categoryHeading: string;
    showingResults: string;
    categories: Record<string, string>;
    dialAll: string;
    dial10: string;
    dial35: string;
    dial60: string;
  };
}

export function MobileFilterDrawer({
  isOpen,
  onToggle,
  activeCategory,
  onCategoryChange,
  activeRadius,
  onRadiusChange,
  radiusCounts,
  totalResults,
  labels,
}: MobileFilterDrawerProps) {
  const activeCount =
    (activeCategory !== 'all' ? 1 : 0) + (activeRadius !== 'all' ? 1 : 0);

  const radiusOptions: Array<{ id: DriveRadiusFilter; label: string; count: number }> = [
    { id: 'all', label: labels.dialAll, count: radiusCounts.all },
    { id: '10min', label: labels.dial10, count: radiusCounts['10min'] },
    { id: '35min', label: labels.dial35, count: radiusCounts['35min'] },
    { id: '60min', label: labels.dial60, count: radiusCounts['60min'] },
  ];

  const renderCategoryIcon = (cat: Exclude<AttractionCategory, 'all'>, cls = 'w-3.5 h-3.5') => {
    if (cat === 'nature') return <Trees className={cls} aria-hidden="true" />;
    if (cat === 'caves') return <Mountain className={cls} aria-hidden="true" />;
    if (cat === 'historic') return <Landmark className={cls} aria-hidden="true" />;
    return <Waves className={cls} aria-hidden="true" />;
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCategoryChange('all');
    onRadiusChange('all');
  };

  return (
    <div className="lg:hidden mb-6">
      {/* Collapsed Clean Bar */}
      <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden transition-all">
        <button
          type="button"
          onClick={onToggle}
          className="w-full px-4 py-3 flex items-center justify-between text-left cursor-pointer hover:bg-zinc-50 transition-colors"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center flex-shrink-0">
              <SlidersHorizontal className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-zinc-900 truncate">
                  {labels.toggleTitle}
                </span>
                {activeCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-md bg-[#5B7A3A] text-white text-[11px] font-bold tabular-nums">
                    {activeCount}
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-600 truncate tabular-nums">
                {totalResults} {labels.showingResults}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {activeCount > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="px-2 py-1 rounded-md text-xs font-semibold text-zinc-700 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3 stroke-[1.75]" />
                <span className="hidden sm:inline">{labels.reset}</span>
              </button>
            )}

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.18 }}
              className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700"
            >
              <ChevronDown className="w-4 h-4 stroke-[1.75]" />
            </motion.div>
          </div>
        </button>

        {/* Collapsible Accordion Drawer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-zinc-100 bg-[#FAF8F5] px-4 py-4"
            >
              {/* Radius Options */}
              <div className="mb-4">
                <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Compass className="w-3.5 h-3.5 text-[#5B7A3A] stroke-[1.75]" aria-hidden="true" />
                  <span>{labels.radiusHeading}</span>
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {radiusOptions.map((opt) => {
                    const isSelected = activeRadius === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => onRadiusChange(opt.id)}
                        className={[
                          'py-2 px-2.5 rounded-xl text-left text-xs font-semibold transition-colors cursor-pointer flex items-center justify-between',
                          isSelected
                            ? 'bg-[#5B7A3A] text-white'
                            : 'bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-50',
                        ].join(' ')}
                      >
                        <span className="truncate">{opt.label}</span>
                        <span
                          className={[
                            'text-[11px] ml-1 font-bold tabular-nums',
                            isSelected ? 'text-white/90' : 'text-zinc-600',
                          ].join(' ')}
                        >
                          ({opt.count})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-4">
                <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider block mb-2">
                  {labels.categoryHeading}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(['all', 'nature', 'lakes', 'caves', 'historic'] as const).map(
                    (cat) => {
                      const isSelected = activeCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => onCategoryChange(cat)}
                          className={[
                            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer',
                            isSelected
                              ? 'bg-[#5B7A3A] text-white'
                              : 'bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-50',
                          ].join(' ')}
                        >
                          {cat !== 'all' && renderCategoryIcon(cat, 'w-3 h-3')}
                          <span>{labels.categories[cat]}</span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-zinc-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
                >
                  {labels.reset}
                </button>

                <button
                  type="button"
                  onClick={onToggle}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5B7A3A] text-white font-bold text-xs hover:bg-[#4A642F] transition-colors cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
                  <span>{labels.apply} (<span className="tabular-nums">{totalResults}</span>)</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
