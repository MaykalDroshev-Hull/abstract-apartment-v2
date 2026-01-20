'use client';

import { GuideItem } from '../page';
import { GuideCard } from './GuideCard';

interface GuideGridProps {
  items: GuideItem[];
  onItemClick: (item: GuideItem) => void;
}

export function GuideGrid({ items, onItemClick }: GuideGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-zinc-600text-zinc-400">
          No items found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((item, index) => (
        <GuideCard
          key={item.id}
          item={item}
          onClick={() => onItemClick(item)}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

