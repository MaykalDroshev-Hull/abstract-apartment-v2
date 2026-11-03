'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/lib/translations';
import {
  MapPin,
  Trees,
  Mountain,
  Landmark,
  Waves,
  Clock,
  ArrowRight,
  Bookmark,
  Share2,
  Check,
} from 'lucide-react';
import { HouseGuideModal, HouseAttractionItem } from './components/HouseGuideModal';
import { TiltCard } from './components/TiltCard';
import { RadiusDial, DriveRadiusFilter } from './components/RadiusDial';
import { ItineraryDrawer } from './components/ItineraryDrawer';
import { Toast } from './components/Toast';
import { MobileFilterDrawer } from './components/MobileFilterDrawer';

type AttractionCategory = 'all' | 'nature' | 'caves' | 'historic' | 'lakes';

interface LandmarkData {
  id: number;
  category: Exclude<AttractionCategory, 'all'>;
  maxMinutes: number;
  imageSrc: string;
  imageAlt: string;
  mapsUrl: string;
  extraMapsUrl?: { label: string; url: string };
  translations: {
    bg: {
      title: string;
      subtitle: string;
      distance: string;
      driveTime: string;
      location: string;
      desc: string;
      highlights: string[];
    };
    en: {
      title: string;
      subtitle: string;
      distance: string;
      driveTime: string;
      location: string;
      desc: string;
      highlights: string[];
    };
    el: {
      title: string;
      subtitle: string;
      distance: string;
      driveTime: string;
      location: string;
      desc: string;
      highlights: string[];
    };
  };
}

