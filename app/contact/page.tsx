'use client';

import { ContactHero } from './components/ContactHero';
import { ContactForm } from './components/ContactForm';
import { ContactInfoBoxes } from './components/ContactInfoBoxes';
import { ContactPoliciesFaq } from './components/PoliciesFaq';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F2ED] dark:bg-zinc-900">
      <ContactHero />
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
            <ContactForm />
            <ContactInfoBoxes />
          </div>
          <ContactPoliciesFaq />
        </div>
      </div>
    </main>
  );
}

