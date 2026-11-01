'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import {
  JacuzziIcon,
  SaunaIcon,
  PoolIcon,
  BbqIcon,
  FireplaceIcon,
} from '@/app/house/components/HouseAmenityIcons';
import {
  Users,
  Bed,
  Bath,
  Flame,
  Trees,
  Sparkles,
  UtensilsCrossed,
  Check,
  ArrowRight,
  PhoneCall,
  ThermometerSun,
  Wifi,
  Wind,
  Tv,
  Volume2,
  Car,
  Dog,
  Coffee,
  Snowflake,
  Shirt,
} from 'lucide-react';

const ROOM_IMAGES = [
  '/Images/House/hearth-room-wide.jpg',
  '/Images/House/large-room-wide.jpg',
  '/Images/House/large-room-seating-windows.jpg',
  '/Images/House/hearth-room-toward-veranda.jpg',
];

export default function HouseDetailsPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'rooms' | 'tavern' | 'spa' | 'amenities'>('rooms');

  const content = {
    bg: {
      eyebrow: 'КЪЩА ЗА ГОСТИ АБСТРАКТ • С. ГОЛЕЦ',
      title: 'Пространство, комфорт и балканджийски уют',
      subtitle: 'Самостоятелна възрожденска къща със СПА зона, механа и ограден двор за до 14 гости.',
      capacityBadge: 'До 14 гости',
      wholeHouseBadge: '100% самостоятелно наемане',
      heroAlts: [
        'Възрожденска фасада на Къща за гости Абстракт в с. Голец с остъклен чардак, ограден зелен двор и отопляем открит басейн',
        'Автентична стая с огнище и българска фолклорна атмосфера в Къща за гости Абстракт',
        'Отопляем открит басейн с тюркоазена вода и каменна настилка (април – октомври)',
        'Просторна възрожденска спалня с двойно легло, вълнено покривало, дантелен диван и черга',
      ],
      roomAlts: [
        'Стая с огнище в Къща за гости Абстракт – автентично глинено огнище с висящо котле, бакъри, черга и двойно легло',
        'Голяма стая в Къща за гости Абстракт – просторна спалня с двойно легло, разтегателен диван с дантела, дървена маса и черга',
        'Панорамна стая 1 в Къща за гости Абстракт – слънчева спалня с два прозореца с дантелени пердета, дървена ракла и масивни тавански греди',
        'Панорамна стая 2 в Къща за гости Абстракт – уютна спалня с директен излаз към слънчевия чардак и автентични дървени рафтове',
      ],
      detailStripAlts: [
        'Кът за отдих с люлеещ се стол върху овча кожа пред автентичното каменно огнище',
        'Оригинални тъмни дървени тавански греди, старинна резбована ракла и масивен гардероб',
        'Баня в ретро възрожденски стил с релефни бронзови плочки, орнаментирано месингово огледало и душ',
      ],
      detailStripCaptions: [
        'Кът край огнището',
        'Възрожденски греди и ракла',
        'Ретро месингова баня',
      ],
      tavernAlts: [
        'Автентично каменно огнище с висящо котле и дървени полици с керамика в Къща за гости Абстракт',
        'Уютен кът с люлеещ се стол и тъкани черги край огнището',
      ],
      spaAlts: [
        'Близък план на отопляемия открит басейн с кристално чиста тюркоазена вода и гранитни стъпала',
        'Изглед изпод дървените греди на навеса към оградения зелен двор и басейна',
        'Вечерен изглед по здрач към осветения двор, каменната пътека и басейна на Къща за гости Абстракт',
      ],
      tabs: {
        rooms: '4 Спални',
        tavern: 'Механа & Кухня',
        spa: 'СПА & Двор',
        amenities: 'Удобства',
      },
      roomsTitle: '4 самостоятелни спални',
      roomsSubtitle: 'Възрожденска топлина, модерни матраци и гледки към планината или басейна.',
      specLabels: {
        guests: 'Гости',
        beds: 'Двойно + диван',
        bath: 'Баня',
      },
      rooms: [
        {
          name: 'Стая с огнище',
          badge: 'Етаж 1 • Планински изглед',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'На етажа',
          features: ['Автентично огнище', 'Панорамна тераса', 'Климатик', 'Смарт ТВ & Wi-Fi'],
        },
        {
          name: 'Голяма стая',
          badge: 'Етаж 1 • Просторна',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'На етажа',
          features: ['Голяма площ', 'Планинска тераса', 'Климатик', 'Смарт ТВ & Wi-Fi'],
        },
        {
          name: 'Панорамна стая 1',
          badge: 'Самостоятелна баня',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'Собствена',
          features: ['Изглед басейн & двор', 'Климатик', 'Сателитна Смарт ТВ', 'Wi-Fi'],
        },
        {
          name: 'Панорамна стая 2',
          badge: 'Самостоятелна баня',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'Собствена',
          features: ['Излаз към чардака', 'Изглед басейн', 'Климатик', 'Смарт ТВ & Wi-Fi'],
        },
      ],
      tavernBadge: 'Механа с камина',
      tavernFloatingTag: '14+ места • Безплатни дърва',
      tavernTitle: 'Традиционна механа за цялата компания',
      tavernText: 'Широка трапезария с каменно огнище, музика без вечерен час и собствена баня.',
      tavernPills: [
        'Камина с безплатни дърва',
        'Bluetooth парти колонка',
        'Собствен санитарен възел',
      ],
      kitchenBadge: 'Пълно оборудване',
      kitchenTitle: 'Модерна кухня към механата',
      kitchenItems: [
        { title: 'Фурна и котлони', tag: '+ микровълнова' },
        { title: 'Кафемашина', tag: 'За мляно кафе' },
        { title: 'Съдомиялна', tag: 'С включени таблетки' },
        { title: 'Голям хладилник', tag: 'С фризерна част' },
        { title: 'Пълна посуда', tag: 'Тостер и ел. кана' },
        { title: 'Домашен комфорт', tag: 'Пералня, ютия, сешоар' },
      ],
      spaTitle: 'Целогодишен СПА и градински оазис',
      spaItems: [
        {
          stat: '365 дни • 5 места',
          title: 'Външно горещо джакузи',
          desc: 'Постоянно топла вода на открито, включително сред зимен сняг.',
        },
        {
          stat: '3 места • Релакс',
          title: 'Инфрачервена сауна',
          desc: 'Дълбоко затопляне и възстановяване след разходка в Балкана.',
        },
        {
          stat: 'Април – Октомври',
          title: 'Отопляем външен басейн',
          desc: 'Кристална вода, каменна тераса и шезлонги за слънчеви бани.',
        },
        {
          stat: '14+ места • Навес',
          title: 'Барбекю и външна трапезария',
          desc: 'Пещ на дърва, електрическа скара и голяма маса под покрит чардак.',
        },
        {
          stat: '1000+ кв.м • Сигурен',
          title: 'Изцяло ограден зелен двор',
          desc: 'Просторна поляна за безопасна игра на деца и домашни любимци.',
        },
      ],
      amenitiesTitle: 'Технологии и удобства без доплащане',
      amenitiesList: [
        { badge: 'Автоматично', label: 'Пелетно парно', desc: 'Топлина във всяка стая през зимата' },
        { badge: 'Бърз обхват', label: 'Високоскоростен Wi-Fi', desc: 'В къщата и двора за хоумофис' },
        { badge: 'Лятна прохлада', label: 'Климатизация', desc: 'Индивидуален контрол по стаите' },
        { badge: 'Сателитна ТВ', label: 'Смарт телевизори', desc: 'Във всички спални и механата' },
        { badge: 'За празници', label: 'Bluetooth колонка', desc: 'Озвучаване в закритата механа' },
        { badge: 'Пред входа', label: '4 паркоместа', desc: 'Асфалтов достъп до самата порта' },
        { badge: '0 € такса', label: 'Домашни любимци', desc: 'Добре дошли в оградения двор' },
        { badge: 'Без лимит', label: 'Дърва за огрев', desc: 'За камината и външното барбекю' },
      ],
      ctaTitle: 'Готови ли сте за почивка в Балкана?',
      ctaSubtitle: 'Запазете директно цялата къща без комисиони.',
      ctaReserve: 'Резервирайте къщата',
      ctaContact: 'Свържете се с нас',
    },
    el: {
      eyebrow: 'ΞΕΝΩΝΑΣ ABSTRACT • ΧΩΡΙΟ ΓΚΟΛΕΤΣ',
      title: 'Χώρος, άνεση και αυθεντική φιλοξενία',
      subtitle: 'Αποκλειστική ενοικίαση παραδοσιακού ξενώνα με σπα, ταβέρνα και κήπο για έως 14 άτομα.',
      capacityBadge: 'Έως 14 άτομα',
      wholeHouseBadge: '100% αποκλειστική χρήση',
      heroAlts: [
        'Παραδοσιακή πρόσοψη του Ξενώνα Abstract στο Γκόλετς με ξύλινη βεράντα, καταπράσινο κήπο και θερμαινόμενη πισίνα',
        'Αυθεντικό βουλγαρικό δωμάτιο με παραδοσιακό τζάκι και λαογραφική ατμόσφαιρα στον Ξενώνα Abstract',
        'Θερμαινόμενη εξωτερική πισίνα με τιρκουάζ νερά και πέτρινη επένδυση (Απρίλιος – Οκτώβριος)',
        'Ευρύχωρο παραδοσιακό υπνοδωμάτιο με διπλό κρεβάτι, καναπέ με δαντέλα και υφαντό χαλί',
      ],
      roomAlts: [
        'Δωμάτιο με τζάκι στον Ξενώνα Abstract – αυθεντική παραδοσιακή εστία, χάλκινα σκεύη, υφαντό χαλί και διπλό κρεβάτι',
        'Μεγάλο δωμάτιο στον Ξενώνα Abstract – ευρύχωρο υπνοδωμάτιο με διπλό κρεβάτι, καναπέ-κρεβάτι και ξύλινα έπιπλα',
        'Πανοραμικό δωμάτιο 1 στον Ξενώνα Abstract – φωτεινό υπνοδωμάτιο με δαντελένιες κουρτίνες, ξύλινη κασέλα και δοκάρια οροφής',
        'Πανοραμικό δωμάτιο 2 στον Ξενώνα Abstract – άνετο υπνοδωμάτιο με άμεση πρόσβαση στην ηλιόλουστη βεράντα',
      ],
      detailStripAlts: [
        'Γωνιά χαλάρωσης με κουνιστή πολυθρόνα πάνω σε προβιά δίπλα στο παραδοσιακό τζάκι',
        'Αυθεντικά σκούρα ξύλινα δοκάρια οροφής, ξυλόγλυπτη κασέλα και παραδοσιακή ντουλάπα',
        'Μπάνιο σε ρετρό παραδοσιακό στυλ με ανάγλυφα πλακάκια, μπρούτζινο καθρέφτη και ντους',
      ],
      detailStripCaptions: [
        'Γωνιά δίπλα στο τζάκι',
        'Αυθεντικά ξύλινα δοκάρια',
        'Ρετρό μπρούτζινο μπάνιο',
      ],
      tavernAlts: [
        'Παραδοσιακό πέτρινο τζάκι με χάλκινο καζάνι και ξύλινα ράφια στον Ξενώνα Abstract',
        'Κουνιστή πολυθρόνα και υφαντά χαλιά δίπλα στην παραδοσιακή εστία',
      ],
      spaAlts: [
        'Κοντινή λήψη της θερμαινόμενης εξωτερικής πισίνας με κρυστάλλινα τιρκουάζ νερά και πέτρινα σκαλοπάτια',
        'Θέα κάτω από τα ξύλινα δοκάρια του χαγιατιού προς τον περιφραγμένο κήπο και την πισίνα',
        'Βραδινή όψη του φωτισμένου κήπου, του πέτρινου μονοπατιού και της πισίνας το σούρουπο',
      ],
      tabs: {
        rooms: '4 Υπνοδωμάτια',
        tavern: 'Ταβέρνα & Κουζίνα',
        spa: 'Σπα & Κήπος',
        amenities: 'Παροχές',
      },
      roomsTitle: '4 άνετα υπνοδωμάτια',
      roomsSubtitle: 'Παραδοσιακή ζεστασιά, σύγχρονη άνεση και θέα στο βουνό ή την πισίνα.',
      specLabels: {
        guests: 'Άτομα',
        beds: 'Διπλό + καναπές',
        bath: 'Μπάνιο',
      },
      rooms: [
        {
          name: 'Δωμάτιο με τζάκι',
          badge: '1ος Όροφος • Θέα βουνό',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'Ορόφου',
          features: ['Παραδοσιακό τζάκι', 'Βεράντα βουνού', 'Κλιματισμός', 'Smart TV & Wi-Fi'],
        },
        {
          name: 'Μεγάλο δωμάτιο',
          badge: '1ος Όροφος • Ευρύχωρο',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'Ορόφου',
          features: ['Μεγάλη άνεση', 'Βεράντα με θέα', 'Κλιματισμός', 'Smart TV & Wi-Fi'],
        },
        {
          name: 'Πανοραμικό δωμάτιο 1',
          badge: 'Ιδιωτικό μπάνιο',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'Ιδιωτικό',
          features: ['Θέα πισίνα & κήπο', 'Κλιματισμός', 'Smart TV', 'Wi-Fi'],
        },
        {
          name: 'Πανοραμικό δωμάτιο 2',
          badge: 'Ιδιωτικό μπάνιο',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'Ιδιωτικό',
          features: ['Πρόσβαση σε χαγιάτι', 'Θέα πισίνα', 'Κλιματισμός', 'Smart TV & Wi-Fi'],
        },
      ],
      tavernBadge: 'Ταβέρνα με τζάκι',
      tavernFloatingTag: '14+ θέσεις • Δωρεάν ξύλα',
      tavernTitle: 'Παραδοσιακή ταβέρνα για όλη την παρέα',
      tavernText: 'Μεγάλη τραπεζαρία με πέτρινο τζάκι, μουσική χωρίς ωράριο και ιδιωτικό μπάνιο.',
      tavernPills: [
        'Τζάκι με δωρεάν ξύλα',
        'Ηχείο Bluetooth',
        'Δικό της μπάνιο',
      ],
      kitchenBadge: 'Πλήρης εξοπλισμός',
      kitchenTitle: 'Σύγχρονη κουζίνα δίπλα στην ταβέρνα',
      kitchenItems: [
        { title: 'Φούρνος & εστίες', tag: '+ μικροκυμάτων' },
        { title: 'Καφετιέρα', tag: 'Για αλεσμένο καφέ' },
        { title: 'Πλυντήριο πιάτων', tag: 'Με ταμπλέτες' },
        { title: 'Μεγάλο ψυγείο', tag: 'Με καταψύκτη' },
        { title: 'Πλήρη σκεύη', tag: 'Τοστιέρα & βραστήρας' },
        { title: 'Άνεση σπιτιού', tag: 'Πλυντήριο & σίδερο' },
      ],
      spaTitle: 'Σπα και κήπος όλο τον χρόνο',
      spaItems: [
        {
          stat: '365 ημέρες • 5 θέσεις',
          title: 'Εξωτερικό ζεστό τζακούζι',
          desc: 'Σταθερά ζεστό νερό όλο τον χρόνο, ακόμη και στο χιόνι.',
        },
        {
          stat: '3 θέσεις • Χαλάρωση',
          title: 'Σάουνα υπερύθρων',
          desc: 'Βαθιά αποτοξίνωση και ξεκούραση μετά τη βόλτα στο βουνό.',
        },
        {
          stat: 'Απρίλιος – Οκτώβριος',
          title: 'Θερμαινόμενη πισίνα',
          desc: 'Κρυστάλλινα νερά, πέτρινη βεράντα και ξαπλώστρες.',
        },
        {
          stat: '14+ θέσεις • Στέγαστρο',
          title: 'Μπάρμπεκιου & τραπεζαρία',
          desc: 'Ψησταριά με ξύλα, ηλεκτρική σχάρα και μεγάλο τραπέζι έξω.',
        },
        {
          stat: '1.000+ τ.μ. • Ασφαλής',
          title: 'Περιφραγμένος κήπος',
          desc: 'Καταπράσινο γκαζόν ασφαλές για παιδιά και κατοικίδια.',
        },
      ],
      amenitiesTitle: 'Τεχνολογία και παροχές χωρίς χρέωση',
      amenitiesList: [
        { badge: 'Αυτόματη', label: 'Θέρμανση πέλλετ', desc: 'Ζεστασιά σε όλο το σπίτι τον χειμώνα' },
        { badge: 'Υψηλή ταχύτητα', label: 'Γρήγορο Wi-Fi', desc: 'Σε όλα τα δωμάτια και τον κήπο' },
        { badge: 'Δροσιά', label: 'Κλιματισμός', desc: 'Σε υπνοδωμάτια και κοινόχρηστους χώρους' },
        { badge: 'Δορυφορική', label: 'Smart TV', desc: 'Σε κάθε δωμάτιο και στην ταβέρνα' },
        { badge: 'Για πάρτι', label: 'Ηχείο Bluetooth', desc: 'Μουσική στην εσωτερική ταβέρνα' },
        { badge: 'Στην είσοδο', label: '4 θέσεις στάθμευσης', desc: 'Άμεση πρόσβαση από άσφαλτο' },
        { badge: '0 € χρέωση', label: 'Κατοικίδια δωρεάν', desc: 'Ευπρόσδεκτα στον ασφαλή κήπο' },
        { badge: 'Απεριόριστα', label: 'Δωρεάν καυσόξυλα', desc: 'Για το τζάκι και το μπάρμπεκιου' },
      ],
      ctaTitle: 'Έτοιμοι για απόδραση στο βουνό;',
      ctaSubtitle: 'Κάντε απευθείας κράτηση ολόκληρου του σπιτιού.',
      ctaReserve: 'Κράτηση σπιτιού',
      ctaContact: 'Επικοινωνία',
    },
    en: {
      eyebrow: 'ABSTRACT GUEST HOUSE • GOLETS VILLAGE',
      title: 'Space, Comfort & Balkan Mountain Charm',
      subtitle: 'Exclusive whole-house Revival estate with private spa, fireplace tavern, and fenced garden for up to 14 guests.',
      capacityBadge: 'Up to 14 guests',
      wholeHouseBadge: '100% Exclusive Whole House',
      heroAlts: [
        'Bulgarian Revival facade of Guest House Abstract in Golets with glazed timber veranda, enclosed green lawn, and heated outdoor pool',
        'Authentic Bulgarian Hearth Room showcasing traditional folkloric heritage at Guest House Abstract',
        'Crystal-clear heated outdoor swimming pool with natural stone coping (open April through October)',
        'Spacious Revival bedroom with wool-draped double bed, lace sofa bed, rustic wooden table, and handwoven cherga rug',
      ],
      roomAlts: [
        'Room with Fireplace at Guest House Abstract – open clay hearth with hanging iron cauldron, copper vessels, cherga rug, and double bed',
        'Large Room at Guest House Abstract – spacious bedroom with double bed, lace-draped pull-out sofa bed, rustic table, and woven cherga rug',
        'Panoramic Room 1 at Guest House Abstract – sunlit bedroom with twin lace-curtained windows, carved wooden chest, and dark ceiling beams',
        'Panoramic Room 2 at Guest House Abstract – cozy bedroom opening onto the sunlit veranda framed by antique wooden shelves',
      ],
      detailStripAlts: [
        'Fireside reading corner with cushioned wooden rocking chair on sheepskin beside the open clay hearth',
        'Original dark timber ceiling beams, carved antique wooden chest, and solid wood wardrobe',
        'Vintage Revival-style bathroom featuring embossed bronze tiles, ornate antique brass mirror, and walk-in shower',
      ],
      detailStripCaptions: [
        'Fireside Reading Corner',
        'Original Revival Timber Beams',
        'Vintage Brass Bathroom',
      ],
      tavernAlts: [
        'Authentic stone hearth with hanging iron cauldron and carved wooden pottery shelves at Guest House Abstract',
        'Fireside rocking chair and handwoven cherga rugs beside the stone hearth',
      ],
      spaAlts: [
        'Close-up of the sunlit turquoise heated outdoor swimming pool and granite steps',
        'View from beneath the dark timber porch beams across the enclosed green courtyard lawn toward the pool',
        'Wide twilight view across the illuminated courtyard garden, flagstone stepping path, and pool at dusk',
      ],
      tabs: {
        rooms: '4 Bedrooms',
        tavern: 'Tavern & Kitchen',
        spa: 'Spa & Garden',
        amenities: 'All Amenities',
      },
      roomsTitle: '4 Private Revival Bedrooms',
      roomsSubtitle: 'Handcrafted heritage warmth, plush mattresses, and mountain or pool views.',
      specLabels: {
        guests: 'Guests',
        beds: 'Double + Sofa',
        bath: 'Bathroom',
      },
      rooms: [
        {
          name: 'Room with Fireplace',
          badge: '1st Floor • Mountain View',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'Floor Bath',
          features: ['Authentic hearth', 'Mountain terrace', 'Air conditioning', 'Smart TV & Wi-Fi'],
        },
        {
          name: 'Large Room',
          badge: '1st Floor • Generous Space',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'Floor Bath',
          features: ['Spacious footprint', 'Mountain terrace', 'Air conditioning', 'Smart TV & Wi-Fi'],
        },
        {
          name: 'Panoramic Room 1',
          badge: 'En-Suite Bathroom',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'En-Suite',
          features: ['Pool & garden view', 'Air conditioning', 'Satellite Smart TV', 'Wi-Fi'],
        },
        {
          name: 'Panoramic Room 2',
          badge: 'En-Suite Bathroom',
          guestsVal: '3–4',
          bedsVal: '2 + 2',
          bathVal: 'En-Suite',
          features: ['Veranda access', 'Pool & garden view', 'Air conditioning', 'Smart TV & Wi-Fi'],
        },
      ],
      tavernBadge: 'Tavern with Fireplace',
      tavernFloatingTag: '14+ Seats • Free Firewood',
      tavernTitle: 'Traditional Balkan Tavern (Mehana)',
      tavernText: 'Communal timber dining hall with a stone wood fireplace, no indoor curfew, and private guest bath.',
      tavernPills: [
        'Fireplace + Free Logs',
        'Bluetooth Party Speaker',
        'Dedicated Guest Bath',
      ],
      kitchenBadge: 'Full Chef Setup',
      kitchenTitle: 'Modern Open Kitchen',
      kitchenItems: [
        { title: 'Oven & Cooktop', tag: '+ Microwave' },
        { title: 'Coffee Maker', tag: 'Ground coffee' },
        { title: 'Dishwasher', tag: 'Tablets included' },
        { title: 'Full Fridge', tag: 'With freezer' },
        { title: 'Full Cookware', tag: 'Toaster & kettle' },
        { title: 'Home Essentials', tag: 'Washer, iron, dryer' },
      ],
      spaTitle: 'Four-Season Spa & Private Grounds',
      spaItems: [
        {
          stat: '365 Days • 5 Seats',
          title: 'Outdoor Hot Jacuzzi',
          desc: 'Constant hot water year-round, including snowy winter nights.',
        },
        {
          stat: '3 Seats • Detox',
          title: 'Infrared Sauna',
          desc: 'Restorative warmth after a day exploring mountain trails.',
        },
        {
          stat: 'April – October',
          title: 'Heated Outdoor Pool',
          desc: 'Sunlit turquoise water, stone deck, and poolside loungers.',
        },
        {
          stat: '14+ Seats • Covered',
          title: 'Stone BBQ & Dining Patio',
          desc: 'Wood grill, electric grill, and dining table under timber beams.',
        },
        {
          stat: '1,000+ sq.m • Fenced',
          title: 'Enclosed Green Garden',
          desc: 'Child- and pet-safe private lawn surrounded by clean mountain air.',
        },
      ],
      amenitiesTitle: 'All-Inclusive Comfort & Connectivity',
      amenitiesList: [
        { badge: 'Automated', label: 'Pellet Heating', desc: 'Toasty central warmth in every room' },
        { badge: 'Remote-Ready', label: 'High-Speed Wi-Fi', desc: 'Full house and courtyard coverage' },
        { badge: 'Summer Cool', label: 'Air Conditioning', desc: 'Climate units in bedrooms & living' },
        { badge: 'Satellite TV', label: 'Smart TVs', desc: 'In every bedroom and the mehana' },
        { badge: 'Celebrations', label: 'Bluetooth Speaker', desc: 'Party sound system for the tavern' },
        { badge: 'At the Gate', label: '4 Free Parking Spots', desc: 'Paved asphalt right to the door' },
        { badge: '0 € Fee', label: 'Pets Stay Free', desc: 'Full run of the fenced garden' },
        { badge: 'Unlimited', label: 'Free Firewood', desc: 'Logs for fireplace & stone BBQ' },
      ],
      ctaTitle: 'Ready for Your Private Mountain Escape?',
      ctaSubtitle: 'Book the entire house directly with zero platform fees.',
      ctaReserve: 'Book The House',
      ctaContact: 'Get in Touch',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  const kitchenIcons = [Flame, Coffee, Sparkles, Snowflake, UtensilsCrossed, Shirt];
  const amenityIcons = [ThermometerSun, Wifi, Wind, Tv, Volume2, Car, Dog, FireplaceIcon];

  return (
    <div className="min-h-screen bg-[#F5F2ED] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 md:p-10 mb-10 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#5B7A3A]/10 text-[#5B7A3A]">
              {t.eyebrow}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-700">
              {t.capacityBadge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              {t.wholeHouseBadge}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 tracking-tight mb-3">
            {t.title}
          </h1>
          <p className="text-sm md:text-base text-zinc-600 max-w-2xl mb-7">
            {t.subtitle}
          </p>

          {/* Image Mosaic */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 rounded-2xl overflow-hidden">
            <div className="relative md:col-span-2 h-72 md:h-96">
              <Image
                src="/Images/House/house-facade-pool-courtyard.jpg"
                alt={t.heroAlts[0]}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative h-72 md:h-96">
              <Image
                src="/Images/House/hearth-room-folk-costume.jpg"
                alt={t.heroAlts[1]}
                fill
                className="object-cover object-top rounded-xl"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="grid grid-rows-2 gap-4 h-72 md:h-96">
              <div className="relative h-full">
                <Image
                  src="/Images/House/pool-turquoise-water-closeup.jpg"
                  alt={t.heroAlts[2]}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="relative h-full">
                <Image
                  src="/Images/House/large-room-wide.jpg"
                  alt={t.heroAlts[3]}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div
          role="tablist"
          aria-label={t.eyebrow}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-8"
        >
          {(['rooms', 'tavern', 'spa', 'amenities'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              id={'house-details-tab-' + tab}
              aria-selected={activeTab === tab}
              aria-controls={'house-details-panel-' + tab}
              onClick={() => setActiveTab(tab)}
      className={[
        'inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all',
        activeTab === tab
          ? 'bg-[#5B7A3A] text-white shadow-md'
          : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200',
      ].join(' ')}
                  >
      {tab === 'rooms' && <Bed className="w-4 h-4" aria-hidden="true" />}
      {tab === 'tavern' && <FireplaceIcon className="w-4 h-4" />}
      {tab === 'spa' && <JacuzziIcon className="w-4 h-4" />}
      {tab === 'amenities' && <Sparkles className="w-4 h-4" aria-hidden="true" />}
      <span>{t.tabs[tab]}</span>
    </button>
  ))
}
              </div >

  {/* Tab 1: Bedrooms */ }
{
  activeTab === 'rooms' && (
    <div
      id="house-details-panel-rooms"
      role="tabpanel"
      aria-labelledby="house-details-tab-rooms"
      className="space-y-6"
    >
      <div className="text-center max-w-xl mx-auto mb-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 mb-1.5">
          {t.roomsTitle}
        </h2>
        <p className="text-zinc-600 text-sm">
          {t.roomsSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.rooms.map((room, idx) => (
          <article
            key={idx}
            className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:border-[#5B7A3A]/40 transition-colors"
          >
            <div className="relative h-60 w-full">
              <Image
                src={ROOM_IMAGES[idx] || ROOM_IMAGES[0]}
                alt={t.roomAlts[idx] || room.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"
                aria-hidden="true"
              />
              <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/55 backdrop-blur-md text-white border border-white/15">
                {room.badge}
              </span>
              <h3 className="absolute bottom-3.5 left-4 right-4 text-xl md:text-2xl font-serif font-bold text-white drop-shadow-sm">
                {room.name}
              </h3>
            </div>

            <div className="p-5">
              {/* 3-Cell Visual Spec Grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="rounded-xl bg-[#F9F7F7] border border-zinc-100 p-2.5 text-center">
                  <Users className="w-4 h-4 text-[#5B7A3A] mx-auto mb-1" aria-hidden="true" />
                  <p className="text-sm font-bold text-zinc-900 leading-tight">{room.guestsVal}</p>
                  <p className="text-[11px] text-zinc-500">{t.specLabels.guests}</p>
                </div>
                <div className="rounded-xl bg-[#F9F7F7] border border-zinc-100 p-2.5 text-center">
                  <Bed className="w-4 h-4 text-[#5B7A3A] mx-auto mb-1" aria-hidden="true" />
                  <p className="text-sm font-bold text-zinc-900 leading-tight">{room.bedsVal}</p>
                  <p className="text-[11px] text-zinc-500">{t.specLabels.beds}</p>
                </div>
                <div className="rounded-xl bg-[#F9F7F7] border border-zinc-100 p-2.5 text-center">
                  <Bath className="w-4 h-4 text-[#5B7A3A] mx-auto mb-1" aria-hidden="true" />
                  <p className="text-sm font-bold text-zinc-900 leading-tight">{room.bathVal}</p>
                  <p className="text-[11px] text-zinc-500">{t.specLabels.bath}</p>
                </div>
              </div>

              {/* Compact Feature Chips */}
              <div className="flex flex-wrap gap-1.5">
                {room.features.map((feat, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-[#5B7A3A]/8 text-zinc-800"
                  >
                    <Check className="w-3 h-3 text-[#5B7A3A]" aria-hidden="true" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interior Craft & Vintage Bathroom Detail Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3">
        {[
          '/Images/House/hearth-room-rocking-chair.jpg',
          '/Images/House/large-room-ceiling-beams-wardrobe.jpg',
          '/Images/House/bathroom-vintage-brass.jpg',
        ].map((src, idx) => (
          <div
            key={src}
            className="relative h-60 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm"
          >
            <Image
              src={src}
              alt={t.detailStripAlts[idx]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
              aria-hidden="true"
            />
            <span className="absolute bottom-3 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-md text-white">
              {t.detailStripCaptions[idx]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

{/* Tab 2: Tavern & Kitchen */ }
{
  activeTab === 'tavern' && (
    <div
      id="house-details-panel-tavern"
      role="tabpanel"
      aria-labelledby="house-details-tab-tavern"
      className="bg-white rounded-3xl border border-zinc-200 p-6 md:p-10 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Heritage Photo Collage */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          <div className="col-span-2 relative h-60 sm:h-64 rounded-2xl overflow-hidden border border-zinc-200">
            <Image
              src="/Images/House/hearth-room-cauldron-shelves.jpg"
              alt={t.tavernAlts[0]}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              aria-hidden="true"
            />
            <span className="absolute bottom-3 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/55 backdrop-blur-md text-white">
              <FireplaceIcon className="w-3.5 h-3.5 text-amber-300" />
              {t.tavernFloatingTag}
            </span>
          </div>
          <div className="col-span-2 relative h-44 rounded-2xl overflow-hidden border border-zinc-200">
            <Image
              src="/Images/House/hearth-room-rocking-chair.jpg"
              alt={t.tavernAlts[1]}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Right Scannable Specs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#5B7A3A]/10 text-[#5B7A3A] mb-2.5">
              <FireplaceIcon className="w-4 h-4" />
              <span>{t.tavernBadge}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 mb-2">
              {t.tavernTitle}
            </h2>
            <p className="text-zinc-600 text-sm md:text-base mb-4">
              {t.tavernText}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.tavernPills.map((pill, pIdx) => (
                <span
                  key={pIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F9F7F7] border border-zinc-200 text-xs font-semibold text-zinc-800"
                >
                  {pIdx === 0 && <FireplaceIcon className="w-3.5 h-3.5 text-[#5B7A3A]" />}
                  {pIdx === 1 && <Volume2 className="w-3.5 h-3.5 text-[#5B7A3A]" aria-hidden="true" />}
                  {pIdx === 2 && <Bath className="w-3.5 h-3.5 text-[#5B7A3A]" aria-hidden="true" />}
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#5B7A3A]/10 text-[#5B7A3A] mb-2">
              <UtensilsCrossed className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.kitchenBadge}</span>
            </div>
            <h3 className="text-lg md:text-xl font-serif font-bold text-zinc-900 mb-4">
              {t.kitchenTitle}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {t.kitchenItems.map((item, idx) => {
                const Icon = kitchenIcons[idx] || UtensilsCrossed;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#F9F7F7] border border-zinc-100 flex items-start gap-2.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">{item.tag}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{/* Tab 3: Spa & Yard */ }
{
  activeTab === 'spa' && (
    <div
      id="house-details-panel-spa"
      role="tabpanel"
      aria-labelledby="house-details-tab-spa"
      className="space-y-6"
    >
      <h2 className="sr-only">{t.spaTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          '/Images/House/pool-turquoise-water-closeup.jpg',
          '/Images/House/courtyard-pool-from-porch.jpg',
          '/Images/House/courtyard-pool-dusk-wide.jpg',
        ].map((src, idx) => (
          <div
            key={src}
            className="relative h-60 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm"
          >
            <Image
              src={src}
              alt={t.spaAlts[idx]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {t.spaItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm flex flex-col justify-between hover:border-[#5B7A3A]/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center flex-shrink-0">
                  {idx === 0 ? <JacuzziIcon className="w-5 h-5" /> :
                    idx === 1 ? <SaunaIcon className="w-5 h-5" /> :
                      idx === 2 ? <PoolIcon className="w-5 h-5" /> :
                        idx === 3 ? <BbqIcon className="w-5 h-5" /> :
                          <Trees className="w-5 h-5" aria-hidden="true" />}
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A]">
                  {item.stat}
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

{/* Tab 4: All Amenities */ }
{
  activeTab === 'amenities' && (
    <div
      id="house-details-panel-amenities"
      role="tabpanel"
      aria-labelledby="house-details-tab-amenities"
      className="bg-white rounded-3xl border border-zinc-200 p-6 md:p-10 shadow-sm"
    >
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 mb-6 text-center">
        {t.amenitiesTitle}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {t.amenitiesList.map((item, idx) => {
          const Icon = amenityIcons[idx] || Sparkles;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#F9F7F7] border border-zinc-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-white border border-zinc-200 text-zinc-600">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-zinc-900 mb-0.5 text-sm">{item.label}</h3>
                <p className="text-xs text-zinc-500 leading-snug">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

{/* Bottom CTA */ }
<div className="mt-12 bg-white rounded-3xl border border-zinc-200 p-8 md:p-10 text-center shadow-sm">
  <h2 className="text-2xl md:text-4xl font-serif font-bold text-zinc-900 mb-2">
    {t.ctaTitle}
  </h2>
  <p className="text-zinc-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
    {t.ctaSubtitle}
  </p>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <Link
      href="/house/reserve"
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#5B7A3A] text-white font-medium hover:bg-[#4d6831] transition-colors shadow-md"
    >
      <span>{t.ctaReserve}</span>
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
    <Link
      href="/house/contact"
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-zinc-300 text-zinc-800 font-medium hover:bg-zinc-50 transition-colors"
    >
      <PhoneCall className="w-4 h-4" aria-hidden="true" />
      <span>{t.ctaContact}</span>
    </Link>
  </div>
</div>
      </div >
    </div >
  );
}
