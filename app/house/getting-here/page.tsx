'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import {
    Car,
    MapPin,
    ShieldCheck,
    ShoppingBag,
    ExternalLink,
    Compass,
    Navigation,
  } from 'lucide-react';

export default function HouseGettingHerePage() {
  const { language } = useLanguage();

  const content = {
    bg: {
      eyebrow: 'УПЪТВАНЕ И ЛОКАЦИЯ',
      title: 'Как да стигнете до с. Голец',
      subtitle: 'Спокойно предбалканско село в Област Ловеч с асфалтов достъп през всички сезони.',
      routesTitle: 'Време с автомобил',
      routes: [
        {
          city: 'От София',
          time: '1 ч. 40 мин',
          dist: '130 км',
          route: 'АМ „Хемус“ → Ябланица / Ловеч → с. Голец',
          badge: 'Магистрален маршрут',
        },
        {
          city: 'От Ловеч и Троян',
          time: '23 мин',
          dist: '25 км',
          route: 'Директен поддържан междуселищен път',
          badge: 'Близки градове',
        },
        {
          city: 'От Пловдив',
          time: '2 ч. 30 мин',
          dist: '160 км',
          route: 'През Троянския проход или АМ „Тракия“',
          badge: 'Панорамен маршрут',
        },
      ],
      accessTitle: 'Път и зимен достъп',
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
      eyebrow: 'ΟΔΗΓΙΕΣ & ΤΟΠΟΘΕΣΙΑ',
      title: 'Πώς να φτάσετε στο Γκόλετς',
      subtitle: 'Ήσυχο χωριό στην Επαρχία Λόβετς με άμεση πρόσβαση από άσφαλτο όλο τον χρόνο.',
      routesTitle: 'Χρόνος οδήγησης',
      routes: [
        {
          city: 'Από Σόφια',
          time: '1 ώρα 40λ',
          dist: '130 χλμ',
          route: 'Αυτοκινητόδρομος Χέμους → Λόβετς → Γκόλετς',
          badge: 'Γρηγορότερη διαδρομή',
        },
        {
          city: 'Από Λόβετς & Τρογιάν',
          time: '23 λεπτά',
          dist: '25 χλμ',
          route: 'Άμεσος ασφαλτοστρωμένος επαρχιακός δρόμος',
          badge: 'Κοντινές πόλεις',
        },
        {
          city: 'Από Φιλιππούπολη',
          time: '2 ώρες 30λ',
          dist: '160 χλμ',
          route: 'Μέσω Κάρλοβο & περάσματος Τρογιάν',
          badge: 'Γραφική διαδρομή',
        },
      ],
      accessTitle: 'Δρόμος & χειμερινή πρόσβαση',
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
      eyebrow: 'DIRECTIONS & LOCATION',
      title: 'Getting to Golets Village',
      subtitle: 'Peaceful Pre-Balkan village in Lovech Province with 100% paved road access all year.',
      routesTitle: 'Drive Times from Major Hubs',
      routes: [
        {
          city: 'From Sofia',
          time: '1h 40m',
          dist: '130 km',
          route: 'A2 Hemus Motorway → Yablanitsa / Lovech → Golets',
          badge: 'Fastest Highway Route',
        },
        {
          city: 'From Lovech & Troyan',
          time: '23 min',
          dist: '25 km',
          route: 'Direct well-maintained regional asphalt road',
          badge: 'Nearby Towns',
        },
        {
          city: 'From Plovdiv',
          time: '2h 30m',
          dist: '160 km',
          route: 'Via Troyan Pass (summer) or A1 motorway',
          badge: 'Scenic Mountain Route',
        },
      ],
      accessTitle: 'Road Quality & Winter Access',
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
  const accessIcons = [Compass, ShieldCheck, ShoppingBag, Car];

  return (
      <div className="min-h-screen bg-[#F5F2ED] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
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

                    {/* Driving Route Big-Number Cards */}
                    <div className="mb-12">
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 text-center mb-7">
                        {t.routesTitle}
                      </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          {t.routes.map((rt, idx) => (
                              <div
                                key={idx}
                                className="bg-white rounded-3xl border border-zinc-200 p-7 shadow-sm flex flex-col justify-between hover:border-[#5B7A3A]/40 transition-colors"
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-4">
                                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#5B7A3A]/10 text-[#5B7A3A]">
                                        {rt.badge}
                                      </span>
                                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700">
                                        {rt.dist}
                                      </span>
                                  </div>

                                    <p className="text-3xl sm:text-4xl font-serif font-extrabold text-[#3D2B1F] mb-1">
                                      {rt.time}
                                    </p>
                                    <h3 className="text-lg font-bold text-zinc-900 mb-3">{rt.city}</h3>

                                    <p className="inline-flex items-center gap-1.5 text-xs text-zinc-600 bg-[#F9F7F7] border border-zinc-100 px-3 py-1.5 rounded-xl font-medium">
                                      <Navigation className="w-3.5 h-3.5 text-[#5B7A3A] flex-shrink-0" aria-hidden="true" />
                                      <span>{rt.route}</span>
                                    </p>
                                </div>
                              </div>
            ))}
                            </div>
        </div>

                            {/* Road Quality & Winter Access - 4 Big-Metric Tiles */}
                            <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-sm mb-12">
                              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mb-7 text-center">
                                {t.accessTitle}
                              </h2>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                          {t.accessItems.map((item, idx) => {
                                            const Icon = accessIcons[idx] || Car;
                                            return (
                                              <div
                                                key={idx}
                                                className="p-5 rounded-2xl bg-[#F9F7F7] border border-zinc-100 text-center flex flex-col items-center"
                                              >
                                                <div
                                                  className="w-10 h-10 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center mb-2.5"
                                                  aria-hidden="true"
                                                >
                                                  <Icon className="w-5 h-5" />
                                                </div>
                                                <p className="text-2xl sm:text-3xl font-serif font-extrabold text-[#3D2B1F] mb-1">
                                                  {item.metric}
                                                </p>
                                                <h3 className="font-bold text-zinc-900 text-sm mb-0.5">{item.title}</h3>
                                                <p className="text-xs text-zinc-500">{item.desc}</p>
                                              </div>
                                        );
            })}
                                      </div>
                                    </div>

                                    {/* Location & Map Section */}
                                      <div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm mb-12">
                                        <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100">
                                          <div>
                                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B7A3A] mb-1">
                                              <MapPin className="w-4 h-4" aria-hidden="true" />
                                              <span>{t.pinTitle}</span>
                                            </div>
                                            <p className="text-base font-semibold text-zinc-900">{t.address}</p>
                                            <p className="text-xs text-zinc-500 mt-0.5">{t.pinSubtitle}</p>
                                          </div>
                                          <a
                                            href="https://maps.app.goo.gl/2p3M23H97QCURvqN7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5B7A3A] text-white text-xs font-bold hover:bg-[#4d6831] transition-colors whitespace-nowrap self-start sm:self-auto shadow-md"
                                          >
                                            <span>{t.mapsBtn}</span>
                                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
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
                                      </div>

                                      {/* Bottom CTA */}
                                          <div className="bg-[#5B7A3A] rounded-3xl p-8 sm:p-10 text-center text-white shadow-xl">
                                            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-6">
                                              {t.ctaTitle}
                                            </h2>
                                              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                                <Link
                                                  href="/house/reserve"
                                                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#5B7A3A] font-bold text-sm hover:bg-zinc-100 transition-colors shadow-md"
                                                >
                                                  {t.ctaReserve}
                                                </Link>
                                                <Link
                                                  href="/house/guide"
                                                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                                                >
                                                  {t.ctaGuide}
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                      );
}
