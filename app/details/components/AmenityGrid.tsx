'use client';

import * as Icons from 'lucide-react';

interface AmenityItem {
  title: string;
  description?: string;
  icon: string;
}

interface AmenityGridProps {
  amenities: AmenityItem[];
  title: string;
}

function getIcon(iconName: string) {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Icons.Circle;
}

export function AmenityGrid({ amenities, title }: AmenityGridProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif text-zinc-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => {
          const Icon = getIcon(amenity.icon);
          return (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-zinc-200">
              <div className="mt-0.5 text-[#9D7F5F] flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-zinc-900 text-sm">{amenity.title}</p>
                {amenity.description && (
                  <p className="text-xs text-zinc-600 mt-1">{amenity.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

