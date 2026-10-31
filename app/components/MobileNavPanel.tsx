'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { useTranslations, useLanguage } from '@/app/lib/translations';
import { MobileNavAccordion } from './MobileNavAccordion';
import { MobileLanguageSwitcher } from './MobileLanguageSwitcher';

interface MobileNavPanelProps {
  isOpen: boolean;
  onClose: () => void;
  exploreSections: any[];
  planSections: any[];
}

export function MobileNavPanel({ isOpen, onClose, exploreSections, planSections }: MobileNavPanelProps) {
  const t = useTranslations();
  const { language } = useLanguage();
  const pathname = usePathname();
  const [exploreOpen, setExploreOpen] = useState(false); // Start collapsed
  const [planOpen, setPlanOpen] = useState(false); // Start collapsed
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus close button when opening
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Simple focus trap - keep focus within panel
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !panelRef.current) return;
      
      const focusableElements = panelRef.current.querySelectorAll(
        'a[href], select, button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle accordion toggle (only one open at a time on mobile)
  const handleExploreToggle = () => {
    setExploreOpen(!exploreOpen);
    setPlanOpen(false);
  };

  const handlePlanToggle = () => {
    setPlanOpen(!planOpen);
    setExploreOpen(false);
  };

  // Handle item click - collapse both accordions and close menu
  const handleItemClick = () => {
    setExploreOpen(false);
    setPlanOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] lg:hidden"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      
      {/* Panel */}
      <div
        id="mobile-nav-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={
          isHouse
            ? language === 'bg'
              ? 'Навигационно меню'
              : language === 'el'
              ? 'Μενού πλοήγησης'
              : 'Navigation menu'
            : 'Navigation menu'
        }
        className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-[101] lg:hidden flex flex-col bg-[#F9F7F7]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-200 flex-shrink-0">
          <Link href={logoHref} onClick={onClose} className="flex items-center">
            <Image
              key={logoPath}
              src={logoPath}
              alt={logoAlt}
              width={isHouse ? 180 : 160}
              height={isHouse ? 36 : 45}
              className={`${isHouse ? 'h-8 sm:h-9' : 'h-9'} w-auto object-contain`}
              priority
            />
          </Link>
          <div className="flex items-center gap-3">
            <MobileLanguageSwitcher />
            <button
              type="button"
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-zinc-100 transition-colors"
              aria-label={
                isHouse
                  ? language === 'bg'
                    ? 'Затвори навигационното меню'
                    : language === 'el'
                    ? 'Κλείσιμο μενού πλοήγησης'
                    : 'Close navigation menu'
                  : 'Close navigation menu'
              }
            >
              <X className="w-6 h-6 text-zinc-900" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <nav
          aria-label={
            isHouse
              ? language === 'bg'
                ? 'Мобилна навигация'
                : language === 'el'
                ? 'Κινητή πλοήγηση'
                : 'Mobile navigation'
              : 'Mobile navigation'
          }
          className="flex-1 overflow-y-auto"
        >
          <div className="px-4 py-6 max-w-2xl mx-auto w-full">
            <MobileNavAccordion
              idPrefix="mobile-explore"
              label={t.header.explore}
              sections={exploreSections}
              isOpen={exploreOpen}
              onToggle={handleExploreToggle}
              onItemClick={handleItemClick}
            />
            <MobileNavAccordion
              idPrefix="mobile-plan"
              label={t.header.plan}
              sections={planSections}
              isOpen={planOpen}
              onToggle={handlePlanToggle}
              onItemClick={handleItemClick}
            />
          </div>
        </nav>

        {/* Sticky Reserve Button */}
        <div className="sticky bottom-0 left-0 right-0 p-4 bg-[#F9F7F7]/95 backdrop-blur-sm border-t border-zinc-200 flex-shrink-0">
          <div className="max-w-2xl mx-auto w-full">
            <Link
              href={isHouse ? "/house/reserve" : "/apartments/reserve"}
              onClick={onClose}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-sm transition-colors ${
                isHouse ? 'bg-[#5B7A3A] hover:bg-[#4d6831]' : 'bg-[#9D7F5F] hover:bg-[#8B6F47]'
              }`}
            >
              {t.header.reserve}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
