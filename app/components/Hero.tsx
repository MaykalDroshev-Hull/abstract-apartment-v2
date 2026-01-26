'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/app/lib/translations';
import { Users, Bed, Bath } from 'lucide-react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax effect - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div ref={containerRef} className="mb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ y }}
          >
            <Image
              src={t.home.hero.image}
              alt={t.home.hero.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

          {/* Location Label - Top Left */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
            <div className="backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/80">
                {t.home.hero.location}
              </p>
            </div>
          </div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white/95 text-center mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              {t.home.hero.title}
            </h1>
            <Link href="/details" className="px-8 py-3 sm:px-10 sm:py-4 rounded-full border-2 border-white/90 text-white/95 font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white/10 hover:border-white backdrop-blur-sm">
              {t.home.hero.cta}
            </Link>
          </div>

          {/* Bottom Villa Details */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {/* Guests */}
              <div className="flex items-center gap-2 text-white/70">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-light">
                  {t.home.hero.details.guests}
                </span>
              </div>

              {/* Separator */}
              <div className="w-px h-4 bg-white/30" />

              {/* Bedrooms */}
              <div className="flex items-center gap-2 text-white/70">
                <Bed className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-light">
                  {t.home.hero.details.bedrooms}
                </span>
              </div>

              {/* Separator */}
              <div className="w-px h-4 bg-white/30" />

              {/* Bathrooms */}
              <div className="flex items-center gap-2 text-white/70">
                <Bath className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-light">
                  {t.home.hero.details.bathrooms}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

