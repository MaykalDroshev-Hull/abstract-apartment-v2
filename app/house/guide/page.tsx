'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import {
    MapPin,
    ExternalLink,
    Trees,
    Mountain,
    Landmark,
    Waves,
    Compass,
  } from 'lucide-react';

type AttractionCategory = 'all' | 'nature' | 'caves' | 'historic' | 'lakes';

const ATTRACTIONS_META: Array<{
  id: number;
  category: Exclude<AttractionCategory, 'all'>;
  mapsUrl: string;
}> = [
    { id: 1, category: 'nature', mapsUrl: 'https://maps.google.com/?q=Водопад+Кавука+Голец' },
    { id: 2, category: 'lakes', mapsUrl: 'https://maps.google.com/?q=Голец+язовир' },
    { id: 3, category: 'lakes', mapsUrl: 'https://maps.google.com/?q=Язовир+Сопот' },
    { id: 4, category: 'nature', mapsUrl: 'https://maps.google.com/?q=Екопътека+Искър-Панега+Луковит' },
    { id: 5, category: 'caves', mapsUrl: 'https://maps.google.com/?q=Скална+арка+Дупката+Ъглен' },
    { id: 6, category: 'caves', mapsUrl: 'https://maps.google.com/?q=Табашка+пещера+Ловеч' },
    { id: 7, category: 'nature', mapsUrl: 'https://maps.google.com/?q=Крушунски+водопади' },
    { id: 8, category: 'caves', mapsUrl: 'https://maps.google.com/?q=Деветашка+пещера' },
    { id: 9, category: 'historic', mapsUrl: 'https://maps.google.com/?q=Римска+крепост+Состра+Ломец' },
    { id: 10, category: 'historic', mapsUrl: 'https://maps.google.com/?q=Покрит+мост+Ловеч' },
    { id: 11, category: 'nature', mapsUrl: 'https://maps.google.com/?q=Зоопарк+Ловеч' },
  ];

