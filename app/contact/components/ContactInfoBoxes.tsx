'use client';

import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

export function ContactInfoBoxes() {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      {/* Address Box */}
      <div className="bg-whitebg-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-zinc-200border-zinc-700">
        <div className="flex items-start gap-4">
          <div className="text-[#9D7F5F] mt-1">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500text-zinc-400 mb-2">
              {t.contact.info.address.label}
            </h3>
            <p className="text-base text-zinc-900text-zinc-100 mb-4">
              {t.contact.info.address.value}
            </p>
            <a
              href={t.contact.info.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#9D7F5F] hover:text-[#8B6F47] transition-colors"
            >
              <span>{t.contact.info.address.mapsLink}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Phones Box */}
      <div className="bg-whitebg-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-zinc-200border-zinc-700">
        <div className="flex items-start gap-4">
          <div className="text-[#9D7F5F] mt-1">
            <Phone className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500text-zinc-400 mb-4">
              {t.contact.info.phone.label}
            </h3>
            <div className="space-y-3">
              {t.contact.info.phone.numbers.map((number, index) => (
                <div key={index}>
                  <a
                    href={`tel:${number.phone}`}
                    className="block text-base text-zinc-900text-zinc-100 hover:text-[#9D7F5F] transition-colors"
                  >
                    {number.phone}
                  </a>
                  <span className="text-sm text-zinc-600text-zinc-400">{number.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Email Box */}
      <div className="bg-whitebg-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-zinc-200border-zinc-700">
        <div className="flex items-start gap-4">
          <div className="text-[#9D7F5F] mt-1">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500text-zinc-400 mb-2">
              {t.contact.info.email.label}
            </h3>
            <a
              href={`mailto:${t.contact.info.email.value}`}
              className="text-base text-zinc-900text-zinc-100 hover:text-[#9D7F5F] transition-colors"
            >
              {t.contact.info.email.value}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

