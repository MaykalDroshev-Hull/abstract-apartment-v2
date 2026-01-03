'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/app/lib/translations';
import { Home, Sparkles, MapPin, Heart } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
};

export function ValuesGrid() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {t.about.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="text-[#9D7F5F] mb-4">
                {iconMap[value.icon] || <Home className="w-6 h-6" />}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {value.title}
              </h3>
              <div className="w-12 h-px bg-zinc-300 dark:bg-zinc-600 mb-4" />
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

