'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import {
  FireplaceIcon,
} from '@/app/house/components/HouseAmenityIcons';
import {
  Heart,
  Trees,
  Phone,
  MapPin,
  ArrowRight,
  PhoneCall,
} from 'lucide-react';

export default function HouseAboutPage() {
  const { language } = useLanguage();

  const content = {
    bg: {
      eyebrow: 'ЗА НАС • ИСТОРИЯТА НА КЪЩАТА',
      title: 'Където модерното среща традицията',
      subtitle: 'Уютно възрожденско имение в с. Голец, създадено за пълно уединение със семейство и приятели.',
      storyBadge: 'НАШАТА ФИЛОСОФИЯ',
      pullQuote: '„Истинската почивка започва там, където цялата къща, огнището и градината са само за вас.“',
      storyPoints: [
        {
          title: 'В сърцето на Предбалкана',
          desc: 'На 1 ч. 40 мин от София и на 23 мин от Ловеч и Троян сред тишина и чист въздух.',
        },
        {
          title: 'Възрожденски дух + 365-дневен СПА',
          desc: 'Каменна механа с безплатни дърва, сауна, басейн и горещо зимно джакузи.',
        },
        {
          title: 'Сигурен двор за деца и любимци',
          desc: 'Над 1000 кв.м оградена зелена морава без никаква такса за домашни любимци.',
        },
      ],
      imageAlts: {
        facade: 'Двуетажна възрожденска фасада на Къща за гости Абстракт в с. Голец с каменна зидария, дървен чардак и градинска алея',
        folk: 'Българска народна носия в автентичната стая с глинено огнище, бакъри и тъкани черги',
        dusk: 'Вечерен изглед към оградения зелен двор, осветения каменен зид и отопляемия басейн по здрач',
      },
      valuesTitle: 'Какво прави престоя специален? Нашите четири стълба',
      values: [
        {
          stat: '100% за вас',
          title: 'Самостоятелен имот',
          desc: 'Цялата къща за вашата компания до 14 гости.',
        },
        {
          stat: '365 дни',
          title: 'Целогодишен СПА',
          desc: 'Зимно джакузи, сауна и сезонен отопляем басейн.',
        },
        {
          stat: '14+ места',
          title: 'Механа с огнище',
          desc: 'Безплатни дърва и барбекю под голям навес.',
        },
        {
          stat: '0 € такса',
          title: 'Домашни любимци',
          desc: 'Свободна игра в изцяло оградения двор.',
        },
      ],
      hostsTitle: 'Кои са вашите домакини?',
      hostsDesc: 'Кристина и Камелия Иванови – винаги насреща за безгрижния ви престой.',
      kristinaInitials: 'КИ',
      kristinaName: 'Кристина Иванова',
      kristinaRole: 'Ко-домакин и резервации',
      kristinaPhoneLabel: '+359 878 112 454 (Viber)',
      kameliyaInitials: 'КИ',
      kameliyaName: 'Камелия Иванова',
      kameliyaRole: 'Ко-домакин и посрещане',
      kameliyaPhoneLabel: '+359 889 226 794',
      ctaTitle: 'Заповядайте в Къща за гости „Абстракт“',
      ctaSubtitle: 'Топъл огън, чист балкански въздух и пълно спокойствие.',
      ctaReserve: 'Резервирай цялата къща',
      ctaContact: 'Свържи се с нас',
    },
    el: {
      eyebrow: 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ',
      title: 'Εκεί όπου το μοντέρνο συναντά την παράδοση',
      subtitle: 'Παραδοσιακό αρχοντικό στο Γκόλετς σχεδιασμένο για απόλυτη ιδιωτικότητα με φίλους και οικογένεια.',
      storyBadge: 'Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ',
      pullQuote: '«Η αληθινή ξεκούραση ξεκινά εκεί όπου ολόκληρο το σπίτι, το τζάκι και ο κήπος ανήκουν αποκλειστικά σε εσάς.»',
      storyPoints: [
        {
          title: 'Στην καρδιά της φύσης',
          desc: 'Μόλις 1 ώρα 40λ από τη Σόφια και 23 λεπτά από το Λόβετς και το Τρογιάν.',
        },
        {
          title: 'Παράδοση & Σπα 365 ημερών',
          desc: 'Πέτρινη ταβέρνα με δωρεάν ξύλα, σάουνα, πισίνα και χειμερινό τζακούζι.',
        },
        {
          title: 'Ασφαλής κήπος για παιδιά & κατοικίδια',
          desc: 'Πάνω από 1.000 τ.μ. περιφραγμένου κήπου χωρίς καμία χρέωση για κατοικίδια.',
        },
      ],
      imageAlts: {
        facade: 'Παραδοσιακή διώροφη πρόσοψη του Ξενώνα Abstract στο Γκόλετς με πέτρινη τοιχοποιία και ξύλινη βεράντα',
        folk: 'Παραδοσιακή βουλγαρική φορεσιά στο αυθεντικό δωμάτιο με το πέτρινο τζάκι και τα υφαντά χαλιά',
        dusk: 'Βραδινή όψη του περιφραγμένου κήπου και της θερμαινόμενης πισίνας με ζεστό φωτισμό',
      },
      valuesTitle: 'Τι κάνει τη διαμονή ξεχωριστή; Οι τέσσερις πυλώνες μας',
      values: [
        {
          stat: '100% δικό σας',
          title: 'Αποκλειστική χρήση',
          desc: 'Ολόκληρο το κτήμα για έως 14 άτομα.',
        },
        {
          stat: '365 ημέρες',
          title: 'Σπα 4 εποχών',
          desc: 'Ζεστό τζακούζι, σάουνα και θερμαινόμενη πισίνα.',
        },
        {
          stat: '14+ θέσεις',
          title: 'Ταβέρνα με τζάκι',
          desc: 'Δωρεάν καυσόξυλα και στεγασμένο BBQ.',
        },
        {
          stat: '0 € χρέωση',
          title: 'Κατοικίδια δωρεάν',
          desc: 'Ελεύθερο παιχνίδι στον ασφαλή κήπο.',
        },
      ],
      hostsTitle: 'Ποιοι είναι οι οικοδεσπότες σας;',
      hostsDesc: 'Η Κριστίνα και η Καμέλια είναι πάντα στη διάθεσή σας.',
      kristinaInitials: 'ΚΙ',
      kristinaName: 'Κριστίνα Ιβάνοβα',
      kristinaRole: 'Κρατήσεις',
      kristinaPhoneLabel: '+359 878 112 454 (Viber)',
      kameliyaInitials: 'ΚΙ',
      kameliyaName: 'Καμέλια Ιβάνοβα',
      kameliyaRole: 'Φιλοξενία',
      kameliyaPhoneLabel: '+359 889 226 794',
      ctaTitle: 'Σας περιμένουμε στον Ξενώνα Abstract',
      ctaSubtitle: 'Ζεστή εστία, καθαρός αέρας βουνού και απόλυτη ηρεμία.',
      ctaReserve: 'Κράτηση',
      ctaContact: 'Επικοινωνία',
    },
    en: {
      eyebrow: 'ABOUT US • OUR STORY',
      title: 'Where Modern Meets Tradition',
      subtitle: 'A private Bulgarian Revival estate in Golets built for unhurried gatherings with family and friends.',
      storyBadge: 'OUR PHILOSOPHY',
      pullQuote: '“True rest begins when the entire house, hearth, and garden belong exclusively to the people you love.”',
      storyPoints: [
        {
          title: 'In the Pre-Balkan Foothills',
          desc: '1h 40m from Sofia and 23 min from Lovech & Troyan amid crisp mountain quiet.',
        },
        {
          title: 'Revival Craft + 365-Day Spa',
          desc: 'Stone mehana with free firewood, infrared sauna, heated pool, and winter hot tub.',
        },
        {
          title: 'Child & Pet-Safe Grounds',
          desc: '1,000+ sq.m of fully fenced green lawn where dogs stay completely free.',
        },
      ],
      imageAlts: {
        facade: 'Two-story Bulgarian Revival facade of Abstract Guest House in Golets with hand-stacked stone masonry, timber veranda, and garden walkway',
        folk: 'Traditional Bulgarian folkloric heritage portrait inside the Hearth Room beside the open clay fireplace and woven cherga rugs',
        dusk: 'Twilight view of the enclosed private garden, glowing porch lantern, and heated outdoor pool at Abstract Guest House',
      },
      valuesTitle: 'What Makes Your Stay Special? Our Four Pillars',
      values: [
        {
          stat: '100% Private',
          title: 'Whole-House Only',
          desc: 'Dedicated solely to your group of up to 14.',
        },
        {
          stat: '365 Days',
          title: 'Four-Season Spa',
          desc: 'Winter hot jacuzzi, sauna, and heated pool.',
        },
        {
          stat: '14+ Seats',
          title: 'Fireside Mehana',
          desc: 'Unlimited free firewood and covered BBQ.',
        },
        {
          stat: '0 € Fee',
          title: 'Free Pet Haven',
          desc: 'Off-leash freedom across fenced lawns.',
        },
      ],
      hostsTitle: 'Who Are Your Hosts?',
      hostsDesc: 'Kristina and Kameliya Ivanova — personally dedicated to an effortless stay.',
      kristinaInitials: 'KI',
      kristinaName: 'Kristina Ivanova',
      kristinaRole: 'Co-Host & Reservations',
      kristinaPhoneLabel: '+359 878 112 454 (Viber)',
      kameliyaInitials: 'KI',
      kameliyaName: 'Kameliya Ivanova',
      kameliyaRole: 'Co-Host & Guest Hospitality',
      kameliyaPhoneLabel: '+359 889 226 794',
      ctaTitle: 'Join Us at Abstract Guest House',
      ctaSubtitle: 'Crackling fires, pure mountain air, and restorative spa evenings await.',
      ctaReserve: 'Book The Entire House',
      ctaContact: 'Contact Us',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <main className="min-h-screen bg-[#F5F2ED] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5B7A3A] mb-3">
            {t.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-3">
            {t.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-xl mx-auto text-pretty">
            {t.subtitle}
          </p>
        </header>

        {/* Visual Editorial Story Section */}
        <section className="bg-white/80 backdrop-blur-xs rounded-2xl border border-zinc-300/80 p-6 sm:p-10 shadow-xs mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Left Pull-Quote + 3 Visual Story Rows */}
                      <div className="lg:col-span-7 space-y-6">
                        <p className="text-xs font-bold tracking-widest uppercase text-[#5B7A3A]">
                          {t.storyBadge}
                        </p>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#3D2B1F] leading-snug border-l-4 border-[#5B7A3A] pl-4 text-balance">
                          {t.pullQuote}
                        </h2>

                      <div className="space-y-3.5 pt-1">
                        {t.storyPoints.map((pt, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200/80 bg-white/70"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center shrink-0">
                              {idx === 0 && <MapPin className="w-5 h-5" aria-hidden="true" />}
                              {idx === 1 && <FireplaceIcon className="w-5 h-5" />}
                              {idx === 2 && <Trees className="w-5 h-5" aria-hidden="true" />}
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base font-bold text-zinc-900 text-balance">{pt.title}</h3>
                              <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 text-pretty">{pt.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                {/* Right 3-Photo Mosaic */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="col-span-2 relative h-60 sm:h-68 rounded-xl overflow-hidden border border-zinc-300/80 shadow-xs">
                    <Image
                      src="/Images/House/house-facade-veranda-stone-wall.jpg"
                      alt={t.imageAlts.facade}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  </div>
                  <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden border border-zinc-300/80 shadow-xs">
                    <Image
                      src="/Images/House/hearth-room-folk-costume.jpg"
                      alt={t.imageAlts.folk}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                    />
                  </div>
                  <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden border border-zinc-300/80 shadow-xs">
                    <Image
                      src="/Images/House/courtyard-pool-dusk-lantern.jpg"
                      alt={t.imageAlts.dusk}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Core Values - 4 Minimal Borderless Stats */}
            <div className="mb-14 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 text-center text-balance mb-10">
                  {t.valuesTitle}
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-8">
                  {t.values.map((val, idx) => (
                    <div
                      key={idx}
                      className="text-center flex flex-col items-center"
                    >
                      <div
                        className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#5B7A3A] leading-none tabular-nums"
                        style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
                      >
                        {val.stat}
                      </div>
                        <div className="mt-3 text-sm sm:text-base font-bold text-zinc-900 tracking-tight text-balance">
                          {val.title}
                        </div>
                          <div className="mt-1.5 text-xs text-zinc-600 leading-snug max-w-[230px] text-pretty">
                            {val.desc}
                          </div>
                        </div>
            ))}
                      </div>
                    </div>

        {/* Hosts Section */ }
                    < div className = "bg-white/80 backdrop-blur-xs rounded-2xl border border-zinc-300/80 p-8 sm:p-10 shadow-xs mb-12 text-center" >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 text-balance mb-1.5">
            {t.hostsTitle}
          </h2>
          <p className="text-zinc-600 text-sm max-w-lg mx-auto mb-8 text-pretty">
            {t.hostsDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Kristina */}
            <div className="p-6 rounded-xl border border-zinc-200/80 bg-white/70 flex flex-col items-center">
              <div
                className="w-14 h-14 rounded-full bg-[#5B7A3A] text-white flex items-center justify-center text-lg font-bold mb-3 shadow-xs"
                aria-hidden="true"
              >
                {t.kristinaInitials}
              </div>
              <h3 className="text-base font-bold text-zinc-900 text-balance">{t.kristinaName}</h3>
              <p className="text-xs text-[#5B7A3A] font-semibold uppercase tracking-wider mb-3">
                {t.kristinaRole}
              </p>
              <a
                href="tel:+359878112454"
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 hover:text-[#5B7A3A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.kristinaPhoneLabel}</span>
              </a>
            </div>

            {/* Kameliya */ }
                    < div className = "p-6 rounded-xl border border-zinc-200/80 bg-white/70 flex flex-col items-center" >
              <div
                className="w-14 h-14 rounded-full bg-[#5B7A3A] text-white flex items-center justify-center text-lg font-bold mb-3 shadow-xs"
                aria-hidden="true"
              >
                {t.kameliyaInitials}
              </div>
              <h3 className="text-base font-bold text-zinc-900 text-balance">{t.kameliyaName}</h3>
              <p className="text-xs text-[#5B7A3A] font-semibold uppercase tracking-wider mb-3">
                {t.kameliyaRole}
              </p>
              <a
                href="tel:+359889226794"
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 hover:text-[#5B7A3A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.kameliyaPhoneLabel}</span>
              </a>
            </div>
            </div>
          </div>

      {/* Atmospheric Bottom CTA Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-zinc-900/10 shadow-xs max-w-4xl mx-auto">
        <div className="absolute inset-0">
          <Image
            src="/Images/House/courtyard-pool-dusk-wide.jpg"
            alt={t.ctaTitle}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60"
          aria-hidden="true"
        />
        <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-14 text-center max-w-2xl mx-auto text-white">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 text-balance drop-shadow-xs">
            {t.ctaTitle}
          </h2>
          <p className="text-white/85 text-sm sm:text-base max-w-lg mx-auto mb-6 text-pretty drop-shadow-xs">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/house/reserve"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#5B7A3A] text-white font-semibold text-sm hover:bg-[#4d6831] active:scale-[0.98] transition-all shadow-xs"
            >
              <span>{t.ctaReserve}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/house/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/30 bg-white/10 backdrop-blur-xs text-white font-semibold text-sm hover:bg-white/20 active:scale-[0.98] transition-all"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>{t.ctaContact}</span>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
