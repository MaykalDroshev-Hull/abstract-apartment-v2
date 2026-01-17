import { Language } from '../lib/translations/types';

export type GuideItemTranslation = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tips?: string[];
  distance: string;
  imageAlt: string;
};

export type GuideItemRaw = {
  id: string;
  category: 'Taverns' | 'Beaches' | 'Walks' | 'Events' | 'Day Trips';
  imageSrc: string;
  mapsUrl: string;
  translations: Record<Language, GuideItemTranslation>;
};

export const guideDataRaw: GuideItemRaw[] = [
  // Taverns
  {
    id: 'tavern-1',
    category: 'Taverns',
    imageSrc: '/Images/Attractions/diktamo.jpg',
    mapsUrl: 'https://maps.app.goo.gl/iJFbzaw98TyqqEnL7?g_st=ic',
    translations: {
      en: {
        title: 'Diktamo Restaurant',
        subtitle: 'Traditional Greek dining',
        imageAlt: 'Diktamo Restaurant',
        description: 'A popular local restaurant serving authentic Greek cuisine in a welcoming atmosphere. Known for traditional dishes and fresh local ingredients.',
        highlights: [
          'Authentic Greek cuisine',
          'Fresh local ingredients',
          'Welcoming atmosphere',
          'Traditional dishes'
        ],
        tips: [
          'Reservations recommended during peak season',
          'Try the daily specials',
          'Great for families'
        ],
        distance: 'Walking distance'
      },
      bg: {
        title: 'Diktamo Restaurant',
        subtitle: 'Традиционна гръцка кухня',
        imageAlt: 'Ресторант Diktamo',
        description: 'Популярен местен ресторант, предлагащ автентична гръцка кухня в приветлива атмосфера. Известен с традиционните ястия и свежи местни продукти.',
        highlights: [
          'Автентична гръцка кухня',
          'Свежи местни продукти',
          'Приветлива атмосфера',
          'Традиционни ястия'
        ],
        tips: [
          'Резервации се препоръчват в пиковия сезон',
          'Опитайте дневните специалитети',
          'Отлично за семейства'
        ],
        distance: 'Пешеходно разстояние'
      },
      el: {
        title: 'Diktamo Restaurant',
        subtitle: 'Παραδοσιακή ελληνική κουζίνα',
        imageAlt: 'Εστιατόριο Diktamo',
        description: 'Δημοφιλές τοπικό εστιατόριο που σερβίρει αυθεντική ελληνική κουζίνα σε φιλική ατμόσφαιρα. Γνωστό για παραδοσιακά πιάτα και φρέσκα τοπικά συστατικά.',
        highlights: [
          'Αυθεντική ελληνική κουζίνα',
          'Φρέσκα τοπικά συστατικά',
          'Φιλική ατμόσφαιρα',
          'Παραδοσιακά πιάτα'
        ],
        tips: [
          'Συνιστώνται κρατήσεις κατά την αιχμή της σεζόν',
          'Δοκιμάστε τις ημερήσιες σπεσιαλιτέ',
          'Ιδανικό για οικογένειες'
        ],
        distance: 'Μικρή απόσταση με τα πόδια'
      }
    }
  },
  {
    id: 'tavern-2',
    category: 'Taverns',
    imageSrc: '/Images/Attractions/kasta.jpg',
    mapsUrl: 'https://maps.app.goo.gl/tbixn21wdpfbq4bP7?g_st=ic',
    translations: {
      en: {
        title: 'Kasta Rooftop',
        subtitle: 'Rooftop dining with views',
        imageAlt: 'Kasta Rooftop restaurant',
        description: 'A rooftop restaurant offering stunning views and a modern dining experience. Perfect for enjoying Greek cuisine while taking in panoramic vistas.',
        highlights: [
          'Rooftop dining experience',
          'Panoramic views',
          'Modern Greek cuisine',
          'Beautiful setting'
        ],
        tips: [
          'Best for sunset dining',
          'Make reservations in advance',
          'Great for special occasions'
        ],
        distance: 'Walking distance'
      },
      bg: {
        title: 'Kasta Rooftop',
        subtitle: 'Ресторант на покрива с гледка',
        imageAlt: 'Ресторант Kasta Rooftop',
        description: 'Ресторант на покрива с впечатляващи гледки и модерно ресторантърско преживяване. Перфектен за наслада на гръцка кухня с панорамни гледки.',
        highlights: [
          'Ресторантърско преживяване на покрива',
          'Панорамни гледки',
          'Модерна гръцка кухня',
          'Красива обстановка'
        ],
        tips: [
          'Най-добре за вечеря по залез',
          'Направете резервация предварително',
          'Отлично за специални поводи'
        ],
        distance: 'Пешеходно разстояние'
      },
      el: {
        title: 'Kasta Rooftop',
        subtitle: 'Εστιατόριο στη στεγή με θέα',
        imageAlt: 'Εστιατόριο Kasta Rooftop',
        description: 'Εστιατόριο στη στεγή που προσφέρει εντυπωσιακές θέες και μοντέρνα εστιατόρια εμπειρία. Ιδανικό για να απολαύσετε την ελληνική κουζίνα με πανοραμικές θέες.',
        highlights: [
          'Εμπειρία εστιατορίου στη στεγή',
          'Πανοραμικές θέες',
          'Μοντέρνα ελληνική κουζίνα',
          'Όμορφη τοποθεσία'
        ],
        tips: [
          'Ιδανικό για δείπνο τη δύση',
          'Κάντε κράτηση εκ των προτέρων',
          'Εξαιρετικό για ειδικές περιστάσεις'
        ],
        distance: 'Μικρή απόσταση με τα πόδια'
      }
    }
  },
  {
    id: 'tavern-3',
    category: 'Taverns',
    imageSrc: '/Images/Attractions/ΠΙΘΑΡΙ Ψαροταβέρνα.jpg',
    mapsUrl: 'https://maps.app.goo.gl/obGnFBNf5KxA6o7o9?g_st=ic',
    translations: {
      en: {
        title: 'Pithari Psarotaverna',
        subtitle: 'Fresh seafood taverna',
        imageAlt: 'Pithari Psarotaverna seafood restaurant',
        description: 'A traditional fish taverna specializing in fresh seafood caught daily by local fishermen. Authentic Greek seafood experience in a charming setting.',
        highlights: [
          'Fresh daily catch',
          'Traditional fish taverna',
          'Local seafood specialties',
          'Authentic Greek experience'
        ],
        tips: [
          'Try the grilled fish',
          'Best for seafood lovers',
          'Ask about the catch of the day'
        ],
        distance: 'Walking distance'
      },
      bg: {
        title: 'ΠΙΘΑΡΙ Ψαροταβέρνα',
        subtitle: 'Свежа рибна таверна',
        imageAlt: 'Рибна таверна ΠΙΘΑΡΙ',
        description: 'Традиционна рибна таверна, специализирана в свежи морски дарове, уловени дневно от местни рибари. Автентично гръцко преживяване с морски дарове в очарователна обстановка.',
        highlights: [
          'Свеж дневен улов',
          'Традиционна рибна таверна',
          'Местни специалитети от морски дарове',
          'Автентично гръцко преживяване'
        ],
        tips: [
          'Опитайте печената риба',
          'Най-добре за любители на морски дарове',
          'Попитайте за дневния улов'
        ],
        distance: 'Пешеходно разстояние'
      },
      el: {
        title: 'ΠΙΘΑΡΙ Ψαροταβέρνα',
        subtitle: 'Φρέσκια ψαροταβέρνα',
        imageAlt: 'Ψαροταβέρνα ΠΙΘΑΡΙ',
        description: 'Παραδοσιακή ψαροταβέρνα εξειδικευμένη σε φρέσκα θαλασσινά που πιάνονται καθημερινά από τοπικούς ψαράδες. Αυθεντική ελληνική εμπειρία με θαλασσινά σε γοητευτικό περιβάλλον.',
        highlights: [
          'Φρέσκο ημερήσιο ψάρεμα',
          'Παραδοσιακή ψαροταβέρνα',
          'Τοπικά σπεσιαλιτέ θαλασσινών',
          'Αυθεντική ελληνική εμπειρία'
        ],
        tips: [
          'Δοκιμάστε το ψητό ψάρι',
          'Ιδανικό για λάτρεις των θαλασσινών',
          'Ρωτήστε για το ημερήσιο ψάρεμα'
        ],
        distance: 'Μικρή απόσταση με τα πόδια'
      }
    }
  },
  {
    id: 'tavern-4',
    category: 'Taverns',
    imageSrc: '/Images/Attractions/Fish Taverna Atlantida.jpg',
    mapsUrl: 'https://maps.app.goo.gl/tsRpyU1nHqzzr61z6?g_st=ic',
    translations: {
      en: {
        title: 'Fish Taverna Atlantida',
        subtitle: 'Seaside seafood dining',
        imageAlt: 'Fish Taverna Atlantida',
        description: 'A seaside fish taverna offering fresh seafood with ocean views. Known for excellent quality fish and traditional Greek preparation methods.',
        highlights: [
          'Seaside location',
          'Fresh seafood selection',
          'Ocean views',
          'Traditional preparation'
        ],
        tips: [
          'Great for lunch or dinner',
          'Try the octopus and fresh fish',
          'Enjoy the sea breeze'
        ],
        distance: 'Walking distance'
      },
      bg: {
        title: 'Fish Taverna Atlantida',
        subtitle: 'Рибна таверна на морето',
        imageAlt: 'Рибна таверна Atlantida',
        description: 'Рибна таверна на брега, предлагаща свежи морски дарове с изглед към океана. Известна с отлично качество на рибата и традиционни гръцки начини на приготвяне.',
        highlights: [
          'Разположение на брега',
          'Избор от свежи морски дарове',
          'Изглед към океана',
          'Традиционно приготвяне'
        ],
        tips: [
          'Отлично за обяд или вечеря',
          'Опитайте октопода и свежата риба',
          'Насладете се на морския бриз'
        ],
        distance: 'Пешеходно разстояние'
      },
      el: {
        title: 'Fish Taverna Atlantida',
        subtitle: 'Ψαροταβέρνα στην παραλία',
        imageAlt: 'Ψαροταβέρνα Atlantida',
        description: 'Ψαροταβέρνα στην παραλία που προσφέρει φρέσκα θαλασσινά με θέα στον ωκεανό. Γνωστή για την εξαιρετική ποιότητα ψαριών και παραδοσιακές ελληνικές μεθόδους προετοιμασίας.',
        highlights: [
          'Τοποθεσία στην παραλία',
          'Επιλογή φρέσκων θαλασσινών',
          'Θέα στον ωκεανό',
          'Παραδοσιακή προετοιμασία'
        ],
        tips: [
          'Εξαιρετικό για γεύμα ή δείπνο',
          'Δοκιμάστε το χταπόδι και το φρέσκο ψάρι',
          'Απολαύστε τον θαλάσσιο αέρα'
        ],
        distance: 'Μικρή απόσταση με τα πόδια'
      }
    }
  },
  {
    id: 'tavern-5',
    category: 'Taverns',
    imageSrc: '/Images/Attractions/Kyriakos Taverna.jpg',
    mapsUrl: 'https://maps.app.goo.gl/EcPMheeMr4SCagpP6?g_st=ic',
    translations: {
      en: {
        title: 'Kyriakos Taverna',
        subtitle: 'Family-run traditional taverna',
        imageAlt: 'Kyriakos Taverna',
        description: 'A family-run taverna serving traditional Greek dishes with home-cooked flavors. Authentic atmosphere and warm hospitality from the owners.',
        highlights: [
          'Family-run establishment',
          'Home-cooked flavors',
          'Traditional recipes',
          'Warm hospitality'
        ],
        tips: [
          'Try the house specialties',
          'Great value for money',
          'Reservations recommended'
        ],
        distance: 'Walking distance'
      },
      bg: {
        title: 'Kyriakos Taverna',
        subtitle: 'Семейна традиционна таверна',
        imageAlt: 'Таверна Kyriakos',
        description: 'Семейна таверна, предлагаща традиционни гръцки ястия с домашни вкусове. Автентична атмосфера и топло гостеприимство от собствениците.',
        highlights: [
          'Семейно заведение',
          'Домашни вкусове',
          'Традиционни рецепти',
          'Топло гостеприимство'
        ],
        tips: [
          'Опитайте специалитетите на заведението',
          'Отлично съотношение цена-качество',
          'Резервации се препоръчват'
        ],
        distance: 'Пешеходно разстояние'
      },
      el: {
        title: 'Kyriakos Taverna',
        subtitle: 'Οικογενειακή παραδοσιακή ταβέρνα',
        imageAlt: 'Ταβέρνα Kyriakos',
        description: 'Οικογενειακή ταβέρνα που σερβίρει παραδοσιακά ελληνικά πιάτα με σπιτικές γεύσεις. Αυθεντική ατμόσφαιρα και θερμή φιλοξενία από τους ιδιοκτήτες.',
        highlights: [
          'Οικογενειακό κατάστημα',
          'Σπιτικές γεύσεις',
          'Παραδοσιακές συνταγές',
          'Θερμή φιλοξενία'
        ],
        tips: [
          'Δοκιμάστε τις σπεσιαλιτέ του μαγαζιού',
          'Εξαιρετική σχέση ποιότητας-τιμής',
          'Συνιστώνται κρατήσεις'
        ],
        distance: 'Μικρή απόσταση με τα πόδια'
      }
    }
  },
  
  // Day Trips
  {
    id: 'trip-1',
    category: 'Day Trips',
    imageSrc: '/Images/Attractions/Лутра Елефтерон.jpg',
    mapsUrl: 'https://maps.app.goo.gl/FrXkC4nr4vdmaX7J8?g_st=ic',
    translations: {
      en: {
        title: 'Loutra Eleftheron',
        subtitle: 'Natural thermal springs oasis',
        imageAlt: 'Loutra Eleftheron thermal springs',
        description: 'A unique natural area featuring natural hot mineral springs that emerge at temperatures of 36-42°C. Rich in minerals including sulfur and sodium, these springs are historically known for their therapeutic properties. The atmosphere is authentic and pure, a true natural oasis away from tourist crowds.',
        highlights: [
          'Natural hot mineral springs (36-42°C)',
          'Therapeutic properties for skin and joints',
          'Authentic natural setting',
          'Rich mineral content (sulfur, sodium)'
        ],
        tips: [
          'Perfect for relaxation and wellness',
          'Bring towels and water',
          'Best visited in the morning or afternoon',
          'Allow 2-3 hours for the experience',
          'Natural oasis away from crowds'
        ],
        distance: 'Short drive from Paralia Ofriniou'
      },
      bg: {
        title: 'Лутра Елефтерон',
        subtitle: 'Природен оазис с термални извори',
        imageAlt: 'Термални извори Лутра Елефтерон',
        description: 'Уникална природна зона с естествени топли минерални извори, които извира при температура 36-42°C. Богати на минерали, включително сяра и натрий, тези извори са исторически известни със своите лечебни свойства. Атмосферата е автентична и чиста, истински природен оазис, далеч от туристическите тълпи.',
        highlights: [
          'Естествени топли минерални извори (36-42°C)',
          'Лечебни свойства за кожата и ставите',
          'Автентична природна обстановка',
          'Богато съдържание на минерали (сяра, натрий)'
        ],
        tips: [
          'Перфектно за релакс и здраве',
          'Донесете кърпи и вода',
          'Най-добре се посещава сутрин или следобед',
          'Отделете 2-3 часа за преживяването',
          'Природен оазис, далеч от тълпите'
        ],
        distance: 'Кратка кола от Паралия Офринио'
      },
      el: {
        title: 'Λουτρά Ελευθερών',
        subtitle: 'Φυσική όαση με θερμές πηγές',
        imageAlt: 'Θερμές πηγές Λουτρά Ελευθερών',
        description: 'Μια μοναδική φυσική περιοχή με φυσικές θερμές ορυκτές πηγές που αναδύονται σε θερμοκρασίες 36-42°C. Πλούσιες σε ορυκτά, συμπεριλαμβανομένου θείου και νατρίου, αυτές οι πηγές είναι ιστορικά γνωστές για τις θεραπευτικές τους ιδιότητες. Η ατμόσφαιρα είναι αυθεντική και καθαρή, μια πραγματική φυσική όαση μακριά από τους τουριστικούς όχλους.',
        highlights: [
          'Φυσικές θερμές ορυκτές πηγές (36-42°C)',
          'Θεραπευτικές ιδιότητες για το δέρμα και τις αρθρώσεις',
          'Αυθεντικό φυσικό περιβάλλον',
          'Πλούσιο περιεχόμενο ορυκτών (θείο, νάτριο)'
        ],
        tips: [
          'Ιδανικό για χαλάρωση και ευεξία',
          'Φέρετε πετσέτες και νερό',
          'Καλύτερα να επισκεφτείτε το πρωί ή το απόγευμα',
          'Αφιέρωστε 2-3 ώρες για την εμπειρία',
          'Φυσική όαση μακριά από τους όχλους'
        ],
        distance: 'Μικρή απόσταση από την Παραλία Οφρυνιού'
      }
    }
  },
  {
    id: 'trip-2',
    category: 'Day Trips',
    imageSrc: '/Images/Attractions/Старият град на Кавала (Palia Poli).jpg',
    mapsUrl: 'https://maps.app.goo.gl/2nmsicuQ17NDotax9?g_st=ic',
    translations: {
      en: {
        title: 'Old Town of Kavala (Palia Poli)',
        subtitle: 'Journey back in time',
        imageAlt: 'Old Town of Kavala Palia Poli',
        description: 'One of the most romantic and authentic places in Northern Greece. Situated amphitheatrically above the port, it impresses with narrow cobblestone streets, stone houses, colorful balconies, and incredible views of the Aegean Sea. The highest point is the Kavala Fortress, offering panoramic views of the entire city and sea.',
        highlights: [
          'Historic cobblestone streets',
          'Kavala Fortress with panoramic views',
          'Mohammed Ali\'s birthplace',
          'Ancient churches and traditional tavernas'
        ],
        tips: [
          'Perfect for half-day excursion',
          'Best visited in the morning or late afternoon',
          'Wear comfortable walking shoes',
          'Great for photography, especially at sunset',
          'Combine with visit to local cafes and tavernas'
        ],
        distance: '~55 km | ~55-60 min drive'
      },
      bg: {
        title: 'Старият град на Кавала (Palia Poli)',
        subtitle: 'Пътуване назад във времето',
        imageAlt: 'Старият град на Кавала Palia Poli',
        description: 'Едно от най-романтичните и автентични места в Северна Гърция. Разположен амфитеатрално над пристанището, той впечатлява с тесни калдъръмени улички, каменни къщи, цветни балкони и невероятни гледки към Егейско море. Най-високата точка е Крепостта на Кавала, предлагаща панорамна гледка към целия град и морето.',
        highlights: [
          'Исторически калдъръмени улички',
          'Крепост Кавала с панорамни гледки',
          'Родното място на Мохамед Али',
          'Древни църкви и традиционни таверни'
        ],
        tips: [
          'Перфектно за полудневна екскурзия',
          'Най-добре се посещава сутрин или късно следобед',
          'Носете удобни обувки за разходка',
          'Отлично за фотография, особено по залез',
          'Комбинирайте с посещение на местни кафенета и таверни'
        ],
        distance: '~55 км | ~55–60 мин с кола'
      },
      el: {
        title: 'Παλιά Πόλη Καβάλας (Παλιά Πόλη)',
        subtitle: 'Ταξίδι πίσω στο χρόνο',
        imageAlt: 'Παλιά Πόλη Καβάλας',
        description: 'Ένα από τα πιο ρομαντικά και αυθεντικά μέρη της Βόρειας Ελλάδας. Βρίσκεται αμφιθεατρικά πάνω από το λιμάνι και εντυπωσιάζει με στενά λιθόστρωτα δρομάκια, πέτρινα σπίτια, πολύχρωμα μπαλκόνια και απίστευτες θέες στο Αιγαίο. Το υψηλότερο σημείο είναι το Φρούριο της Καβάλας, που προσφέρει πανοραμική θέα σε ολόκληρη την πόλη και τη θάλασσα.',
        highlights: [
          'Ιστορικά λιθόστρωτα δρομάκια',
          'Φρούριο Καβάλας με πανοραμικές θέες',
          'Γενέτειρα του Μοχάμεντ Αλή',
          'Αρχαίες εκκλησίες και παραδοσιακές ταβέρνες'
        ],
        tips: [
          'Ιδανικό για ημερήσια εκδρομή',
          'Καλύτερα να επισκεφτείτε το πρωί ή αργά το απόγευμα',
          'Φορέστε άνετα παπούτσια για περπάτημα',
          'Εξαιρετικό για φωτογραφία, ειδικά τη δύση',
          'Συνδυάστε με επίσκεψη σε τοπικά καφέ και ταβέρνες'
        ],
        distance: '~55 χλμ | ~55-60 λεπτά με αυτοκίνητο'
      }
    }
  },
  {
    id: 'trip-3',
    category: 'Day Trips',
    imageSrc: '/Images/Attractions/Пещерата Алистрати.jpg',
    mapsUrl: 'https://maps.app.goo.gl/juibxmumsn1xQbMk7?g_st=ic',
    translations: {
      en: {
        title: 'Alistrati Cave',
        subtitle: 'One of Greece\'s natural wonders',
        imageAlt: 'Alistrati Cave',
        description: 'One of the most impressive and largest caves in Greece and Europe. Features huge chambers, massive stalactites and stalagmites, and rare karst formations formed over millions of years. The accessible visitor path is about 1 km, suitable for all ages including children.',
        highlights: [
          'Massive chambers and formations',
          'Million-year-old karst formations',
          'Constant temperature year-round (17-18°C)',
          'Suitable for all ages'
        ],
        tips: [
          'Perfect escape even on hottest summer days',
          'Wear comfortable shoes',
          'Allow 1-2 hours for visit',
          'Great for families with children',
          'Cooler inside - bring a light jacket'
        ],
        distance: '~65 km | ~1 h 10 min drive'
      },
      bg: {
        title: 'Пещерата Алистрати',
        subtitle: 'Едно от природните чудеса на Гърция',
        imageAlt: 'Пещерата Алистрати',
        description: 'Една от най-впечатляващите и най-големите пещери в Гърция и Европа. Има огромни зали, масивни сталактити и сталагмити и редки карстови образувания, формирани в продължение на милиони години. Достъпната за посетители пътека е около 1 км, подходяща за всички възрасти, включително деца.',
        highlights: [
          'Масивни зали и образувания',
          'Милионолетни карстови образувания',
          'Постоянна температура през цялата година (17-18°C)',
          'Подходящо за всички възрасти'
        ],
        tips: [
          'Перфектно убежище дори в най-горещите летни дни',
          'Носете удобни обувки',
          'Отделете 1-2 часа за посещение',
          'Отлично за семейства с деца',
          'По-хладно вътре - донесете лек як'
        ],
        distance: '~65 км | ~1 ч. 10 мин с кола'
      },
      el: {
        title: 'Σπήλαιο Αλιστράτη',
        subtitle: 'Ένα από τα φυσικά θαύματα της Ελλάδας',
        imageAlt: 'Σπήλαιο Αλιστράτη',
        description: 'Ένα από τα πιο εντυπωσιακά και μεγαλύτερα σπήλαια στην Ελλάδα και την Ευρώπη. Χαρακτηρίζεται από τεράστιους θάλαμους, μαζικούς σταλακτίτες και σταλαγμίτες, και σπάνια καρστικά σχηματισμούς που σχηματίστηκαν επί εκατομμύρια χρόνια. Η προσβάσιμη διαδρομή για τους επισκέπτες είναι περίπου 1 χλμ, κατάλληλη για όλες τις ηλικίες, συμπεριλαμβανομένων των παιδιών.',
        highlights: [
          'Τεράστιοι θάλαμοι και σχηματισμοί',
          'Εκατομμυριοετείς καρστικοί σχηματισμοί',
          'Σταθερή θερμοκρασία όλο το χρόνο (17-18°C)',
          'Κατάλληλο για όλες τις ηλικίες'
        ],
        tips: [
          'Ιδανικό καταφύγιο ακόμη και στις πιο καυτές καλοκαιρινές μέρες',
          'Φορέστε άνετα παπούτσια',
          'Αφιέρωστε 1-2 ώρες για την επίσκεψη',
          'Εξαιρετικό για οικογένειες με παιδιά',
          'Πιο δροσερό εσωτερικά - φέρετε ένα ελαφρύ ζακετάκι'
        ],
        distance: '~65 χλμ | ~1 ώρα 10 λεπτά με αυτοκίνητο'
      }
    }
  },
  {
    id: 'trip-4',
    category: 'Day Trips',
    imageSrc: '/Images/Attractions/Пещерата Агитис (Maara).webp',
    mapsUrl: 'https://maps.app.goo.gl/oRAdxJAhv6kRhb1z5?g_st=ic',
    translations: {
      en: {
        title: 'Agitis Cave (Maara)',
        subtitle: 'Underground river and mystical atmosphere',
        imageAlt: 'Agitis Cave Maara underground river',
        description: 'A unique cave with an underground river, accessible via specially built pathways. One of the few river caves in Europe open to visitors. The combination of flowing water, huge chambers, and natural rock formations creates an unforgettable atmosphere with constant pleasant temperature and fresh, clean air.',
        highlights: [
          'Underground river experience',
          'Rare European river cave',
          'Natural rock formations',
          'Fresh, clean air'
        ],
        tips: [
          'Can be combined with visit to Drama area',
          'Allow 1-2 hours for visit',
          'Wear comfortable walking shoes',
          'Perfect for nature enthusiasts',
          'Check opening hours in advance'
        ],
        distance: '~75 km | ~1 h 20 min drive'
      },
      bg: {
        title: 'Пещерата Агитис (Maara)',
        subtitle: 'Подземна река и мистична атмосфера',
        imageAlt: 'Пещерата Агитис Maara подземна река',
        description: 'Уникална пещера с подземна река, достъпна чрез специално изградени пътеки. Една от малкото речни пещери в Европа, отворена за посетители. Комбинацията от течаща вода, огромни зали и естествени скални образувания създава незабравима атмосфера с постоянна приятна температура и свеж, чист въздух.',
        highlights: [
          'Преживяване с подземна река',
          'Рядка европейска речна пещера',
          'Естествени скални образувания',
          'Свеж, чист въздух'
        ],
        tips: [
          'Може да се комбинира с посещение в района на Драма',
          'Отделете 1-2 часа за посещение',
          'Носете удобни обувки за разходка',
          'Перфектно за любители на природата',
          'Проверете работните часове предварително'
        ],
        distance: '~75 км | ~1 ч. 20 мин с кола'
      },
      el: {
        title: 'Σπήλαιο Αγγίτη (Maara)',
        subtitle: 'Υπόγειος ποταμός και μυστικιστική ατμόσφαιρα',
        imageAlt: 'Σπήλαιο Αγγίτη Maara υπόγειος ποταμός',
        description: 'Ένα μοναδικό σπήλαιο με υπόγειο ποταμό, προσβάσιμο μέσω ειδικά κατασκευασμένων διαδρομών. Ένα από τα λίγα ποτάμια σπήλαια στην Ευρώπη ανοιχτά στους επισκέπτες. Ο συνδυασμός του ρέοντος νερού, των τεράστιων θαλάμων και των φυσικών βραχωδών σχηματισμών δημιουργεί μια αξέχαστη ατμόσφαιρα με σταθερή ευχάριστη θερμοκρασία και φρέσκο, καθαρό αέρα.',
        highlights: [
          'Εμπειρία υπόγειου ποταμού',
          'Σπάνιο ευρωπαϊκό ποτάμιο σπήλαιο',
          'Φυσικοί βραχώδεις σχηματισμοί',
          'Φρέσκος, καθαρός αέρας'
        ],
        tips: [
          'Μπορεί να συνδυαστεί με επίσκεψη στην περιοχή Δράμας',
          'Αφιέρωστε 1-2 ώρες για την επίσκεψη',
          'Φορέστε άνετα παπούτσια για περπάτημα',
          'Ιδανικό για λάτρεις της φύσης',
          'Ελέγξτε τις ώρες λειτουργίας εκ των προτέρων'
        ],
        distance: '~75 χλμ | ~1 ώρα 20 λεπτά με αυτοκίνητο'
      }
    }
  },
  {
    id: 'trip-5',
    category: 'Day Trips',
    imageSrc: '/Images/Attractions/Древният град Филипи.jpg',
    mapsUrl: 'https://maps.app.goo.gl/TgGpJvJsMvur2Te2A?g_st=ic',
    translations: {
      en: {
        title: 'Ancient Philippi',
        subtitle: 'UNESCO World Heritage Site',
        imageAlt: 'Ancient Philippi archaeological site',
        description: 'One of the most significant archaeological sites in Greece and a UNESCO World Heritage Site. Founded by Philip II of Macedon, the city played a key role in Roman and early Christian history. Visitors can explore the ancient theater, forum, Roman roads, and early Christian basilicas.',
        highlights: [
          'UNESCO World Heritage Site',
          'Ancient theater and forum',
          'Roman roads and architecture',
          'Early Christian basilicas'
        ],
        tips: [
          'Perfect for history and culture enthusiasts',
          'Easily done as half-day trip',
          'Great to combine with visit to Kavala',
          'Allow 2-3 hours for exploration',
          'Best visited in the morning'
        ],
        distance: '~50 km | ~50 min drive'
      },
      bg: {
        title: 'Древният град Филипи',
        subtitle: 'Обект на световното наследство на ЮНЕСКО',
        imageAlt: 'Археологически обект Филипи',
        description: 'Един от най-значимите археологически обекти в Гърция и обект на световното наследство на ЮНЕСКО. Основан от Филип II Македонски, градът е играл ключова роля в римската и раннохристиянската история. Посетителите могат да разгледат древния театър, форума, римските пътища и раннохристиянските базилики.',
        highlights: [
          'Обект на световното наследство на ЮНЕСКО',
          'Древен театър и форум',
          'Римски пътища и архитектура',
          'Раннохристиянски базилики'
        ],
        tips: [
          'Перфектно за любители на историята и културата',
          'Лесно се прави като полудневна екскурзия',
          'Отлично за комбиниране с посещение в Кавала',
          'Отделете 2-3 часа за разглеждане',
          'Най-добре се посещава сутрин'
        ],
        distance: '~50 км | ~50 мин с кола'
      },
      el: {
        title: 'Αρχαία Φίλιπποι',
        subtitle: 'Μνημείο Παγκόσμιας Κληρονομιάς UNESCO',
        imageAlt: 'Αρχαιολογικός χώρος Φιλίππων',
        description: 'Ένας από τους πιο σημαντικούς αρχαιολογικούς χώρους στην Ελλάδα και Μνημείο Παγκόσμιας Κληρονομιάς UNESCO. Ιδρύθηκε από τον Φίλιππο Β\' της Μακεδονίας, η πόλη έπαιξε καθοριστικό ρόλο στη ρωμαϊκή και πρώιμη χριστιανική ιστορία. Οι επισκέπτες μπορούν να εξερευνήσουν τον αρχαίο θέατρο, την αγορά, τους ρωμαϊκούς δρόμους και τις πρώιμες χριστιανικές βασιλικές.',
        highlights: [
          'Μνημείο Παγκόσμιας Κληρονομιάς UNESCO',
          'Αρχαίος θέατρος και αγορά',
          'Ρωμαϊκοί δρόμοι και αρχιτεκτονική',
          'Πρώιμες χριστιανικές βασιλικές'
        ],
        tips: [
          'Ιδανικό για λάτρεις της ιστορίας και του πολιτισμού',
          'Εύκολα γίνεται ως ημερήσια εκδρομή',
          'Εξαιρετικό για συνδυασμό με επίσκεψη στην Καβάλα',
          'Αφιέρωστε 2-3 ώρες για εξερεύνηση',
          'Καλύτερα να επισκεφτείτε το πρωί'
        ],
        distance: '~50 χλμ | ~50 λεπτά με αυτοκίνητο'
      }
    }
  }
];
