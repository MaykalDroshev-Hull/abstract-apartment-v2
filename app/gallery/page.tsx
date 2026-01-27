'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/app/lib/translations';
import { Lightbox } from '@/app/components/Lightbox';
import { motion } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GallerySection {
  id: string;
  title: string;
  titleMobile?: string;
  images: GalleryImage[];
}

export default function GalleryPage() {
  const t = useTranslations();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Get gallery sections from translations
  const sections: GallerySection[] = t.gallery.sections;

  const openLightbox = (sectionId: string, imageIndex: number) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section && section.images.length > 0) {
      setLightboxImages(section.images);
      setLightboxIndex(imageIndex);
      setLightboxOpen(true);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionRefs.current[section.id];
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <main className="min-h-screen bg-[#F5F2ED]bg-zinc-900">
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
              {/* Left: Title and Description */}
              <div className="flex-1">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900text-zinc-50 mb-4 sm:mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {t.gallery.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600text-zinc-400 max-w-3xl">
                  {t.gallery.description}
                </p>
              </div>

              {/* Right: Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:flex-shrink-0">
                <Link
                  href="/reviews"
                  className="px-6 py-2 rounded-lg bg-whitebg-zinc-800 border border-zinc-300border-zinc-700 text-zinc-900text-zinc-100 font-medium text-sm hover:bg-zinc-50hover:bg-zinc-700 transition-colors text-center"
                >
                  {t.header.exploreSections.guestExperience.items.find(item => item.href === '/reviews')?.label || 'Reviews'}
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors text-center"
                >
                  {t.header.reserve || 'Book'}
                </Link>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="sticky top-4 sm:top-6 z-40 mb-12 sm:mb-16">
            <div className="bg-white/80bg-zinc-800/80 backdrop-blur-sm rounded-2xl border border-zinc-200border-zinc-700 p-2 sm:p-3 shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-zinc-900bg-zinc-100 text-whitetext-zinc-900'
                        : 'text-zinc-600text-zinc-400 hover:text-zinc-900hover:text-zinc-200 hover:bg-zinc-100hover:bg-zinc-700'
                    }`}
                  >
                    <span className="hidden sm:inline">{section.title}</span>
                    <span className="sm:hidden">{section.titleMobile || section.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Sections */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {sections.map((section, sectionIndex) => (
              <motion.section
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el as HTMLElement | null;
                }}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900text-zinc-50 mb-8 sm:mb-10"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {section.title}
                </h2>

                {/* Image Grid or Coming Soon Message */}
                {section.id === 'studio' ? (
                  <div className="flex items-center justify-center py-16 sm:py-20 lg:py-24">
                    <div className="text-center px-6">
                      <p className="text-zinc-600 text-lg sm:text-xl lg:text-2xl font-medium">
                        {t.gallery.imagesComingSoon}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {section.images.map((image, imageIndex) => (
                      <motion.div
                        key={imageIndex}
                        className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer"
                        onClick={() => openLightbox(section.id, imageIndex)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: { opacity: 0, scale: 0.95 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{
                          duration: 0.4,
                          delay: (sectionIndex * 0.1) + (imageIndex * 0.05),
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        images={lightboxImages}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </main>
  );
}

