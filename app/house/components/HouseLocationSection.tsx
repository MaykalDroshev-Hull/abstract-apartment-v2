'use client';

import { useTranslations, useLanguage } from '@/app/lib/translations';
import {
  MapPin,
  Car,
  ExternalLink,
  ShieldCheck,
  Compass,
  ShoppingBag,
} from 'lucide-react';
import Link from 'next/link';

export function HouseLocationSection() {
  const t = useTranslations();
  const { language } = useLanguage();
  const h = t.house;

  const ui =
    language === 'bg'
      ? {
        eyebrow: 'ЛОКАЦИЯ • С. ГОЛЕЦ, ОБЛАСТ ЛОВЕЧ',
        pills: [
          { icon: Compass, text: '100% Асфалт до вратата' },
          { icon: ShieldCheck, text: 'Без нужда от 4x4 зимата' },
          { icon: ShoppingBag, text: 'Магазин на 2 мин пеша' },
          { icon: Car, text: '4 безплатни паркоместа' },
        ],
        drives: [
          { city: 'София', time: '1 ч. 40 мин', dist: '130 км • Магистрала „Хемус“' },
          { city: 'Ловеч и Троян', time: '23 мин', dist: '25 км • Асфалтов път' },
          { city: 'Пловдив', time: '2 ч. 30 мин', dist: '160 км • Троянски проход / А1' },
        ],
      }
      : language === 'el'
        ? {
          eyebrow: 'ΤΟΠΟΘΕΣΙΑ • ΧΩΡΙΟ ΓΚΟΛΕΤΣ, ΛΟΒΕΤΣ',
          pills: [
            { icon: Compass, text: '100% Άσφαλτος μέχρι την πόρτα' },
            { icon: ShieldCheck, text: 'Χωρίς ανάγκη 4x4 τον χειμώνα' },
            { icon: ShoppingBag, text: 'Παντοπωλείο σε 2 λεπτά' },
            { icon: Car, text: '4 δωρεάν θέσεις στάθμευσης' },
          ],
          drives: [
            { city: 'Σόφια', time: '1 ώ. 40 λ.', dist: '130 χλμ • Αυτοκινητόδρομος Χέμους' },
            { city: 'Λόβετς & Τρογιάν', time: '23 λεπτά', dist: '25 χλμ • Ασφαλτόδρομος' },
            { city: 'Πλόβντιβ', time: '2 ώ. 30 λ.', dist: '160 χλμ • Κεντρικές αρτηρίες' },
          ],
        }
        : {
          eyebrow: 'LOCATION • GOLETS VILLAGE, LOVECH',
          pills: [
            { icon: Compass, text: '100% Paved Road to Gate' },
            { icon: ShieldCheck, text: 'No 4x4 Needed in Winter' },
            { icon: ShoppingBag, text: 'Village Shop 2 min Walk' },
            { icon: Car, text: '4 Free Parking Spots' },
          ],
          drives: [
            { city: 'From Sofia', time: '1h 40m', dist: '130 km • Hemus Motorway (A2)' },
            { city: 'Lovech & Troyan', time: '23 min', dist: '25 km • Direct Paved Road' },
            { city: 'From Plovdiv', time: '2h 30m', dist: '160 km • Scenic Pass / A1' },
          ],
        };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
      <div className="mx-auto max-w-7xl">
          {/* Compact Visual Header + Road Access Pills */}
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-[#5B7A3A]/10 text-[#5B7A3A] mb-3">
              {ui.eyebrow}
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {h.location.title}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {ui.pills.map((pill, idx) => {
                const PillIcon = pill.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-sm"
                  >
                    <PillIcon className="w-3.5 h-3.5 text-[#5B7A3A]" aria-hidden="true" />
                    <span>{pill.text}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Map Container */}
              <div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm mb-6">
                <div className="relative bg-zinc-200">
                  <iframe
                    src={h.location.mapEmbedUrl}
                    width="100%"
                    height="460"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={h.location.mapTitle}
                    className="w-full h-[360px] sm:h-[440px] lg:h-[500px]"
                  />
                </div>

                  {/* Docked Address Bar */}
                  <div className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-800">
                      <MapPin className="w-4 h-4 text-[#5B7A3A] flex-shrink-0" aria-hidden="true" />
                      <span>{h.location.address}</span>
                    </div>
                    <Link
                      href={h.location.mapLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] hover:bg-[#5B7A3A] hover:text-white transition-colors text-xs font-bold"
                    >
                      <span>{h.location.openInMaps}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

        {/* 3 Big-Number Drive-Time Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ui.drives.map((drive, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-zinc-200/90 p-6 flex items-center justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  <Car className="w-3.5 h-3.5 text-[#5B7A3A]" aria-hidden="true" />
                  <span>{drive.city}</span>
                </div>
                <div
                  className="text-2xl sm:text-3xl font-bold text-zinc-900"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {drive.time}
                </div>
                <p className="text-xs text-zinc-500 mt-1">{drive.dist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
                );
}
