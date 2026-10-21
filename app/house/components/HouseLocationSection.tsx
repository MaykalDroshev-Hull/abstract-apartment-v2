'use client';

import { useTranslations } from '@/app/lib/translations';
import { MapPin, Car, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function HouseLocationSection() {
  const t = useTranslations();
  const h = t.house;

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {h.location.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 max-w-3xl mx-auto">
            {h.location.description}
          </p>
        </div>

        {/* Map Container */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-zinc-200">
            <iframe
              src={h.location.mapEmbedUrl}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={h.location.mapTitle}
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
            />
          </div>

          {/* Address and Link */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-sm sm:text-base text-zinc-700">
              {h.location.address}
            </p>
            <Link
              href={h.location.mapLink}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm sm:text-base text-[#5B7A3A] hover:text-[#4A6830] transition-colors flex items-center gap-1"
            >
              {h.location.openInMaps}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Travel Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14 lg:gap-16">
          {h.location.travelInfo.map((info, index) => (
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
                  {info.icon === 'address' ? (
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#5B7A3A]" />
                  ) : (
                    <Car className="w-5 h-5 sm:w-6 sm:h-6 text-[#5B7A3A]" />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-base sm:text-lg font-semibold text-zinc-900 mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {info.label}
              </h3>

              {/* Divider */}
              <span className="block w-10 h-px bg-[#5B7A3A]/30 mb-3" />

              {/* Description */}
              {info.subtext && (
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {info.subtext}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
