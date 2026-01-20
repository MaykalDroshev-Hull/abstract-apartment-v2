'use client';

import Image from 'next/image';
import { useTranslations } from '@/app/lib/translations';
import { Bed, Users, Bath, Square } from 'lucide-react';
import { motion } from 'framer-motion';

interface VillaCardProps {
  villa: {
    name: string;
    image: string;
    imageAlt: string;
    details: {
      beds: string;
      sleepCapacity: string;
      bathrooms: string;
      couch?: string;
    };
    cta?: string;
  };
  delay?: number;
}

function VillaCard({ villa, delay = 0 }: VillaCardProps) {
  return (
    <motion.div
      className="relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={villa.image}
          alt={villa.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Bottom Overlay Content */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 px-6 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.5,
          delay: delay + 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Villa Name */}
        <h3
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/95 mb-4 sm:mb-5"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {villa.name}
        </h3>

        {/* Villa Details Row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6">
          {/* Beds */}
          <div className="flex items-center gap-2 text-white/85">
            <Bed className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-light">
              {villa.details.beds}
            </span>
          </div>

          {/* Couch (if applicable) */}
          {villa.details.couch && (
            <>
              <div className="w-px h-4 bg-white/40" />
              <div className="flex items-center gap-2 text-white/85">
                <Square className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-light">
                  {villa.details.couch}
                </span>
              </div>
            </>
          )}

          {/* Separator */}
          <div className="w-px h-4 bg-white/40" />

          {/* Sleep Capacity */}
          <div className="flex items-center gap-2 text-white/85">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-light">
              {villa.details.sleepCapacity}
            </span>
          </div>

          {/* Separator */}
          <div className="w-px h-4 bg-white/40" />

          {/* Bathrooms */}
          <div className="flex items-center gap-2 text-white/85">
            <Bath className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-light">
              {villa.details.bathrooms}
            </span>
          </div>
        </div>

        {/* Optional CTA Button */}
        {villa.cta && (
          <motion.button
            className="mt-6 px-6 py-2.5 rounded-full border border-white/60 text-white/90 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/90 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {villa.cta}
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}

export function VillasSection() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Intro Text Row */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Left Column - Headline */}
            <div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900text-zinc-50 whitespace-pre-line"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t.home.villas.intro.headline}
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600text-zinc-400 max-w-xl">
                {t.home.villas.intro.description}
              </p>
            </div>
          </div>
        </div>

        {/* Villas Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Villa 1 - Abstract Apartment */}
          <VillaCard
            villa={t.home.villas.villa1}
            delay={0}
          />

          {/* Villa 2 - Abstract Studio */}
          <VillaCard
            villa={t.home.villas.villa2}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}

