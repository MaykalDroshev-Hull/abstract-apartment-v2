'use client';

import { useTranslations, useLanguage } from '@/app/lib/translations';
import { MapPin, ExternalLink, Navigation, Compass, Store, Car, Waves } from 'lucide-react';
import Link from 'next/link';
import { MapWithRoute } from './MapWithRoute';
import { useState } from 'react';

interface JourneySectionProps {
  title?: string;
  intro?: string;
  sectionTitle?: string;
  showHeader?: boolean;
}

export function JourneySection({ title, intro, sectionTitle, showHeader = true }: JourneySectionProps) {
  const t = useTranslations();
  const { language } = useLanguage();
  const [useFallbackMap, setUseFallbackMap] = useState(false);

  // Use provided props or fall back to translations
  const displayTitle = title || t.home.journey.title;
  const displayIntro = intro || t.home.journey.intro;
  const displaySectionTitle = sectionTitle || t.home.journey.title;

  // Language-aware localized route and access details
  const localizedData = {
    bg: {
      routesSectionTitle: 'Време за пътуване с автомобил и самолет',
      routes: [
        {
          city: t.home.journey.details?.byCar?.routes?.[0]?.from || 'От София',
          time: t.home.journey.details?.byCar?.routes?.[0]?.duration || '3-3.30 часа',
          dist: t.home.journey.details?.byCar?.routes?.[0]?.distance || '~300 км',
          route: 'А25 / Е79 през Кулата–Промахонас → Серес → Паралия Офринио',
        },
        {
          city: t.home.journey.details?.byCar?.routes?.[1]?.from || 'От Пловдив',
          time: t.home.journey.details?.byCar?.routes?.[1]?.duration || '3.5–4 часа',
          dist: t.home.journey.details?.byCar?.routes?.[1]?.distance || '~230 км',
          route: 'През Кулата–Промахонас или ГКПП Илинден–Ексохи',
        },
        {
          city: 'През летище Солун (SKG)',
          time: '1.5 часа',
          dist: '~95 км',
          route: 'Летище Солун → АМ „Егнатия Одос“ / А2 → Паралия Офринио',
        },
      ],
      accessSectionTitle: 'Локация и удобства при пристигане',
      accessItems: [
        {
          metric: '4 мин',
          title: t.home.journey.beachWalk?.title || 'Разходка до плажа',
          desc: 'Само на 250 м от пясъчния бряг на Егейско море.',
          icon: Waves,
        },
        {
          metric: '100%',
          title: 'Асфалтиран достъп',
          desc: 'Широки улици в центъра на Паралия Офринио без черни пътища.',
          icon: Compass,
        },
        {
          metric: '2 мин',
          title: 'Магазини и таверни',
          desc: 'Пекарни, супермаркети и ресторанти на пешеходно разстояние.',
          icon: Store,
        },
        {
          metric: 'Безплатен',
          title: 'Паркинг пред входа',
          desc: 'Спокойни и сигурни паркоместа около жилищната сграда.',
          icon: Car,
        },
      ],
    },
    el: {
      routesSectionTitle: 'Χρόνος ταξιδιού με αυτοκίνητο & πτήση',
      routes: [
        {
          city: t.home.journey.details?.byCar?.routes?.[0]?.from || 'Από Σόφια',
          time: t.home.journey.details?.byCar?.routes?.[0]?.duration || '3–3,5 ώρες',
          dist: t.home.journey.details?.byCar?.routes?.[0]?.distance || '~300 χλμ',
          route: 'Αυτοκινητόδρομος Α25 μέσω Προμαχώνα → Σέρρες → Παραλία Οφρυνίου',
        },
        {
          city: t.home.journey.details?.byCar?.routes?.[1]?.from || 'Από Πλόβντιβ',
          time: t.home.journey.details?.byCar?.routes?.[1]?.duration || '3.5–4 ώρες',
          dist: t.home.journey.details?.byCar?.routes?.[1]?.distance || '~230 χλμ',
          route: 'Μέσω Προμαχώνα ή συνοριακού σταθμού Εξοχής',
        },
        {
          city: 'Μέσω Αεροδρομίου Θεσσαλονίκης',
          time: '1.5 ώρα',
          dist: '~95 χλμ',
          route: 'Αεροδρόμιο Θεσσαλονίκης (SKG) → Εγνατία Οδός / Α2 → Παραλία Οφρυνίου',
        },
      ],
      accessSectionTitle: 'Τοποθεσία & άνετη πρόσβαση',
      accessItems: [
        {
          metric: '4 λεπτά',
          title: t.home.journey.beachWalk?.title || 'Περπάτημα στην παραλία',
          desc: 'Μόλις 250 μέτρα από την ακτή του Αιγαίου.',
          icon: Waves,
        },
        {
          metric: '100%',
          title: 'Άσφαλτος στην πόρτα',
          desc: 'Άνετοι ασφαλτοστρωμένοι δρόμοι στο κέντρο της Παραλίας Οφρυνίου.',
          icon: Compass,
        },
        {
          metric: '2 λεπτά',
          title: 'Καταστήματα & Ταβέρνες',
          desc: 'Φούρνοι, μίνι μάρκετ και ταβέρνες σε απόσταση αναπνοής.',
          icon: Store,
        },
        {
          metric: 'Δωρεάν',
          title: 'Άνετο πάρκινγκ',
          desc: 'Άνετες θέσεις στάθμευσης ακριβώς δίπλα στο κτήριο.',
          icon: Car,
        },
      ],
    },
    en: {
      routesSectionTitle: 'Travel Times by Car & Flight',
      routes: [
        {
          city: t.home.journey.details?.byCar?.routes?.[0]?.from || 'From Sofia',
          time: t.home.journey.details?.byCar?.routes?.[0]?.duration || '3–3.5 hours',
          dist: t.home.journey.details?.byCar?.routes?.[0]?.distance || '~300 km',
          route: 'A25 / E79 via Kulata–Promachonas → Serres → Paralia Ofriniou',
        },
        {
          city: t.home.journey.details?.byCar?.routes?.[1]?.from || 'From Plovdiv',
          time: t.home.journey.details?.byCar?.routes?.[1]?.duration || '3.5–4 hours',
          dist: t.home.journey.details?.byCar?.routes?.[1]?.distance || '~230 km',
          route: 'Via Kulata–Promachonas or Ilinden-Exochi border pass',
        },
        {
          city: 'Via Thessaloniki Airport (SKG)',
          time: '1.5 hours',
          dist: '~95 km',
          route: 'Thessaloniki Airport (SKG) → Egnatia Odos / A2 Motorway',
        },
      ],
      accessSectionTitle: 'Location & Arrival Highlights',
      accessItems: [
        {
          metric: '4 min',
          title: t.home.journey.beachWalk?.title || 'Walk to the Beach',
          desc: 'Direct 250m paved walk to the warm Aegean Sea.',
          icon: Waves,
        },
        {
          metric: '100%',
          title: 'Paved Central Streets',
          desc: 'Wide asphalt roads in central Paralia Ofriniou with zero unpaved stretches.',
          icon: Compass,
        },
        {
          metric: '2 min',
          title: 'Groceries & Taverns',
          desc: 'Fresh bakeries, supermarkets, and Greek seafood taverns on foot.',
          icon: Store,
        },
        {
          metric: 'Free',
          title: 'Street Parking',
          desc: 'Convenient and safe open parking right around the property.',
          icon: Car,
        },
      ],
    },
  };

  const loc = localizedData[language as keyof typeof localizedData] || localizedData.en;

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
      <div className="mx-auto max-w-6xl">
        {/* Header Area */}
        {showHeader && (
          <div className="mb-14 sm:mb-18 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-4">
              {displayTitle}
            </h2>
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed text-pretty">
              {displayIntro}
            </p>
          </div>
        )}

        {/* Section Title (when showHeader is false) */}
        {!showHeader && displaySectionTitle && (
          <div className="mb-10 sm:mb-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-3">
              {displaySectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed text-pretty max-w-2xl mx-auto">
              {displayIntro}
            </p>
          </div>
        )}

        {/* Driving & Arrival Routes (Image 3 Layout without white box or badge slop) */}
        <div className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {loc.routes.map((rt, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-zinc-300/80 bg-white/40 p-6 sm:p-7 backdrop-blur-xs transition-colors duration-200 hover:border-[#9D7F5F]/60 hover:bg-white/70 flex flex-col justify-between"
              >
                <div>
                  {/* Hub / City Origin Heading */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight text-balance mb-3">
                    {rt.city}
                  </h3>

                  {/* Travel Time + Distance (Clean, no background pills, tabular numbers) */}
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
                      className="w-4 h-4 text-[#9D7F5F] shrink-0 translate-y-[2px]"
                      aria-hidden="true"
                    />
                    <span className="text-pretty">{rt.route}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrival & Accessibility Highlights: Zero box-in-a-box slop, pure proximity grouping */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 mb-8 sm:mb-10 text-center text-balance">
            {loc.accessSectionTitle}
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-8">
            {loc.accessItems.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-2"
                >
                  {/* Clean Icon with brand accent & optical alignment */}
                  <div className="text-[#9D7F5F] mb-3">
                    <Icon className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />
                  </div>

                  {/* Metric */}
                  <p className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight tabular-nums">
                    {item.metric}
                  </p>

                  {/* Title */}
                  <h4 className="mt-2 text-sm sm:text-base font-bold text-zinc-900 tracking-tight text-balance">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed text-pretty max-w-[210px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Map & Navigation Container */}
        <div className="rounded-2xl border border-zinc-300/80 bg-white/70 overflow-hidden backdrop-blur-xs mb-8">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-zinc-200/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9D7F5F] mb-1">
                <MapPin className="w-4 h-4 translate-y-[-0.5px]" aria-hidden="true" />
                <span>Paralia Ofriniou</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight text-balance">
                {t.home.journey.address}
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 text-pretty">
                {t.home.journey.steps[0]?.subtext || 'Martini 7, Paralia Ofriniou 640 08, Greece'}
              </p>
            </div>
            <Link
              href={t.home.journey.mapLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#9D7F5F] text-white text-xs sm:text-sm font-semibold hover:bg-[#8B6F47] active:scale-[0.98] transition-all whitespace-nowrap self-start sm:self-auto"
            >
              <span>{t.home.journey.openInMaps}</span>
              <ExternalLink className="w-4 h-4 translate-y-[-0.5px]" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative w-full h-[380px] sm:h-[480px]">
            {t.home.journey.beachDestination && !useFallbackMap ? (
              <MapWithRoute
                origin={t.home.journey.address}
                destination={t.home.journey.beachDestination}
                originPlaceId={t.home.journey.addressPlaceId}
                destinationLat={t.home.journey.beachLat}
                destinationLng={t.home.journey.beachLng}
                mapTitle={t.home.journey.mapTitle}
                beachWalk={t.home.journey.beachWalk}
                onError={() => setUseFallbackMap(true)}
              />
            ) : (
              <iframe
                src={t.home.journey.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.home.journey.mapTitle}
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
