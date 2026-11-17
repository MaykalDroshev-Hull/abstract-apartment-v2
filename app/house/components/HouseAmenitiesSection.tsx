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
          eyebrow: 'Целогодишен СПА и домашен комфорт',
          headline: 'Какви СПА удобства и релакс предлага къщата? Лично планинско убежище',
          bento: [
            {
              src: '/Images/House/pool-turquoise-water-closeup.jpg',
              title: 'Отопляем открит басейн',
              subtitle: 'Кристална вода, шезлонги и гранитна тераса',
              season: 'Сезонен: Април – Октомври',
              alt: 'Отопляем открит басейн с тюркоазена кристална вода и гранитни стъпала в двора на Къща за гости Абстракт',
              icon: PoolIcon,
              span: 'md:col-span-7',
            },
            {
              src: '/Images/House/courtyard-pool-dusk-lantern.jpg',
              title: '5-местно горещо джакузи и сауна',
              subtitle: 'Външно зимно джакузи + 3-местна инфрачервена сауна',
              season: 'Целогодишно: 365 дни • Дори в снега',
              alt: 'Вечерен изглед към оградения двор, осветения каменен зид и СПА зоната на Къща за гости Абстракт',
              icon: JacuzziIcon,
              span: 'md:col-span-5',
            },
            {
              src: '/Images/House/hearth-room-cauldron-shelves.jpg',
              title: 'Традиционна механа с камина',
              subtitle: 'Маси за 14+ гости, жива жар и озвучаване',
              season: 'Включени безплатни дърва за огрев',
              alt: 'Автентично каменно огнище с дърва за огрев, котле и възрожденски детайли в Къща за гости Абстракт',
              icon: FireplaceIcon,
              span: 'md:col-span-5',
            },
            {
              src: '/Images/House/house-facade-veranda-stone-wall.jpg',
              title: 'Възрожденски чардак и барбекю навес',
              subtitle: 'Пълна сигурност за деца и домашни любимци',
              season: '1000+ кв.м ограден зелен двор',
              alt: 'Двуетажна възрожденска фасада на Къща за гости Абстракт с каменна зидария, дървен чардак и градина',
              icon: BbqIcon,
              span: 'md:col-span-7',
            },
          ],
          chipsLabel: 'Всички удобства са включени без доплащане',
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
      ? {
          eyebrow: 'Ευεξία και άνεση όλο τον χρόνο',
          headline: 'Ποιες παροχές σπα και άνεσης προσφέρει το σπίτι; Ιδιωτικό ορεινό καταφύγιο',
          bento: [
            {
              src: '/Images/House/pool-turquoise-water-closeup.jpg',
              title: 'Θερμαινόμενη εξωτερική πισίνα',
              subtitle: 'Κρυστάλλινα νερά, ξαπλώστρες και πέτρινη βεράντα',
              season: 'Απρίλιος – Οκτώβριος',
              alt: 'Θερμαινόμενη εξωτερική πισίνα με τιρκουάζ κρυστάλλινα νερά στον Ξενώνα Abstract',
              icon: PoolIcon,
              span: 'md:col-span-7',
            },
            {
              src: '/Images/House/courtyard-pool-dusk-lantern.jpg',
              title: 'Εξωτερικό τζακούζι 5 θέσεων & σάουνα',
              subtitle: 'Ζεστό χειμερινό τζακούζι + σάουνα υπερύθρων 3 θέσεων',
              season: '365 ημέρες • Και στο χιόνι',
              alt: 'Βραδινή λήψη του περιφραγμένου κήπου και του σπα στον Ξενώνα Abstract',
              icon: JacuzziIcon,
              span: 'md:col-span-5',
            },
            {
              src: '/Images/House/hearth-room-cauldron-shelves.jpg',
              title: 'Παραδοσιακή ταβέρνα με τζάκι',
              subtitle: 'Τραπέζια για 14+ άτομα, τζάκι και ηχοσύστημα',
              season: 'Δωρεάν καυσόξυλα',
              alt: 'Παραδοσιακή εστία με ξύλα και χάλκινα κειμήλια στον Ξενώνα Abstract',
              icon: FireplaceIcon,
              span: 'md:col-span-5',
            },
            {
              src: '/Images/House/house-facade-veranda-stone-wall.jpg',
              title: 'Ξύλινο χαγιάτι & στεγασμένο μπάρμπεκιου',
              subtitle: 'Ασφαλής περιφραγμένος χώρος για παιδιά και κατοικίδια',
              season: '1.000+ τ.μ. κήπος',
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
          eyebrow: 'Four-season spa & effortless comfort',
          headline: 'What Spa Amenities and Wellness Does the House Offer? Private Mountain Sanctuary',
          bento: [
            {
              src: '/Images/House/pool-turquoise-water-closeup.jpg',
              title: 'Heated Outdoor Pool',
              subtitle: 'Crystal-clear water, loungers & granite sun terrace',
              season: 'Seasonal: April – October',
              alt: 'Sunlit turquoise heated outdoor swimming pool in the courtyard of Abstract Guest House',
              icon: PoolIcon,
              span: 'md:col-span-7',
            },
            {
              src: '/Images/House/courtyard-pool-dusk-lantern.jpg',
              title: '5-Seat Hot Jacuzzi & Sauna',
              subtitle: 'Steaming outdoor winter hot tub + 3-seat infrared sauna',
              season: 'Year-Round: 365 Days • Even in Snow',
              alt: 'Twilight view of the enclosed private lawn and spa at Abstract Guest House',
              icon: JacuzziIcon,
              span: 'md:col-span-5',
            },
            {
              src: '/Images/House/hearth-room-cauldron-shelves.jpg',
              title: 'Fireplace Tavern (Mehana)',
              subtitle: 'Banquet table for 14+ guests, open fire & party sound',
              season: 'Complimentary firewood included',
              alt: 'Traditional hearth with firewood logs and antique copperware at Abstract Guest House',
              icon: FireplaceIcon,
              span: 'md:col-span-5',
            },
            {
              src: '/Images/House/house-facade-veranda-stone-wall.jpg',
              title: 'Revival Veranda & Covered BBQ',
              subtitle: 'Safe enclosed lawn for children and off-leash pets',
              season: '1,000+ m² fenced private grounds',
              alt: 'Two-story Bulgarian Revival facade of Abstract Guest House with stone masonry and veranda',
              icon: BbqIcon,
              span: 'md:col-span-7',
            },
          ],
          chipsLabel: 'Every amenity included complimentary',
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
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
      <div className="mx-auto max-w-7xl">
        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#5B7A3A] mb-3">
              {ui.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-zinc-900 text-balance">
              {ui.headline || h.amenities.intro.title}
            </h2>
          </div>
          {h.amenities.intro.subtitle && (
            <p className="text-base sm:text-lg font-medium text-zinc-700 lg:text-right text-pretty">
              {h.amenities.intro.subtitle}
            </p>
          )}
        </div>

        {/* 4-Card Asymmetric Visual Bento Grid (No floating pill overlays) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 mb-14 sm:mb-16">
          {ui.bento.map((card, idx) => (
            <motion.div
              key={idx}
              className={`relative h-72 sm:h-80 rounded-2xl overflow-hidden group border border-zinc-900/10 shadow-xs ${card.span}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                aria-hidden="true"
              />

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6 text-white">
                <p className="text-xs font-semibold text-[#A3C878] mb-1 drop-shadow-xs">
                  {card.season}
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-balance mb-1 drop-shadow-xs">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 drop-shadow-xs text-pretty">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scannable Amenity List: High-contrast typography, clear hierarchy */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
            {ui.chipsLabel}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-7">
            {ui.chips.map((chip, index) => {
              const ChipIcon = chip.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <ChipIcon
                    className="w-5 h-5 text-[#5B7A3A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-zinc-900 leading-snug">
                      {chip.title}
                    </h4>
                    <p className="text-xs text-zinc-600 mt-0.5 leading-snug">
                      {chip.tag}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
