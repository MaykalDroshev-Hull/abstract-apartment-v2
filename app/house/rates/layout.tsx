import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getHouseRatesJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Whole-House Rental Rates & Policies – Abstract Guest House Golets",
  description: "Transparent whole-house rental pricing for Abstract Guest House in Golets (up to 14 guests): €300/night weekdays, €350/night weekends. Includes outdoor hot jacuzzi, sauna, heated pool, firewood & free pet stays.",
  path: "/house/rates",
  property: "house",
  aiSummary: "Whole-house rental rates for Abstract Guest House (up to 14 guests): €300/night (~586 BGN) on weekdays Sunday–Thursday (1-night minimum) and €350/night (~684 BGN) on weekends Friday–Saturday (2-night minimum). ~€21–€25 per person/night at full capacity. Rate includes exclusive house & yard access, year-round outdoor hot jacuzzi, infrared sauna, seasonal heated pool (Apr–Oct), free firewood, pellet heating, Wi-Fi, 4 parking spots, and free pet stays.",
  keywords: [
      "цени Къща за гости Абстракт Голец",
      "наем на цяла къща за гости цена за уикенд",
      "къща за гости 300 евро на вечер за 14 човека със СПА",
      "къща за гости без такса за куче домашен любимец",
      "Abstract Guest House whole house rental rates Bulgaria",
      "private villa Bulgaria price per night 14 guests jacuzzi included",
      "τιμές ενοικίασης ολόκληρου ξενώνα Βουλγαρία σπα"
  ],
  ogImage: "/Images/House/pool-turquoise-water-closeup.jpg",
  ogAlt: "Heated outdoor swimming pool at Abstract Guest House in Golets",
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
            { name: "Rates & Terms", path: "/house/rates" },
          ]),
          getHouseRatesJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
