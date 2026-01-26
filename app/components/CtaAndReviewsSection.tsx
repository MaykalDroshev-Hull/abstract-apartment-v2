'use client';

import { useTranslations } from '@/app/lib/translations';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CtaCard {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface Review {
  name: string;
  body: string;
  meta?: string;
}

function CtaCard({ card, seeDetailsText }: { card: CtaCard; seeDetailsText: string }) {
  return (
    <Link
      href={card.href}
      className="group flex flex-col h-full"
    >
      <motion.div
        className="flex flex-col h-full"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-medium text-zinc-500text-zinc-400 uppercase tracking-wider mb-2">
            {card.eyebrow}
          </p>

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl font-bold text-zinc-900text-zinc-50 mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-600text-zinc-400 mb-4 leading-relaxed flex-1">
            {card.description}
          </p>

          {/* Link */}
          <span className="text-sm sm:text-base font-medium text-zinc-900text-zinc-50 underline underline-offset-4 decoration-2 group-hover:underline-offset-6 transition-all flex items-center gap-2">
            {seeDetailsText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export function CtaAndReviewsSection() {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviews: Review[] = t.home.ctaReviews.reviews;

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]bg-zinc-900">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900text-zinc-50 mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t.home.ctaReviews.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600text-zinc-400 max-w-3xl">
            {t.home.ctaReviews.subtitle}
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {t.home.ctaReviews.cards.map((card, index) => (
              <CtaCard key={index} card={card} seeDetailsText={t.home.ctaReviews.seeDetails} />
            ))}
          </div>
        </div>

        {/* Reviews Carousel */}
        <div
          className="relative rounded-3xl border border-zinc-200border-zinc-700 bg-whitebg-zinc-800 p-8 sm:p-12 lg:p-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="max-w-4xl mx-auto">
            <div className="min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center w-full"
                >
                  {/* Quote */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-zinc-700text-zinc-300 mb-6 sm:mb-8">
                    "{reviews[activeIndex].body}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-zinc-900text-zinc-50">
                      {reviews[activeIndex].name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              aria-label="Previous review"
              className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-300border-zinc-600 bg-whitebg-zinc-800 flex items-center justify-center hover:border-zinc-400hover:border-zinc-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-700text-zinc-300" />
            </button>

            <button
              onClick={goToNext}
              aria-label="Next review"
              className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-300border-zinc-600 bg-whitebg-zinc-800 flex items-center justify-center hover:border-zinc-400hover:border-zinc-500 transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-700text-zinc-300" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8 sm:mt-10">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-zinc-900bg-zinc-100 w-8'
                      : 'bg-zinc-300bg-zinc-600 hover:bg-zinc-400hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

