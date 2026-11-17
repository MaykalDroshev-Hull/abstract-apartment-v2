'use client';

import { useTranslations, useLanguage } from '@/app/lib/translations';
import {
  MapPin,
  ExternalLink,
  Navigation,
  ShieldCheck,
  Compass,
  Store,
  Car,
} from 'lucide-react';
import Link from 'next/link';

export function HouseLocationSection() {
  const t = useTranslations();
  const { language } = useLanguage();
  const h = t.house;

  const ui =
    language === 'bg'
      ? {
          eyebrow: 'Локация • С. Голец, Област Ловеч',
          accessItems: [
            { icon: Compass, metric: '100%', title: 'Асфалт до вратата', desc: 'Без черни пътища' },
            { icon: ShieldCheck, metric: 'Без 4x4', title: 'Зимен достъп', desc: 'Почистван редовно' },
            { icon: Store, metric: '2 мин', title: 'Селски магазин', desc: 'Хранителни стоки пеша' },
            { icon: Car, metric: '4 места', title: 'Частен паркинг', desc: 'Безплатно пред портата' },
          ],
          drives: [
            {
              city: 'От София',
              time: '1 ч. 40 мин',
              dist: '130 км',
              route: 'АМ „Хемус“ → Ябланица / Ловеч → с. Голец',
            },
            {
              city: 'От Ловеч и Троян',
              time: '23 мин',
              dist: '25 км',
              route: 'Директен поддържан междуселищен асфалтов път',
            },
            {
              city: 'От Пловдив',
              time: '2 ч. 30 мин',
              dist: '160 км',
              route: 'През Троянския проход или АМ „Тракия“',
            },
          ],
        }
      : language === 'el'
      ? {
          eyebrow: 'Τοποθεσία • Χωριό Γκόλετς, Λόβετς',
          accessItems: [
            { icon: Compass, metric: '100%', title: 'Άσφαλτος στην πόρτα', desc: 'Χωρίς χωματόδρομο' },
            { icon: ShieldCheck, metric: 'Χωρίς 4x4', title: 'Χειμερινή πρόσβαση', desc: 'Καθαρός δρόμος' },
            { icon: Store, metric: '2 λεπτά', title: 'Παντοπωλείο', desc: 'Με τα πόδια στο χωριό' },
            { icon: Car, metric: '4 θέσεις', title: 'Δωρεάν πάρκινγκ', desc: 'Μπροστά στην είσοδο' },
          ],
          drives: [
            {
              city: 'Από Σόφια',
              time: '1 ώρα 40λ',
              dist: '130 χλμ',
              route: 'Αυτοκινητόδρομος Χέμους → Λόβετς → Γκόλετς',
            },
            {
              city: 'Από Λόβετς & Τρογιάν',
              time: '23 λεπτά',
              dist: '25 χλμ',
              route: 'Άμεσος ασφαλτοστρωμένος επαρχιακός δρόμος',
            },
            {
              city: 'Από Φιλιππούπολη',
              time: '2 ώρες 30λ',
              dist: '160 χλμ',
              route: 'Μέσω περάσματος Τρογιάν ή Α1',
            },
          ],
        }
      : {
          eyebrow: 'Location • Golets Village, Lovech Province',
          accessItems: [
            { icon: Compass, metric: '100%', title: 'Paved to the Gate', desc: 'Zero unpaved stretches' },
            { icon: ShieldCheck, metric: 'No 4x4', title: 'Winter Access', desc: 'Plowed all season' },
            { icon: Store, metric: '2 min', title: 'Village Grocery', desc: 'Walking distance essentials' },
            { icon: Car, metric: '4 Spots', title: 'Free Parking', desc: 'Private gate spaces' },
          ],
          drives: [
            {
              city: 'From Sofia',
              time: '1h 40m',
              dist: '130 km',
              route: 'A2 Hemus Motorway → Yablanitsa / Lovech → Golets',
            },
            {
              city: 'From Lovech & Troyan',
              time: '23 min',
              dist: '25 km',
              route: 'Direct well-maintained regional asphalt road',
            },
            {
              city: 'From Plovdiv',
              time: '2h 30m',
              dist: '160 km',
              route: 'Via Troyan Pass (summer) or A1 Motorway',
            },
          ],
        };

  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5B7A3A] mb-3">
            {ui.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-zinc-900 text-balance mb-4">
            {h.location.title}
          </h2>
        </div>

        {/* Access Highlights: Zero box-in-box slop, pure proximity grouping */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
          {ui.accessItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center px-2">
                <div className="text-[#5B7A3A] mb-2.5">
                  <Icon className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
                </div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 tracking-tight tabular-nums">
                  {item.metric}
                </p>
                <h3 className="mt-1.5 text-sm sm:text-base font-bold text-zinc-900 tracking-tight text-balance">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-zinc-600 leading-snug text-pretty">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Map Container */}
        <div className="rounded-2xl border border-zinc-300/80 bg-white/70 overflow-hidden backdrop-blur-xs mb-12 sm:mb-14">
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
              className="w-full h-[340px] sm:h-[420px] lg:h-[480px]"
            />
          </div>

          {/* Docked Address Bar */}
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-200/80">
            <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-zinc-900">
              <MapPin className="w-4 h-4 text-[#5B7A3A] shrink-0" aria-hidden="true" />
              <span>{h.location.address}</span>
            </div>
            <Link
              href={h.location.mapLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B7A3A] text-white text-xs sm:text-sm font-semibold hover:bg-[#4d6831] active:scale-[0.98] transition-all whitespace-nowrap self-start sm:self-auto"
            >
              <span>{h.location.openInMaps}</span>
              <ExternalLink className="w-4 h-4 translate-y-[-0.5px]" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* 3 Driving Route Cards (Image 3 Layout without white box or badge slop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {ui.drives.map((rt, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-zinc-300/80 bg-white/40 p-6 sm:p-7 backdrop-blur-xs transition-colors duration-200 hover:border-[#5B7A3A]/60 hover:bg-white/70 flex flex-col justify-between"
            >
              <div>
                {/* City Origin Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight text-balance mb-3">
                  {rt.city}
                </h3>

                {/* Drive Time + Distance (Clean, no background pills, tabular numbers) */}
                <div className="flex items-baseline justify-between gap-3 mb-4">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight tabular-nums">
                    {rt.time}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-zinc-700 tabular-nums">
                    {rt.dist}
                  </span>
                </div>

                {/* Route with optical icon alignment (No background pill) */}
                <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 leading-snug">
                  <Navigation
                    className="w-4 h-4 text-[#5B7A3A] shrink-0 translate-y-[2px]"
                    aria-hidden="true"
                  />
                  <span className="text-pretty">{rt.route}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
