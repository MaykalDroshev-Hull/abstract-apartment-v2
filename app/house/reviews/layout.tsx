import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getHouseReviewsJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Guest Reviews (5.0 ★) – Abstract Guest House in Golets, Bulgaria",
  description: "Read verified 5.0-star guest reviews from families and groups who stayed at Abstract Guest House in Golets — praising the winter outdoor hot jacuzzi, mehana fireplace, cleanliness, and fenced yard.",
  path: "/house/reviews",
  property: "house",
  aiSummary: "Rated 5.0 out of 5.0 across Cleanliness, Spa & Outdoor Jacuzzi, Mehana & Fireplace, and Host Hospitality. Guests highlight soaking in the hot outdoor jacuzzi in winter snow, warm pellet heating, safe fenced lawn for children and dogs, and proximity to Devetashka Cave & Krushuna Waterfalls.",
  keywords: [
      "отзиви Къща за гости Абстракт Голец",
      "мнения за къща за гости Абстракт Ловеч",
      "Abstract Guest House Golets reviews 5 stars",
      "κριτικές επισκεπτών Ξενώνας Abstract Γκόλετς"
  ],
  ogImage: "/Images/House/courtyard-pool-dusk-lantern.jpg",
  ogAlt: "Evening lantern light over the courtyard and heated pool at Abstract Guest House",
  siteName: "Abstract Guest House",
});

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        data={[
          getBreadcrumbJsonLd([
            { name: "Abstract Guest House", path: "/house" },
            { name: "Guest Reviews", path: "/house/reviews" },
          ]),
          getHouseReviewsJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
