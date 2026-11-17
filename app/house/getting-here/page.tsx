'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import {
  MapPin,
  ExternalLink,
  Navigation,
  Compass,
  ShieldCheck,
  Store,
  Car,
} from 'lucide-react';

export default function HouseGettingHerePage() {
  const { language } = useLanguage();

  const content = {
    bg: {
      eyebrow: 'Упътване и локация',
      title: 'Как да стигнете до с. Голец',
      subtitle: 'Спокойно предбалканско село в Област Ловеч с целогодишен асфалтов достъп за всеки автомобил.',
      routesTitle: 'Колко време отнема с автомобил? Основни маршрути',
      routes: [
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
          route: 'Директен поддържан междуселищен път',
        },
        {
          city: 'От Пловдив',
          time: '2 ч. 30 мин',
          dist: '160 км',
          route: 'През Троянския проход или АМ „Тракия“',
        },
      ],
      accessTitle: 'Какъв е пътят и достъпът през зимата?',
      accessItems: [
        {
          metric: '100%',
          title: 'Асфалт до портата',
          desc: 'Без черни пътища и чакъл.',
        },
        {
          metric: 'Без 4x4',
          title: 'Почистен през зимата',
          desc: 'Достъпно с обикновен лек автомобил.',
        },
        {
          metric: '2 мин',
          title: 'Селски магазин пеша',
          desc: 'Хранителни стоки в центъра на селото.',
        },
        {
          metric: '4 места',
          title: 'Безплатен паркинг',
          desc: 'Обособени места точно пред входа.',
        },
      ],
      pinTitle: 'Точна локация за навигация',
      pinSubtitle: 'Отворете пина директно в Google Maps за навигация завой по завой.',
      address: 'с. Голец, ул. Васил Левски, Община Угърчин, Област Ловеч',
      mapsBtn: 'Навигирай с Google Maps',
      mapIframeTitle: 'Карта на Къща за гости „Абстракт“ в с. Голец, област Ловеч',
      mapLang: 'bg',
      ctaTitle: 'Готови ли сте за път към Балкана?',
      ctaReserve: 'Резервирай къщата',
      ctaGuide: 'Забележителности наоколо',
    },
    el: {
      eyebrow: 'Οδηγίες & Τοποθεσία',
      title: 'Πώς να φτάσετε στο Γκόλετς',
      subtitle: 'Ήσυχο χωριό στην Επαρχία Λόβετς με άμεση πρόσβαση από άσφαλτο όλο τον χρόνο για κάθε τύπο αυτοκινήτου.',
      routesTitle: 'Πόση ώρα διαρκεί η διαδρομή με αυτοκίνητο; Κύριες διαδρομές',
      routes: [
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
          route: 'Μέσω Κάρλοβο & περάσματος Τρογιάν',
        },
      ],
      accessTitle: 'Ποια είναι η κατάσταση του δρόμου και η πρόσβαση τον χειμώνα;',
      accessItems: [
        {
          metric: '100%',
          title: 'Άσφαλτος στην πύλη',
          desc: 'Χωρίς χωματόδρομο.',
        },
        {
          metric: 'Χωρίς 4x4',
          title: 'Καθαρός τον χειμώνα',
          desc: 'Άνετη πρόσβαση με απλό αυτοκίνητο.',
        },
        {
          metric: '2 λεπτά',
          title: 'Παντοπωλείο με τα πόδια',
          desc: 'Κατάστημα τροφίμων στο χωριό.',
        },
        {
          metric: '4 θέσεις',
          title: 'Δωρεάν στάθμευση',
          desc: 'Ακριβώς μπροστά στην είσοδο.',
        },
      ],
      pinTitle: 'Ακριβές στίγμα πλοήγησης',
      pinSubtitle: 'Ανοίξτε απευθείας στο Google Maps για οδηγίες διαδρομής.',
      address: 'Χωριό Γκόλετς, Οδός Βασίλ Λέφσκι, Δήμος Ουγκάρτσιν, Επαρχία Λόβετς',
      mapsBtn: 'Άνοιγμα στο Google Maps',
      mapIframeTitle: 'Χάρτης του Ξενώνα Abstract στο χωριό Γκόλετς, Επαρχία Λόβετς',
      mapLang: 'el',
      ctaTitle: 'Έτοιμοι για απόδραση στη φύση;',
      ctaReserve: 'Κράτηση',
      ctaGuide: 'Αξιοθέατα περιοχής',
    },
    en: {
      eyebrow: 'Directions & Location',
      title: 'Getting to Golets Village',
      subtitle: 'Peaceful Pre-Balkan village in Lovech Province with 100% paved road access for any vehicle all year round.',
      routesTitle: 'How Long Does the Drive Take? Driving Times from Major Hubs',
      routes: [
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
          route: 'Via Troyan Pass (summer) or A1 motorway',
        },
      ],
      accessTitle: 'What is the Road Quality and Winter Access Like?',
      accessItems: [
        {
          metric: '100%',
          title: 'Paved to the Gate',
          desc: 'Zero gravel or unpaved stretches.',
        },
        {
          metric: 'No 4x4',
          title: 'Plowed in Winter',
          desc: 'Easy year-round access for standard cars.',
        },
        {
          metric: '2 min',
          title: 'Village Grocery Walk',
          desc: 'Fresh essentials in the village center.',
        },
        {
          metric: '4 Spots',
          title: 'Free Gate Parking',
          desc: 'Private spaces right outside the door.',
        },
      ],
      pinTitle: 'Exact Navigation Pin',
      pinSubtitle: 'Launch Google Maps for direct turn-by-turn navigation to the front gate.',
      address: 'Golets village, ul. Vasil Levski, Ugarchin Municipality, Lovech Province, Bulgaria',
      mapsBtn: 'Navigate with Google Maps',
      mapIframeTitle: 'Google Map of Guest House Abstract in Golets, Lovech Province, Bulgaria',
      mapLang: 'en',
      ctaTitle: 'Ready for Your Balkan Countryside Escape?',
      ctaReserve: 'Book The House',
      ctaGuide: 'Explore Local Landmarks',
    },
  };

  const t = content[language as keyof typeof content] || content.en;
  const accessIcons = [Compass, ShieldCheck, Store, Car];

  return (
    <main className="min-h-screen bg-[#F5F2ED] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header: Editorial, un-pill eyebrow, high-contrast typography */}
        <header className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5B7A3A] mb-3">
            {t.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-4">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed text-pretty">
            {t.subtitle}
          </p>
        </header>

        {/* Driving Route Section */}
        <section className="mb-20 sm:mb-24" aria-label={t.routesTitle}>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 text-center text-balance mb-10 sm:mb-12">
            {t.routesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.routes.map((rt, idx) => (
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
        </section>

        {/* Road Quality & Winter Access */}
        <section className="mb-20 sm:mb-24" aria-label={t.accessTitle}>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mb-10 sm:mb-12 text-center text-balance">
            {t.accessTitle}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-8">
            {t.accessItems.map((item, idx) => {
              const Icon = accessIcons[idx] || Compass;

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-2"
                >
                  {/* Clean Icon with brand accent & optical alignment */}
                  <div className="text-[#5B7A3A] mb-3">
                    <Icon className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />
                  </div>

                  {/* Metric */}
                  <p className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight tabular-nums">
                    {item.metric}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-sm sm:text-base font-bold text-zinc-900 tracking-tight text-balance">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed text-pretty max-w-[210px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="rounded-2xl border border-zinc-300/80 bg-white/70 overflow-hidden backdrop-blur-xs mb-14 sm:mb-16" aria-label={t.pinTitle}>
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-zinc-200/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B7A3A] mb-1">
                <MapPin className="w-4 h-4 translate-y-[-0.5px]" aria-hidden="true" />
                <span>{t.pinTitle}</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight text-balance">
                {t.address}
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 text-pretty">
                {t.pinSubtitle}
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/2p3M23H97QCURvqN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5B7A3A] text-white text-xs sm:text-sm font-semibold hover:bg-[#4d6831] active:scale-[0.98] transition-all whitespace-nowrap self-start sm:self-auto"
            >
              <span>{t.mapsBtn}</span>
              <ExternalLink className="w-4 h-4 translate-y-[-0.5px]" aria-hidden="true" />
            </a>
          </div>
          <div className="w-full h-80 sm:h-96 relative">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46797.77660232497!2d24.5200!3d43.0800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a976f62bbfdd49%3A0xa00a014cd0ea340!2zNTAyNSDQk9C-0LvQtdGG!5e0!3m2!1s${t.mapLang}!2sbg!4v1700000000000!5m2!1s${t.mapLang}!2sbg`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.mapIframeTitle}
            />
          </div>
        </section>

        {/* Bottom CTA: High contrast, distinct primary CTA vs ghost action */}
        <section className="bg-[#5B7A3A] rounded-2xl p-8 sm:p-12 text-center text-white" aria-label={t.ctaTitle}>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-balance mb-6">
            {t.ctaTitle}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/house/reserve"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#5B7A3A] font-bold text-sm hover:bg-zinc-100 active:scale-[0.98] transition-all"
            >
              {t.ctaReserve}
            </Link>
            <Link
              href="/house/guide"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/40 text-white font-medium text-sm hover:bg-white/10 active:scale-[0.98] transition-all"
            >
              {t.ctaGuide}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}