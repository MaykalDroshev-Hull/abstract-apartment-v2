'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { useTranslations, useLanguage } from '@/app/lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavigationPanel } from './NavigationPanel';
import { MobileNavPanel } from './MobileNavPanel';

export function Header() {
  const t = useTranslations();
  const { language } = useLanguage();
  const [exploreOpen, setExploreOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      const target = event.target as HTMLElement;
      
      // Don't close if clicking on a link (let navigation happen first)
      if (target.closest('a')) {
        return;
      }

      // Check if click is outside the explore menu area (button + panel)
      if (exploreOpen && exploreRef.current) {
        const explorePanel = exploreRef.current.parentElement?.querySelector('[data-navigation-panel]');
        const isInsideExplore = exploreRef.current.contains(target) || 
                                (explorePanel && explorePanel.contains(target));
        
        if (!isInsideExplore) {
          setExploreOpen(false);
        }
      }

      // Check if click is outside the plan menu area (button + panel)
      if (planOpen && planRef.current) {
        const planPanel = planRef.current.parentElement?.querySelector('[data-navigation-panel]');
        const isInsidePlan = planRef.current.contains(target) || 
                             (planPanel && planPanel.contains(target));
        
        if (!isInsidePlan) {
          setPlanOpen(false);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [exploreOpen, planOpen]);

  return (
    <header className="w-full mt-3 mb-0 relative z-50">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#F9F7F7] border-b border-zinc-200border-zinc-800 relative z-50">
          <div className="relative flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 z-10">
            {/* Mobile Hamburger - Left */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-zinc-200/50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              <Menu className="w-6 h-6 text-zinc-900" />
            </button>

            {/* Navigation - Left (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-6 flex-1 relative z-20">
              {/* Explore Menu */}
              <div className="relative z-30" ref={exploreRef}>
                <button
                  onClick={() => {
                    setExploreOpen(!exploreOpen);
                    setPlanOpen(false);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200/50 hover:text-zinc-700text-zinc-50hover:text-zinc-300 relative z-30"
                >
                  {t.header.explore}
                  <ChevronDown 
                    className={`w-4 h-4 ${exploreOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Plan Menu */}
              <div className="relative z-30" ref={planRef}>
                <button
                  onClick={() => {
                    setPlanOpen(!planOpen);
                    setExploreOpen(false);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200/50 hover:text-zinc-700text-zinc-50hover:text-zinc-300 relative z-30"
                >
                  {t.header.plan}
                  <ChevronDown 
                    className={`w-4 h-4 ${planOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </nav>
            
            {/* Logo - Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto">
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
              {/* Reserve Button - Hidden on mobile/tablet (shown in menu) */}
              <Link 
                href="/reserve"
                onClick={() => {
                  setExploreOpen(false);
                  setPlanOpen(false);
                }}
                className="hidden lg:block rounded-lg bg-[#9D7F5F] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8B6F47]"
              >
                {t.header.reserve}
              </Link>
              {/* Language Switcher - Hidden on mobile/tablet (shown in menu) */}
              <div className="hidden lg:block">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
          
          {/* Navigation Panels - Positioned relative to header container */}
          {exploreOpen && (
            <NavigationPanel
              sections={exploreSections}
              featuredCard={t.header.featuredCard}
              onClose={() => setExploreOpen(false)}
            />
          )}
          {planOpen && (
            <NavigationPanel 
              sections={planSections}
              onClose={() => setPlanOpen(false)}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <MobileNavPanel
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        exploreSections={exploreSections}
        planSections={planSections}
      />
    </header>
  );
}

