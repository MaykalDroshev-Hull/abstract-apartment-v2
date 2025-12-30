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
        ],
      },
      guestExperience: {
        title: 'ГОСТИНСКО ПРЕЖИВЯВАНЕ',
        items: [
          {
            label: 'Консиерж услуги',
            description: 'Островни преживявания, внимателно подбрани.',
            href: '/concierge',
            icon: 'Sparkles',
          },
          {
            label: 'Отзиви от гости',
            description: 'Истории от незабравимите престои на нашите гости.',
            href: '/reviews',
            icon: 'Star',
          },
          {
            label: 'Нашата история и екип',
            description: 'Хората и визията зад вилата.',
            href: '/our-story',
            icon: 'Users',
          },
          {
            label: 'Контакти',
            description: 'Свържете се с нашия екип.',
            href: '/contacts',
            icon: 'Mail',
          },
          {
            label: 'Блог',
            description: 'Последни новини и актуализации от вилата.',
            href: '/blog',
            icon: 'BookOpen',
          },
          {
            label: 'Facebook',
            description: 'Следвайте ни във Facebook.',
            href: 'https://facebook.com',
            icon: 'Facebook',
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
            label: 'Ръководство за резервация',
            description: 'Научете как да резервирате Abstract Apartment.',
            href: '/booking-guide',
            icon: 'CheckCircle',
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
            label: 'Форма за предварителна резервация',
            description: 'Няколко детайла, за да започнете престоя си.',
            href: '/pre-booking',
            icon: 'FileText',
          },
          {
            label: 'Facebook',
            description: 'Следвайте ни във Facebook.',
            href: 'https://facebook.com',
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
      ctaLink: 'https://instagram.com',
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
    description: 'Останете свързани с нас в социалните мрежи.',
    copyright: '© 2024 Моето Приложение. Всички права запазени.',
  },
  common: {
    welcome: 'Добре дошли',
    loading: 'Зареждане...',
    error: 'Възникна грешка',
  },
  home: {
    title: 'Добре дошли',
    description: 'Това е вашата основна област за съдържание. Заглавката и долният колонтитул винаги са видими, и можете да превключвате между английски, български и гръцки, като използвате превключвателя за език в заглавката.',
  },
};

