import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Order from "@/components/Order";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: "Kaya Pizza",
  description:
    "Pizza halal dengan dough American style yang empuk, saus home made, dan keju mozzarella premium di Grand Depok City.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kayapizza.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Boulevard Grand Depok City, Depan B-Quik",
    addressLocality: "Depok",
    addressRegion: "Jawa Barat",
    postalCode: "16413",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.4194227,
    longitude: 106.8256062,
  },
  hasMap:
    "https://www.google.com/maps/place/B-Quik+Grand+Depok+City/@-6.4194227,106.8256062",
  servesCuisine: ["Pizza", "American", "Halal"],
  priceRange: "Rp28.000 – Rp80.000",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, Transfer, GoPay, OVO, ShopeePay",
  openingHours: "Mo-Su 10:00-22:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    ratingCount: "100",
  },
  image:
    "https://cdn.pixabay.com/photo/2017/12/05/20/08/pizza-3000273_1280.jpg",
  sameAs: [
    "https://food.grab.com/id/id/restaurant/pizza-kaya-halal-jl-boulevard-grand-depok-city-delivery/6-C7VESFBTTLJWDE",
    "https://gofood.co.id/jakarta/restaurant/kaya-kitchen-gdc-depan-b-quik-44b1114a-b6c6-411b-ac1e-48a65f3fc077",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="font-(--font-poppins)">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Order />
        <Location />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
}
