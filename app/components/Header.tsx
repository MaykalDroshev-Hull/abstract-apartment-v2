'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { useTranslations, useLanguage } from '@/app/lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavigationPanel } from './NavigationPanel';
import { MobileNavPanel } from './MobileNavPanel';

export function Header() {
  const t = useTranslations();
  const { language } = useLanguage();
  const pathname = usePathname();
  const [exploreOpen, setExploreOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<HTMLDivElement>(null);

  const isHouse = pathname?.startsWith('/house');

  // Select logo based on current section (House vs Apartment) and language
  const logoPath = isHouse
    ? '/Images/House/house-logo.png'
    : (language === 'bg' ? '/Images/Logo_Bulgarian.png' : '/Images/Logo.png');

  const logoHref = isHouse ? '/house' : '/apartments';
  const logoAlt = isHouse
    ? (language === 'bg'
        ? 'Къща за гости „Абстракт“ – Начало'
        : language === 'el'
        ? 'Ξενώνας „Abstract“ – Αρχική'
        : 'Guest House "Abstract" – Home')
    : (language === 'bg' ? 'Апартамент Абстракт – Начало' : 'Abstract Apartment – Home');

  const houseFeaturedCard =
    language === 'bg'
      ? {
          title: 'Къща за гости „Абстракт“',
          description:
            'Автентичен възрожденски уют, механа с камина, отопляем басейн и целогодишно горещо външно джакузи в с. Голец.',
          image: '/Images/House/house-facade-pool-courtyard.jpg',
          ctaText: 'Разгледайте нашия Instagram',
          ctaLink: 'https://www.instagram.com/abstract_apartment/',
        }
      : language === 'el'
      ? {
          title: 'Ξενώνας „Abstract“',
          description:
            'Παραδοσιακή φιλοξενία στο Γκόλετς με ταβέρνα, τζάκι, θερμαινόμενη πισίνα και εξωτερικό τζακούζι όλο τον χρόνο.',
          image: '/Images/House/house-facade-pool-courtyard.jpg',
          ctaText: 'Δείτε το Instagram μας',
          ctaLink: 'https://www.instagram.com/abstract_apartment/',
        }
      : {
          title: 'Guest House "Abstract"',
          description:
            'Bulgarian Revival charm in Golets village with a traditional fireplace tavern, heated pool, sauna, and year-round outdoor hot jacuzzi.',
          image: '/Images/House/house-facade-pool-courtyard.jpg',
          ctaText: 'Explore our Instagram',
          ctaLink: 'https://www.instagram.com/abstract_apartment/',
        };

  const currentHeader = isHouse ? t.house.header : t.header;

  // Prepare sections for Explore menu
  const exploreSections = [
    isHouse ? t.house.header.exploreSections.theHouse : t.header.exploreSections.theVilla,
    currentHeader.exploreSections.visualJourney,
    currentHeader.exploreSections.guestExperience,
  ];

  // Prepare sections for Plan menu
  const planSections = [
    currentHeader.planSections.bookingInfo,
    currentHeader.planSections.travelLogistics,
    currentHeader.planSections.getInTouch,
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      
      // Don't close if clicking on a link (let navigation happen first)
      if (target.closest('a')) {
        return;
      }

      // Check if click is inside any navigation panel
      const navigationPanel = target.closest('[data-navigation-panel]');
      if (navigationPanel) {
        return; // Don't close if clicking inside any navigation panel
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

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setExploreOpen(false);
        setPlanOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [exploreOpen, planOpen]);

  return (
    <header className="w-full mt-3 mb-0 relative z-50">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#F9F7F7] border-b border-zinc-200border-zinc-800 relative z-50">
          <div className="relative flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 z-10">
            {/* Mobile Hamburger - Left */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-zinc-200/50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={
                isHouse
                  ? language === 'bg'
                    ? 'Отвори навигационното меню'
                    : language === 'el'
                    ? 'Άνοιγμα μενού πλοήγησης'
                    : 'Open navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              <Menu className="w-6 h-6 text-zinc-900" aria-hidden="true" />
            </button>

            {/* Navigation - Left (Desktop) */}
            <nav
              aria-label={
                isHouse
                  ? language === 'bg'
                    ? 'Основна навигация – Къща за гости „Абстракт“'
                    : language === 'el'
                    ? 'Κύρια πλοήγηση – Ξενώνας Abstract'
                    : 'Guest House primary navigation'
                  : 'Apartment primary navigation'
              }
              className="hidden lg:flex items-center space-x-6 flex-1 relative z-20"
            >
              {/* Explore Menu */}
              <div className="relative z-30" ref={exploreRef}>
                <button
                  type="button"
                  onClick={() => {
                    setExploreOpen(!exploreOpen);
                    setPlanOpen(false);
                  }}
                  aria-expanded={exploreOpen}
                  aria-haspopup="true"
                  aria-controls="desktop-explore-panel"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200/50 hover:text-zinc-700text-zinc-50hover:text-zinc-300 relative z-30"
                  suppressHydrationWarning
                >
                  {t.header.explore}
                  <ChevronDown 
                    className={`w-4 h-4 ${exploreOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Plan Menu */}
              <div className="relative z-30" ref={planRef}>
                <button
                  type="button"
                  onClick={() => {
                    setPlanOpen(!planOpen);
                    setExploreOpen(false);
                  }}
                  aria-expanded={planOpen}
                  aria-haspopup="true"
                  aria-controls="desktop-plan-panel"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200/50 hover:text-zinc-700text-zinc-50hover:text-zinc-300 relative z-30"
                  suppressHydrationWarning
                >
                  {t.header.plan}
                  <ChevronDown 
                    className={`w-4 h-4 ${planOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </nav>
            
            {/* Logo - Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto flex items-center justify-center">
              <Link href={logoHref} className="flex items-center justify-center">
                <Image
                  key={logoPath}
                  src={logoPath}
                  alt={logoAlt}
                  width={isHouse ? 240 : 220}
                  height={isHouse ? 48 : 55}
                  className={`${isHouse ? 'h-9 sm:h-12' : 'h-10 sm:h-12'} w-auto object-contain`}
                  priority
                />
              </Link>
            </div>

            {/* Right Side - Reserve Button and Language Switcher */}
            <div className="flex items-center justify-end gap-4 flex-1">
              {/* Reserve Button - Hidden on mobile/tablet (shown in menu) */}
              <Link 
                href={isHouse ? "/house/reserve" : "/apartments/reserve"}
                onClick={() => {
                  setExploreOpen(false);
                  setPlanOpen(false);
                }}
                className={`hidden lg:block rounded-lg px-6 py-2 text-sm font-medium text-white transition-colors ${
                  isHouse ? 'bg-[#5B7A3A] hover:bg-[#4d6831]' : 'bg-[#9D7F5F] hover:bg-[#8B6F47]'
                }`}
                suppressHydrationWarning
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
              id="desktop-explore-panel"
              label={t.header.explore}
              sections={exploreSections}
              featuredCard={isHouse ? houseFeaturedCard : t.header.featuredCard}
              onClose={() => setExploreOpen(false)}
            />
          )}
          {planOpen && (
            <NavigationPanel 
              id="desktop-plan-panel"
              label={t.header.plan}
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
