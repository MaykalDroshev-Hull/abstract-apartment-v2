'use client';

import { useTranslations } from '@/app/lib/translations';
import { MapPin, Car, Plane, Route, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface JourneyStep {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  subtext?: string;
}

function JourneyStepItem({ step, index }: { step: JourneyStep; index: number }) {
  const IconComponent = step.icon;

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
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Icon */}
      <div className="mb-4 sm:mb-5">
        <div className="flex items-center justify-start">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 dark:text-zinc-400" />
        </div>
      </div>

      {/* Caption (Title) */}
      <h3
        className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3 leading-tight"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {step.label}
      </h3>

      {/* Thin horizontal divider */}
      <span className="block w-10 h-px bg-zinc-300 dark:bg-zinc-600 mb-3" />

      {/* Description */}
      {step.subtext && (
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {step.subtext}
        </p>
      )}
    </motion.div>
  );
}

export function JourneySection() {
  const t = useTranslations();

  // Map steps from translations
  const steps: JourneyStep[] = t.home.journey.steps.map((step) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      address: MapPin,
      drive: Car,
      fly: Plane,
      transfer: Route,
    };

    return {
      icon: iconMap[step.icon] || MapPin,
      label: step.label,
      subtext: step.subtext,
    };
  });

  // Create detail items from the details section
  const detailItems: JourneyStep[] = [];
  
  if (t.home.journey.details) {
    // By Car item
    if (t.home.journey.details.byCar) {
      const routesText = t.home.journey.details.byCar.routes
        .map((route) => `${route.from}: ${route.distance} / ${route.duration}`)
        .join('; ');
      const recommendationsText = t.home.journey.details.byCar.recommendations 
        ? ` ${t.home.journey.details.byCar.recommendations}` 
        : '';
      
      detailItems.push({
        icon: Car,
        label: t.home.journey.details.byCar.title,
        subtext: routesText + recommendationsText,
      });
    }

    // By Flight item
    if (t.home.journey.details.byFlight) {
      const optionsText = t.home.journey.details.byFlight.options.join(', ');
      detailItems.push({
        icon: Plane,
        label: t.home.journey.details.byFlight.title,
        subtext: `${t.home.journey.details.byFlight.description} ${optionsText}`,
      });
    }
  }

  // Combine all items: steps + detail items (without see directions card)
  const allItems: JourneyStep[] = [
    ...steps,
    ...detailItems,
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED] dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl">
        {/* Header Area */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t.home.journey.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            {t.home.journey.intro}
          </p>
        </div>

        {/* Map Container */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <iframe
              src={t.home.journey.mapEmbedUrl}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.home.journey.mapTitle}
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
            />
          </div>

          {/* Address and Link */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              {t.home.journey.address}
            </p>
            <Link
              href={t.home.journey.mapLink}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1"
            >
              {t.home.journey.openInMaps}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Combined Journey Steps and Details Grid */}
        <div className="mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14 lg:gap-16">
            {allItems.map((item, index) => {
              // Add Google Maps link under the location card (first item)
              if (index === 0 && item.icon === MapPin) {
                return (
                  <motion.div
                    key={index}
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
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-4 sm:mb-5">
                      <div className="flex items-center justify-start">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 dark:text-zinc-400" />
                      </div>
                    </div>

                    {/* Caption (Title) */}
                    <h3
                      className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3 leading-tight"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {item.label}
                    </h3>

                    {/* Thin horizontal divider */}
                    <span className="block w-10 h-px bg-zinc-300 dark:bg-zinc-600 mb-3" />

                    {/* Description */}
                    {item.subtext && (
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                        {item.subtext}
                      </p>
                    )}

                    {/* Google Maps Link */}
                    <Link
                      href={t.home.journey.mapLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1 mt-2"
                    >
                      {t.home.journey.seeDirections}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              }
              
              return (
                <JourneyStepItem key={index} step={item} index={index} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

