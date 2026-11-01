import type { MetadataRoute } from 'next';
import { SITE_URL, HOUSE_IMAGES_META } from './lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const houseImageUrls = HOUSE_IMAGES_META.map((img) => `${SITE_URL}${img.src}`);
  const apartmentImageUrls = [
    `${SITE_URL}/Images/Gallery/LivingArea1.jpg`,
    `${SITE_URL}/Images/Gallery/BigTerrace.jpg`,
    `${SITE_URL}/Images/Gallery/KitchenArea.jpg`,
    `${SITE_URL}/Images/Gallery/Bedroom1.jpg`,
    `${SITE_URL}/Images/Gallery/Bedroom2.jpg`,
    `${SITE_URL}/Images/abstract%20Studio/abstract-studio%20(3).jpg`,
  ];

  const apartmentRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    images?: string[];
  }> = [
      { path: '/apartments', priority: 1.0, changeFrequency: 'weekly', images: apartmentImageUrls },
      { path: '/apartments/details', priority: 0.9, changeFrequency: 'monthly', images: apartmentImageUrls.slice(0, 3) },
      { path: '/apartments/gallery', priority: 0.9, changeFrequency: 'monthly', images: apartmentImageUrls },
      { path: '/apartments/rates', priority: 0.9, changeFrequency: 'weekly' },
      { path: '/apartments/reserve', priority: 0.9, changeFrequency: 'weekly' },
      { path: '/apartments/about', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/apartments/floor-plan', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/apartments/guide', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/apartments/reviews', priority: 0.8, changeFrequency: 'weekly' },
      { path: '/apartments/getting-here', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/apartments/faq', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/apartments/contact', priority: 0.8, changeFrequency: 'monthly' },
    ];

  const houseRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    images?: string[];
  }> = [
      { path: '/house', priority: 1.0, changeFrequency: 'weekly', images: houseImageUrls.slice(0, 6) },
      { path: '/house/details', priority: 0.9, changeFrequency: 'monthly', images: houseImageUrls.slice(0, 8) },
      { path: '/house/gallery', priority: 0.9, changeFrequency: 'monthly', images: houseImageUrls },
      { path: '/house/rates', priority: 0.9, changeFrequency: 'weekly' },
      { path: '/house/reserve', priority: 0.9, changeFrequency: 'weekly', images: [houseImageUrls[0]] },
      { path: '/house/about', priority: 0.8, changeFrequency: 'monthly', images: [houseImageUrls[3], houseImageUrls[7], houseImageUrls[6]] },
      { path: '/house/guide', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/house/reviews', priority: 0.8, changeFrequency: 'weekly' },
      { path: '/house/getting-here', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/house/faq', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/house/contact', priority: 0.8, changeFrequency: 'monthly' },
    ];

  const aiKnowledgeRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    images?: string[];
  }> = [
      { path: '/llms.txt', priority: 0.9, changeFrequency: 'weekly' },
      { path: '/llms-full.txt', priority: 0.9, changeFrequency: 'weekly' },
    ];

  return [...apartmentRoutes, ...houseRoutes, ...aiKnowledgeRoutes].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.images ? { images: route.images } : {}),
  }));
}
