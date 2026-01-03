'use client';

import { PoliciesFaq } from '@/app/components/PoliciesFaq';
import { useTranslations } from '@/app/lib/translations';

export function ContactPoliciesFaq() {
  const t = useTranslations();
  return <PoliciesFaq title={t.contact.faq.title} items={t.contact.faq.items} />;
}

