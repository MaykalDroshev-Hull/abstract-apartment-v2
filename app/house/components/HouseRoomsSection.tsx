'use client';

import Image from 'next/image';
import { useTranslations } from '@/app/lib/translations';
import { motion } from 'framer-motion';

export function HouseRoomsSection() {
  const t = useTranslations();
  const h = t.house;

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Intro Text Row */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Left Column - Headline */}
            <div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 whitespace-pre-line"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {h.rooms.intro.headline}
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 max-w-xl">
                {h.rooms.intro.description}
              </p>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {h.rooms.items.map((room, index) => (
            <motion.div
              key={index}
              className="relative h-[400px] sm:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/70 via-[#3D2B1F]/20 to-transparent" />

              {/* Bottom Content */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 z-10 px-6 sm:px-8 pb-6 sm:pb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold text-white/95 mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {room.name}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {room.description}
                </p>

                {/* Room features */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {room.features.map((feature, fi) => (
                    <span
                      key={fi}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