const LANDMARKS: LandmarkData[] = [
  {
    id: 1,
    category: 'nature',
    maxMinutes: 5,
    imageSrc: '/Images/House/Landmarks/kavuka-waterfall.webp',
    imageAlt: 'Водопад Кавука - село Голец',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Водопад+Кавука+село+Голец',
    translations: {
      bg: {
        title: 'Водопад „Кавука“',
        subtitle: 'Природно съкровище в сърцето на село Голец! 🌿',
        distance: '2 км',
        driveTime: '5 мин пеша / с кола',
        location: 'с. Голец, общ. Угърчин, обл. Ловеч',
        desc: `Само на кратка разходка от къща за гости „Абстракт“ ще откриете едно малко познато, но изключително красиво кътче от природата.

Водопад „Кавука“ впечатлява със своите скални образувания, горска екопътека и спокойствието на заобикалящата го природа. Районът предлага възможност за разходки, пикник и бягство от градския шум.

Едно от местата, които си заслужава да посетите по време на престоя си в Голец!

Къща за гости „Абстракт“ – където модерното среща традицията.`,
        highlights: [
          'Само на кратка разходка от къщата',
          'Впечатляващи скални образувания',
          'Горска екопътека и спокойствие',
          'Идеално за пикник сред природата',
        ],
      },
      en: {
        title: 'Kavuka Waterfall',
        subtitle: 'A natural treasure in the heart of Golets village! 🌿',
        distance: '2 km',
        driveTime: '5 min walk / drive',
        location: 'Golets Village, Ugarchin Municipality, Lovech Province',
        desc: `Just a short walk from Abstract Guest House, you will discover a little-known yet exceptionally beautiful corner of nature.

Kavuka Waterfall impresses with its dramatic rock formations, shaded forest eco-trail, and the serene tranquility of the surrounding landscape. The area is perfect for leisurely walks, secluded picnics, and a true escape from city noise.

A must-visit local destination during your stay in Golets!

Abstract Guest House – where modern comfort meets authentic tradition.`,
        highlights: [
          'Short scenic walk from the house',
          'Dramatic natural rock formations',
          'Lush forest eco-trail and serenity',
          'Ideal spot for nature picnics',
        ],
      },
      el: {
        title: 'Καταρράκτης Καβούκα',
        subtitle: 'Ένας φυσικός θησαυρός στην καρδιά του χωριού Γκόλετς! 🌿',
        distance: '2 χλμ',
        driveTime: '5 λεπτά με τα πόδια / αυτοκίνητο',
        location: 'Χωριό Γκόλετς, Επαρχία Λόβετς',
        desc: `Σε μικρή απόσταση με τα πόδια από τον Ξενώνα Abstract, θα ανακαλύψετε μια ανεξερεύνητη και εξαιρετικά όμορφη γωνιά της φύσης.

Ο καταρράκτης Καβούκα εντυπωσιάζει με τους βραχώδεις σχηματισμούς του, το δασικό οικολογικό μονοπάτι και την απόλυτη ηρεμία του τοπίου. Η περιοχή προσφέρεται για περιπάτους, πικνίκ και απόδραση από τον θόρυβο της πόλης.

Ένα μέρος που αξίζει οπωσδήποτε να επισκεφθείτε κατά τη διαμονή σας στο Γκόλετς!

Ξενώνας Abstract – όπου το σύγχρονο συναντά την παράδοση.`,
        highlights: [
          'Σύντομος περίπατος από το σπίτι',
          'Εντυπωσιακοί βραχώδεις σχηματισμοί',
          'Δασικό μονοπάτι & γαλήνη',
          'Ιδανικό για πικνίκ στη φύση',
        ],
      },
    },
  },
  {
    id: 2,
    category: 'lakes',
    maxMinutes: 5,
    imageSrc: '/Images/House/Landmarks/golets-fishing-lakes.jpg',
    imageAlt: 'Риболов и язовири - село Голец',
    mapsUrl: 'https://maps.app.goo.gl/W1GaMJMdehkmHaiHA?g_st=ic',
    extraMapsUrl: {
      label: 'Малък язовир „Лугровото“',
      url: 'https://maps.app.goo.gl/tZGmSQKqt5AZHTct9?g_st=ic',
    },
    translations: {
      bg: {
        title: 'Риболов и спокойствие сред природата',
        subtitle: 'Село Голец – язовир „Лугровото“ и „Пазар дере“ 🎣',
        distance: '1.5 км',
        driveTime: '3–5 мин',
        location: 'с. Голец – яз. „Лугровото“ и яз. „Пазар дере“',
        desc: `За любителите на риболова в близост до къща за гости „Абстракт“ има два язовира – Малкият язовир „Лугровото“ и Големият язовир „Пазар дере“.

Единият е с площ около 9 декара, а другият – около 17 декара. До двата водоема има достъп с автомобил.

Те предлагат възможност за риболов, почивка край водата и бягство от ежедневието сред тишината и красотата на природата.

Къща за гости „Абстракт“ – където модерното среща традицията.`,
        highlights: [
          'Малък язовир „Лугровото“ (~9 дка)',
          'Голям язовир „Пазар дере“ (~17 дка)',
          'Удобен автомобилен достъп до брега',
          'Риболов и тишина сред природата',
        ],
      },
      en: {
        title: 'Fishing & Peaceful Nature',
        subtitle: 'Golets Village – Lugrovoto and Pazar Dere Lakes 🎣',
        distance: '1.5 km',
        driveTime: '3–5 min',
        location: 'Golets Village – Lugrovoto and Pazar Dere lakes',
        desc: `For fishing enthusiasts, two tranquil freshwater lakes await just minutes from Abstract Guest House: the Small Lake "Lugrovoto" and the Large Lake "Pazar Dere".

One covers approximately 9 decares (~2.2 acres), while the other spans roughly 17 decares (~4.2 acres). Both reservoirs have direct car access.

They offer excellent conditions for peaceful fishing, relaxing by the water, and stepping away from daily routines amidst undisturbed natural beauty.

Abstract Guest House – where modern comfort meets authentic tradition.`,
        highlights: [
          'Lugrovoto Small Lake (~9 decares)',
          'Pazar Dere Large Lake (~17 decares)',
          'Direct car access to the shore',
          'Serene fishing and lakeside relaxation',
        ],
      },
      el: {
        title: 'Ψάρεμα & Ηρεμία στη Φύση',
        subtitle: 'Χωριό Γκόλετς – Λίμνες Λουγκρόβοτο & Παζάρ Ντερέ 🎣',
        distance: '1.5 χλμ',
        driveTime: '3–5 λεπτά',
        location: 'Χωριό Γκόλετς – Λίμνες Λουγκρόβοτο & Παζάρ Ντερέ',
        desc: `Για τους λάτρεις του ψαρέματος, σε απόσταση αναπνοής από τον Ξενώνα Abstract υπάρχουν δύο γαλήνιες λίμνες – η Μικρή Λίμνη "Λουγκρόβοτο" και η Μεγάλη Λίμνη "Παζάρ Ντερέ".

Η μία έχει έκταση περίπου 9 στρέμματα και η άλλη περίπου 17 στρέμματα. Και στις δύο λίμνες υπάρχει εύκολη πρόσβαση με αυτοκίνητο.

Προσφέρουν μοναδικές ευκαιρίες για ψάρεμα, ξεκούραση δίπλα στο νερό και απόδραση από την καθημερινότητα μέσα στην ηρεμία της φύσης.

Ξενώνας Abstract – όπου το σύγχρονο συναντά την παράδοση.`,
        highlights: [
          'Μικρή Λίμνη "Λουγκρόβοτο" (9 στρέμματα)',
          'Μεγάλη Λίμνη "Παζάρ Ντερέ" (17 στρέμματα)',
          'Πρόσβαση με αυτοκίνητο στις όχθες',
          'Ψάρεμα και χαλάρωση δίπλα στο νερό',
        ],
      },
    },
  },
  {
    id: 3,
    category: 'lakes',
    maxMinutes: 30,
    imageSrc: '/Images/House/Landmarks/sopot-lake.jpg',
    imageAlt: 'Язовир Сопот край село Голяма Желязна',
    mapsUrl: 'https://maps.app.goo.gl/Vg2p5FNB54Bu7fPe8?g_st=ic',
    translations: {
      bg: {
        title: 'Язовир „Сопот“',
        subtitle: 'Рай за любителите на риболова и природата! 🎣',
        distance: '25 км',
        driveTime: 'около 30 мин',
        location: 'Язовир Сопот, край с. Голяма Желязна',
        desc: `На около 30 минути с автомобил от къща за гости „Абстракт“ се намира един от най-живописните язовири в Предбалкана.

Със своите впечатляващи размери, красиви брегове и разнообразие от риба, язовирът предлага чудесни възможности за риболов, разходки, къмпинг и водни забавления.

Перфектна идея за еднодневна разходка по време на престоя ви в Голец!

Къща за гости „Абстракт“ – където модерното среща традицията.`,
        highlights: [
          'Един от най-живописните язовири в Предбалкана',
          'Впечатляващи размери и красиви брегове',
          'Риболов, къмпинг и водни забавления',
          'Перфектна идея за еднодневна разходка',
        ],
      },
      en: {
        title: 'Lake Sopot',
        subtitle: 'A paradise for fishing and nature lovers! 🎣',
        distance: '25 km',
        driveTime: 'approx. 30 min',
        location: 'Lake Sopot, near Golyama Zhelyazna village',
        desc: `Located about 30 minutes by car from Abstract Guest House is one of the most picturesque reservoirs in the Pre-Balkans.

With its grand scale, panoramic shorelines, and diverse fish species, the lake provides wonderful opportunities for angling, walking, camping, and watersports.

A perfect day-trip destination during your stay in Golets!

Abstract Guest House – where modern comfort meets authentic tradition.`,
        highlights: [
          'Picturesque mountain reservoir',
          'Expansive scenic shorelines',
          'Angling, kayaking, and watersports',
          'Superb full-day excursion',
        ],
      },
      el: {
        title: 'Λίμνη Σόποτ',
        subtitle: 'Ένας παράδεισος για τους λάτρεις του ψαρέματος και της φύσης! 🎣',
        distance: '25 χλμ',
        driveTime: 'περίπου 30 λεπτά',
        location: 'Λίμνη Σόποτ, κοντά στο χωριό Γκολιάμα Ζελιάζνα',
        desc: `Σε απόσταση περίπου 30 λεπτών με το αυτοκίνητο από τον Ξενώνα Abstract βρίσκεται ένας από τους πιο γραφικούς ταμιευτήρες των Προβαλκανίων.

Με το εντυπωσιακό του μέγεθος, τις όμορφες όχθες και την πλούσια ποικιλία ψαριών, η λίμνη προσφέρει εξαιρετικές ευκαιρίες για ψάρεμα, βόλτες, κάμπινγκ και θαλάσσιες δραστηριότητες.

Μια ιδανική πρόταση για ημερήσια εκδρομή κατά τη διαμονή σας στο Γκόλετς!

Ξενώνας Abstract – όπου το σύγχρονο συναντά την παράδοση.`,
        highlights: [
          'Γραφικός ταμιευτήρας των Προβαλκανίων',
          'Εντυπωσιακές πανοραμικές όχθες',
          'Ψάρεμα, κάμπινγκ και θαλάσσια σπορ',
          'Ιδανικό για ημερήσια εκδρομή',
        ],
      },
    },
  },
  {
    id: 4,
    category: 'nature',
    maxMinutes: 50,
    imageSrc: '/Images/House/Landmarks/panega-ecotrail.jpg',
    imageAlt: 'Екопътека Искър – Панега',
    mapsUrl: 'https://maps.app.goo.gl/wBnRQM4z6esQFmNp9?g_st=ic',
    translations: {
      bg: {
        title: 'Екопътека „Искър – Панега“',
        subtitle: 'Едно незабравимо преживяване сред природата! 🌿',
        distance: '45 км',
        driveTime: 'около 50 мин',
        location: 'гр. Луковит, река Златна Панега',
        desc: `На около 50 минути с автомобил от къща за гости „Абстракт“ се намира една от най-красивите природни забележителности в България.

Река Златна Панега ще ви впечатли със своите кристално чисти синьо-зелени води, живописни скални образувания, дървени мостчета и красиви горски пейзажи.

В района можете да се насладите на разходки с каяк, водни колела и лодки, както и да посетите пещерата „Проходна“ – известна като „Очите на Бога“, Златен парк и карстовия извор Глава Панега.

Чудесна възможност за еднодневна семейна разходка, приключения и красиви спомени!

Къща за гости „Абстракт“ – където модерното среща традицията.`,
        highlights: [
          'Кристално чисти синьо-зелени води',
          'Дървени мостчета над живописен каньон',
          'Разходки с каяк, водни колела и лодки',
          'Близо до пещера „Проходна“ (Очите на Бога)',
        ],
      },
      en: {
        title: 'Iskar – Panega Eco-Trail',
        subtitle: 'An unforgettable wilderness encounter! 🌿',
        distance: '45 km',
        driveTime: 'approx. 50 min',
        location: 'Lukovit / Zlatna Panega River',
        desc: `About 50 minutes by car from Abstract Guest House lies one of Bulgaria’s most celebrated natural attractions.

The Zlatna Panega River will mesmerize you with its crystalline turquoise waters, dramatic limestone gorges, winding wooden boardwalks, and emerald forest scenery.

Visitors can enjoy kayak rentals, pedal boats, and boat rides, as well as combine the trip with visits to the world-renowned Prohodna Cave ("The Eyes of God"), the whimsical Golden Park, and the Glava Panega karst spring.

A marvelous full-day family adventure filled with unforgettable memories!

Abstract Guest House – where modern comfort meets authentic tradition.`,
        highlights: [
          'Vibrant crystalline turquoise waters',
          'Wooden boardwalks suspended above canyon',
          'Kayaking, pedal boats, and river tours',
          'Near Prohodna Cave ("Eyes of God")',
        ],
      },
      el: {
        title: 'Μονοπάτι Ίσκαρ – Πανέγκα',
        subtitle: 'Μια αξέχαστη εμπειρία στην καρδιά της φύσης! 🌿',
        distance: '45 χλμ',
        driveTime: 'περίπου 50 λεπτά',
        location: 'Λούκοβιτ / Ποταμός Ζλάτνα Πανέγκα',
        desc: `Σε απόσταση περίπου 50 λεπτών με το αυτοκίνητο από τον Ξενώνα Abstract βρίσκεται ένα από τα πιο όμορφα φυσικά αξιοθέατα της Βουλγαρίας.

Ο ποταμός Ζλάτνα Πανέγκα θα σας μαγέψει με τα κρυστάλλινα γαλαζοπράσινα νερά του, τους εντυπωσιακούς βράχους, τα ξύλινα γεφύρια και τα καταπράσινα δασικά τοπία.

Στην περιοχή μπορείτε να απολαύσετε βόλτες με καγιάκ, θαλάσσια ποδήλατα και βάρκες, καθώς και να επισκεφθείτε το παγκοσμίου φήμης Σπήλαιο Προχόντνα («Τα Μάτια του Θεού»), το Χρυσό Πάρκο και την καρστική πηγή Γκλάβα Πανέγκα.

Εξαιρετική επιλογή για ημερήσια οικογενειακή βόλτα και όμορφες αναμνήσεις!

Ξενώνας Abstract – όπου το σύγχρονο συναντά την παράδοση.`,
        highlights: [
          'Κρυστάλλινα γαλαζοπράσινα νερά',
          'Ξύλινα γεφύρια πάνω από το φαράγγι',
          'Καγιάκ, ποδήλατα νερού και βάρκες',
          'Κοντά στο Σπήλαιο Προχόντνα (Μάτια του Θεού)',
        ],
      },
    },
  },
  {
    id: 5,
    category: 'caves',
    maxMinutes: 45,
    imageSrc: '/Images/House/Landmarks/dupkata-rock-arch-uglen.jpg',
    imageAlt: 'Скалната арка Дупката край село Ъглен',
    mapsUrl: 'https://maps.app.goo.gl/wiYNDrKcLgH9yEAFA?g_st=ic',
    translations: {
      bg: {
        title: 'Скалната арка „Дупката“',
        subtitle: 'Природен феномен край село Ъглен! 🪨',
        distance: '35 км',
        driveTime: 'около 40–50 мин',
        location: 'с. Ъглен, общ. Луковит, обл. Ловеч',
        desc: `На около 40–50 минути с автомобил от къща за гости „Абстракт“ се намира едно от най-впечатляващите скални образувания в Ловешка област.

„Дупката“ представлява естествен скален мост над река Вит, оформен от хилядолетните природни процеси. Впечатляващата арка, красивият речен пейзаж и околните скали превръщат мястото в чудесна дестинация за разходка и фотография.

В района можете да разгледате още скалното образувание „Слончето“ и Червената стена.

Къща за гости „Абстракт“ – където модерното среща традицията.`,
        highlights: [
          'Естествен скален мост над река Вит',
          'Хилядолетен природен феномен',
          'Скалното образувание „Слончето“',
          'Внушителната Червена стена',
        ],
      },
      en: {
        title: 'The "Dupkata" Rock Arch',
        subtitle: 'A geological wonder near Uglen village! 🪨',
        distance: '35 km',
        driveTime: 'approx. 40–50 min',
        location: 'Uglen Village, Lukovit Municipality, Lovech Province',
        desc: `Approximately 40–50 minutes by car from Abstract Guest House sits one of the most striking rock formations in the Lovech Province.

"Dupkata" (The Hole) is a magnificent natural stone arch spanning over the Vit River, carved out by thousands of years of geological forces. The soaring arch, serene river valley, and limestone bluffs make this an extraordinary destination for walking and photography.

While in the area, you can also explore the "Sloncheto" (Little Elephant) rock formation and the soaring Red Wall cliff face.

Abstract Guest House – where modern comfort meets authentic tradition.`,
        highlights: [
          'Natural limestone arch bridging the Vit River',
          'Ancient geological marvel',
          '"Sloncheto" (Elephant) rock formation',
          'Dramatic Red Wall limestone cliffs',
        ],
      },
      el: {
        title: 'Πέτρινη Αψίδα «Ντούπκατα»',
        subtitle: 'Ένα γεωλογικό φαινόμενο δίπλα στο χωριό Ίγκλεν! 🪨',
        distance: '35 χλμ',
        driveTime: 'περίπου 40–50 λεπτά',
        location: 'Χωριό Ίγκλεν, Επαρχία Λόβετς',
        desc: `Σε απόσταση περίπου 40–50 λεπτών με το αυτοκίνητο από τον Ξενώνα Abstract βρίσκεται ένας από τους πιο εντυπωσιακούς βραχώδεις σχηματισμούς στην περιοχή του Λόβετς.

Η «Ντούπκατα» (Η Τρύπα) είναι μια φυσική πέτρινη γέφυρα πάνω από τον ποταμό Βιτ, σμιλεμένη από χιλιετίες φυσικών διεργασιών. Η εντυπωσιακή αψίδα, το όμορφο ποτάμιο τοπίο και οι γύρω βράχοι καθιστούν το μέρος κορυφαίο προορισμό για περίπατο και φωτογραφία.

Στην περιοχή μπορείτε επίσης να δείτε τον βραχώδη σχηματισμό «Ελεφαντάκι» και τον Κόκκινο Τοίχο.

Ξενώνας Abstract – όπου το σύγχρονο συναντά την παράδοση.`,
        highlights: [
          'Φυσική πέτρινη γέφυρα πάνω από τον ποταμό Βιτ',
          'Αρχαίο φυσικό φαινόμενο αιώνων',
          'Βραχώδης σχηματισμός «Ελεφαντάκι»',
          'Εντυπωσιακός βράχος «Κόκκινος Τοίχος»',
        ],
      },
    },
  },
  {
    id: 6,
    category: 'historic',
    maxMinutes: 35,
    imageSrc: '/Images/House/Landmarks/lovech-covered-bridge.jpg',
    imageAlt: 'Покрит мост и Ловешка крепост - град Ловеч',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Покрит+мост+Ловеч',
    extraMapsUrl: {
      label: 'Ловешка крепост „Хисаря“',
      url: 'https://www.google.com/maps/search/?api=1&query=Ловешка+крепост+Хисаря',
    },
    translations: {
      bg: {
        title: 'Ловеч за един ден',
        subtitle: 'История, архитектура и красиви гледки! 🏰',
        distance: 'около 30 км',
        driveTime: 'приблизително 30–35 мин',
        location: 'гр. Ловеч, област Ловеч',
        desc: `На около 30 минути с автомобил от къща за гости „Абстракт“ се намира град Ловеч – един от най-интересните исторически градове в България, съчетаващ богато културно наследство, възрожденска архитектура и красиви природни кътчета.

Сред най-емблематичните забележителности е Ловешката средновековна крепост „Хисаря“, разположена на хълма над града. От нея се открива впечатляваща панорамна гледка към Ловеч и река Осъм. Крепостта е свързана с важни събития от българската история.

Друга задължителна спирка е Покритият мост на Колю Фичето – символът на Ловеч. Построен над река Осъм, той впечатлява със своята възрожденска архитектура, малки магазинчета и занаятчийски обекти.

Не пропускайте и стария квартал „Вароша“ – архитектурно-исторически резерват с калдъръмени улички, възрожденски къщи и запазен дух от миналото. Това е прекрасно място за спокойна разходка и запознаване с историята на града.

За любителите на природата препоръчваме алея „Баш Бунар“ – живописен маршрут покрай река Осъм, заобиколен от зеленина и впечатляващи скални отвеси. По маршрута се намира и Табашката пещера – интересен природен и археологически обект.

Посещението на тези четири места може да се превърне в чудесна еднодневна разходка, съчетаваща история, култура и природа.

Къща за гости „Абстракт“ – където модерното среща традицията.`,
        highlights: [
          'Ловешка средновековна крепост „Хисаря“',
          'Покритият мост на майстор Колю Фичето',
          'Възрожденски квартал „Вароша“ с калдъръми',
          'Алея „Баш Бунар“ и Табашката пещера',
        ],
      },
      en: {
        title: 'Lovech in One Day',
        subtitle: 'History, heritage architecture, and grand views! 🏰',
        distance: 'approx. 30 km',
        driveTime: 'approx. 30–35 min',
        location: 'Lovech City, Lovech Province',
        desc: `Just 30 minutes by car from Abstract Guest House is Lovech – one of Bulgaria’s most captivating historic cities, seamlessly blending cultural heritage, Revival-era craftsmanship, and riverside nature.

Among its crown jewels is the Medieval Hisarya Fortress, commanding panoramic vistas over the old city and the Osam River winding below.

Another quintessential landmark is Kolyo Ficheto’s Covered Bridge, the true symbol of Lovech, spanning the Osam with charming artisan workshops.

Wander into the Old Quarter "Varosha", an architectural reserve with stone-cobbled lanes and authentic timber Revival houses.

Nature enthusiasts will also love the "Bash Bunar" river promenade with vertical limestone bluffs and the prehistoric Tabashka Cave.

Abstract Guest House – where modern comfort meets authentic tradition.`,
        highlights: [
          'Medieval Hisarya Fortress panoramic views',
          'Famous Kolyo Ficheto Covered Crafts Bridge',
          'Cobblestone Varosha Revival old town',
          'Bash Bunar park & Tabashka Cave trail',
        ],
      },
      el: {
        title: 'Λόβετς σε Μία Ημέρα',
        subtitle: 'Ιστορία, αναγεννησιακή αρχιτεκτονική και υπέροχη θέα! 🏰',
        distance: 'περίπου 30 χλμ',
        driveTime: 'περίπου 30–35 λεπτά',
        location: 'Πόλη Λόβετς, Επαρχία Λόβετς',
        desc: `Σε περίπου 30 λεπτά με το αυτοκίνητο από τον Ξενώνα Abstract βρίσκεται η πόλη Λόβετς – μία από τις πιο ενδιαφέρουσες ιστορικές πόλεις της Βουλγαρίας, που συνδυάζει πλούσια κληρονομιά, αναγεννησιακή αρχιτεκτονική και καταπράσινη φύση.

Ανάμεσα στα πιο εμβληματικά αξιοθέατα είναι το Μεσαιωνικό Φρούριο Χισάρια με πανοραμική θέα στην πόλη και τον ποταμό Όσαμ.

Απαραίτητη στάση είναι η Σκεπαστή Γέφυρα του Κόλιου Φιτσέτο – το σύμβολο του Λόβετς, με παραδοσιακά καταστήματα χειροτεχνίας.

Μην παραλείψετε την παλιά συνοικία «Βαρόσι» με τα λιθόστρωτα καλντερίμια και τα ιστορικά σπίτια, καθώς και τον παραποτάμιο πεζόδρομο «Μπας Μπουνάρ» με το προϊστορικό Σπήλαιο Ταμπάσκα.

Ξενώνας Abstract – όπου το σύγχρονο συναντά την παράδοση.`,
        highlights: [
          'Μεσαιωνικό Φρούριο Χισάρια με θέα',
          'Ιστορική Σκεπαστή Γέφυρα του Κόλιου Φιτσέτο',
          'Παλιά πόλη Βαρόσι με καλντερίμια',
          'Πεζόδρομος Μπας Μπουνάρ & Σπήλαιο Ταμπάσκα',
        ],
      },
    },
  },
  {
    id: 7,
    category: 'nature',
    maxMinutes: 35,
    imageSrc: '/Images/House/Landmarks/lovech-zoo.jpg',
    imageAlt: 'Зоопарк Ловеч в парк Стратеш',
    mapsUrl: 'https://maps.app.goo.gl/SCADuJ6qqDrdp1Se7?g_st=ic',
    translations: {
      bg: {
        title: 'Зоопарк Ловеч',
        subtitle: 'Приключение за малки и големи! 🦁',
        distance: 'около 30 км',
        driveTime: 'около 30–35 мин',
        location: 'парк „Стратеш“, гр. Ловеч',
        desc: `На около 30 минути с автомобил от къща за гости „Абстракт“ се намира Ловешкият зоопарк – едно от най-предпочитаните места за семейни разходки в региона.

Разположен сред красивата природа на парк „Стратеш“, зоопаркът предлага възможност да се запознаете с над 400 животни от различни части на света – лъвове, тигри, мечки, камили, бизони, елени, алпаки и много други.

Със своите просторни алеи и естествена зеленина той е чудесна дестинация за семейства с деца и любители на животните.

Къща за гости „Абстракт“ – където модерното среща традицията.`,
        highlights: [
          'Над 400 животни от цял свят',
          'Лъвове, тигри, камили, бизони и алпаки',
          'Просторни зелени алеи в парк „Стратеш“',
          'Идеално за семейства с деца',
        ],
      },
      en: {
        title: 'Lovech Zoo',
        subtitle: 'An adventure for visitors of all ages! 🦁',
        distance: 'approx. 30 km',
        driveTime: 'approx. 30–35 min',
        location: 'Stratesh Park, Lovech City',
        desc: `Just 30 minutes by car from Abstract Guest House is the Lovech Zoo – one of the region’s premier destinations for relaxed family excursions.

Nestled within the lush mature trees of Stratesh Park, the zoo is home to more than 400 animals from across the globe: lions, tigers, brown bears, camels, bisons, deer, alpacas, and many others.

With expansive tree-lined pathways and tranquil natural surroundings, it is an absolute favorite for families with children and animal lovers alike.

Abstract Guest House – where modern comfort meets authentic tradition.`,
        highlights: [
          'Over 400 animals from around the world',
          'Lions, tigers, bears, camels, and alpacas',
          'Expansive shaded lanes in Stratesh Park',
          'Loved by families and children',
        ],
      },
      el: {
        title: 'Ζωολογικός Κήπος Λόβετς',
        subtitle: 'Μια περιπέτεια για μικρούς και μεγάλους! 🦁',
        distance: 'περίπου 30 χλμ',
        driveTime: 'περίπου 30–35 λεπτά',
        location: 'Πάρκο Στράτες, Πόλη Λόβετς',
        desc: `Σε περίπου 30 λεπτά με το αυτοκίνητο από τον Ξενώνα Abstract βρίσκεται ο Ζωολογικός Κήπος του Λόβετς – ένας από τους πιο δημοφιλείς προορισμούς για οικογενειακές βόλτες στην περιοχή.

Μέσα στην πανέμορφη φύση του πάρκου «Στράτες», ο ζωολογικός κήπος φιλοξενεί πάνω από 400 ζώα από όλο τον κόσμο: λιοντάρια, τίγρεις, αρκούδες, καμήλες, βίσονες, ελάφια, αλπακά και πολλά άλλα.

Με τους άνετους διαδρόμους και το άφθονο πράσινο, αποτελεί ιδανική επιλογή για οικογένειες με παιδιά.

Ξενώνας Abstract – όπου το σύγχρονο συναντά την παράδοση.`,
        highlights: [
          'Πάνω από 400 ζώα από όλο τον κόσμο',
          'Λιοντάρια, τίγρεις, αρκούδες και αλπακά',
          'Καταπράσινοι διάδρομοι στο πάρκο Στράτες',
          'Ιδανικό για οικογένειες με παιδιά',
        ],
      },
    },
  },
  {
    id: 8,
    category: 'nature',
    maxMinutes: 60,
    imageSrc: '/Images/House/Landmarks/krushuna-waterfalls.jpg',
    imageAlt: 'Крушунски водопади - варовикови каскади',
    mapsUrl: 'https://maps.app.goo.gl/rauny1bkCseHENzU7?g_st=ic',
    translations: {
      bg: {
        title: 'Крушунски водопади',
        subtitle: 'Изумрудена водна каскада от варовикови тераси! 💧',
        distance: 'около 55–60 км',
        driveTime: 'около 55–65 мин',
        location: 'с. Крушуна, общ. Летница',
        desc: `Една от най-красивите природни забележителности в Ловешка област. Водопадите представляват впечатляваща каскада от варовикови тераси, малки водни басейни и тюркоазени вирове.

До тях води живописна екопътека с дървени мостчета и стъпала, подходяща за приятна разходка сред природата.

Къща за гости „Абстракт“ – където модерното среща традицията.`,
        highlights: [
          'Впечатляваща каскада от варовикови тераси',
          'Кристални тюркоазени вирове и басейни',
          'Живописна горска екопътека с дървени мостчета',
          'Една от топ забележителностите на България',
        ],
      },
      en: {
        title: 'Krushuna Waterfalls',
        subtitle: 'Emerald travertine cascades and turquoise pools! 💧',
        distance: 'approx. 55–60 km',
        driveTime: 'approx. 55–65 min',
        location: 'Krushuna Village, Letnitsa Municipality',
        desc: `One of Bulgaria’s most breathtaking natural treasures. The waterfalls form an awe-inspiring tiered cascade of limestone travertine shelves, crystal turquoise pools, and delicate water curtains.

A picturesque forest eco-trail equipped with wooden bridges and winding stairs meanders along the stream, offering an unforgettable and restorative walk through nature.

Abstract Guest House – where modern comfort meets authentic tradition.`,
        highlights: [
          'Cascading travertine terraces and limestone basins',
          'Luminous turquoise pools and forest streams',
          'Scenic wooden bridge pathways and lookout points',
          'One of Bulgaria’s premier natural wonders',
        ],
      },
      el: {
        title: 'Καταρράκτες Κρουσούνα',
        subtitle: 'Σμαραγδένιες ασβεστολιθικές βάθρες και τιρκουάζ νερά! 💧',
        distance: 'περίπου 55–60 χλμ',
        driveTime: 'περίπου 55–65 λεπτά',
        location: 'Χωριό Κρουσούνα, Επαρχία Λόβετς',
        desc: `Ένα από τα πιο εντυπωσιακά φυσικά αξιοθέατα στη Βουλγαρία. Οι καταρράκτες σχηματίζουν μια μοναδική διαδοχή από ασβεστολιθικές αναβαθμίδες, μικρές πισίνες και τιρκουάζ βάθρες.

Ένα γραφικό οικολογικό μονοπάτι με ξύλινα γεφύρια και σκαλοπάτια οδηγεί στους καταρράκτες, προσφέροντας μια μαγευτική βόλτα μέσα στο παρθένο δάσος.

Ξενώνας Abstract – όπου το σύγχρονο συναντά την παράδοση.`,
        highlights: [
          'Εντυπωσιακές ασβεστολιθικές φυσικές αναβαθμίδες',
          'Τιρκουάζ κρυστάλλινες φυσικές πισίνες',
          'Γραφικό δασικό μονοπάτι με ξύλινα γεφύρια',
          'Κορυφαίο φυσικό μνημείο της Βουλγαρίας',
        ],
      },
    },
  },
];

