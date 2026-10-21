'use client';

import { useTranslations } from '@/app/lib/translations';
import {
  Flame,
  Wifi,
  Car,
  Mountain,
  UtensilsCrossed,
  Wind,
  Droplet,
  Tv,
  TreePine,
  Sparkles,
  ThermometerSun,
  Bath,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface AmenityItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}

function AmenityCard({ amenity, index }: { amenity: AmenityItem; index: number }) {
  const IconComponent = amenity.icon;

  return (
    <motion.div
      className="flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Icon */}
      <div className="mb-4 sm:mb-5">
        <div className="flex items-center justify-start">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#5B7A3A]" />
        </div>
      </div>

      {/* Caption (Title) */}
      <h3
        className="text-base sm:text-lg font-semibold text-zinc-900 mb-3 leading-tight"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {amenity.title}
      </h3>

      {/* Thin horizontal divider - earthy green accent */}
      <span className="block w-10 h-px bg-[#5B7A3A]/30 mb-3" />

      {/* Description */}
      {amenity.description && (
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
          {amenity.description}
        </p>
      )}
    </motion.div>
  );
}

export function HouseAmenitiesSection() {
  const t = useTranslations();
  const h = t.house;

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    bbq: Flame,
    garden: TreePine,
    fireplace: Flame,
    wifi: Wifi,
    parking: Car,
    mountain: Mountain,
    kitchen: UtensilsCrossed,
    ac: Wind,
    heating: ThermometerSun,
    washer: Droplet,
    tv: Tv,
    jacuzzi: Sparkles,
    sauna: Bath,
    pool: Bath,
  };

  const amenities: AmenityItem[] = h.amenities.items.map((item) => ({
    icon: iconMap[item.icon] || Sparkles,
    title: item.title,
    description: item.description,
  }));

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
      <div className="mx-auto max-w-7xl">
        {/* Top Text Row */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Left Column - Headline */}
            <div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {h.amenities.intro.title}
              </h2>
              {h.amenities.intro.subtitle && (
                <p className="text-lg sm:text-xl text-[#5B7A3A]">
                  {h.amenities.intro.subtitle}
                </p>
              )}
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <div className="space-y-4">
                {h.amenities.intro.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base sm:text-lg leading-relaxed text-zinc-600 max-w-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-14 lg:gap-16">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} amenity={amenity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
