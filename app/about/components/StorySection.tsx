'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from '@/app/lib/translations';

export function StorySection() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-whitebg-zinc-800/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/Images/Gallery/ApartmentFromOutside.jpg"
                alt="Abstract Apartment exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9D7F5F] mb-4 block">
              {t.about.story.eyebrow}
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-zinc-900text-zinc-50 mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.about.story.title}
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-zinc-600text-zinc-400">
              {t.about.story.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

