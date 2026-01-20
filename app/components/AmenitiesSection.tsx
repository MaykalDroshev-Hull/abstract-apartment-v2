'use client';

import { useTranslations } from '@/app/lib/translations';
import {
  Users,
  Bed,
  Home,
  Wind,
  Bath,
  Droplet,
  Square,
  UtensilsCrossed,
  Tv,
  Wifi,
  Radio,
  Flame,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface AmenityItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}

interface RoomDetail {
  name: string;
  features: string;
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
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600" />
        </div>
      </div>

      {/* Caption (Title) */}
      <h3
        className="text-base sm:text-lg font-semibold text-zinc-900 mb-3 leading-tight"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {amenity.title}
      </h3>

      {/* Thin horizontal divider */}
      <span className="block w-10 h-px bg-zinc-300 mb-3" />

      {/* Description */}
      {amenity.description && (
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
          {amenity.description}
        </p>
      )}
    </motion.div>
  );
}

function VideoPlaceholder({ videoUrl, label }: { videoUrl?: string; label: string }) {
  return (
    <motion.div
      className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group cursor-pointer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Background - using a gradient or image */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900">
        {/* Optional: Add a background image here if available */}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

      {/* Label - Top Left */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
        <p className="text-sm sm:text-base font-medium text-white/90 uppercase tracking-wider">
          {label}
        </p>
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:bg-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-900 ml-1" fill="currentColor" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AmenitiesSection() {
  const t = useTranslations();

  // Map amenities from translations
  const amenities: AmenityItem[] = t.home.amenities.items.map((item) => {
    // Icon mapping
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      capacity: Users,
      beds: Bed,
      kitchen: UtensilsCrossed,
      bedrooms: Home,
      ac: Wind,
      bathroom: Bath,
      washer: Droplet,
      balcony: Square,
      terrace: Flame,
      tv: Tv,
      smartTv: Tv,
      wifi: Wifi,
      bgTv: Radio,
    };

    return {
      icon: iconMap[item.icon] || Square,
      title: item.title,
      description: item.description,
    };
  });

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
      <div className="mx-auto max-w-7xl">
        {/* Top Text Row - Editorial Intro */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Left Column - Headline */}
            <div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t.home.amenities.intro.title}
              </h2>
              {t.home.amenities.intro.subtitle && (
                <p className="text-lg sm:text-xl text-zinc-600">
                  {t.home.amenities.intro.subtitle}
                </p>
              )}
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <div className="space-y-4">
                {t.home.amenities.intro.paragraphs.map((paragraph, index) => (
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
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-14 lg:gap-16">
            {amenities.map((amenity, index) => (
              <AmenityCard key={index} amenity={amenity} index={index} />
            ))}
          </div>
        </div>

        {/* Video Placeholder */}
        <VideoPlaceholder
          videoUrl={t.home.amenities.video?.url}
          label={t.home.amenities.video?.label || 'Video Tour'}
        />
      </div>
    </section>
  );
}

