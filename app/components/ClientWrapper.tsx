'use client';

import { LanguageProvider } from '@/app/lib/translations';
import { Header } from './Header';
import { Footer } from './Footer';
import { ForceLightMode } from './ForceLightMode';
import { PageTitleUpdater } from './PageTitleUpdater';

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ForceLightMode />
      <PageTitleUpdater />
      <div className="flex min-h-screen flex-col w-full" suppressHydrationWarning>
        <Header />
        <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

