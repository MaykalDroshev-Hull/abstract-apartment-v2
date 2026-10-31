'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/app/lib/translations';
import {
    JacuzziIcon,
    SaunaIcon,
    PoolIcon,
    BbqIcon,
    FireplaceIcon,
  } from '@/app/house/components/HouseAmenityIcons';
import {
  Layers,
  Bed,
  Bath,
  UtensilsCrossed,
  Trees,
  Car,
  Mountain,
  ArrowRight,
  ArrowDown,
  Maximize2,
  Sun,
  ShieldCheck,
} from 'lucide-react';

export default function HouseFloorPlanPage() {
  const { language } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<'ground' | 'upper' | 'garden'>('upper');

  const content = {
    bg: {
      eyebrow: 'АРХИТЕКТУРНО РАЗПРЕДЕЛЕНИЕ',
      title: 'План и зони на къщата',
      subtitle: 'Интерактивна схема на трите зони: 4 спални на етажа, механа с кухня на партера и 1000+ кв.м СПА двор.',
      levels: {
        upper: 'Етаж • 4 Спални',
        ground: 'Партер • Механа & Кухня',
        garden: 'Двор • Басейн & СПА',
      },
      levelBadges: {
        upper: 'ПЪРВИ ЖИЛИЩЕН ЕТАЖ',
        ground: 'ПРИЗЕМНО НИВО',
        garden: 'ОГРАДЕН ДВОР И СПА',
      },
      levelImageAlts: {
        ground: 'Каменна приземна зидария и дървена веранда на Къща за гости Абстракт с директен достъп до механата и двора',
        upper: 'Жилищен етаж на Къща за гости Абстракт – автентична стая с огнище, тъкани черги, двойно легло и дървени греди',
        garden: 'Ограден зелен двор над 1000 кв.м с отопляем открит басейн и СПА зона, снимани изпод навеса на верандата',
      },
        upper: {
          title: 'Жилищен етаж: 4 спални и чардак',
          desc: 'Тиха зона за отдих с 3 бани на етажа и две панорамни ориентации.',
          topStrip: 'Северна панорама • Планински тераси',
          room1: { name: 'Стая 1: С огнище', cap: '3–4 гости', tags: ['2+2 легла', 'Огнище', 'Тераса'] },
          sharedBath: { name: 'Етажна баня', tag: 'Душ & тоалетна' },
          room2: { name: 'Стая 2: Голяма', cap: '3–4 гости', tags: ['2+2 легла', 'Просторна', 'Тераса'] },
          corridor: 'Вътрешен дървен коридор и стълбище',
          room3: { name: 'Стая 3: Панорамна 1', cap: '3–4 гости', bathTag: 'Собствена баня', tags: ['2+2 легла', 'Изглед басейн'] },
          room4: { name: 'Стая 4: Панорамна 2', cap: '3–4 гости', bathTag: 'Собствена баня', tags: ['2+2 легла', 'Излаз чардак'] },
          bottomStrip: 'Остъклен южен чардак • Изглед към басейна и двора',
        },
          ground: {
            title: 'Партер: Механа, камина и кухня',
            desc: 'Пространство за общи трапези без вечерен час за музика и с пряк излаз към двора.',
            topStrip: 'Масивна възрожденска каменна зидария • Прохлада лятото, топлина зимата',
            kitchen: { name: 'Отворена кухня', badge: 'Пълно оборудване', tags: ['Фурна & котлони', 'Съдомиялна', 'Кафемашина', 'Хладилник'] },
            mehana: { name: 'Традиционна механа', badge: '14+ седящи места', tags: ['Камина с безплатни дърва', 'Bluetooth колонка', 'Смарт ТВ'] },
            bath: { name: 'Баня партер', tag: 'За механата' },
            bottomStrip: 'Директен излаз през двойна врата към навеса с барбекю и басейна',
          },
              garden: {
                title: 'СПА зона, отопляем басейн и двор',
                desc: 'Над 1000 кв.м равен, изцяло ограден двор за пълно уединение.',
                topStrip: '100% ограден периметър • Безопасен за деца и домашни любимци',
                zones: [
                  { name: 'Целогодишен СПА кът', badge: '365 дни', tags: ['5-местно горещо джакузи', '3-местна сауна'] },
                  { name: 'Отопляем басейн', badge: 'Апр – Окт', tags: ['Топла кристална вода', 'Шезлонги & чадъри'] },
                  { name: 'Покрито барбекю', badge: '14+ места', tags: ['Пещ на дърва + ел. скара', 'Маса под навес'] },
                  { name: 'Поляна & Паркинг', badge: '4 автомобила', tags: ['Зелена морава за игри', 'Паркинг пред входа'] },
                ],
              },
              sidebarTitle: 'Ключови параметри',
              sidebarSpecs: [
                { label: 'Капацитет', value: 'До 14 гости' },
                { label: 'Спални', value: '4 самостоятелни' },
                { label: 'Бани общо', value: '4 бани с тоалетна' },
                { label: 'Отопление', value: 'Пелетно централно' },
                { label: 'Паркинг', value: '4 безплатни места' },
              ],
              sidebarCta: 'Снимки и детайли за стаите',
              ctaTitle: 'Запазете цялата къща за вашата компания',
              ctaSubtitle: '100% самостоятелно ползване на всички етажи, механата и СПА двора.',
              ctaReserve: 'Към резервация',
              ctaRates: 'Вижте цените',
    },
          el: {
            eyebrow: 'ΑΡΧΙΤΕΚΤΟΝΙΚΗ ΔΙΑΡΡΥΘΜΙΣΗ',
            title: 'Κάτοψη και ζώνες του ξενώνα',
            subtitle: 'Διαδραστικό διάγραμμα των 3 επιπέδων: 4 υπνοδωμάτια, παραδοσιακή ταβέρνα και κήπος σπα 1.000+ τ.μ.',
            levels: {
              upper: 'Όροφος • 4 Υπνοδωμάτια',
              ground: 'Ισόγειο • Ταβέρνα & Κουζίνα',
              garden: 'Κήπος • Πισίνα & Σπα',
            },
            levelBadges: {
              upper: 'ΟΡΟΦΟΣ ΥΠΝΟΔΩΜΑΤΙΩΝ',
              ground: 'ΙΣΟΓΕΙΟ ΕΠΙΠΕΔΟ',
              garden: 'ΠΕΡΙΦΡΑΓΜΕΝΟΣ ΚΗΠΟΣ & ΣΠΑ',
            },
            levelImageAlts: {
              ground: 'Πέτρινη τοιχοποιία ισογείου και ξύλινη βεράντα του Ξενώνα Abstract με άμεση πρόσβαση στον κήπο',
              upper: 'Όροφος υπνοδωματίων – παραδοσιακό δωμάτιο με τζάκι, υφαντά χαλιά και διπλό κρεβάτι',
              garden: 'Περιφραγμένος ιδιωτικός κήπος άνω των 1.000 τ.μ. με θερμαινόμενη πισίνα και σπα',
            },
              upper: {
                title: 'Όροφος: 4 υπνοδωμάτια και χαγιάτι',
                desc: 'Ήσυχη πτέρυγα ύπνου με 3 μπάνια στον όροφο και θέα σε βουνό ή πισίνα.',
                topStrip: 'Βόρεια πλευρά • Βεράντες με θέα στο βουνό',
                room1: { name: 'Δωμάτιο 1: Με τζάκι', cap: '3–4 άτομα', tags: ['2+2 κρεβάτια', 'Τζάκι', 'Βεράντα'] },
                sharedBath: { name: 'Μπάνιο ορόφου', tag: 'Ντους & τουαλέτα' },
                room2: { name: 'Δωμάτιο 2: Μεγάλο', cap: '3–4 άτομα', tags: ['2+2 κρεβάτια', 'Ευρύχωρο', 'Βεράντα'] },
                corridor: 'Κεντρικός ξύλινος διάδρομος & εσωτερική σκάλα',
                room3: { name: 'Δωμάτιο 3: Πανοραμικό 1', cap: '3–4 άτομα', bathTag: 'Ιδιωτικό μπάνιο', tags: ['2+2 κρεβάτια', 'Θέα πισίνα'] },
                room4: { name: 'Δωμάτιο 4: Πανοραμικό 2', cap: '3–4 άτομα', bathTag: 'Ιδιωτικό μπάνιο', tags: ['2+2 κρεβάτια', 'Έξοδος χαγιάτι'] },
                bottomStrip: 'Ηλιόλουστο χαγιάτι • Θέα στη θερμαινόμενη πισίνα και τον κήπο',
              },
              ground: {
                title: 'Ισόγειο: Ταβέρνα, τζάκι και κουζίνα',
                desc: 'Κοινόχρηστος χώρος γιορτής χωρίς περιορισμό μουσικής και με άμεση έξοδο στον κήπο.',
                topStrip: 'Παραδοσιακή πέτρινη τοιχοποιία • Δροσιά το καλοκαίρι, ζεστασιά τον χειμώνα',
                kitchen: { name: 'Ανοιχτή κουζίνα', badge: 'Πλήρης εξοπλισμός', tags: ['Φούρνος & εστίες', 'Πλυντήριο πιάτων', 'Καφετιέρα', 'Ψυγείο'] },
                mehana: { name: 'Παραδοσιακή ταβέρνα', badge: '14+ θέσεις', tags: ['Τζάκι με δωρεάν ξύλα', 'Ηχείο Bluetooth', 'Smart TV'] },
                bath: { name: 'Μπάνιο ισογείου', tag: 'Για την ταβέρνα' },
                bottomStrip: 'Άμεση έξοδος στο στεγασμένο μπάρμπεκιου και την πισίνα',
              },
                  garden: {
                    title: 'Ζώνη σπα, πισίνα και ιδιωτικός κήπος',
                    desc: 'Πάνω από 1.000 τ.μ. επίπεδου περιφραγμένου κήπου.',
                    topStrip: '100% περιφραγμένη περίμετρος • Ασφαλής για παιδιά και κατοικίδια',
                    zones: [
                      { name: 'Γωνιά Σπα 4 εποχών', badge: '365 ημέρες', tags: ['Ζεστό τζακούζι 5 θέσεων', 'Σάουνα 3 θέσεων'] },
                      { name: 'Θερμαινόμενη πισίνα', badge: 'Απρ – Οκτ', tags: ['Ζεστό νερό', 'Ξαπλώστρες & ομπρέλες'] },
                      { name: 'Στεγασμένο BBQ', badge: '14+ θέσεις', tags: ['Ψησταριά ξύλου + ηλεκτρική', 'Μεγάλο τραπέζι'] },
                      { name: 'Γκαζόν & Στάθμευση', badge: '4 αυτοκίνητα', tags: ['Πράσινη αυλή παιχνιδιού', 'Πάρκινγκ στην πύλη'] },
                    ],
                  },
                  sidebarTitle: 'Στοιχεία ακινήτου',
                  sidebarSpecs: [
                    { label: 'Χωρητικότητα', value: 'Έως 14 άτομα' },
                    { label: 'Υπνοδωμάτια', value: '4 ιδιωτικά' },
                    { label: 'Σύνολο μπάνιων', value: '4 πλήρη μπάνια' },
                    { label: 'Θέρμανση', value: 'Κεντρική πέλλετ' },
                    { label: 'Στάθμευση', value: '4 δωρεάν θέσεις' },
                  ],
                  sidebarCta: 'Φωτογραφίες & λεπτομέρειες δωματίων',
                  ctaTitle: 'Κάντε κράτηση ολόκληρου του σπιτιού',
                  ctaSubtitle: '100% αποκλειστική χρήση όλων των επιπέδων και του σπα.',
                  ctaReserve: 'Κράτηση',
                  ctaRates: 'Τιμές & Όροι',
    },
              en: {
                eyebrow: 'ARCHITECTURAL LAYOUT',
                title: 'Interactive Spatial Blueprint',
                subtitle: 'Visual zone map across all 3 levels: 4 upper bedrooms, ground-floor tavern, and 1,000+ sq.m spa grounds.',
                levels: {
                  upper: 'Upper Floor • 4 Bedrooms',
                  ground: 'Ground • Tavern & Kitchen',
                  garden: 'Garden • Pool & Spa',
                },
                levelBadges: {
                  upper: 'UPPER SLEEPING WING',
                  ground: 'GROUND GATHERING LEVEL',
                  garden: 'ENCLOSED GARDEN & SPA',
                },
                levelImageAlts: {
                  ground: 'Stone ground-floor masonry and timber porch of Abstract Guest House connecting the mehana tavern with the garden',
                  upper: 'Upper sleeping floor at Abstract Guest House – authentic Hearth Room with clay fireplace, woven cherga rugs, and double bed',
                  garden: 'Over 1,000 sq.m enclosed green garden with heated outdoor swimming pool framed beneath timber porch beams',
                },
                  upper: {
                    title: 'Upper Floor: 4 Bedrooms & Veranda',
                    desc: 'Quiet sleeping level with 3 bathrooms upstairs and dual mountain-and-pool orientation.',
                    topStrip: 'North Elevation • Mountain-View Balconies',
                    room1: { name: 'Room 1: Fireplace', cap: '3–4 guests', tags: ['2+2 beds', 'Hearth', 'Balcony'] },
                    sharedBath: { name: 'Floor Bath', tag: 'Rain shower' },
                    room2: { name: 'Room 2: Large', cap: '3–4 guests', tags: ['2+2 beds', 'Spacious', 'Terrace'] },
                    corridor: 'Central Timber Landing & Internal Staircase',
                    room3: { name: 'Room 3: Panoramic 1', cap: '3–4 guests', bathTag: 'En-Suite Bath', tags: ['2+2 beds', 'Pool & garden view'] },
                    room4: { name: 'Room 4: Panoramic 2', cap: '3–4 guests', bathTag: 'En-Suite Bath', tags: ['2+2 beds', 'Veranda access'] },
                    bottomStrip: 'South Glazed Veranda (Chardak) • Overlooking Heated Pool & Lawn',
                  },
                    ground: {
                      title: 'Ground Level: Tavern, Fireplace & Kitchen',
                      desc: 'Communal dining & celebration hub with no indoor music curfew and direct patio doors.',
                      topStrip: 'Thick Revival Stone Masonry • Naturally Cool in Summer, Cozy in Winter',
                      kitchen: { name: 'Open Chef Kitchen', badge: 'Full Appliances', tags: ['Oven & cooktop', 'Dishwasher', 'Coffee maker', 'Full fridge'] },
                      mehana: { name: 'Traditional Mehana', badge: '14+ Dining Seats', tags: ['Fireplace + free wood', 'Bluetooth speaker', 'Smart TV'] },
                      bath: { name: 'Ground Bath', tag: 'Shower & WC' },
                      bottomStrip: 'Direct Double-Door Flow to Covered BBQ Veranda & Pool Lawn',
                    },
                        garden: {
                          title: 'Thermal Spa, Heated Pool & Grounds',
                          desc: 'Over 1,000 sq.m of flat, fully enclosed grounds exclusively for your group.',
                          topStrip: '100% Fenced Perimeter • Safe Off-Leash Haven for Kids & Pets',
                          zones: [
                            { name: 'Year-Round Spa Deck', badge: '365 Days', tags: ['5-seat hot jacuzzi', '3-seat infrared sauna'] },
                            { name: 'Heated Outdoor Pool', badge: 'Apr – Oct', tags: ['Warm crystal water', 'Sunbeds & umbrellas'] },
                            { name: 'Covered BBQ Patio', badge: '14+ Seats', tags: ['Wood + electric grill', 'Shaded timber table'] },
                            { name: 'Green Lawn & Parking', badge: '4 Vehicles', tags: ['Open play lawn', 'Gatefront parking'] },
                          ],
                        },
                        sidebarTitle: 'Quick Specifications',
                        sidebarSpecs: [
                          { label: 'Total Capacity', value: 'Up to 14 guests' },
                          { label: 'Bedrooms', value: '4 private rooms' },
                          { label: 'Bathrooms', value: '4 full bathrooms' },
                          { label: 'Heating', value: 'Pellet central' },
                          { label: 'Parking', value: '4 free spots' },
                        ],
                        sidebarCta: 'View Room Photos & Details',
                        ctaTitle: 'Book the Entire Estate for Your Group',
                        ctaSubtitle: '100% exclusive access across every floor, tavern, and spa zone.',
                        ctaReserve: 'Book Now',
                        ctaRates: 'View Rates',
    },
                  };

                  const t = content[language as keyof typeof content] || content.en;
                  const activeHeader =
                    selectedLevel === 'upper' ? t.upper : selectedLevel === 'ground' ? t.ground : t.garden;

                  return(
                      <div className="min-h-screen bg-[#F5F2ED] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                          {/* Header */}
                            <div className="text-center max-w-2xl mx-auto mb-10">
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

                                {/* Level Switcher */}
                                    <div
                                      role="tablist"
                                      aria-label={t.eyebrow}
                                      className="flex flex-wrap items-center justify-center gap-3 mb-8"
                                    >
                                      {(['upper', 'ground', 'garden'] as const).map((lvl) => (
                                        <button
                                          key={lvl}
                                          id={`floor-tab-${lvl}`}
                                          type="button"
                                          role="tab"
                                          aria-selected={selectedLevel === lvl}
                                          aria-controls={`floor-panel-${lvl}`}
                                          onClick={() => setSelectedLevel(lvl)}
                                                ? 'bg-[#5B7A3A] text-white shadow-lg'
                                                : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200'
                                              }`}
            >
              {lvl === 'upper' && <Bed className="w-4 h-4" aria-hidden="true" />}
              {lvl === 'ground' && <FireplaceIcon className="w-4 h-4" />}
              {lvl === 'garden' && <JacuzziIcon className="w-4 h-4" />}
              <span>{t.levels[lvl]}</span>
            </button>
          ))}
        </div>

        {/* Active Level Blueprint Card */}
        <div
          id={`floor-panel-${selectedLevel}`}
          role="tabpanel"
          aria-labelledby={`floor - tab - ${ selectedLevel }`}
          className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-sm mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left Architectural Schematic */}
            <div className="flex-1 flex flex-col">
              <div className="mb-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B7A3A] mb-1.5">
                  <Layers className="w-4 h-4" aria-hidden="true" />
                  <span>{t.levelBadges[selectedLevel]}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mb-1">
                  {activeHeader.title}
                </h2>
                <p className="text-zinc-600 text-sm">
                  {activeHeader.desc}
                </p>
              </div>

              {/* Blueprint Canvas */}
              <div className="flex-1 rounded-2xl border-2 border-dashed border-[#3D2B1F]/20 bg-[#FAF8F5] p-4 sm:p-5 space-y-3.5">
                {selectedLevel === 'upper' && (
                  <>
                    {/* Top Mountain Balcony Strip */}
                    <div className="rounded-xl bg-white/90 border border-zinc-200 px-3.5 py-2 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-700">
                      <Mountain className="w-4 h-4 text-[#5B7A3A]" aria-hidden="true" />
                      <span>{t.upper.topStrip}</span>
                    </div>

                    {/* North Wing: Room 1 + Floor Bath + Room 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-5 rounded-2xl bg-white border border-zinc-200 p-4 shadow-2xs">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-bold text-sm text-zinc-900">{t.upper.room1.name}</span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A]">
                            {t.upper.room1.cap}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {t.upper.room1.tags.map((tg, i) => (
                            <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-[#F5F2ED] text-zinc-700 font-medium">
                              {tg}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="sm:col-span-2 rounded-2xl bg-[#3D2B1F]/5 border border-[#3D2B1F]/15 p-3 flex flex-col items-center justify-center text-center">
                        <Bath className="w-4 h-4 text-[#5B7A3A] mb-1" aria-hidden="true" />
                        <span className="text-xs font-bold text-zinc-900 leading-tight">{t.upper.sharedBath.name}</span>
                        <span className="text-[10px] text-zinc-500 mt-0.5">{t.upper.sharedBath.tag}</span>
                      </div>

                      <div className="sm:col-span-5 rounded-2xl bg-white border border-zinc-200 p-4 shadow-2xs">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-bold text-sm text-zinc-900">{t.upper.room2.name}</span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A]">
                            {t.upper.room2.cap}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {t.upper.room2.tags.map((tg, i) => (
                            <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-[#F5F2ED] text-zinc-700 font-medium">
                              {tg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Central Timber Corridor */}
                    <div className="py-2 border-y border-dashed border-[#3D2B1F]/20 text-center text-[11px] font-bold uppercase tracking-widest text-[#3D2B1F]/70">
                      {t.upper.corridor}
                    </div>

                    {/* South Wing: Panoramic Room 1 & 2 (Ensuite) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[t.upper.room3, t.upper.room4].map((rm, idx) => (
                        <div key={idx} className="rounded-2xl bg-white border border-[#5B7A3A]/35 p-4 shadow-2xs">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-bold text-sm text-zinc-900">{rm.name}</span>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A]">
                              {rm.cap}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-[#5B7A3A] text-white font-semibold">
                              <Bath className="w-3 h-3" aria-hidden="true" />
                              {rm.bathTag}
                            </span>
                            {rm.tags.map((tg, i) => (
                              <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-[#F5F2ED] text-zinc-700 font-medium">
                                {tg}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* South Glazed Chardak Strip */}
                    <div className="rounded-xl bg-[#5B7A3A]/10 border border-[#5B7A3A]/25 px-3.5 py-2.5 flex items-center justify-center gap-2 text-xs font-semibold text-[#3D2B1F]">
                      <Sun className="w-4 h-4 text-[#5B7A3A]" aria-hidden="true" />
                      <span>{t.upper.bottomStrip}</span>
                    </div>
                  </>
                )}

                {selectedLevel === 'ground' && (
                  <>
                    <div className="rounded-xl bg-white/90 border border-zinc-200 px-3.5 py-2 text-center text-xs font-semibold text-zinc-700">
                      {t.ground.topStrip}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      {/* Kitchen */}
                      <div className="sm:col-span-4 rounded-2xl bg-white border border-zinc-200 p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center">
                              <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-bold text-sm text-zinc-900 leading-tight">{t.ground.kitchen.name}</p>
                              <p className="text-[11px] text-[#5B7A3A] font-semibold">{t.ground.kitchen.badge}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {t.ground.kitchen.tags.map((tg, i) => (
                              <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-[#F5F2ED] text-zinc-700 font-medium">
                                {tg}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Mehana */}
                      <div className="sm:col-span-6 rounded-2xl bg-white border-2 border-[#5B7A3A]/40 p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-9 h-9 rounded-lg bg-[#5B7A3A] text-white flex items-center justify-center">
                                <FireplaceIcon className="w-4 h-4" />
                              </div>
                              <p className="font-bold text-base text-zinc-900">{t.ground.mehana.name}</p>
                            </div>
                            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A]">
                              {t.ground.mehana.badge}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {t.ground.mehana.tags.map((tg, i) => (
                              <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-[#F5F2ED] text-zinc-800 font-medium">
                                {tg}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Ground Bath */}
                      <div className="sm:col-span-2 rounded-2xl bg-[#3D2B1F]/5 border border-[#3D2B1F]/15 p-3 flex flex-col items-center justify-center text-center">
                        <Bath className="w-5 h-5 text-[#5B7A3A] mb-1" aria-hidden="true" />
                        <span className="text-xs font-bold text-zinc-900 leading-tight">{t.ground.bath.name}</span>
                        <span className="text-[10px] text-zinc-500 mt-0.5">{t.ground.bath.tag}</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#5B7A3A]/10 border border-[#5B7A3A]/25 px-4 py-3 flex items-center justify-center gap-2 text-xs font-semibold text-[#3D2B1F]">
                      <ArrowDown className="w-4 h-4 text-[#5B7A3A] flex-shrink-0" aria-hidden="true" />
                      <span>{t.ground.bottomStrip}</span>
                    </div>
                  </>
                )}

                {selectedLevel === 'garden' && (
                  <>
                    <div className="rounded-xl bg-[#5B7A3A]/10 border border-[#5B7A3A]/25 px-3.5 py-2 flex items-center justify-center gap-2 text-xs font-semibold text-[#3D2B1F]">
                      <ShieldCheck className="w-4 h-4 text-[#5B7A3A] flex-shrink-0" aria-hidden="true" />
                      <span>{t.garden.topStrip}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {t.garden.zones.map((zn, idx) => (
                        <div key={idx} className="rounded-2xl bg-white border border-zinc-200 p-4 shadow-2xs">
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center">
                                {idx === 0 && <JacuzziIcon className="w-4 h-4" />}
                                {idx === 1 && <PoolIcon className="w-4 h-4" />}
                                {idx === 2 && <BbqIcon className="w-4 h-4" />}
                                {idx === 3 && (
                                  <div className="flex items-center">
                                    <Trees className="w-3.5 h-3.5" aria-hidden="true" />
                                  </div>
                                )}
                              </div>
                              <span className="font-bold text-sm text-zinc-900">{zn.name}</span>
                            </div>
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A]">
                              {zn.badge}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {zn.tags.map((tg, tIdx) => (
                              <span
                                key={tIdx}
                                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#F5F2ED] text-zinc-700 font-medium"
                              >
                                {idx === 0 && tIdx === 1 && <SaunaIcon className="w-3 h-3 text-[#5B7A3A]" />}
                                {idx === 3 && tIdx === 1 && <Car className="w-3 h-3 text-[#5B7A3A]" aria-hidden="true" />}
                                {tg}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Visual Floor Highlight Card */}
            <div className="w-full lg:w-88 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 p-5 flex flex-col justify-between">
              <div>
                <div className="relative h-52 w-full rounded-xl overflow-hidden mb-5 border border-zinc-200/60">
                  <Image
                    src={
                      selectedLevel === 'ground'
                        ? '/Images/House/house-facade-veranda-stone-wall.jpg'
                        : selectedLevel === 'upper'
                        ? '/Images/House/hearth-room-wide.jpg'
                        : '/Images/House/courtyard-pool-from-porch.jpg'
                    }
                    alt={t.levelImageAlts[selectedLevel]}
                    fill
                    className="object-cover transition-all duration-500"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>
                <h3 className="font-bold text-zinc-900 mb-2 flex items-center gap-2 text-sm">
                  <Maximize2 className="w-4 h-4 text-[#5B7A3A]" aria-hidden="true" />
                  <span>{t.sidebarTitle}</span>
                </h3>
                <ul className="text-xs sm:text-sm space-y-2.5 text-zinc-600 py-2">
                  {t.sidebarSpecs.map((spec, sIdx) => (
                    <li
                      key={sIdx}
                      className={`flex items - center justify - between ${
                                        sIdx<t.sidebarSpecs.length - 1 ? 'pb-2 border-b border-zinc-200' : ''
                                      }`}
                    >
                      <span>{spec.label}</span>
                      <span className="font-semibold text-zinc-900">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-200">
                <Link
                  href="/house/details"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
                >
                  <span>{t.sidebarCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
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
              href="/house/rates"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
            >
              {t.ctaRates}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
