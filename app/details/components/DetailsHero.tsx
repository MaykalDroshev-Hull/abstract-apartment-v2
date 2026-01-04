'use client';

import Image from 'next/image';
import { MapPin, Waves, Utensils, Wifi } from 'lucide-react';

interface DetailsHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlights: Array<{
    text: string;
    icon: string;
  }>;
  images: string[];
}

export function DetailsHero({ eyebrow, title, subtitle, highlights, images }: DetailsHeroProps) {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      MapPin: <MapPin className="w-4 h-4" />,
      Waves: <Waves className="w-4 h-4" />,
      Utensils: <Utensils className="w-4 h-4" />,
      Wifi: <Wifi className="w-4 h-4" />,
    };
    return iconMap[iconName] || null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
      {/* Left Column */}
      <div className="flex flex-col justify-center">
        <p className="text-xs uppercase tracking-wider text-[#9D7F5F] mb-4 font-semibold">
          {eyebrow}
        </p>
        <h1 className="text-5xl lg:text-6xl font-serif text-zinc-900 mb-6">
          {title}
        </h1>
        <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
          {subtitle}
        </p>
        
        {/* Highlights */}
        <div className="flex flex-wrap gap-3">
          {highlights.map((highlight, index) => {
            const Icon = getIcon(highlight.icon);
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-zinc-200"
              >
                {Icon && <span className="text-[#9D7F5F]">{Icon}</span>}
                <span className="text-sm text-zinc-700">{highlight.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column - Image Collage */}
      <div className="relative h-[400px] lg:h-[500px]">
        {images.length > 0 && (
          <div className="relative w-full h-full">
            {/* Tall image behind */}
            {images[0] && (
              <div className="absolute left-0 top-0 w-2/3 h-3/4 rounded-2xl overflow-hidden z-10">
                <Image
                  src={images[0]}
                  alt="Villa image"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {/* Landscape image to the side */}
            {images[1] && (
              <div className="absolute right-0 top-1/4 w-2/3 h-1/2 rounded-2xl overflow-hidden z-20">
                <Image
                  src={images[1]}
                  alt="Villa image"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {/* Square image on top */}
            {images[2] && (
              <div className="absolute right-1/4 top-0 w-1/3 h-1/3 rounded-2xl overflow-hidden z-30 shadow-lg">
                <Image
                  src={images[2]}
                  alt="Villa image"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

