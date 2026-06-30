import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Set NEXT_PUBLIC_SITE_URL in Vercel environment variables once your domain is confirmed
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kayapizza.id";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kaya Pizza – Pizza Halal Enak di Grand Depok City (GDC)",
    template: "%s | Kaya Pizza GDC",
  },
  description:
    "Kaya Pizza, kedai pizza halal di Grand Depok City (GDC) Depok. Dough American style yang empuk, saus home made, keju mozzarella premium. Mulai Rp28.000. Pesan via GrabFood atau GoFood!",
  keywords: [
    "kaya pizza",
    "pizza gdc",
    "pizza grand depok city",
    "pizza halal depok",
    "pizza depok",
    "pizza american style depok",
    "pizza murah depok",
    "pizza enak depok",
    "kedai pizza depok",
    "restoran pizza depok",
    "pesan pizza depok",
    "pizza delivery depok",
    "pizza grabfood depok",
    "pizza gofood depok",
    "pizza keju mozzarella depok",
    "pizza topping depok",
    "pizza halal jawa barat",
    "kaya pizza gdc depok",
    "pizza boulevard grand depok city",
    "pizza depan b-quik",
    "pizza near me depok",
    "makanan pizza depok",
    "pizza online depok",
  ],
  authors: [{ name: "Kaya Pizza" }],
  creator: "Kaya Pizza",
  publisher: "Kaya Pizza",
  applicationName: "Kaya Pizza",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kaya Pizza – Pizza Halal Enak di Grand Depok City (GDC)",
    description:
      "Pizza halal American style dengan saus home made dan keju mozzarella premium. Mulai Rp28.000. Pesan via GrabFood atau GoFood di GDC Depok!",
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Kaya Pizza",
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2017/12/05/20/08/pizza-3000273_1280.jpg",
        width: 1280,
        height: 853,
        alt: "Kaya Pizza – Pizza Halal di Grand Depok City Depok",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaya Pizza – Pizza Halal Enak di Grand Depok City (GDC)",
    description:
      "Pizza halal American style dengan saus home made dan keju mozzarella premium. Mulai Rp28.000 di GDC Depok!",
    images: [
      "https://cdn.pixabay.com/photo/2017/12/05/20/08/pizza-3000273_1280.jpg",
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
