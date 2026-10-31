'use client';

import { useTranslations } from '@/app/lib/translations';
import { PoliciesFaq } from '@/app/components/PoliciesFaq';
import { FaqHero } from './components/FaqHero';
import { NeedHelpStrip } from './components/NeedHelpStrip';

export default function FaqPage() {
  const t = useTranslations();

  // Hero images
  const heroImages = [
    '/Images/Gallery/LivingArea1.jpg',
    '/Images/Gallery/BigTerrace.jpg',
    '/Images/Gallery/KitchenArea.jpg',
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <FaqHero
          eyebrow={t.faq.hero.eyebrow}
          title={t.faq.hero.title}
          subtitle={t.faq.hero.subtitle}
          ctaPrimary={t.faq.hero.ctaPrimary}
          ctaSecondary={t.faq.hero.ctaSecondary}
          images={heroImages}
        />

        {/* FAQ Groups */}
        <div className="space-y-8 mb-12">
          {/* Policies Section */}
          <PoliciesFaq
            title={t.faq.policies.title}
            items={t.faq.policies.items}
          />

          {/* Booking & Availability Section */}
          <PoliciesFaq
            title={t.faq.booking.title}
            items={t.faq.booking.items}
          />
        </div>

        {/* Need Help Strip */}
        <NeedHelpStrip
          title={t.faq.needHelp.title}
          description={t.faq.needHelp.description}
          callText={t.faq.needHelp.call}
          emailText={t.faq.needHelp.email}
          phoneNumbers={t.contact.info.phone.numbers}
          email={t.contact.info.email.value}
        />
      </div>
    </div>
  );
}

