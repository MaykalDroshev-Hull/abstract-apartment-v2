'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLanguage } from '@/app/lib/translations';
import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const t = useTranslations();
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  // Reviews now link to dedicated page instead of home page section

  // Use Bulgarian logo for Bulgarian, regular logo for English and Greek
  const logoPath = language === 'bg' 
    ? '/Images/Logo_Bulgarian.png' 
    : '/Images/Logo.png';

  // Collect all navigation links from header sections
  const quickLinks: Array<{ label: string; href: string }> = [];

  // Add links from explore sections
  const exploreSections = [
    t.header.exploreSections.theVilla,
    t.header.exploreSections.visualJourney,
    t.header.exploreSections.guestExperience,
  ];

  exploreSections.forEach((section) => {
    section.items.forEach((item) => {
      if (item.href && !item.href.startsWith('http')) {
        quickLinks.push({ label: item.label, href: item.href });
      }
    });
  });

  // Add links from plan sections
  const planSections = [
    t.header.planSections.bookingInfo,
    t.header.planSections.travelLogistics,
    t.header.planSections.getInTouch,
  ];

  planSections.forEach((section) => {
    section.items.forEach((item) => {
      if (item.href && !item.href.startsWith('http')) {
        quickLinks.push({ label: item.label, href: item.href });
      }
    });
  });

  // Remove duplicates
  const uniqueLinks = Array.from(
    new Map(quickLinks.map((link) => [link.href, link])).values()
  );

  return (
    <footer className="w-full border-t border-zinc-200 bg-[#F9F7F7] dark:border-zinc-800 dark:bg-zinc-900">
      <div className="w-full max-w-[1600px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Footer - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* Column 1 - Brand & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src={logoPath}
                alt="Abstract Apartment Logo"
                width={180}
                height={54}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 max-w-sm">
              {t.footer.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              {t.footer.quickLinks}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
              {uniqueLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Contacts */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              {t.footer.contacts}
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              <li>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {t.footer.phone}:
                </span>{' '}
                <a
                  href="tel:+359886790681"
                  className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                >
                  +359886790681
                </a>
                {' - '}
                {t.footer.niki}
              </li>
              <li>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {t.footer.phone}:
                </span>{' '}
                <a
                  href="tel:+359884535509"
                  className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                >
                  +359884535509
                </a>
                {' - '}
                {t.footer.kika}
              </li>
              <li>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {t.footer.email}:
                </span>{' '}
                <a
                  href="mailto:abstract.apartments@gmail.com"
                  className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                >
                  abstract.apartments@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {t.footer.address}:
                </span>{' '}
                Martini 7, Paralia Ofriniou 640 08, Greece
              </li>
              <li className="pt-2 mt-2 border-t border-zinc-300 dark:border-zinc-700">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  (ΑΜΑ) 00003339938
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center sm:text-left">
              © {currentYear} {t.footer.copyrightText}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center sm:text-right">
              <span>{t.footer.createdBy}</span>{' '}
              <a
                href="https://hmwspro.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-zinc-900 dark:hover:text-zinc-200 underline transition-colors"
              >
                H&M WsPro
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