export default function HouseGuidePage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<AttractionCategory>('all');
  const [activeRadius, setActiveRadius] = useState<DriveRadiusFilter>('all');
  const [selectedItem, setSelectedItem] = useState<HouseAttractionItem | null>(null);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedCardId, setCopiedCardId] = useState<number | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Load saved itinerary from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('abstract_house_itinerary');
      if (stored) {
        setSavedIds(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  }, []);

  const toggleSave = useCallback(
    (item: HouseAttractionItem) => {
      setSavedIds((prev) => {
        let next: number[];
        if (prev.includes(item.id)) {
          next = prev.filter((id) => id !== item.id);
          showToast(`Премахнато от маршрута: ${item.title}`);
        } else {
          next = [...prev, item.id];
          showToast(`Добавено в маршрута: ${item.title} ✨`);
        }
        try {
          localStorage.setItem('abstract_house_itinerary', JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    },
    [showToast]
  );

  const clearItinerary = useCallback(() => {
    setSavedIds([]);
    try {
      localStorage.removeItem('abstract_house_itinerary');
    } catch {
      // ignore
    }
    showToast('Маршрутът беше изчистен');
  }, [showToast]);

  const copyLink = useCallback(
    (item: HouseAttractionItem, e?: React.MouseEvent) => {
      e?.stopPropagation();
      navigator.clipboard?.writeText(item.mapsUrl);
      setCopiedCardId(item.id);
      showToast(`Локацията на „${item.title}“ е копирана! 📍`);
      setTimeout(() => setCopiedCardId(null), 2000);
    },
    [showToast]
  );

  const content = {
    bg: {
      eyebrow: 'ИНТЕРАКТИВЕН ПЪТЕВОДИТЕЛ',
      title: 'Забележителности край с. Голец',
      subtitle: 'Водопади, екопътеки, язовири и история на минути от къща за гости „Абстракт“.',
      dialHeading: 'Филтър по разстояние с кола',
      dialAll: 'Всички разстояния',
      dial10: 'В Голец (≤ 10 мин)',
      dial35: 'Близо (≤ 35 мин)',
      dial60: 'Дневни турове (≤ 60 мин)',
      categories: {
        all: 'Всички категории (8)',
        nature: 'Водопади & Природа',
        lakes: 'Язовири & Риболов',
        caves: 'Скални феномени',
        historic: 'История & Култура',
      },
      categoryBadges: {
        nature: 'Природа',
        lakes: 'Язовир & Риболов',
        caves: 'Скален феномен',
        historic: 'История',
      },
      viewDetails: 'Разгледай детайли',
      openInMaps: 'Маршрут в Google Maps',
      distanceLabel: 'Разстояние',
      driveTimeLabel: 'Време за пътуване',
      locationLabel: 'Локация',
      highlightsLabel: 'Основни акценти',
      closeLabel: 'Затвори',
      saveLabel: 'Запази в маршрут',
      savedLabel: 'Запазено в маршрут',
      copyLinkLabel: 'Копирай локация',
      mobileFilterTitle: 'Филтри и разстояния',
      resetFilters: 'Изчисти',
      applyFilters: 'Приложи',
      categoryHeading: 'Категория',
      showingResults: 'забележителности',
      itineraryTitle: 'Моят план за разходки',
      itineraryBadge: 'Маршрут',
      emptyItinerary: 'Все още нямате запазени забележителности. Кликнете иконката с отметка на някоя карта!',
      totalStops: 'избрани спирки',
      openAllMaps: 'Навигирай маршрута',
      clearAll: 'Изчисти всички',
      viewSpot: 'Виж детайли',
      ctaTitle: 'Разходка през деня, горещо джакузи вечерта',
      ctaSubtitle: 'Върнете се край камината, сауната и басейна в Къща за гости „Абстракт“.',
      ctaReserve: 'Резервирай почивка',
      ctaDetails: 'Разгледай къщата',
    },
    el: {
      eyebrow: 'ΔΙΑΔΡΑΣΤΙΚΟΣ ΟΔΗΓΟΣ ΠΕΡΙΟΧΗΣ',
      title: 'Αξιοθέατα γύρω από το Γκόλετς',
      subtitle: 'Καταρράκτες, οικολογικά μονοπάτια, λίμνες και ιστορία λίγα λεπτά από τον Ξενώνα Abstract.',
      dialHeading: 'Φίλτρο απόστασης οδήγησης',
      dialAll: 'Όλες οι αποστάσεις',
      dial10: 'Στο Γκόλετς (≤ 10 λ)',
      dial35: 'Κοντινά (≤ 35 λ)',
      dial60: 'Ημερήσιες (≤ 60 λ)',
      categories: {
        all: 'Όλες οι κατηγορίες (8)',
        nature: 'Καταρράκτες & Φύση',
        lakes: 'Λίμνες & Ψάρεμα',
        caves: 'Βραχώδη φαινόμενα',
        historic: 'Ιστορία & Πολιτισμός',
      },
      categoryBadges: {
        nature: 'Φύση',
        lakes: 'Λίμνη & Ψάρεμα',
        caves: 'Βράχοι',
        historic: 'Ιστορία',
      },
      viewDetails: 'Δείτε λεπτομέρειες',
      openInMaps: 'Πλοήγηση στο Google Maps',
      distanceLabel: 'Απόσταση',
      driveTimeLabel: 'Χρόνος ταξιδιού',
      locationLabel: 'Τοποθεσία',
      highlightsLabel: 'Κύρια σημεία',
      closeLabel: 'Κλείσιμο',
      saveLabel: 'Προσθήκη στο πλάνο',
      savedLabel: 'Αποθηκεύτηκε στο πλάνο',
      copyLinkLabel: 'Αντιγραφή τοποθεσίας',
      mobileFilterTitle: 'Φίλτρα & Χρόνος',
      resetFilters: 'Καθαρισμός',
      applyFilters: 'Εφαρμογή',
      categoryHeading: 'Κατηγορία',
      showingResults: 'αξιοθέατα',
      itineraryTitle: 'Το Πλάνο Εκδρομής μου',
      itineraryBadge: 'Πλάνο',
      emptyItinerary: 'Δεν έχετε αποθηκεύσει αξιοθέατα ακόμα.',
      totalStops: 'επιλεγμένες στάσεις',
      openAllMaps: 'Άνοιγμα διαδρομής',
      clearAll: 'Καθαρισμός',
      viewSpot: 'Προβολή',
      ctaTitle: 'Εξερεύνηση την ημέρα, ζεστό τζακούζι το βράδυ',
      ctaSubtitle: 'Χαλαρώστε δίπλα στο τζάκι, τη σάουνα και την πισίνα του Ξενώνα Abstract.',
      ctaReserve: 'Κράτηση',
      ctaDetails: 'Δείτε το σπίτι',
    },
    en: {
      eyebrow: 'INTERACTIVE REGIONAL GUIDE',
      title: 'Landmarks Around Golets',
      subtitle: 'Waterfalls, eco-trails, fishing lakes, and medieval heritage minutes from Abstract Guest House.',
      dialHeading: 'Filter by Drive Time',
      dialAll: 'All Distances',
      dial10: 'In Golets (≤ 10 min)',
      dial35: 'Nearby (≤ 35 min)',
      dial60: 'Day Trips (≤ 60 min)',
      categories: {
        all: 'All Categories (8)',
        nature: 'Waterfalls & Nature',
        lakes: 'Lakes & Fishing',
        caves: 'Rock Wonders',
        historic: 'History & Culture',
      },
      categoryBadges: {
        nature: 'Nature',
        lakes: 'Lake & Fishing',
        caves: 'Rock Wonder',
        historic: 'History',
      },
      viewDetails: 'View details',
      openInMaps: 'Open in Google Maps',
      distanceLabel: 'Distance',
      driveTimeLabel: 'Travel Time',
      locationLabel: 'Location',
      highlightsLabel: 'Key Highlights',
      closeLabel: 'Close',
      saveLabel: 'Save to Itinerary',
      savedLabel: 'Saved to Itinerary',
      copyLinkLabel: 'Copy Location Link',
      mobileFilterTitle: 'Filters & Drive Time',
      resetFilters: 'Reset',
      applyFilters: 'Apply',
      categoryHeading: 'Category',
      showingResults: 'landmarks',
      itineraryTitle: 'My Travel Itinerary',
      itineraryBadge: 'Itinerary',
      emptyItinerary: 'No saved spots yet. Click the bookmark icon on any card to save it!',
      totalStops: 'saved stops',
      openAllMaps: 'Open Full Route',
      clearAll: 'Clear All',
      viewSpot: 'View details',
      ctaTitle: 'Daytime Adventures, Steaming Jacuzzi Nights',
      ctaSubtitle: 'Return to crackling firewood, sauna warmth, and pure relaxation at Abstract Guest House.',
      ctaReserve: 'Book Your Stay',
      ctaDetails: 'View The House',
    },
  };

  const currentLang = (language as 'bg' | 'en' | 'el') || 'en';
  const t = content[currentLang] || content.en;

  const attractions: HouseAttractionItem[] = useMemo(() => {
    return LANDMARKS.map((item) => {
      const tr = item.translations[currentLang] || item.translations.en;
      return {
        id: item.id,
        category: item.category,
        maxMinutes: item.maxMinutes,
        imageSrc: item.imageSrc,
        imageAlt: item.imageAlt,
        mapsUrl: item.mapsUrl,
        extraMapsUrl: item.extraMapsUrl,
        title: tr.title,
        subtitle: tr.subtitle,
        distance: tr.distance,
        driveTime: tr.driveTime,
        location: tr.location,
        desc: tr.desc,
        highlights: tr.highlights,
      };
    });
  }, [currentLang]);

  // Counts for the Radius Scrubber
  const radiusCounts = useMemo(() => {
    return {
      all: attractions.length,
      '10min': attractions.filter((a) => a.maxMinutes <= 10).length,
      '35min': attractions.filter((a) => a.maxMinutes <= 35).length,
      '60min': attractions.filter((a) => a.maxMinutes <= 60).length,
    };
  }, [attractions]);

  // Filter combined by category and drive radius
  const filteredAttractions = useMemo(() => {
    return attractions.filter((item) => {
      // Category match
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
      // Radius match
      let radiusMatch = true;
      if (activeRadius === '10min') radiusMatch = item.maxMinutes <= 10;
      else if (activeRadius === '35min') radiusMatch = item.maxMinutes <= 35;
      else if (activeRadius === '60min') radiusMatch = item.maxMinutes <= 60;

      return categoryMatch && radiusMatch;
    });
  }, [attractions, activeCategory, activeRadius]);

  const savedAttractions = useMemo(() => {
    return attractions.filter((a) => savedIds.includes(a.id));
  }, [attractions, savedIds]);

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

          {/* Desktop Filters (Always visible on lg screens) */}
        <div className="hidden lg:block">
          {/* Micro-interaction 1: Interactive Drive-Time Scrubber / Radius Dial */}
          <RadiusDial
            activeRadius={activeRadius}
            onChange={setActiveRadius}
            counts={radiusCounts}
            labels={{
              heading: t.dialHeading,
              all: t.dialAll,
              r10: t.dial10,
              r35: t.dial35,
              r60: t.dial60,
            }}
          />

          {/* Category Filter Pills with Smooth Animated Indicator */}
          <div
            role="group"
            aria-label={t.eyebrow}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {(['all', 'nature', 'lakes', 'caves', 'historic'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  'inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none',
                  activeCategory === cat
                    ? 'bg-[#5B7A3A] text-white shadow-md'
                    : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200',
                ].join(' ')}
              >
                {cat !== 'all' && renderCategoryIcon(cat, 'w-3.5 h-3.5')}
                <span>{t.categories[cat]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tablet & Mobile Collapsed Filter Bar (Saves vertical space) */}
        <MobileFilterDrawer
          isOpen={isMobileFiltersOpen}
          onToggle={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          activeRadius={activeRadius}
          onRadiusChange={setActiveRadius}
          radiusCounts={radiusCounts}
          totalResults={filteredAttractions.length}
          labels={{
            toggleTitle: t.mobileFilterTitle,
            reset: t.resetFilters,
            apply: t.applyFilters,
            radiusHeading: t.dialHeading,
            categoryHeading: t.categoryHeading,
            showingResults: t.showingResults,
            categories: t.categories,
            dialAll: t.dialAll,
            dial10: t.dial10,
            dial35: t.dial35,
            dial60: t.dial60,
          }}
        />

        {/* Landmark Cards Grid with 3D Tilt, Sheen, and Shared Element Feel */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredAttractions.map((item) => {
              const isSaved = savedIds.includes(item.id);
              const isCopied = copiedCardId === item.id;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Micro-interaction 2: Tactile 3D Tilt Card with Sheen */}
                  <TiltCard
                    onClick={() => setSelectedItem(item)}
                    className="group bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:border-[#5B7A3A]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Image Header with Floating Controls */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-108"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                        {/* Category Badge Pill */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#5B7A3A] shadow-xs">
                            {renderCategoryIcon(item.category, 'w-3 h-3')}
                            <span>{t.categoryBadges[item.category]}</span>
                          </span>
                        </div>

                        {/* Micro-interaction 3: Bookmark / Itinerary Toggle Button */}
                        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSave(item);
                            }}
                            aria-label={isSaved ? t.savedLabel : t.saveLabel}
                            className={[
                              'w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md backdrop-blur-sm cursor-pointer',
                              isSaved
                                ? 'bg-[#5B7A3A] text-white'
                                : 'bg-white/90 hover:bg-white text-zinc-700 hover:text-[#5B7A3A]',
                            ].join(' ')}
                          >
                            <motion.div
                              key={isSaved ? 'saved' : 'not'}
                              initial={{ scale: 0.6 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                            </motion.div>
                          </button>

                          {/* Micro-interaction 4: One-Click Quick Share / Copy Button */}
                          <button
                            type="button"
                            onClick={(e) => copyLink(item, e)}
                            aria-label={t.copyLinkLabel}
                            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-zinc-700 hover:text-[#5B7A3A] transition-colors shadow-md backdrop-blur-sm cursor-pointer"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-[#5B7A3A]" />
                            ) : (
                              <Share2 className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        {/* Drive Time Pill at bottom of image */}
                        <div className="absolute bottom-3 right-3 z-10">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white shadow-xs">
                            <Clock className="w-3 h-3 text-[#A3C878]" />
                            <span>{item.driveTime}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-1 text-[11px] text-zinc-500 font-medium mb-1.5">
                          <MapPin className="w-3 h-3 text-[#5B7A3A]" />
                          <span>{item.distance}</span>
                        </div>

                        <h2 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#5B7A3A] transition-colors leading-snug mb-1.5 line-clamp-1">
                          {item.title}
                        </h2>

                        <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed mb-3.5">
                          {item.subtitle}
                        </p>

                        {/* Preview Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {item.highlights.slice(0, 2).map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#F5F2ED] text-zinc-700 truncate max-w-full"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Hint */}
                    <div className="p-5 pt-0">
                      <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-[#5B7A3A] group-hover:text-[#4A642F] transition-colors">
                        <span>{t.viewDetails}</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Block */}
        <div className="bg-[#5B7A3A] rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
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

      {/* Micro-interaction 5: Expandable Modal with Integrated Bookmark & Copy */}
      <HouseGuideModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        categoryLabel={selectedItem ? t.categoryBadges[selectedItem.category] : undefined}
        openInMapsLabel={t.openInMaps}
        distanceLabel={t.distanceLabel}
        driveTimeLabel={t.driveTimeLabel}
        locationLabel={t.locationLabel}
        highlightsLabel={t.highlightsLabel}
        closeLabel={t.closeLabel}
        isSaved={selectedItem ? savedIds.includes(selectedItem.id) : false}
        onToggleSave={toggleSave}
        onCopyLink={copyLink}
        savedLabel={t.savedLabel}
        saveLabel={t.saveLabel}
        copyLinkLabel={t.copyLinkLabel}
      />

      {/* Micro-interaction 6: Floating Itinerary Tray / Route Planner */}
      <ItineraryDrawer
        savedItems={savedAttractions}
        onRemove={(id) => {
          const found = attractions.find((a) => a.id === id);
          if (found) toggleSave(found);
        }}
        onClear={clearItinerary}
        onSelect={(item) => setSelectedItem(item)}
        labels={{
          itineraryTitle: t.itineraryTitle,
          itineraryBadge: t.itineraryBadge,
          emptyText: t.emptyItinerary,
          totalStops: t.totalStops,
          openAllMaps: t.openAllMaps,
          clearAll: t.clearAll,
          close: t.closeLabel,
          viewSpot: t.viewSpot,
        }}
      />

      {/* Micro-interaction 7: Snappy Toast Feedback */}
      <Toast message={toastMessage} />
    </div>
  );
}
