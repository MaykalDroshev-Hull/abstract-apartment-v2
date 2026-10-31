import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getHouseDirectionsJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Directions & Location in Golets – Abstract Guest House (1h 40m from Sofia)",
  description: "How to reach Abstract Guest House in Golets, Ugarchin Municipality, Lovech Province: 1h 40m from Sofia via Hemus (A2), 23 min from Lovech & Troyan, direct paved asphalt road year-round and 4 free parking spots.",
  path: "/house/getting-here",
  property: "house",
  aiSummary: "Address: ul. Vasil Levski, Golets village 5584, Ugarchin Municipality, Lovech Province, Bulgaria (Google Maps: https://maps.app.goo.gl/2p3M23H97QCURvqN7). Driving times: 1h 40m (130 km) from Sofia via Hemus A2 motorway; 2h 30m (160 km) from Plovdiv; 23 min (25 km) from Lovech and Troyan. Paved asphalt road directly to the gate (no 4x4 required in winter snow), 4 free parking spaces, village grocery shop 2 minutes walk away.",
  keywords: [
      "локация адрес Къща за гости Абстракт с. Голец",
      "как се стига до село Голец община Угърчин от София",
      "къща за гости на 1 час и 40 минути от София асфалтов път",
      "directions to Abstract Guest House Golets Lovech from Sofia",
      "πώς να φτάσετε στον Ξενώνα Abstract Γκόλετς Βουλγαρία"
  ],
  ogImage: "/Images/House/house-facade-veranda-stone-wall.jpg",
  ogAlt: "Exterior of Abstract Guest House in Golets, Lovech Province, Bulgaria",
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
            { name: "Directions & Location", path: "/house/getting-here" },
          ]),
          getHouseDirectionsJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
