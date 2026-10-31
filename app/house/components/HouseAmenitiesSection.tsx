'use client';

import Image from 'next/image';
import { useTranslations, useLanguage } from '@/app/lib/translations';
import {
  Wifi,
  Car,
  UtensilsCrossed,
  Wind,
  Tv,
  TreePine,
  ThermometerSun,
  Dog,
  Volume2,
  Droplet,
} from 'lucide-react';
import {
  JacuzziIcon,
  SaunaIcon,
  PoolIcon,
  BbqIcon,
  FireplaceIcon,
} from './HouseAmenityIcons';
import { motion } from 'framer-motion';

export function HouseAmenitiesSection() {
  const t = useTranslations();
  const { language } = useLanguage();
  const h = t.house;

  const ui =
    language === 'bg'
        ? {
          eyebrow: 'ЦЕЛОГОДИШЕН СПА И ДОМАШЕН КОМФОРТ',
          bento: [
            {
              src: '/Images/House/pool-turquoise-water-closeup.jpg',
              badge: 'Април – Октомври',
              title: 'Отопляем открит басейн',
              subtitle: 'Кристална вода, шезлонги и гранитна тераса',
              alt: 'Отопляем открит басейн с тюркоазена кристална вода и гранитни стъпала в двора на Къща за гости Абстракт',
              icon: PoolIcon,
              span: 'md:col-span-7',
            },
            {
              src: '/Images/House/courtyard-pool-dusk-lantern.jpg',
              badge: '365 дни • Дори в снега',
              title: '5-местно горещо джакузи и сауна',
              subtitle: 'Външно зимно джакузи + 3-местна инфрачервена сауна',
              alt: 'Вечерен изглед към оградения двор, осветения каменен зид и СПА зоната на Къща за гости Абстракт',
              icon: JacuzziIcon,
              span: 'md:col-span-5',
            },
            {
              src: '/Images/House/hearth-room-cauldron-shelves.jpg',
              badge: 'Безплатни дърва',
              title: 'Традиционна механа с камина',
              subtitle: 'Маси за 14+ гости, жива жар и озвучаване',
              alt: 'Автентично каменно огнище с дърва за огрев, котле и възрожденски детайли в Къща за гости Абстракт',
              icon: FireplaceIcon,
              span: 'md:col-span-5',
            },
            {
              src: '/Images/House/house-facade-veranda-stone-wall.jpg',
              badge: '1000+ кв.м ограден двор',
              title: 'Възрожденски чардак и барбекю навес',
              subtitle: 'Пълна сигурност за деца и домашни любимци',
              alt: 'Двуетажна възрожденска фасада на Къща за гости Абстракт с каменна зидария, дървен чардак и градина',
              icon: BbqIcon,
              span: 'md:col-span-7',
            },
          ],
          chipsLabel: 'Всичко включено без доплащане',
          chips: [
            { icon: JacuzziIcon, title: 'Външно джакузи', tag: '5 места • 365 дни' },
            { icon: SaunaIcon, title: 'Инфрачервена сауна', tag: '3 места • Детокс' },
            { icon: PoolIcon, title: 'Отопляем басейн', tag: 'Април – Октомври' },
            { icon: FireplaceIcon, title: 'Механа с камина', tag: 'Безплатни дърва' },
            { icon: BbqIcon, title: 'Покрито барбекю', tag: 'Дърва + Ел. скара' },
            { icon: UtensilsCrossed, title: 'Оборудвана кухня', tag: 'Съдомиялна и кафе' },
            { icon: ThermometerSun, title: 'Пелетно парно', tag: 'Топлина през зимата' },
            { icon: Wind, title: 'Климатици', tag: 'В стаите и механата' },
            { icon: Wifi, title: 'Бърз Wi-Fi', tag: 'Къща и градина' },
            { icon: Tv, title: 'Смарт телевизори', tag: 'Сателитни канали' },
            { icon: Volume2, title: 'Парти колонка', tag: 'Bluetooth музика' },
            { icon: TreePine, title: 'Ограден двор', tag: '1000+ кв.м трева' },
            { icon: Dog, title: 'Домашни любимци', tag: '0 € • Без такса' },
            { icon: Car, title: 'Частен паркинг', tag: '4 автомобила' },
            { icon: Droplet, title: 'Пералня и ютия', tag: 'За дълъг престой' },
          ],
        }
        : language === 'el'
      ?{
    eyebrow: 'ΕΥΕΞΙΑ & ΑΝΕΣΗ ΟΛΟ ΤΟΝ ΧΡΟΝΟ',
      bento: [
        {
          src: '/Images/House/pool-turquoise-water-closeup.jpg',
          badge: 'Απρίλιος – Οκτώβριος',
          title: 'Θερμαινόμενη εξωτερική πισίνα',
          subtitle: 'Κρυστάλλινα νερά, ξαπλώστρες και πέτρινη βεράντα',
          alt: 'Θερμαινόμενη εξωτερική πισίνα με τιρκουάζ κρυστάλλινα νερά στον Ξενώνα Abstract',
          icon: PoolIcon,
          span: 'md:col-span-7',
        },
        {
          src: '/Images/House/courtyard-pool-dusk-lantern.jpg',
          badge: '365 ημέρες • Και στο χιόνι',
          title: 'Εξωτερικό τζακούζι 5 θέσεων & σάουνα',
          subtitle: 'Ζεστό χειμερινό τζακούζι + σάουνα υπερύθρων 3 θέσεων',
          alt: 'Βραδινή λήψη του περιφραγμένου κήπου και του σπα στον Ξενώνα Abstract',
          icon: JacuzziIcon,
          span: 'md:col-span-5',
        },
        {
          src: '/Images/House/hearth-room-cauldron-shelves.jpg',
          badge: 'Δωρεάν καυσόξυλα',
          title: 'Παραδοσιακή ταβέρνα με τζάκι',
          subtitle: 'Τραπέζια για 14+ άτομα, τζάκι και ηχοσύστημα',
          alt: 'Παραδοσιακή εστία με ξύλα και χάλκινα κειμήλια στον Ξενώνα Abstract',
          icon: FireplaceIcon,
          span: 'md:col-span-5',
        },
        {
          src: '/Images/House/house-facade-veranda-stone-wall.jpg',
          badge: '1.000+ τ.μ. κήπος',
          title: 'Ξύλινο χαγιάτι & στεγασμένο μπάρμπεκιου',
          subtitle: 'Ασφαλής περιφραγμένος χώρος για παιδιά και κατοικίδια',
          alt: 'Παραδοσιακή διώροφη πρόσοψη με πέτρα, ξύλινη βεράντα και κήπο',
          icon: BbqIcon,
          span: 'md:col-span-7',
        },
      ],
        chipsLabel: 'Όλες οι παροχές περιλαμβάνονται δωρεάν',
          chips: [
            { icon: JacuzziIcon, title: 'Ζεστό τζακούζι', tag: '5 θέσεις • 365 ημ.' },
            { icon: SaunaIcon, title: 'Σάουνα υπερύθρων', tag: '3 θέσεις • Χαλάρωση' },
            { icon: PoolIcon, title: 'Θερμαινόμενη πισίνα', tag: 'Απρ – Οκτ' },
            { icon: FireplaceIcon, title: 'Ταβέρνα με τζάκι', tag: 'Δωρεάν ξύλα' },
            { icon: BbqIcon, title: 'Στεγασμένο BBQ', tag: 'Κάρβουνα & Ηλεκτρ.' },
            { icon: UtensilsCrossed, title: 'Πλήρης κουζίνα', tag: 'Πλυντήριο πιάτων' },
            { icon: ThermometerSun, title: 'Θέρμανση πέλλετ', tag: 'Ζεστασιά χειμώνα' },
            { icon: Wind, title: 'Κλιματισμός', tag: 'Δωμάτια & ταβέρνα' },
            { icon: Wifi, title: 'Γρήγορο Wi-Fi', tag: 'Σπίτι & κήπος' },
            { icon: Tv, title: 'Smart TV', tag: 'Δορυφορικά κανάλια' },
            { icon: Volume2, title: 'Ηχείο πάρτι', tag: 'Bluetooth μουσική' },
            { icon: TreePine, title: 'Περιφραγμένη αυλή', tag: '1.000+ τ.μ. γκαζόν' },
            { icon: Dog, title: 'Κατοικίδια δωρεάν', tag: '0 € επιβάρυνση' },
            { icon: Car, title: 'Ιδιωτικό πάρκινγκ', tag: '4 αυτοκίνητα' },
            { icon: Droplet, title: 'Πλυντήριο ρούχων', tag: 'Σίδερο & σεσουάρ' },
          ],
        }
      : {
    eyebrow: 'FOUR-SEASON SPA & EFFORTLESS COMFORT',
      bento: [
        {
          src: '/Images/House/pool-turquoise-water-closeup.jpg',
          badge: 'April – October',
          title: 'Heated Outdoor Pool',
          subtitle: 'Crystal-clear water, loungers & granite sun terrace',
          alt: 'Sunlit turquoise heated outdoor swimming pool with granite steps in the courtyard of Abstract Guest House',
          icon: PoolIcon,
          span: 'md:col-span-7',
        },
        {
          src: '/Images/House/courtyard-pool-dusk-lantern.jpg',
          badge: '365 Days • Even in Snow',
          title: '5-Seat Hot Jacuzzi & Sauna',
          subtitle: 'Steaming outdoor winter hot tub + 3-seat infrared sauna',
          alt: 'Twilight view of the enclosed private lawn, illuminated stone wall, and wellness garden at Abstract Guest House',
          icon: JacuzziIcon,
          span: 'md:col-span-5',
        },
        {
          src: '/Images/House/hearth-room-cauldron-shelves.jpg',
          badge: 'Unlimited Free Firewood',
          title: 'Fireplace Tavern (Mehana)',
          subtitle: 'Banquet table for 14+ guests, open fire & party sound',
          alt: 'Traditional hearth with firewood logs, hanging cauldron, and antique copperware at Abstract Guest House',
          icon: FireplaceIcon,
          span: 'md:col-span-5',
        },
        {
          src: '/Images/House/house-facade-veranda-stone-wall.jpg',
          badge: '1,000+ m² Fenced Grounds',
          title: 'Revival Veranda & Covered BBQ',
          subtitle: 'Safe enclosed lawn for children and off-leash pets',
          alt: 'Two-story Bulgarian Revival facade of Abstract Guest House with stone masonry, dark timber beams, and glazed veranda',
          icon: BbqIcon,
          span: 'md:col-span-7',
        },
      ],
        chipsLabel: 'Every Amenity Included Complimentary',
          chips: [
            { icon: JacuzziIcon, title: 'Outdoor Hot Jacuzzi', tag: '5 Seats • 365 Days' },
            { icon: SaunaIcon, title: 'Infrared Sauna', tag: '3 Seats • Wellness' },
            { icon: PoolIcon, title: 'Heated Pool', tag: 'April – October' },
            { icon: FireplaceIcon, title: 'Fireplace Mehana', tag: 'Free Firewood' },
            { icon: BbqIcon, title: 'Covered BBQ Patio', tag: 'Wood & Electric' },
            { icon: UtensilsCrossed, title: 'Full Chef Kitchen', tag: 'Dishwasher & Coffee' },
            { icon: ThermometerSun, title: 'Pellet Heating', tag: 'Auto Winter Warmth' },
            { icon: Wind, title: 'Air Conditioning', tag: 'Rooms & Living' },
            { icon: Wifi, title: 'High-Speed Wi-Fi', tag: 'House & Garden' },
            { icon: Tv, title: 'Smart Satellite TVs', tag: 'Every Room' },
            { icon: Volume2, title: 'Party Speaker', tag: 'Bluetooth Audio' },
            { icon: TreePine, title: 'Fenced Private Yard', tag: '1,000+ m² Lawn' },
            { icon: Dog, title: 'Pets Stay Free', tag: '€0 Pet Fee' },
            { icon: Car, title: 'Private Parking', tag: '4 Dedicated Spots' },
            { icon: Droplet, title: 'Washer & Iron', tag: 'Long-Stay Ready' },
          ],
        };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
      <div className="mx-auto max-w-7xl">
                {/* Clean Compact Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-12">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-[#5B7A3A]/10 text-[#5B7A3A] mb-3">
                    {ui.eyebrow}
                  </span>
                  <h2
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {h.amenities.intro.title}
                  </h2>
                </div>
                {h.amenities.intro.subtitle && (
                  <p className="text-base sm:text-lg font-medium text-[#5B7A3A] lg:text-right">
                    {h.amenities.intro.subtitle}
                  </p>
                )}
              </div>

              {/* 4-Card Asymmetric Visual Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 mb-12 sm:mb-14">
                {ui.bento.map((card, idx) => {
                  const CardIcon = card.icon;
                  return (
                    <motion.div
                      key={idx}
                      className={`relative h-72 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden group shadow-sm ${card.span}`}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.45, delay: idx * 0.08 }}
                    >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                aria-hidden="true"
              />

                {/* Top Floating Badge */}
                <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                  <CardIcon className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  <span>{card.badge}</span>
                </div>

                {/* Bottom Caption */ }
                    < div className = "absolute bottom-0 left-0 right-0 z-10 p-6" >
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white drop-shadow-sm mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 drop-shadow-sm">
                    {card.subtitle}
                  </p>
          </div>
        </motion.div>
        );
          })}
      </div>

                {/* Scannable Visual Amenity Icon Chips (Zero Paragraph Walls) */}
        <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                  {ui.chipsLabel}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {ui.chips.map((chip, index) => {
                    const ChipIcon = chip.icon;
                    return (
                <div
                  key={index}
                  className="bg-white/90 rounded-2xl border border-zinc-200/80 p-3.5 sm:p-4 flex items-center gap-3 shadow-sm hover:border-[#5B7A3A]/40 transition-colors"
                >
              <div
                className="w-9 h-9 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <ChipIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-900 truncate">
                  {chip.title}
                </h3>
                <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                  {chip.tag}
                </p>
              </div>
            </div>
            );
            })}
          </div>
        </div>
    </div>
    </section >
  );
}
