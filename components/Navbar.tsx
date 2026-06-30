"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "Tentang Kami" },
    { href: "#menu", label: "Menu" },
    { href: "#order", label: "Pesan" },
    { href: "#lokasi", label: "Lokasi" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-black/8 border-b border-[#fccf03]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-[#fccf03]">KAYA</span>
            <span className="text-[#111]"> PIZZA</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#111]/60 hover:text-[#111] transition-colors duration-200 uppercase tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#order"
          className="hidden md:inline-flex items-center gap-2 bg-[#fccf03] text-[#111] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#fccf03]/80 hover:scale-105 transition-all duration-200 shadow-sm shadow-[#fccf03]/40"
        >
          Pesan Sekarang
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#111] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#111] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#111] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-6 pb-5 flex flex-col gap-1 border-t border-[#111]/6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#111]/70 font-medium py-3 border-b border-[#111]/5 last:border-0 text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#fccf03] text-[#111] font-bold text-sm px-5 py-3 rounded-full text-center"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
