export type Language = 'en' | 'bg' | 'el';

export interface MenuItem {
  label: string;
  description: string;
  href: string;
  icon: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface FeaturedCard {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface Translations {
  header: {
    logo: string;
    explore: string;
    plan: string;
    reserve: string;
    exploreSections: {
      theVilla: MenuSection;
      visualJourney: MenuSection;
      guestExperience: MenuSection;
    };
    planSections: {
      bookingInfo: MenuSection;
      travelLogistics: MenuSection;
      getInTouch: MenuSection;
    };
    featuredCard: FeaturedCard;
  };
  footer: {
    company: string;
    about: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
    follow: string;
    description: string;
    copyright: string;
  };
  common: {
    welcome: string;
    loading: string;
    error: string;
  };
  home: {
    title: string;
    description: string;
  };
}

