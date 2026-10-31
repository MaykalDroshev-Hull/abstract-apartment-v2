'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/lib/translations';
import { Language } from '@/app/lib/translations/types';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'bg', label: 'Български', flag: '🇧🇬' },
  { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
];

export function LanguageSwitcher() {
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
        aria-label={ariaLabel}
        className="appearance-none rounded-md border border-zinc-300 bg-white px-3 py-1.5 pr-8 text-sm text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
