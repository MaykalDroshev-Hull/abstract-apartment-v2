import { Translations } from './types';

export const bg: Translations = {
  header: {
    logo: 'Моето Приложение',
    explore: 'Разгледай',
    plan: 'Планирай',
    reserve: 'Резервирай',
    exploreSections: {
      theVilla: {
        title: 'ВИЛАТА',
        items: [
          {
            label: 'Вилата',
            description: 'Открити жилищни пространства, проектирани да текат към морето.',
            href: '/details',
            icon: 'Home',
          },
          {
            label: 'План на етажа',
            description: 'Преглед на оформлението и потока на вилата.',
            href: '/floor-plan',
            icon: 'Layout',
          },
        ],
      },
      visualJourney: {
        title: 'ВИЗУАЛНО ПЪТУВАНЕ',
        items: [
          {
            label: 'Галерия',
            description: 'Моменти, заловени из цялата вила.',
            href: '/gallery',
            icon: 'Image',
          },
          {
            label: 'Facebook',
            description: 'Следвайте ни във Facebook.',
            href: 'https://www.facebook.com/profile.php?id=61575061973914',
            icon: 'Facebook',
          },
          {
            label: 'Instagram',
            description: 'Следвайте ни в Instagram.',
            href: 'https://www.instagram.com/abstract_apartment/',
            icon: 'Instagram',
          },
        ],
      },
      guestExperience: {
        title: 'ГОСТИНСКО ПРЕЖИВЯВАНЕ',
        items: [
          {
            label: 'Местен наръчник',
            description: 'Препоръчани места за храна, плажове, разходки и еднодневни екскурзии.',
            href: '/guide',
            icon: 'MapPin',
          },
          {
            label: 'За нас',
            description: 'Историята и хората зад Abstract Apartments.',
            href: '/about',
            icon: 'Users',
          },
          {
            label: 'Отзиви от гости',
            description: 'Истории от незабравимите престои на нашите гости.',
            href: '/reviews',
            icon: 'Star',
          },
          {
            label: 'Контакт',
            description: 'Свържете се с нашия екип.',
            href: '/contact',
            icon: 'Mail',
          },
        ],
      },
    },
    planSections: {
      bookingInfo: {
        title: 'ИНФОРМАЦИЯ ЗА РЕЗЕРВАЦИЯ',
        items: [
          {
            label: 'Цени и календар',
            description: 'Вижте сезонните цени и наличността на вилата за предпочитаните от вас дати.',
            href: '/rates',
            icon: 'DollarSign',
          },
          {
            label: 'Често задавани въпроси',
            description: 'Всичко, което трябва да знаете преди престоя си.',
            href: '/faq',
            icon: 'HelpCircle',
          },
        ],
      },
      travelLogistics: {
        title: 'ПЪТУВАНЕ И ЛОГИСТИКА',
        items: [
          {
            label: 'Как да стигнете',
            description: 'Открийте най-лесните маршрути и опции за трансфер до вилата.',
            href: '/getting-here',
            icon: 'MapPin',
          },
        ],
      },
      getInTouch: {
        title: 'СВЪРЖЕТЕ СЕ С НАС',
        items: [
          {
            label: 'Свържете се с нас',
            description: 'Свържете се с нашия екип за запитвания за вилата или персонализирана помощ.',
            href: '/contact',
            icon: 'Mail',
          },
          {
            label: 'Facebook',
            description: 'Следвайте ни във Facebook.',
            href: 'https://www.facebook.com/profile.php?id=61575061973914',
            icon: 'Facebook',
          },
        ],
      },
    },
    featuredCard: {
      title: 'Кокосовият телеграф',
      description: 'Истории, ръководства и островни бележки от Abstract Apartment. Внимателни прозрения за пътуване, дизайн и живот.',
      image: '/Images/index/DEMO-hero-image.jpg',
      ctaText: 'Разгледайте нашия Instagram',
      ctaLink: 'https://www.instagram.com/abstract_apartment/',
    },
  },
  footer: {
    company: 'Компания',
    about: 'За нас',
    contact: 'Свържете се с нас',
    legal: 'Правни',
    privacy: 'Политика за поверителност',
    terms: 'Условия за ползване',
    follow: 'Следвайте ни',
    description: 'Изживейте луксоз и комфорт в Abstract Apartment. Вашето перфектно убежище в Паралия Офринио.',
    copyright: '© 2024 Моето Приложение. Всички права запазени.',
    quickLinks: 'Бързи връзки',
    contacts: 'Контакти',
    phone: 'Телефон',
    email: 'Имейл',
    address: 'Адрес',
    niki: 'Ники',
    kika: 'Кика',
    copyrightText: 'Abstract Apartments. Всички права запазени.',
    createdBy: 'Създадено от',
  },
  common: {
    welcome: 'Добре дошли',
    loading: 'Зареждане...',
    error: 'Възникна грешка',
  },
  home: {
    title: 'Добре дошли',
    description: 'Това е вашата основна област за съдържание. Заглавката и долният колонтитул винаги са видими, и можете да превключвате между английски, български и гръцки, като използвате превключвателя за език в заглавката.',
    hero: {
      image: '/Images/Gallery/ApartmentFromOutside.jpg',
      imageAlt: 'Луксозна вила за наемане',
      location: 'Паралия Офринио',
      title: 'Abstract Apartment',
      cta: 'Разгледай Вилата',
      details: {
        guests: '8 Гости',
        bedrooms: '4 Спални',
        bathrooms: '3 Бани',
      },
    },
    villas: {
      intro: {
        headline: 'Две Отделни Вили\nПроектирани за Комфорт и Гъвкавост',
        description: 'Всяка вила предлага уникално преживяване, пригодено към вашите нужди. Независимо дали търсите просторни помещения за семейни събирания или уютно убежище за интимни моменти, нашите имоти съчетават модерен комфорт с внимателен дизайн, за да създадат незабравими престои.',
      },
      villa1: {
        name: 'Abstract Apartment',
        image: '/Images/Gallery/ApartmentFromOutside.jpg',
        imageAlt: 'Външен изглед на Abstract Apartment',
        details: {
          beds: '2 Легла',
          couch: '1 Диван',
          sleepCapacity: 'Настанява до 6 гости',
          bathrooms: '1 Баня',
        },
        cta: 'Виж Повече',
      },
      villa2: {
        name: 'Abstract Studio',
        image: '/Images/Gallery/LivingArea1.jpg',
        imageAlt: 'Вътрешен изглед на Abstract Studio',
        details: {
          beds: '2 Легла',
          sleepCapacity: 'Настанява до 4 гости',
          bathrooms: '1 Баня',
        },
        cta: 'Виж Повече',
      },
    },
    amenities: {
      intro: {
        title: 'Капацитет и удобства',
        subtitle: 'Всичко необходимо за спокоен престой',
        paragraphs: [
          'Апартамент "Абстракт" предлага комфортен дом далеч от вкъщи, само на 2 минути пеша от плажа и таверните. Насладете се на прекрасното гръцко море и се насладете на спокойствие и релакс в Паралия Офринио.',
          'Нашият напълно оборудван апартамент настанява до 6 гости, с модерни удобства и внимателни детайли навсякъде. Всяка стая е проектирана за комфорт, с климатици, тераси и всички необходими неща за незабравим престой.',
        ],
      },
      items: [
        {
          icon: 'capacity',
          title: 'Капацитет: 6 човека',
          description: 'Комфортно настаняване за до шест гости',
        },
        {
          icon: 'beds',
          title: '2 спални + 1 диван',
          description: 'Диванът се разтяга за двама допълнителни гости',
        },
        {
          icon: 'kitchen',
          title: 'Хол с кухненски блок',
          description: 'Напълно оборудвана кухня за всички ваши нужди',
        },
        {
          icon: 'bedrooms',
          title: '2 спални',
          description: 'Две комфортни спални с двойни легла',
        },
        {
          icon: 'ac',
          title: 'Климатици',
          description: 'Климатик във всяка стая за ваш комфорт',
        },
        {
          icon: 'bathroom',
          title: 'Баня с тоалетна',
          description: 'Лична баня с тоалетна за ваше изключително ползване',
        },
        {
          icon: 'washer',
          title: 'Пералня',
          description: 'Удобни перални услуги на разположение',
        },
        {
          icon: 'terrace',
          title: 'Голяма тераса с барбекю',
          description: 'Просторна външна зона с барбекю и камина',
        },
        {
          icon: 'tv',
          title: 'Телевизор във всяка стая',
          description: 'Развлечения налични в целия апартамент',
        },
        {
          icon: 'smartTv',
          title: 'Смарт телевизор в хола',
          description: 'Гледайте любимия си контент в основната жилищна зона',
        },
        {
          icon: 'wifi',
          title: 'WiFi',
          description: 'Високоскоростна безжична интернет връзка',
        },
        {
          icon: 'bgTv',
          title: 'Българска телевизия',
          description: 'Достъп до български телевизионни канали',
        },
      ],
      details: {
        title: 'Апартамент "Абстракт"',
        paragraphs: [
          'Добре дошли в Апартамент "Абстракт" – Вашият дом далеч от вкъщи. Бъдете наши гости през летните месеци и се насладете на прекрасното гръцко море – спокойствие и релакс в Паралия Офринио.',
          'Апартаментът се намира на 2 минути пешеходно разстояние от плажа и таверните. Насладете се на близо 60 таверни, в които може да опитате ароматно гръцко кафе, сочни морски дарове, прясна риба или хрупкави тиквички.',
          'Кухнята ни е напълно оборудвана, за да може да откликне на всички ваши нужди. На приготвената храна може да се насладите на голяма тераса, която да стане част от вашите прохладни вечери с Узо в ръка. Барбекюто ще бъде на ваше разположение през целия престой. За още по-голямо удобство сме приготвили за вас частно паркомясто и безжичен бърз интернет.',
        ],
        rooms: [
          {
            name: 'Стая 1',
            features: 'Двойно легло, климатик, тераса',
          },
          {
            name: 'Стая 2',
            features: 'Двойно легло, климатик, тераса',
          },
          {
            name: 'Стая 3',
            features: 'Разтегателен диван',
          },
        ],
        note: 'Възможност за детско легло',
      },
      video: {
        label: 'Видео разходка',
      },
    },
    journey: {
      title: 'Вашето пътуване',
      intro: 'Нашите вили се намират в Паралия Офринио, лесно достъпни с кола от България или чрез летище Солун. Отворете картата по-долу за точна навигация и указания до вашата дестинация.',
      address: 'Martini 7, Paralia Ofriniou 640 08, Greece',
      addressPlaceId: 'ChIJmagARgAlqRQR7AK38FlCyTE',
      beachDestination: 'Плаж Паралия Офринио',
      beachLat: 40.761556, // 40°45'41.6"N
      beachLng: 23.905167, // 23°54'18.6"E
      beachWalk: {
        title: 'Разходка до плаж Офринио',
        time: '4 мин',
        description: 'Само на крачка от апартамента',
        getDirections: 'Вижте указания за разходка',
        beachMapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Martini+7,+Paralia+Ofriniou+640+08,+Greece&destination=40.761556,23.905167&travelmode=walking',
      },
      mapLink: 'https://maps.app.goo.gl/8E1imSzn85aoWghi9',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.123456789!2d23.9069595!3d40.7631274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a925004600a899%3A0x31c94259f0b702ec!2sAbstract%20Apartment!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
      mapTitle: 'Местоположение на Abstract Apartment в Паралия Офринио, Гърция',
      openInMaps: 'Отвори в Google Maps',
      seeDirections: 'Виж указания и карта',
      steps: [
        {
          icon: 'address',
          label: 'Martini 7, Paralia Ofriniou',
          subtext: 'Точното ни местоположение в сърцето на Паралия Офринио',
        },
      ],
      details: {
        title: 'Как да стигнете',
        byCar: {
          title: 'Пристигане от България (С кола)',
          routes: [
            {
              from: 'От София',
              distance: '~300 км',
              duration: '4–5 часа',
            },
            {
              from: 'От Пловдив',
              distance: '~230 км',
              duration: '3.5–4 часа',
            },
          ],
          recommendations: 'Препоръчителна граница: Кулата–Промахонас. Маршрут: Промахонас → Серес → Кавала → Паралия Офринио',
        },
        byFlight: {
          title: 'Пристигане със самолет',
          description: 'Най-близко летище: Международно летище Солун (SKG). Разстояние: ~95 км / ~1.5 часа с кола.',
          options: [
            'Наем на кола (препоръчително)',
            'Такси',
            'Частен трансфер',
          ],
        },
      },
    },
    ctaReviews: {
      title: 'Изживейте спокойствие до морето',
      subtitle: 'Открийте всичко необходимо, за да планирате перфектния си престой в Abstract Apartment. От наличност и цени до научаване повече за нашата история и свързване с нашия екип.',
      seeDetails: 'Виж детайли',
      cards: [
        {
          href: '/rates',
          eyebrow: 'Планирайте пътуването си',
          title: 'Цени и наличност',
          description: 'Вижте сезонните цени и проверете наличността за предпочитаните от вас дати. Планирайте перфектния си престой с прозрачни цени.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
        {
          href: '/about',
          eyebrow: 'Запознайте се с нас',
          title: 'Нашата история',
          description: 'Научете за визията и хората зад Abstract Apartment. Открийте какво прави нашия имот специален.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
        {
          href: '/contact',
          eyebrow: 'Свържете се с нас',
          title: 'Контакти',
          description: 'Имате въпроси или се нуждаете от помощ? Свържете се с нашия екип. Тук сме, за да направим престоя ви незабравим.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
      ],
      reviews: [
        {
          name: 'Светослав Тодоров',
          body: 'Прекарахме чудесно тук като четирима приятели на пътуване. Какво чудесно място за престой. Има отлично жилищно пространство, удобни легла, напълно оборудвана кухня и пералня, която беше много полезна. Апартаментът се намира на около 300 метра от плажа. Паркирането беше безплатно и лесно. Имахме всичко необходимо.',
        },
        {
          name: 'Иван Иванов',
          body: 'Красив апартамент! Чист, просторен и много добре оборудван - има всичко необходимо за комфортен престой. Местоположението е отлично - само на 2 минути пеша от плажа, но в същото време на тихо и спокойно място. Голямата тераса и барбекюто са страхотни. Домакините са изключително гостоприемни и отзивчиви - готови да помогнат с всякакви въпроси. Определено ще посетя отново и силно препоръчвам на всеки, който търси хубаво и удобно място за престой в Паралия Офринио!',
        },
        {
          name: 'Гаврил Валентинов',
          body: 'Чист, хубав и добре обзаведен. Апартаментът е много близо до плажа и ресторантите, има просторна тераса с люлка. Мястото е тихо и спокойно. Домакините са много отзивчиви. Определено ще посетим отново!',
        },
      ],
    },
  },
  floorPlan: {
    title: 'План на етажа',
    description: 'Преглед на оформлението и потока на вилата за Abstract Apartment и Abstract Studio.',
    placeholder: 'План на етажа скоро',
    apartment: {
      title: 'Abstract Apartment',
      image: '/Images/Floorplans/apartment - filtered.png',
    },
    studio: {
      title: 'Abstract Studio',
      image: '/Images/Floorplans/studio - filtered.png',
    },
    cta: {
      title: 'Готови ли сте да планирате престоя си?',
      description: 'Направете резервация или разгледайте нашата галерия, за да видите повече от това, което ви очаква.',
    },
  },
  gallery: {
    title: 'Галерия',
    description: 'Разгледайте нашите пространства чрез внимателно подбрани изображения, показващи комфорта и елегантността на Abstract Apartment и Abstract Studio.',
    sections: [
      {
        id: 'apartment',
        title: 'Abstract Apartment',
        titleMobile: 'Апартамент',
        images: [
          {
            src: '/Images/Gallery/Bedroom1.jpg',
            alt: 'Спалня 1',
            caption: 'Комфортна спалня с двойно легло',
          },
          {
            src: '/Images/Gallery/Bedroom1_1.jpg',
            alt: 'Спалня 1 изглед 1',
          },
          {
            src: '/Images/Gallery/Bedroom1_2.jpg',
            alt: 'Спалня 1 изглед 2',
          },
          {
            src: '/Images/Gallery/Bedroom1_3.jpg',
            alt: 'Спалня 1 изглед 3',
          },
          {
            src: '/Images/Gallery/Bedroom1_4.jpg',
            alt: 'Спалня 1 изглед 4',
          },
          {
            src: '/Images/Gallery/Bedroom2.jpg',
            alt: 'Спалня 2',
            caption: 'Втора спалня с двойно легло',
          },
          {
            src: '/Images/Gallery/Bedroom2_2.jpg',
            alt: 'Спалня 2 изглед 2',
          },
          {
            src: '/Images/Gallery/Bedroom2_3.jpg',
            alt: 'Спалня 2 изглед 3',
          },
          {
            src: '/Images/Gallery/Bathroom.jpg',
            alt: 'Баня',
            caption: 'Лична баня с модерни удобства',
          },
          {
            src: '/Images/Gallery/ApartmentFromOutside.jpg',
            alt: 'Външен изглед на апартамента',
            caption: 'Външен изглед на Abstract Apartment',
          },
          {
            src: '/Images/Gallery/LivingArea1.jpg',
            alt: 'Жилищна зона',
            caption: 'Просторна жилищна зона',
          },
          {
            src: '/Images/Gallery/LivingAreaTable.jpg',
            alt: 'Жилищна зона с маса',
          },
          {
            src: '/Images/Gallery/LivingRoom2.jpg',
            alt: 'Хол изглед 2',
          },
          {
            src: '/Images/Gallery/LivingRoom4.jpg',
            alt: 'Хол изглед 4',
          },
          {
            src: '/Images/Gallery/LivingRoom5.jpg',
            alt: 'Хол изглед 5',
          },
          {
            src: '/Images/Gallery/LivingRoom7.jpg',
            alt: 'Хол изглед 7',
          },
          {
            src: '/Images/Gallery/LivingRoom8.jpg',
            alt: 'Хол изглед 8',
          },
          {
            src: '/Images/Gallery/LivingRoom9.jpg',
            alt: 'Хол изглед 9',
          },
          {
            src: '/Images/Gallery/KitchenArea.jpg',
            alt: 'Кухненска зона',
            caption: 'Напълно оборудвана кухня',
          },
          {
            src: '/Images/Gallery/KitchenAreaCloser1.jpg',
            alt: 'Кухненска зона близо',
          },
          {
            src: '/Images/Gallery/BigTerrace.jpg',
            alt: 'Голяма тераса',
            caption: 'Просторна тераса с външни места за сядане',
          },
          {
            src: '/Images/Gallery/BigTerrace2.jpg',
            alt: 'Голяма тераса изглед 2',
          },
          {
            src: '/Images/Gallery/BigTerrace3.jpg',
            alt: 'Голяма тераса изглед 3',
          },
          {
            src: '/Images/Gallery/BigTerrace5.jpg',
            alt: 'Голяма тераса изглед 5',
          },
          {
            src: '/Images/Gallery/BigTerrace6.jpg',
            alt: 'Голяма тераса изглед 6',
          },
          {
            src: '/Images/Gallery/BigTerrace8.jpg',
            alt: 'Голяма тераса изглед 8',
          },
          {
            src: '/Images/Gallery/BigTerrace9.jpg',
            alt: 'Голяма тераса изглед 9',
          },
          {
            src: '/Images/Gallery/SmallTerrace.jpg',
            alt: 'Малка тераса',
          },
          {
            src: '/Images/Gallery/SmallTerrace2.jpg',
            alt: 'Малка тераса изглед 2',
          },
          {
            src: '/Images/Gallery/MainDoor.jpg',
            alt: 'Главен вход',
          },
          {
            src: '/Images/Gallery/Garage.jpg',
            alt: 'Гараж',
          },
          {
            src: '/Images/Gallery/ElectricalAndInfoCloser.jpg',
            alt: 'Електрическа и информационна панел',
          },
        ],
      },
      {
        id: 'studio',
        title: 'Abstract Studio',
        titleMobile: 'Студио',
        images: [
          {
            src: '/Images/Gallery/LivingArea1.jpg',
            alt: 'Студио жилищна зона',
            caption: 'Комфортно студио пространство',
          },
          {
            src: '/Images/Gallery/LivingArea1.jpg',
            alt: 'Студио интериор',
            caption: 'Вътрешен изглед на Abstract Studio',
          },
        ],
      },
    ],
  },
  guide: {
    title: 'Местен наръчник',
    description: 'Паралия Офринио е перфектно разположена между морето, планината и културните забележителности на Северна Гърция. Оттук лесно можете да организирате еднодневни пътувания до пещери, древни градове, еко пътеки и живописни места, а вечер да се върнете в спокойствието на морския курорт.',
    reserve: 'Резервирай',
    contactUs: 'Свържи се с нас',
    categories: {
      all: 'Всички',
      taverns: 'Таверни',
      beaches: 'Плажове',
      walks: 'Разходки',
      events: 'Събития',
      dayTrips: 'Еднодневни екскурзии',
    },
    modal: {
      highlights: 'Особености',
      tips: 'Съвети',
      distance: 'Разстояние от апартамента:',
      openInMaps: 'Отвори в Google Maps',
      website: 'Уебсайт',
    },
  },
  about: {
    hero: {
      title: 'За Abstract Apartments',
      subtitle: 'Спокойно пристанище до морето в Паралия Офринио. Комфорт, простота и всичко необходимо за спокойна почивка на няколко минути пеша от плажа.',
      ctaPrimary: 'Разгледай апартаментите',
      ctaSecondary: 'Виж галерията',
    },
    story: {
      eyebrow: 'НАШАТА ИСТОРИЯ',
      title: 'Престой, оформен от комфорт и морето',
      paragraphs: [
        'Abstract Apartments са създадени с идеята за спокойно и удобно преживяване до морето. Всяка детайл е обмислен, за да осигури практичност и уют в спокойна обстановка.',
        'Разположени в Паралия Офринио, апартаментите предлагат лесен достъп до плажа и местните таверни, докато запазват спокойствието на тих квартал. Фокусът е върху чистотата, удобството и внимателното обслужване, което прави престоя лесен и приятен.',
        'Вярваме, че най-добрият престой е този, при който се чувствате като у дома си, но с красотата на гръцкото море на няколко крачки разстояние.',
      ],
    },
    values: [
      {
        title: 'Комфорт на първо място',
        description: 'Всяка детайл е обмислен за вашето удобство и спокойствие.',
        icon: 'Home',
      },
      {
        title: 'Чисто и поддържано',
        description: 'Поддържаме високи стандарти за чистота и поддръжка.',
        icon: 'Sparkles',
      },
      {
        title: 'Пешеходна локация',
        description: 'Само няколко минути до плажа, таверните и всичко необходимо.',
        icon: 'MapPin',
      },
      {
        title: 'Помощни домакини',
        description: 'Винаги на разположение за съвети и подкрепа по време на престоя ви.',
        icon: 'Heart',
      },
    ],
    team: {
      eyebrow: 'ЗАПОЗНАЙТЕ СЕ С ДОМАКИНИТЕ',
      title: 'Хората зад Abstract Apartments',
      paragraphs: [
        'Ние сме местен екип, посветен на осигуряването на приятен и безпроблемен престой. Готови сме да отговорим на въпроси, да дадем съвети за местни места и да направим престоя ви максимално удобен.',
        'Нашата цел е да се чувствате добре дошли и поддържани от момента на пристигането до напускането.',
      ],
      cta: 'Свържи се с нас',
      members: [
        {
          name: 'Ники',
          role: 'Домакин',
          bio: 'Винаги на разположение за въпроси и съвети. Обича да споделя местни тайни места и да помага на гостите да се насладят максимално на престоя си.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
        {
          name: 'Кика',
          role: 'Домакин',
          bio: 'Посветена на осигуряването на чистота и комфорт. Готова да помогне с всичко необходимо за спокоен и приятен престой.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
      ],
    },
    cta: {
      title: 'Готови ли сте за спокойна почивка до морето?',
      description: 'Проверете наличността, резервирайте или се свържете с нас за въпроси.',
      primaryButton: 'Резервирай',
      secondaryButton: 'Свържи се с нас',
    },
  },
  contact: {
    hero: {
      title: 'Контакти',
      description: 'Въпроси относно наличност, пътуване или апартаментите? Изпратете ни съобщение и ще се свържем с вас.',
      ctaPrimary: 'Резервирай',
      ctaSecondary: 'Виж галерията',
    },
    form: {
      title: 'Изпратете съобщение',
      name: 'Име',
      namePlaceholder: 'Вашето име',
      email: 'Имейл',
      emailPlaceholder: 'your.email@example.com',
      phone: 'Телефон',
      phonePlaceholder: '+359...',
      subject: 'Тема',
      message: 'Съобщение',
      messagePlaceholder: 'Вашето съобщение...',
      submit: 'Изпрати съобщение',
      required: 'Това поле е задължително',
      invalidEmail: 'Моля, въведете валиден имейл адрес',
      successMessage: 'Съобщението ви е изпратено успешно! Ще се свържем с вас скоро.',
      subjects: [
        { value: 'Reservation', label: 'Резервация' },
        { value: 'Question', label: 'Въпрос' },
        { value: 'Policies', label: 'Политики' },
        { value: 'Other', label: 'Друго' },
      ],
    },
    info: {
      address: {
        label: 'Адрес',
        value: 'Martini 7, Paralia Ofriniou 640 08, Greece',
        mapsUrl: 'https://maps.google.com/?q=Martini+7+Paralia+Ofriniou+640+08+Greece',
        mapsLink: 'Отвори в Google Maps',
      },
      phone: {
        label: 'Телефон',
        numbers: [
          { phone: '+359886790681', name: 'Ники' },
          { phone: '+359878112454', name: 'Кика' },
        ],
      },
      email: {
        label: 'Имейл',
        value: 'abstract.apartments@gmail.com',
      },
    },
    faq: {
      title: 'Политики и условия',
      items: [
        {
          q: 'Настаняване',
          a: 'След 15:00 часа.',
        },
        {
          q: 'Освобождаване',
          a: 'До 10:00 часа.',
        },
        {
          q: 'Тютюнопушене',
          a: 'Забранено във всички помещения.',
        },
        {
          q: 'Домашни любимци',
          a: 'По предварително запитване.',
        },
        {
          q: 'Минимален престой',
          a: '3 нощувки.',
        },
        {
          q: 'Отстъпка при по-дълъг престой',
          a: 'Резервирайте 7 нощувки и получете 8-мата безплатно.',
        },
        {
          q: 'Депозит',
          a: '30% от стойността на престоя при резервация.',
        },
      ],
    },
  },
  rates: {
    hero: {
      title: 'Цени и календар',
      description: 'Разгледайте наличността и сезонните цени. Намерете перфектното време за вашия престой.',
      ctaPrimary: 'Резервирай',
      ctaSecondary: 'Свържи се с нас',
    },
    search: {
      checkIn: 'Настаняване',
      checkOut: 'Освобождаване',
      guests: 'Гости',
      guest: 'Гост',
      button: 'Търси',
      unitType: 'Тип единица',
      apartment: 'Апартамент',
      studio: 'Студио',
      both: 'И двете',
      showCalendar: 'Покажи календар',
      hideCalendar: 'Скрий календар',
      checkingAvailability: 'Проверява се наличността...',
      availableTitle: 'Налично!',
      availableMessage: 'Бихте ли искали да резервирате тези дати?',
      notAvailable: 'Тези дати не са налични. Моля, изберете различни дати.',
      bookNow: 'Да, Резервирай Тези Дати',
    },
    calendar: {
      available: 'Налично',
      unavailable: 'Не налично',
      today: 'Днес',
      selected: 'Избрано',
    },
    section: {
      title: 'Цени',
      caption: 'Цените са предмет на промяна. За най-точна цена, потърсете желаните дати по-горе.',
    },
    units: {
      apartment: {
        unit: 'Abstract Apartment',
        seasons: [
          {
            name: 'Май',
            dateRange: '1 май - 31 май',
            price: '€ 110 / нощувка',
            highlights: [
              'Най-хубавото време за почивка',
              'По-ниски цени',
              'По-малко туристи',
            ],
            availableDates: 'Свободни дати Май',
          },
          {
            name: 'Юни',
            dateRange: '1 юни - 30 юни',
            price: '€ 130 / нощувка',
            highlights: [
              'Топло време',
              'Идеално за море',
              'Все още спокойно',
            ],
            availableDates: 'Свободни дати Юни',
          },
          {
            name: 'Юли',
            dateRange: '1 юли - 31 юли',
            price: '€ 160 / нощувка',
            highlights: [
              'Горещо лято',
              'Много събития',
              'Перфектно за семейства',
            ],
            availableDates: 'Свободни дати Юли',
          },
          {
            name: 'Август',
            dateRange: '1 август - 31 август',
            price: '€ 160 / нощувка',
            highlights: [
              'Пикът на лятото',
              'Празници и фестивали',
              'Топло море',
            ],
            availableDates: 'Свободни дати Август',
          },
          {
            name: 'Септември',
            dateRange: '1 септември - 30 септември',
            price: '€ 130 / нощувка',
            highlights: [
              'Топло море',
              'По-спокойна атмосфера',
              'По-ниски цени',
            ],
            availableDates: 'Свободни дати Септември',
          },
          {
            name: 'Октомври',
            dateRange: '1 октомври - 31 октомври',
            price: '€ 100 / нощувка',
            highlights: [
              'Истинска почивка – без тълпи',
              'Най-достъпните цени за сезона',
              'Повече място, по-малко стрес',
            ],
            availableDates: 'Свободни дати Октомври',
          },
        ],
        extras: [
          'Минимален престой: 3 нощувки',
          'Депозит: 30% от стойността на престоя при резервация',
        ],
      },
      studio: {
        unit: 'Abstract Studio',
        seasons: [
          {
            name: 'Май',
            dateRange: '1 май - 31 май',
            price: '€ 80 / нощувка',
            highlights: [
              'Най-хубавото време за почивка',
              'По-ниски цени',
              'По-малко туристи',
            ],
            availableDates: 'Свободни дати Май',
          },
          {
            name: 'Юни',
            dateRange: '1 юни - 30 юни',
            price: '€ 95 / нощувка',
            highlights: [
              'Топло време',
              'Идеално за море',
              'Все още спокойно',
            ],
            availableDates: 'Свободни дати Юни',
          },
          {
            name: 'Юли',
            dateRange: '1 юли - 31 юли',
            price: '€ 120 / нощувка',
            highlights: [
              'Горещо лято',
              'Много събития',
              'Перфектно за семейства',
            ],
            availableDates: 'Свободни дати Юли',
          },
          {
            name: 'Август',
            dateRange: '1 август - 31 август',
            price: '€ 120 / нощувка',
            highlights: [
              'Пикът на лятото',
              'Празници и фестивали',
              'Топло море',
            ],
            availableDates: 'Свободни дати Август',
          },
          {
            name: 'Септември',
            dateRange: '1 септември - 30 септември',
            price: '€ 95 / нощувка',
            highlights: [
              'Топло море',
              'По-спокойна атмосфера',
              'По-ниски цени',
            ],
            availableDates: 'Свободни дати Септември',
          },
          {
            name: 'Октомври',
            dateRange: '1 октомври - 31 октомври',
            price: '€ 75 / нощувка',
            highlights: [
              'Истинска почивка – без тълпи',
              'Най-достъпните цени за сезона',
              'Повече място, по-малко стрес',
            ],
            availableDates: 'Свободни дати Октомври',
          },
        ],
        extras: [
          'Минимален престой: 3 нощувки',
          'Депозит: 30% от стойността на престоя при резервация',
        ],
      },
    },
    extras: {
      title: 'Допълнителна информация',
    },
  },
  reserve: {
    title: 'Резервирайте престоя си',
    subtitle: 'Завършете резервацията си в няколко прости стъпки',
    steps: {
      villa: 'Вила',
      dates: 'Дати',
      details: 'Детайли',
      review: 'Преглед',
    },
    villa: {
      title: 'Изберете вашата вила',
      apartment: {
        name: 'Abstract Apartment',
        description: 'Просторен апартамент с модерни удобства',
        features: [
          'Настанява до 6 гости',
          '2 спални + диван',
          '1 баня',
          'Напълно оборудвана кухня',
          'Тераса с изглед към морето',
        ],
      },
      studio: {
        name: 'Abstract Studio',
        description: 'Уютно студио, перфектно за двойки',
        features: [
          'Настанява до 2 гости',
          '2 легла',
          '1 баня',
          'Кухненка',
          'Частен балкон',
        ],
      },
      both: {
        name: 'Апартамент + Студио',
        description: 'Резервирайте и двете единици заедно за по-големи групи',
        features: [
          'Настанява до 8 гости',
          '3 спални + диван',
          '2 бани',
          '2 напълно оборудвани кухни',
          'Няколко тераси с изглед към морето',
        ],
      },
      perNight: '/ нощ',
      from: 'от',
    },
    dates: {
      title: 'Изберете дати и гости',
      datesLabel: 'Дати',
      checkIn: 'Настаняване',
      checkOut: 'Освобождаване',
      guestsLabel: 'Гости',
      adults: 'Възрастни',
      children: 'Деца',
      childrenOptional: 'Деца (по избор)',
      adult: 'Възрастен',
      child: 'Дете',
      checkingAvailability: 'Проверява се наличността...',
      apartmentNotAvailable: 'Апартаментът не е наличен за тези дати.',
      studioNotAvailable: 'Студиото не е налично за тези дати.',
      bothNotAvailable: 'Апартаментът и студиото не са налични за тези дати.',
      bothAvailable: 'И двете единици са налични за тези дати',
      unableToCheckAvailability: 'Не може да се провери наличността. Моля, опитайте отново.',
      availabilityCheckFailed: 'Проверката на наличността не бе успешна',
    },
    details: {
      title: 'Данни за гост',
      fullName: 'Пълно име',
      email: 'Имейл',
      phone: 'Телефон',
      country: 'Държава',
      countryOptional: 'Държава (по избор)',
      notes: 'Бележки / Специални заявки',
      notesOptional: 'Бележки / Специални заявки (по избор)',
      note: 'След като изпратите, ще се свържем с вас, за да потвърдим наличността и да уредим депозита.',
      required: '*',
      childBedSuggestion: 'Моля добавете кошара',
    },
    review: {
      title: 'Преглед и резервация',
      villa: 'Вила',
      dates: 'Дати',
      checkIn: 'Настаняване:',
      checkOut: 'Освобождаване:',
      nights: 'нощувки',
      night: 'нощувка',
      guests: 'Гости',
      contactInfo: 'Информация за контакт',
      name: 'Име:',
      email: 'Имейл:',
      phone: 'Телефон:',
      country: 'Държава:',
      notes: 'Бележки:',
      reserve: 'Резервирай',
      processing: 'Обработване...',
    },
    summary: {
      title: 'Резюме на резервацията',
      dates: 'Дати',
      guests: 'Гости',
      stayCost: 'Стойност на престоя',
      total: 'Общо',
      deposit: 'Депозит (30%)',
      depositNote: 'Дължим след потвърждение (уредено по телефон)',
      perNight: '/ нощ',
      basedOn: 'Въз основа на',
      promotion: 'Промоция:',
      nightFree: 'безплатна нощувка',
      nightsFree: 'безплатни нощувки',
      payFor: 'плащате за {paidNights} от {totalNights}',
    },
    success: {
      title: 'Заявката е получена',
      message: 'Ще се свържем с вас скоро, за да потвърдим резервацията ви и да уредим депозита и останалите детайли за плащане.',
      note: 'Вашата резервация се потвърждава само след като се свържем с вас и уредим депозитното плащане.',
      backHome: 'Обратно към началото',
      contactUs: 'Свържете се с нас',
    },
    validation: {
      villaRequired: 'Моля, изберете вила',
      checkInRequired: 'Датата на настаняване е задължителна',
      checkOutRequired: 'Датата на освобождаване е задължителна',
      checkOutAfterCheckIn: 'Датата на освобождаване трябва да е след датата на настаняване',
      nameRequired: 'Пълното име е задължително',
      emailRequired: 'Имейлът е задължителен',
      emailInvalid: 'Моля, въведете валиден имейл адрес',
      phoneRequired: 'Телефонният номер е задължителен',
    },
    buttons: {
      ok: 'OK',
      goBack: 'Назад',
    },
  },
  details: {
    hero: {
      eyebrow: 'ДЕТАЙЛИ',
      title: 'Абстракт',
      subtitle: 'Дом далеч от вкъщи в сърцето на Паралия Офриниу',
      highlights: [
        { text: '2 мин до плажа', icon: 'MapPin' },
        { text: 'До таверни', icon: 'Utensils' },
        { text: 'Бърз Wi-Fi', icon: 'Wifi' },
      ],
    },
    general: {
      welcome: 'Добре дошли',
      paragraphs: [
        'Лято и море в Паралия Офриниу',
        '2 минути пеша до плажа и таверните',
        'Много таверни и местна храна наблизо',
      ],
    },
    tabs: {
      apartment: 'Апартамент',
      studio: 'Студио',
    },
    apartment: {
      roomsTitle: 'Стаи',
      amenitiesTitle: 'Удобства и аменities',
      rooms: [
        { label: 'Стая 1', details: 'Двойно легло, климатик, тераса', icon: 'BedDouble' },
        { label: 'Стая 2', details: 'Двойно легло, климатик, тераса', icon: 'BedDouble' },
        { label: 'Стая 3', details: 'Разтегателен диван', icon: 'Sofa' },
        { label: 'Възможност за детско легло', details: 'По заявка', icon: 'Baby' },
      ],
      amenities: [
        { title: 'Климатик във всяка стая', icon: 'Snowflake' },
        { title: 'Българска телевизия', icon: 'Tv' },
        { title: 'Напълно оборудвана кухня', icon: 'CookingPot' },
        { title: 'Голяма тераса + барбекю', icon: 'Flame' },
        { title: 'Частен паркинг', icon: 'Car' },
        { title: 'Бърз Wi-Fi', icon: 'Wifi' },
      ],
    },
    studio: {
      roomsTitle: 'Стаи',
      amenitiesTitle: 'Удобства и аменities',
      rooms: [
        { label: 'Основна спална зона', details: '2 легла, климатик', icon: 'BedDouble' },
        { label: 'Баня', details: '1 баня', icon: 'BedDouble' },
        { label: 'Възможност за детско легло', details: 'По заявка', icon: 'Baby' },
      ],
      amenities: [
        { title: 'Напълно оборудвана кухненка', icon: 'CookingPot' },
        { title: 'Wi-Fi', icon: 'Wifi' },
        { title: 'Климатик', icon: 'Snowflake' },
        { title: 'Телевизия', icon: 'Tv' },
        { title: 'Лесен достъп до плаж/таверни', icon: 'MapPin' },
      ],
      note: 'Подробностите за Студиото ще бъдат добавени скоро.',
    },
    cta: {
      reserve: 'Резервирай',
      gallery: 'Галерия',
    },
  },
  faq: {
    hero: {
      eyebrow: 'FAQ',
      title: 'Често задавани въпроси',
      subtitle: 'Бързи отговори за политики, резервации и наличност.',
      ctaPrimary: 'Резервирай',
      ctaSecondary: 'Свържи се с нас',
    },
    policies: {
      title: 'Политики и условия',
      items: [
        {
          q: 'Настаняване',
          a: 'След 15:00 часа.',
        },
        {
          q: 'Освобождаване',
          a: 'До 10:00 часа.',
        },
        {
          q: 'Тютюнопушене',
          a: 'Забранено във всички помещения.',
        },
        {
          q: 'Домашни любимци',
          a: 'По предварително запитване.',
        },
        {
          q: 'Минимален престой',
          a: '3 нощувки.',
        },
        {
          q: 'Отстъпка при по-дълъг престой',
          a: 'Резервирайте 7 нощувки и получете 8-мата безплатно.',
        },
        {
          q: 'Депозит',
          a: '30% от стойността на престоя при резервация.',
        },
        {
          q: 'Паркиране',
          a: 'Имота предлага само едно лично парко място запазено за апартамента.',
        },
        {
          q: 'Тихи часове',
          a: 'Тихи часове между 14:00 и 17:30 часа - гостите трябва да спазват тишина.',
        },
        {
          q: 'Бебешка кошара',
          a: 'Бебешка кошара е налична при поискване (само за апартамента).',
        },
      ],
    },
    booking: {
      title: 'Резервации и наличност',
      items: [
        {
          q: 'Как да направя резервация?',
          a: 'Можете да направите заявка за резервация чрез страницата "Резервирай". След като изпратите заявката, собственикът ще се свърже с вас по телефон, за да потвърди наличността и да уреди депозита и останалата част от плащането.',
        },
        {
          q: 'Как да проверя наличност?',
          a: 'Можете да проверите наличността чрез страницата "Резервирай" или да се свържете директно с нас по телефон или имейл.',
        },
        {
          q: 'Какъв е депозитът?',
          a: 'Депозитът е 30% от стойността на престоя и се плаща след потвърждение на резервацията. Останалата част се плаща по време на настаняване или по споразумение.',
        },
        {
          q: 'Мога ли да променя датите?',
          a: 'Моля, свържете се с нас възможно най-скоро, за да проверим наличността за новите дати. Промените зависят от наличността и се уреждат индивидуално.',
        },
        {
          q: 'Има ли минимален престой?',
          a: 'Да, минималният престой е 3 нощувки. За по-дълги престои предлагаме отстъпка - резервирайте 7 нощувки и получете 8-мата безплатно.',
        },
        {
          q: 'Какво се случва при отмяна на резервация?',
          a: 'При отмяна на резервация капарото се възстановява, ако отмяната се направи 10-15 дни преди настаняването.',
        },
      ],
    },
    needHelp: {
      title: 'Имате още въпроси?',
      description: 'Пишете ни или се обадете — ще помогнем с наличност и резервация.',
      call: 'Обадете се',
      email: 'Пишете ни',
    },
  },
  gettingHere: {
    hero: {
      caption: 'GETTING HERE',
      title: 'Как да стигнете до нас',
      subtitle: 'Удобни инструкции за пристигане с кола от България или със самолет през Солун.',
      cta: {
        reserve: 'Резервирай',
        contact: 'Свържете се с нас',
      },
    },
    sectionTitle: 'Упътвания',
    helperNote: 'Препоръчваме да запазите локацията в Google Maps предварително за по-лесно пристигане.',
  },
  admin: {
    login: {
      title: 'Вход за Администратор',
      subtitle: 'Въведете вашите данни за достъп до административния панел',
      username: 'Потребителско име',
      password: 'Парола',
      usernamePlaceholder: 'Въведете потребителското име',
      passwordPlaceholder: 'Въведете паролата',
      loginButton: 'Влизане',
      loginError: 'Моля въведете потребителско име и парола',
      loginSuccess: 'Успешен вход',
      logoutSuccess: 'Успешен изход',
    },
    dashboard: {
      title: 'Управление на Резервации',
      logout: 'Изход',
      loading: 'Обработка...',
      addBooking: 'Добави Резервация',
      editBooking: 'Редактирай Резервация',
      saveChanges: 'Запази Промените',
      cancel: 'Отказ',
      deleteConfirm: 'Сигурни ли сте, че искате да изтриете тази резервация? Това действие не може да бъде отменено.',
      deleteSuccess: 'Резервацията е изтрита успешно',
      addSuccess: 'Резервацията е добавена успешно',
      updateSuccess: 'Резервацията е обновена успешно',
      loadError: 'Неуспешно зареждане на резервациите',
      addError: 'Неуспешно добавяне на резервация',
      updateError: 'Неуспешно обновяване на резервация',
      deleteError: 'Неуспешно изтриване на резервация',
      showAll: 'Покажи Всички',
      showUpcoming: 'Покажи Предстоящи',
      upcomingBookings: 'Предстоящи Резервации',
      allBookings: 'Всички Резервации',
      noBookings: 'Няма намерени резервации',
      form: {
        apartment: 'Апартамент',
        apartmentOptions: {
          apartment: 'Апартамент',
          studio: 'Студио',
        },
        checkIn: 'Дата на Настаняване',
        checkOut: 'Дата на Освобождаване',
        firstName: 'Име',
        lastName: 'Фамилия',
        telephone: 'Телефон',
        fullPrice: 'Пълна Цена (€)',
        paidPrice: 'Платена Цена (€)',
        comments: 'Коментари',
        commentsPlaceholder: 'Допълнителни бележки...',
        required: 'Това поле е задължително',
        checkOutAfterCheckIn: 'Датата на освобождаване трябва да е след датата на настаняване',
      },
      table: {
        apartment: 'Апартамент',
        guest: 'Гост',
        contact: 'Контакт',
        checkIn: 'Настаняване',
        checkOut: 'Освобождаване',
        price: 'Цена',
        paid: 'Платено',
        remaining: 'Оставащи',
        comments: 'Коментари',
        actions: 'Действия',
      },
      validation: {
        checkInRequired: 'Датата на настаняване е задължителна',
        checkOutRequired: 'Датата на освобождаване е задължителна',
        firstNameRequired: 'Името е задължително',
        lastNameRequired: 'Фамилията е задължителна',
        telephoneRequired: 'Телефонът е задължителен',
        fullPriceRequired: 'Пълната цена е задължителна',
        paidPriceRequired: 'Платената цена е задължителна',
      },
    },
  },
  reviews: {
    hero: {
      title: 'Отзиви от Гости',
      subtitle: 'Прочетете какво казват нашите гости за престоя си в Abstract Apartment',
    },
    sectionTitle: 'Какво Казват Нашите Гости',
    sectionSubtitle: 'Истински преживявания от истински гости',
    moreReviewsText: 'И още много отзиви...',
    readMore: 'Прочетете Повече Отзиви',
    leaveReview: 'Оставете Отзив',
    metaTitle: 'Отзиви от Гости - Abstract Apartment',
  },
  pageTitles: {
    home: 'Abstract Apartment - Луксозна вила до морето в Паралия Офринио',
    details: 'Детайли - Abstract Apartment',
    floorPlan: 'План на етажа - Abstract Apartment',
    gallery: 'Галерия - Abstract Apartment',
    guide: 'Местен наръчник - Abstract Apartment',
    rates: 'Цени и календар - Abstract Apartment',
    reserve: 'Резервирайте престоя си - Abstract Apartment',
    contact: 'Свържете се с нас - Abstract Apartment',
    about: 'За нас - Abstract Apartment',
    faq: 'Често задавани въпроси - Abstract Apartment',
    reviews: 'Отзиви от гости - Abstract Apartment',
    gettingHere: 'Как да стигнете - Abstract Apartment',
  },
  pageDescriptions: {
    home: 'Изживейте луксозен престой до морето в Abstract Apartment в Паралия Офринио, Гърция. Просторен апартамент и уютно студио с невероятна морска гледка, само на 2 минути пеша от плажа. Резервирайте вашата перфектна почивка днес.',
    details: 'Открийте комфорта и удобствата на Abstract Apartment и Studio. Включват напълно оборудвани кухни, частни тераси, климатици, WiFi и всичко необходимо за спокоен престой в Паралия Офринио.',
    floorPlan: 'Вижте плановете на етажа за Abstract Apartment и Studio. Вижте оформлението, размерите на стаите и подреждането на нашето настаняване до морето в Паралия Офринио, Гърция.',
    gallery: 'Разгледайте нашата фотогалерия, представяща Abstract Apartment и Studio. Вижте интериорни и екстериорни снимки, удобства и красивото местоположение в Паралия Офринио, Гърция.',
    guide: 'Разгледайте Паралия Офринио с нашия местен наръчник. Открийте най-добрите плажове, ресторанти, атракции и дейности близо до Abstract Apartment. Вашият наръчник за перфектна почивка.',
    rates: 'Вижте сезонните цени и наличност за Abstract Apartment и Studio. Резервирайте престоя си с гъвкави дати и конкурентни цени в Паралия Офринио, Гърция.',
    reserve: 'Резервирайте престоя си в Abstract Apartment. Настанете се в нашия просторен апартамент или уютно студио в Паралия Офринио. Лесна онлайн резервация с моментално потвърждение.',
    contact: 'Свържете се с Abstract Apartment за резервации, запитвания или помощ. Тук сме, за да ви помогнем да планирате перфектния си престой в Паралия Офринио, Гърция.',
    about: 'Научете повече за Abstract Apartment - спокойно пристанище до морето в Паралия Офринио. Запознайте се с нашия екип и открийте какво прави нашето настаняване специално.',
    faq: 'Намерете отговори на често задаваните въпроси за Abstract Apartment. Научете за политиките, резервациите, наличността и всичко необходимо, което трябва да знаете за вашия престой.',
    reviews: 'Прочетете автентични отзиви и свидетелства от гости за Abstract Apartment. Вижте какво казват нашите гости за техния престой в Паралия Офринио, Гърция.',
    gettingHere: 'Как да стигнете до Abstract Apartment в Паралия Офринио, Гърция. Упътвания с кола от България или със самолет през Солун. Лесни инструкции за пътуване за вашето пътуване.',
  },
};

