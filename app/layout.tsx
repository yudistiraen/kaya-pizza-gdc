import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kaya Pizza – Pizza Halal Lezat di Grand Depok City",
  description:
    "Kaya Pizza menyajikan pizza halal dengan dough American style yang empuk, topping premium, dan harga terjangkau. Berlokasi di depan B-Quik Grand Depok City. Pesan sekarang via GrabFood atau GoFood!",
  keywords: [
    "kaya pizza",
    "pizza halal",
    "pizza grand depok city",
    "pizza depok",
    "pizza american style",
    "pizza murah depok",
  ],
  openGraph: {
    title: "Kaya Pizza – Pizza Halal Lezat di Grand Depok City",
    description:
      "Pizza halal dengan dough American style yang empuk dan topping premium. Pesan via GrabFood atau GoFood!",
    type: "website",
    locale: "id_ID",
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
