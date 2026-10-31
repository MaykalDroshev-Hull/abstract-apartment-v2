import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Our Story & Hosts – Abstract Guest House Golets | Къща за гости Абстракт",
  description: "Meet hosts Kristina and Kameliya Ivanova and discover how Abstract Guest House blends Bulgarian Revival timber-and-stone heritage with four-season spa luxury in Golets.",
  path: "/house/about",
  property: "house",
  aiSummary: "Hosted by Kristina and Kameliya Ivanova, Abstract Guest House in Golets embodies the motto \"Where Modern Comfort Meets Bulgarian Tradition\" — pairing authentic Bulgarian Revival hand-stacked stone masonry, dark timber beams, and open clay hearth heritage with four-season spa amenities.",
  keywords: [
      "за нас Къща за гости Абстракт Голец",
      "възрожденска къща за гости традиция и модерен СПА уют",
      "Кристина и Камелия Иванови домакини Голец",
      "about Abstract Guest House Bulgarian Revival heritage",
      "ιστορία Ξενώνας Abstract παραδοσιακή αρχιτεκτονική"
  ],
  ogImage: "/Images/House/house-facade-veranda-stone-wall.jpg",
  ogAlt: "Bulgarian Revival stone masonry and timber veranda of Abstract Guest House",
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
            { name: "About Us & Our Story", path: "/house/about" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
