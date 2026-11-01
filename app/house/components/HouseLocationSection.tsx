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
          {
            city: 'От София',
            parts: [
              { num: '1', unit: ' ч. ' },
              { num: '40', unit: ' мин' },
            ],
            dist: '130 км • Магистрала „Хемус“',
          },
          {
            city: 'Ловеч и Троян',
            parts: [{ num: '23', unit: ' мин' }],
            dist: '25 км • Директен асфалтов път',
          },
          {
            city: 'От Пловдив',
            parts: [
              { num: '2', unit: ' ч. ' },
              { num: '30', unit: ' мин' },
            ],
            dist: '160 км • Троянски проход / А1',
          },
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
            {
              city: 'Από Σόφια',
              parts: [
                { num: '1', unit: ' ώ. ' },
                { num: '40', unit: ' λ.' },
              ],
              dist: '130 χλμ • Αυτοκινητόδρομος Χέμους',
            },
            {
              city: 'Λόβετς & Τρογιάν',
              parts: [{ num: '23', unit: ' λεπτά' }],
              dist: '25 χλμ • Άμεσος ασφαλτόδρομος',
            },
            {
              city: 'Από Φιλιππούπολη',
              parts: [
                { num: '2', unit: ' ώ. ' },
                { num: '30', unit: ' λ.' },
              ],
              dist: '160 χλμ • Κεντρικές αρτηρίες',
            },
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
            {
              city: 'From Sofia',
              parts: [
                { num: '1', unit: 'h ' },
                { num: '40', unit: 'm' },
              ],
              dist: '130 km • Hemus Motorway (A2)',
            },
            {
              city: 'Lovech & Troyan',
              parts: [{ num: '23', unit: ' min' }],
              dist: '25 km • Direct Paved Road',
            },
            {
              city: 'From Plovdiv',
              parts: [
                { num: '2', unit: 'h ' },
                { num: '30', unit: 'm' },
              ],
              dist: '160 km • Scenic Pass / A1',
            },
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

        {/* 3 Minimal Borderless Drive-Time Stats */}
        <div className="max-w-5xl mx-auto pt-10 sm:pt-12 pb-2 grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6 sm:gap-x-8">
          {ui.drives.map((drive, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div
                className="text-4xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#5B7A3A] leading-none whitespace-nowrap"
                style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
              >
                {drive.parts.map((part, pIdx) => (
                  <span key={pIdx}>
                    <span>{part.num}</span>
                    <span className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                      {part.unit}
                    </span>
                  </span>
                ))}
              </div>
              <div className="mt-3 text-sm sm:text-base font-bold text-zinc-900 tracking-tight">
                {drive.city}
              </div>
              <div className="mt-1 text-xs text-zinc-500 leading-snug">
                {drive.dist}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
                );
}
