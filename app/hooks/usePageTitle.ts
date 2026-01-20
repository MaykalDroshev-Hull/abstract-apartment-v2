'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations, useLanguage } from '@/app/lib/translations';

// Get base URL from environment or current origin
function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://abstractapartment.com';
}

// Language code mapping
const languageCodes: Record<string, string> = {
  en: 'en_US',
  bg: 'bg_BG',
  el: 'el_GR',
};

export function usePageTitle() {
  const pathname = usePathname();
  const t = useTranslations();
  const { language } = useLanguage();

  useEffect(() => {
    // Map routes to page title keys
    const routeToTitleKey: Record<string, keyof typeof t.pageTitles> = {
      '/': 'home',
      '/details': 'details',
      '/floor-plan': 'floorPlan',
      '/gallery': 'gallery',
      '/guide': 'guide',
      '/rates': 'rates',
      '/reserve': 'reserve',
      '/contact': 'contact',
      '/about': 'about',
      '/faq': 'faq',
      '/reviews': 'reviews',
      '/getting-here': 'gettingHere',
    };

    const titleKey = routeToTitleKey[pathname] || 'home';
    const title = t.pageTitles[titleKey];
    const description = t.pageDescriptions[titleKey];

    const baseUrl = getBaseUrl();
    const fullUrl = `${baseUrl}${pathname}`;
    const ogImage = `${baseUrl}/Images/Gallery/KitchenArea.jpg`; // Default OG image

    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // Update or create canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Update or create Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update or create OG title
    if (title) {
      updateOrCreateMeta('og:title', title);
    }

    // Update or create OG description
    if (description) {
      updateOrCreateMeta('og:description', description);
    }

    // Update or create OG image
    updateOrCreateMeta('og:image', ogImage);
    updateOrCreateMeta('og:image:width', '1200');
    updateOrCreateMeta('og:image:height', '630');
    updateOrCreateMeta('og:image:alt', title || 'Abstract Apartment');

    // Update or create OG URL
    updateOrCreateMeta('og:url', fullUrl);

    // Update or create OG type
    updateOrCreateMeta('og:type', 'website');

    // Update or create OG locale
    const ogLocale = languageCodes[language] || 'en_US';
    updateOrCreateMeta('og:locale', ogLocale);

    // Update or create Twitter Card tags
    const updateOrCreateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateTwitterMeta('twitter:card', 'summary_large_image');
    if (title) {
      updateOrCreateTwitterMeta('twitter:title', title);
    }
    if (description) {
      updateOrCreateTwitterMeta('twitter:description', description);
    }
    updateOrCreateTwitterMeta('twitter:image', ogImage);

    // Update or create hreflang tags for alternate languages
    const languages = ['en', 'bg', 'el'];
    languages.forEach((lang) => {
      let hreflang = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!hreflang) {
        hreflang = document.createElement('link');
        hreflang.setAttribute('rel', 'alternate');
        hreflang.setAttribute('hreflang', lang);
        document.head.appendChild(hreflang);
      }
      hreflang.setAttribute('href', `${baseUrl}${pathname}`);
    });

    // Add x-default hreflang
    let defaultHreflang = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (!defaultHreflang) {
      defaultHreflang = document.createElement('link');
      defaultHreflang.setAttribute('rel', 'alternate');
      defaultHreflang.setAttribute('hreflang', 'x-default');
      document.head.appendChild(defaultHreflang);
    }
    defaultHreflang.setAttribute('href', `${baseUrl}${pathname}`);
  }, [pathname, t, language]);
}
