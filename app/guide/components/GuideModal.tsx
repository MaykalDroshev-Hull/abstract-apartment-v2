'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, MapPin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GuideItem, GuideCategory } from '../page';
import { useTranslations } from '@/app/lib/translations';

const getCategoryLabel = (category: GuideCategory, t: ReturnType<typeof useTranslations>): string => {
  if (category === 'All') return t.guide.categories.all;
  if (category === 'Taverns') return t.guide.categories.taverns;
  if (category === 'Beaches') return t.guide.categories.beaches;
  if (category === 'Walks') return t.guide.categories.walks;
  if (category === 'Events') return t.guide.categories.events;
  if (category === 'Day Trips') return t.guide.categories.dayTrips;
  return category;
};

interface GuideModalProps {
  item: GuideItem | null;
  onClose: () => void;
}

export function GuideModal({ item, onClose }: GuideModalProps) {
  const t = useTranslations();
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  // Keyboard navigation
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  // Focus trap
  useEffect(() => {
    if (item && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      firstElement?.focus();
      window.addEventListener('keydown', handleTabKey);
      return () => window.removeEventListener('keydown', handleTabKey);
    }
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Image */}
              <div className="relative w-full h-64 sm:h-80">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Category Label */}
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
                  {getCategoryLabel(item.category, t)}
                </span>

                {/* Title */}
                <h2
                  id="modal-title"
                  className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h2>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-6">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-8">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                      {t.guide.modal.highlights}
                    </h3>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[#9D7F5F] mt-1">•</span>
                          <span className="text-base text-zinc-700 dark:text-zinc-300 flex-1">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tips */}
                {item.tips && item.tips.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                      {t.guide.modal.tips}
                    </h3>
                    <ul className="space-y-2">
                      {item.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[#9D7F5F] mt-1">•</span>
                          <span className="text-base text-zinc-700 dark:text-zinc-300 flex-1">
                            {tip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Distance */}
                <div className="flex items-center gap-2 mb-8 text-base text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-5 h-5 text-[#9D7F5F]" />
                  <span>
                    <strong className="text-zinc-900 dark:text-zinc-100">{t.guide.modal.distance}</strong> {item.distance}
                  </span>
                </div>

                {/* Google Maps Link */}
                <a
                  href={item.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors"
                >
                  <span>{t.guide.modal.openInMaps}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

