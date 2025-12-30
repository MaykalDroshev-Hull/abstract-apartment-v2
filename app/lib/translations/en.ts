import { Translations } from './types';

export const en: Translations = {
  header: {
    logo: 'My App',
    explore: 'Discover',
    plan: 'Plan',
    reserve: 'Reserve',
    exploreSections: {
      theVilla: {
        title: 'THE VILLA',
        items: [
          {
            label: 'The villa',
            description: 'Open living spaces designed to flow toward the sea.',
            href: '/details',
            icon: 'Home',
          },
          {
            label: 'Floor plan',
            description: 'An overview of the villa layout and flow.',
            href: '/floor-plan',
            icon: 'Layout',
          },
        ],
      },
      visualJourney: {
        title: 'VISUAL JOURNEY',
        items: [
          {
            label: 'Gallery',
            description: 'Moments captured throughout the villa.',
            href: '/gallery',
            icon: 'Image',
          },
        ],
      },
      guestExperience: {
        title: 'GUEST EXPERIENCE',
        items: [
          {
            label: 'Concierge services',
            description: 'Island experiences, carefully curated.',
            href: '/concierge',
            icon: 'Sparkles',
          },
          {
            label: 'Guest reviews',
            description: 'Stories of our past guests\' unforgettable stays.',
            href: '/reviews',
            icon: 'Star',
          },
          {
            label: 'Our story & team',
            description: 'The people and vision behind the villa.',
            href: '/our-story',
            icon: 'Users',
          },
          {
            label: 'Contacts',
            description: 'Get in touch with our team.',
            href: '/contacts',
            icon: 'Mail',
          },
          {
            label: 'Blog',
            description: 'Latest news and updates from the villa.',
            href: '/blog',
            icon: 'BookOpen',
          },
          {
            label: 'Facebook',
            description: 'Follow us on Facebook.',
            href: 'https://facebook.com',
            icon: 'Facebook',
          },
        ],
      },
    },
    planSections: {
      bookingInfo: {
        title: 'BOOKING INFO',
        items: [
          {
            label: 'Rates & calendar',
            description: 'View seasonal rates and villa availability for your preferred dates.',
            href: '/rates',
            icon: 'DollarSign',
          },
          {
            label: 'Booking Guide',
            description: 'Learn how to reserve Abstract Apartment.',
            href: '/booking-guide',
            icon: 'CheckCircle',
          },
          {
            label: 'FAQs',
            description: 'Everything you need to know before your stay.',
            href: '/faq',
            icon: 'HelpCircle',
          },
        ],
      },
      travelLogistics: {
        title: 'TRAVEL & LOGISTICS',
        items: [
          {
            label: 'Getting here',
            description: 'Discover the easiest routes and transfer options to reach the villa.',
            href: '/getting-here',
            icon: 'MapPin',
          },
        ],
      },
      getInTouch: {
        title: 'GET IN TOUCH',
        items: [
          {
            label: 'Contact us',
            description: 'Reach out to our team for villa inquiries or personalized assistance.',
            href: '/contact',
            icon: 'Mail',
          },
          {
            label: 'Pre-booking form',
            description: 'A few details to begin your stay.',
            href: '/pre-booking',
            icon: 'FileText',
          },
          {
            label: 'Facebook',
            description: 'Follow us on Facebook.',
            href: 'https://facebook.com',
            icon: 'Facebook',
          },
        ],
      },
    },
    featuredCard: {
      title: 'The Coconut Telegraph',
      description: 'Stories, guides, and island notes from Abstract Apartment. Thoughtful insights on travel, design, and life.',
      image: '/Images/index/DEMO-hero-image.jpg',
      ctaText: 'Explore our Instagram',
      ctaLink: 'https://instagram.com',
    },
  },
  footer: {
    company: 'Company',
    about: 'About Us',
    contact: 'Contact Us',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    follow: 'Follow Us',
    description: 'Stay connected with us on social media.',
    copyright: '© 2024 My App. All rights reserved.',
  },
  common: {
    welcome: 'Welcome',
    loading: 'Loading...',
    error: 'An error occurred',
  },
  home: {
    title: 'Welcome',
    description: 'This is your main content area. The header and footer are always visible, and you can switch between English, Bulgarian, and Greek using the language switcher in the header.',
  },
};