export default function HouseGuidePage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<AttractionCategory>('all');

  const content = {
    bg: {
      eyebrow: 'ПЪТЕВОДИТЕЛ ЗА РЕГИОНА',
      title: '11 забележителности край с. Голец',
      subtitle: 'Водопади, пещери, язовири и крепости на 3 до 45 минути от къщата.',
      rings: [
        { time: '3–5 мин', label: 'В с. Голец', sub: 'Водопад & 2 езера' },
        { time: '15–25 мин', label: 'Ловеч & Сопот', sub: 'Язовир, мостове, крепости' },
        { time: '30–45 мин', label: 'Топ феномени', sub: 'Крушуна, Деветашка, Панега' },
      ],
      categories: {
        all: 'Всички (11)',
        nature: 'Водопади & Природа',
        caves: 'Пещери & Арки',
        historic: 'Крепости & История',
        lakes: 'Язовири & Води',
      },
      categoryBadges: {
        nature: 'Природа',
        caves: 'Пещера / Скали',
        historic: 'История',
        lakes: 'Язовир',
      },
      navigateBtn: 'Маршрут в Google Maps',
      attractions: [
        {
          title: 'Водопад Кавука',
          distance: '2 км',
          driveTime: '5 мин',
          desc: 'Скрит горски водопад в самото землище на с. Голец.',
          highlights: ['Пеша от къщата', 'Горска прохлада'],
        },
        {
          title: 'Селските язовири на Голец',
          distance: '1.5 км',
          driveTime: '3 мин',
          desc: 'Два тихи микроязовира край селото за риболов и пикник.',
          highlights: ['Риболов', 'Пикник на брега'],
        },
        {
          title: 'Язовир Сопот',
          distance: '15 км',
          driveTime: '15 мин',
          desc: 'Голям панорамен язовир за лодки, каяк и рибни ресторанти.',
          highlights: ['Лодки & каяк', 'Рибни механи'],
        },
        {
          title: 'Екопътека Искър – Панега',
          distance: '35 км',
          driveTime: '30 мин',
          desc: 'Дървени мостчета над тюркоазените води на река Златна Панега.',
          highlights: ['Тюркоазен каньон', 'Лека разходка'],
        },
        {
          title: 'Скална арка „Дупката“ – с. Ъглен',
          distance: '28 км',
          driveTime: '25 мин',
          desc: 'Естествен скален мост, извисяващ се над каньона на река Вит.',
          highlights: ['Скален феномен', 'Топ фото панорама'],
        },
        {
          title: 'Табашка пещера',
          distance: '24 км',
          driveTime: '22 мин',
          desc: 'Праисторическа пещера над живописния пролом на река Осъм.',
          highlights: ['Каньон р. Осъм', 'Скални зали'],
        },
        {
          title: 'Крушунски водопади',
          distance: '55 км',
          driveTime: '45 мин',
          desc: 'Най-голямата изумрудена травертинова каскада в България.',
          highlights: ['Изумрудени вирове', 'Горски мостове'],
        },
        {
          title: 'Деветашка пещера',
          distance: '45 км',
          driveTime: '40 мин',
          desc: 'Гигантска пещерна зала със седемте небесни отвора „Очите“.',
          highlights: ['7-те „Очи“', 'Световен феномен'],
        },
        {
          title: 'Римска крепост Состра',
          distance: '30 км',
          driveTime: '25 мин',
          desc: 'Античен римски кастел с кули край древния път Виа Траяна.',
          highlights: ['Римски кули', 'Виа Траяна'],
        },
        {
          title: 'Покрит мост и Вароша – Ловеч',
          distance: '25 км',
          driveTime: '23 мин',
          desc: 'Дървеният мост на Колю Фичето, калдъръмът на Вароша и крепостта.',
          highlights: ['Колю Фичето', 'Старият квартал'],
        },
        {
          title: 'Зоопарк Ловеч',
          distance: '26 км',
          driveTime: '24 мин',
          desc: 'Вторият по големина зоопарк у нас в сенчестия парк „Стратеш“.',
          highlights: ['Парк Стратеш', 'Любим за деца'],
        },
      ],
      ctaTitle: 'Разходка през деня, горещо джакузи вечерта',
      ctaSubtitle: 'Върнете се край камината и СПА зоната в Къща за гости „Абстракт“.',
      ctaReserve: 'Резервирай почивка',
      ctaDetails: 'Разгледай къщата',
    },
    el: {
      eyebrow: 'ΟΔΗΓΟΣ ΠΕΡΙΟΧΗΣ',
      title: '11 αξιοθέατα γύρω από το Γκόλετς',
      subtitle: 'Καταρράκτες, σπήλαια, λίμνες και κάστρα σε 3 έως 45 λεπτά από το σπίτι.',
      rings: [
        { time: '3–5 λεπτά', label: 'Στο Γκόλετς', sub: 'Καταρράκτης & 2 λίμνες' },
        { time: '15–25 λεπτά', label: 'Λόβετς & Σόποτ', sub: 'Λίμνη, γέφυρα, κάστρα' },
        { time: '30–45 λεπτά', label: 'Κορυφαία θαύματα', sub: 'Κρουσούνα & Ντεβετάκι' },
      ],
      categories: {
        all: 'Όλα (11)',
        nature: 'Καταρράκτες & Φύση',
        caves: 'Σπήλαια & Αψίδες',
        historic: 'Κάστρα & Ιστορία',
        lakes: 'Λίμνες & Νερά',
      },
      categoryBadges: {
        nature: 'Φύση',
        caves: 'Σπήλαιο / Βράχοι',
        historic: 'Ιστορία',
        lakes: 'Λίμνη',
      },
      navigateBtn: 'Πλοήγηση στο Google Maps',
      attractions: [
        {
          title: 'Καταρράκτης Καβούκα',
          distance: '2 χλμ',
          driveTime: '5 λεπτά',
          desc: 'Κρυμμένος δασικός καταρράκτης δίπλα στο χωριό Γκόλετς.',
          highlights: ['Κοντινός περίπατος', 'Παρθένα φύση'],
        },
        {
          title: 'Λίμνες του Γκόλετς',
          distance: '1.5 χλμ',
          driveTime: '3 λεπτά',
          desc: 'Δύο ήσυχες λίμνες στην άκρη του χωριού για ψάρεμα και πικνίκ.',
          highlights: ['Ψάρεμα', 'Πικνίκ στη λίμνη'],
        },
        {
          title: 'Λίμνη Σόποτ',
          distance: '15 χλμ',
          driveTime: '15 λεπτά',
          desc: 'Μεγάλη λίμνη για καγιάκ, βάρκες και ταβέρνες με φρέσκο ψάρι.',
          highlights: ['Θαλάσσια σπορ', 'Ψαροταβέρνες'],
        },
        {
          title: 'Μονοπάτι Ίσκαρ – Πανέγκα',
          distance: '35 χλμ',
          driveTime: '30 λεπτά',
          desc: 'Ξύλινα γεφύρια πάνω από τα τιρκουάζ νερά του ποταμού Πανέγκα.',
          highlights: ['Τιρκουάζ φαράγγι', 'Οικογενειακό'],
        },
        {
          title: 'Πέτρινη Αψίδα Ίγκλεν',
          distance: '28 χλμ',
          driveTime: '25 λεπτά',
          desc: 'Εντυπωσιακή φυσική βραχώδης γέφυρα πάνω από τον ποταμό Βιτ.',
          highlights: ['Φυσική αψίδα', 'Θέα φαραγγιού'],
        },
        {
          title: 'Σπήλαιο Ταμπάσκα',
          distance: '24 χλμ',
          driveTime: '22 λεπτά',
          desc: 'Προϊστορικό σπήλαιο πάνω από τις όχθες του ποταμού Όσαμ.',
          highlights: ['Φαράγγι Όσαμ', 'Σπήλαιο'],
        },
        {
          title: 'Καταρράκτες Κρουσούνα',
          distance: '55 χλμ',
          driveTime: '45 λεπτά',
          desc: 'Οι μεγαλύτεροι σμαραγδένιοι καταρράκτες στη Βουλγαρία.',
          highlights: ['Τιρκουάζ βάθρες', 'Δασικά μονοπάτια'],
        },
        {
          title: 'Σπήλαιο Ντεβετάκι',
          distance: '45 χλμ',
          driveTime: '40 λεπτά',
          desc: 'Κολοσσιαία αίθουσα με 7 φυσικά ανοίγματα στην οροφή.',
          highlights: ['Τα 7 Μάτια', 'Διάσημο μνημείο'],
        },
        {
          title: 'Ρωμαϊκό Φρούριο Σόστρα',
          distance: '30 χλμ',
          driveTime: '25 λεπτά',
          desc: 'Αρχαίο ρωμαϊκό κάστρο με πύργους και ρωμαϊκά λουτρά.',
          highlights: ['Ρωμαϊκοί πύργοι', 'Αρχαιολογία'],
        },
        {
          title: 'Σκεπαστή Γέφυρα & Βαρόσι – Λόβετς',
          distance: '25 χλμ',
          driveTime: '23 λεπτά',
          desc: 'Η ιστορική ξύλινη γέφυρα, η παλιά πόλη και το μεσαιωνικό κάστρο.',
          highlights: ['Σκεπαστή γέφυρα', 'Παλιά πόλη'],
        },
        {
          title: 'Ζωολογικός Κήπος Λόβετς',
          distance: '26 χλμ',
          driveTime: '24 λεπτά',
          desc: 'Ο δεύτερος μεγαλύτερος ζωολογικός κήπος στο καταπράσινο πάρκο Στράτες.',
          highlights: ['Πάρκο Στράτες', 'Ιδανικό για παιδιά'],
        },
      ],
      ctaTitle: 'Εξερεύνηση την ημέρα, ζεστό τζακούζι το βράδυ',
      ctaSubtitle: 'Χαλαρώστε δίπλα στο τζάκι και το σπα του Ξενώνα Abstract.',
      ctaReserve: 'Κράτηση',
      ctaDetails: 'Δείτε το σπίτι',
    },
    en: {
      eyebrow: 'REGIONAL TRAVEL GUIDE',
      title: '11 Landmarks Around Golets',
      subtitle: 'Waterfalls, skylight caves, lakes, and fortresses 3 to 45 minutes from your gate.',
      rings: [
        { time: '3–5 min', label: 'In Golets', sub: 'Waterfall & 2 village lakes' },
        { time: '15–25 min', label: 'Lovech & Sopot', sub: 'Lake, covered bridge, forts' },
        { time: '30–45 min', label: 'Iconic Wonders', sub: 'Krushuna Falls & Devetashka' },
      ],
      categories: {
        all: 'All (11)',
        nature: 'Waterfalls & Nature',
        caves: 'Caves & Arches',
        historic: 'Fortresses & History',
        lakes: 'Lakes & Waters',
      },
      categoryBadges: {
        nature: 'Nature',
        caves: 'Cave / Arch',
        historic: 'History',
        lakes: 'Lake',
      },
      navigateBtn: 'Open in Google Maps',
      attractions: [
        {
          title: 'Kavuka Waterfall',
          distance: '2 km',
          driveTime: '5 min',
          desc: 'Hidden forest cascade tucked right inside Golets village lands.',
          highlights: ['Walkable trail', 'Forest shade'],
        },
        {
          title: 'Golets Village Lakes',
          distance: '1.5 km',
          driveTime: '3 min',
          desc: 'Two calm freshwater lakes on the village edge for fishing and picnics.',
          highlights: ['Morning fishing', 'Lakeside picnic'],
        },
        {
          title: 'Lake Sopot (Sopot Dam)',
          distance: '15 km',
          driveTime: '15 min',
          desc: 'Expansive mountain reservoir for kayaking, boating, and fish taverns.',
          highlights: ['Kayaks & boats', 'Fish taverns'],
        },
        {
          title: 'Iskar – Panega Eco-Trail',
          distance: '35 km',
          driveTime: '30 min',
          desc: 'Suspended wooden catwalks clinging to cliffs over turquoise river water.',
          highlights: ['Turquoise canyon', 'Family friendly'],
        },
        {
          title: 'Dupkata Rock Arch, Oglen',
          distance: '28 km',
          driveTime: '25 min',
          desc: 'Dramatic natural limestone bridge towering above the Vit river gorge.',
          highlights: ['Limestone arch', 'Photo viewpoint'],
        },
        {
          title: 'Tabashka Cave',
          distance: '24 km',
          driveTime: '22 min',
          desc: 'Prehistoric riverside cave overlooking the winding Osam gorge.',
          highlights: ['Osam gorge', 'Karst chambers'],
        },
        {
          title: 'Krushuna Waterfalls',
          distance: '55 km',
          driveTime: '45 min',
          desc: 'Bulgaria’s largest emerald travertine waterfall terraces in lush forest.',
          highlights: ['Emerald pools', 'Forest bridges'],
        },
        {
          title: 'Devetashka Cave',
          distance: '45 km',
          driveTime: '40 min',
          desc: 'Colossal cathedral cave lit by 7 natural ceiling skylights ("The Eyes").',
          highlights: ['7 Skylight Eyes', 'World-famous'],
        },
        {
          title: 'Sostra Roman Fortress',
          distance: '30 km',
          driveTime: '25 min',
          desc: 'Excavated Roman military castellum along the ancient Via Trajana road.',
          highlights: ['Roman towers', 'Via Trajana'],
        },
        {
          title: 'Covered Bridge & Varosha – Lovech',
          distance: '25 km',
          driveTime: '23 min',
          desc: 'Kolyo Ficheto’s wooden crafts bridge, cobblestone old town, and hilltop fort.',
          highlights: ['Covered bridge', 'Revival old town'],
        },
        {
          title: 'Lovech Zoo',
          distance: '26 km',
          driveTime: '24 min',
          desc: 'Bulgaria’s second-largest zoo shaded by century-old trees in Stratesh Park.',
          highlights: ['Stratesh Park', 'Great with kids'],
        },
      ],
      ctaTitle: 'Daytime Adventures, Steaming Jacuzzi Nights',
      ctaSubtitle: 'Return to crackling firewood and year-round spa warmth at Abstract Guest House.',
      ctaReserve: 'Book Your Stay',
      ctaDetails: 'View The House',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  const combinedAttractions = ATTRACTIONS_META.map((meta, idx) => ({
    ...meta,
    ...t.attractions[idx],
  }));

  const filteredAttractions =
    activeCategory === 'all'
      ? combinedAttractions
      : combinedAttractions.filter((item) => item.category === activeCategory);

  const renderCategoryIcon = (cat: Exclude<AttractionCategory, 'all'>, cls = 'w-4 h-4') => {
    if (cat === 'nature') return <Trees className={cls} aria-hidden="true" />;
    if (cat === 'caves') return <Mountain className={cls} aria-hidden="true" />;
    if (cat === 'historic') return <Landmark className={cls} aria-hidden="true" />;
    return <Waves className={cls} aria-hidden="true" />;
  };

  return (
      <div className="min-h-screen bg-[#F5F2ED] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#5B7A3A]/10 text-[#5B7A3A] mb-3">
                {t.eyebrow}
              </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight mb-3">
                  {t.title}
                </h1>
                  <p className="text-sm sm:text-base text-zinc-600">
                    {t.subtitle}
                  </p>
                </div>

                {/* 3-Tier Visual Distance Ring Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto mb-8">
                  {t.rings.map((ring, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-zinc-200 px-5 py-4 flex items-center gap-3.5 shadow-2xs"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center flex-shrink-0">
                        <Compass className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-lg font-serif font-extrabold text-[#3D2B1F] leading-tight">
                          {ring.time}
                        </p>
                        <p className="text-xs font-bold text-zinc-900">{ring.label}</p>
                        <p className="text-[11px] text-zinc-500">{ring.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Filters */}
                <div
                  role="group"
                  aria-label={t.eyebrow}
                  className="flex flex-wrap items-center justify-center gap-2 mb-10"
                >
                  {(['all', 'nature', 'caves', 'historic', 'lakes'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      aria-pressed={activeCategory === cat}
                      onClick={() => setActiveCategory(cat)}
                            ? 'bg-[#5B7A3A] text-white shadow-md'
                            : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200'
                          }`}
            >
              {cat !== 'all' && renderCategoryIcon(cat, 'w-3.5 h-3.5')}
              <span>{t.categories[cat]}</span>
            </button>
          ))}
        </div>

        {/* Compact Visual Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {filteredAttractions.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm flex flex-col justify-between hover:border-[#5B7A3A]/40 transition-colors"
            >
              <div>
                {/* Top Visual Header: Category Icon Pill + Big Drive-Time Badge */}
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-[#5B7A3A]/10 text-[#5B7A3A]">
                    {renderCategoryIcon(item.category, 'w-3.5 h-3.5')}
                    {t.categoryBadges[item.category]}
                  </span>
                  <div className="text-right">
                    <span className="block text-xl font-serif font-extrabold text-[#3D2B1F] leading-none">
                      {item.driveTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400 font-medium mt-0.5">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {item.distance}
                    </span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-zinc-900 mb-1.5">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-600 leading-snug mb-4">
                  {item.desc}
                </p>

                {/* Compact Horizontal Pill Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.highlights.map((hl, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F5F2ED] text-zinc-700"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3.5 border-t border-zinc-100">
                <a
                  href={item.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-bold text-zinc-800 hover:bg-[#5B7A3A] hover:text-white hover:border-[#5B7A3A] transition-colors"
                >
                  <span>{t.navigateBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#5B7A3A] rounded-3xl p-8 sm:p-10 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-2">
            {t.ctaTitle}
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/house/reserve"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#5B7A3A] font-bold text-sm hover:bg-zinc-100 transition-colors shadow-md"
            >
              {t.ctaReserve}
            </Link>
            <Link
              href="/house/details"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
            >
              {t.ctaDetails}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
