'use client';

import { LanguageProvider } from '@/app/lib/translations';
import { Header } from './Header';
import { Footer } from './Footer';

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col w-full">
        <Header />
        <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

