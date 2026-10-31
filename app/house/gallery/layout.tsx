import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getHouseGalleryJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Photo Gallery – Abstract Guest House in Golets | Къща за гости Абстракт",
  description: "View real photos of Abstract Guest House in Golets, Lovech Province: Revival stone-and-timber architecture, authentic Hearth Room, spacious bedrooms, vintage brass bathroom, enclosed garden, and heated pool.",
  path: "/house/gallery",
  property: "house",
  aiSummary: "15 curated photographs of Abstract Guest House in Golets, Bulgaria: two-story Bulgarian Revival stone-and-timber facade with glazed veranda, open clay fireplace Hearth Room with copper cauldrons and woven cherga rugs, spacious timber-beamed bedrooms, vintage brass bathroom, manicured fenced courtyard, and heated turquoise swimming pool.",
  keywords: [
      "снимки Къща за гости Абстракт Голец",
      "галерия възрожденска къща с басейн Ловеч Троян",
      "интериор стая с огнище черги чардак",
      "Abstract Guest House photo gallery Golets Bulgaria",
      "Bulgarian Revival architecture guest house photos",
      "φωτογραφίες Ξενώνας Abstract Γκόλετς"
  ],
  ogImage: "/Images/House/house-facade-pool-courtyard.jpg",
  ogAlt: "Abstract Guest House facade, glazed veranda, green courtyard, and heated pool",
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
            { name: "Photo Gallery", path: "/house/gallery" },
          ]),
          getHouseGalleryJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
