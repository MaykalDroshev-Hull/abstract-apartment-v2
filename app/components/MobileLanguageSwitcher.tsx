'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/lib/translations';
import { Language } from '@/app/lib/translations/types';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'bg', label: 'Български', flag: '🇧🇬' },
  { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
];

export function MobileLanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const isHouse = pathname?.startsWith('/house');
  const ariaLabel = isHouse
    ? language === 'bg'
      ? 'Изберете език на уебсайта'
      : language === 'el'
      ? 'Επιλέξτε γλώσσα ιστοσελίδας'
      : 'Select website language'
    : 'Select website language';

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="appearance-none rounded-md border border-zinc-300 bg-white px-2 py-1.5 pr-6 text-lg focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        aria-label={ariaLabel}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} aria-label={lang.label}>
            {lang.flag}
          </option>
        ))}
      </select>
      {/* Custom arrow indicator */}
      <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <svg className="w-3 h-3 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
