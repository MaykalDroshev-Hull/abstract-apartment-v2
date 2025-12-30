'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations, useLanguage } from '@/app/lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavigationPanel } from './NavigationPanel';

export function Header() {
  const t = useTranslations();
  const { language } = useLanguage();
  const [exploreOpen, setExploreOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<HTMLDivElement>(null);

  // Use Bulgarian logo for Bulgarian, regular logo for English and Greek
  const logoPath = language === 'bg' 
    ? '/Images/Logo_Bulgarian.png' 
    : '/Images/Logo.png';

  // Prepare sections for Explore menu
  const exploreSections = [
    t.header.exploreSections.theVilla,
    t.header.exploreSections.visualJourney,
    t.header.exploreSections.guestExperience,
  ];

  // Prepare sections for Plan menu
  const planSections = [
    t.header.planSections.bookingInfo,
    t.header.planSections.travelLogistics,
    t.header.planSections.getInTouch,
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setExploreOpen(false);
      }
      if (planRef.current && !planRef.current.contains(event.target as Node)) {
        setPlanOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full mt-3 mb-0">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#F9F7F7] border-b border-zinc-200 dark:border-zinc-800 relative">
          <div className="relative flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            {/* Navigation - Left */}
            <nav className="hidden md:flex items-center space-x-6 flex-1">
              {/* Explore Menu */}
              <div className="relative" ref={exploreRef}>
                <button
                  onClick={() => {
                    setExploreOpen(!exploreOpen);
                    setPlanOpen(false);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200/50 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                >
                  {t.header.explore}
                  <ChevronDown 
                    className={`w-4 h-4 ${exploreOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Plan Menu */}
              <div className="relative" ref={planRef}>
                <button
                  onClick={() => {
                    setPlanOpen(!planOpen);
                    setExploreOpen(false);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200/50 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                >
                  {t.header.plan}
                  <ChevronDown 
                    className={`w-4 h-4 ${planOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </nav>
            
            {/* Logo - Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="flex items-center">
                <Image
                  src={logoPath}
                  alt="Abstract Apartment Logo"
                  width={200}
                  height={60}
                  className="h-auto w-auto max-w-full"
                  priority
                />
              </Link>
            </div>

            {/* Right Side - Reserve Button and Language Switcher */}
            <div className="flex items-center justify-end gap-4 flex-1">
              <button className="rounded-lg bg-[#9D7F5F] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8B6F47]">
                {t.header.reserve}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
          
          {/* Navigation Panels - Positioned relative to header container */}
          {exploreOpen && (
            <NavigationPanel
              sections={exploreSections}
              featuredCard={t.header.featuredCard}
            />
          )}
          {planOpen && (
            <NavigationPanel sections={planSections} />
          )}
        </div>
      </div>
    </header>
  );
}

