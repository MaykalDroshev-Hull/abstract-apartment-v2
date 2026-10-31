import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Floor Plan & Spatial Layout – Abstract Guest House Golets",
  description: "Review the architectural layout of Abstract Guest House: ground-level traditional mehana tavern and kitchen, upper sleeping floor with 4 bedrooms, and 1,000+ sq.m fenced garden with pool and spa.",
  path: "/house/floor-plan",
  property: "house",
  aiSummary: "Spatial layout of Abstract Guest House: Ground level houses the insulated traditional mehana tavern (seats 14+, wood fireplace, party speaker, dedicated WC) and full modern kitchen, keeping celebrations separate from the quiet upper sleeping floor (4 bedrooms, 3 upstairs bathrooms, panoramic glazed veranda), surrounded by a 1,000+ sq.m fenced yard with heated pool, 5-seat outdoor hot jacuzzi, 3-seat infrared sauna, and covered BBQ.",
  keywords: [
      "разпределение на стаите Къща за гости Абстракт",
      "схема етажи механа и 4 спални къща за гости",
      "Abstract Guest House floor plan room distribution",
      "κάτοψη Ξενώνας Abstract διαρρύθμιση δωματίων"
  ],
  ogImage: "/Images/House/large-room-wide.jpg",
  ogAlt: "Spacious upstairs bedroom with double bed and pull-out sofa at Abstract Guest House",
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
            { name: "Floor Plan & Layout", path: "/house/floor-plan" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
