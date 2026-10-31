'use client';

import { usePathname } from 'next/navigation';
import { LanguageProvider, useLanguage } from '@/app/lib/translations';
import { Header } from './Header';
import { Footer } from './Footer';
import { ForceLightMode } from './ForceLightMode';
import { PageTitleUpdater } from './PageTitleUpdater';

function SkipToContentLink() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isHouse = pathname?.startsWith('/house');
  const label = isHouse
    ? language === 'bg'
      ? 'Към основното съдържание'
      : language === 'el'
      ? 'Μετάβαση στο κύριο περιεχόμενο'
      : 'Skip to main content'
    : 'Skip to main content';

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-zinc-900 focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
    >
      {label}
    </a>
  );
}

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ForceLightMode />
      <PageTitleUpdater />
      <div className="flex min-h-screen flex-col w-full" suppressHydrationWarning>
        <SkipToContentLink />
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 focus:outline-none"
          suppressHydrationWarning
        >
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
