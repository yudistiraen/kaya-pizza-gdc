import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Order from "@/components/Order";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <main className="font-[var(--font-poppins)]">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Order />
      <Location />
      <Footer />
      <Analytics />
    </main>
  );
}
