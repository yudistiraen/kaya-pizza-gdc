"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const pizzaRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations; floating dimulai setelah entrance selesai (via onComplete)
      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => {
          gsap.to(pizzaRef.current, {
            y: "+=12",
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      });
      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          subRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          badgeRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.3"
        )
        .fromTo(
          pizzaRef.current,
          { y: 120, rotate: -20, opacity: 0 },
          { y: 0, rotate: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=0.8"
        );

      // Ring rotation via GSAP
      gsap.to(ring1Ref.current, {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
      gsap.to(ring2Ref.current, {
        rotation: -360,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen bg-[#fffbf0] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#fff4d6_0%,_#fffbf0_60%)]" />

      {/* Yellow accent blobs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#fccf03]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fccf03]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 min-h-screen flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left: Text */}
        <div className="order-2 md:order-1 flex flex-col justify-center pt-4 md:pt-24 pb-16">
          <div ref={badgeRef} className="inline-flex items-center gap-2 bg-[#fccf03]/20 border border-[#fccf03]/50 rounded-full px-4 py-1.5 mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#fccf03] animate-pulse" />
            <span className="text-[#8a6d00] text-xs font-semibold uppercase tracking-widest">
              Buka sekarang · GDC, Depok
            </span>
          </div>

          <div ref={headingRef}>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-4">
              <span className="text-[#111]">Pizza Kaya,</span>
              <br />
              <span className="text-[#fccf03]">Kaya Rasa</span>
            </h1>
            <div
              ref={subRef}
              className="text-[#111]/60 text-lg font-light leading-relaxed max-w-md mb-8"
            >
              Dough American style yang beneran empuk, saus racikan sendiri,
              dan keju mozzarella yang meleleh. Cocok buat makan siang, malem,
              atau kapanpun lapar.
            </div>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a
                href="#order"
                className="inline-flex items-center gap-2 bg-[#fccf03] text-[#111] font-bold px-8 py-4 rounded-full hover:bg-[#f0c200] hover:scale-105 transition-all duration-200 text-base shadow-lg shadow-[#fccf03]/40"
              >
                Pesan Sekarang
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 border-2 border-[#111]/20 text-[#111] font-medium px-8 py-4 rounded-full hover:border-[#fccf03] hover:bg-[#fccf03]/10 transition-all duration-200 text-base"
              >
                Lihat Menu
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row items-center gap-8 mt-10 pt-10 border-t border-[#111]/10">
              <div>
                <div className="text-3xl font-black text-[#fccf03]">4.8★</div>
                <div className="text-[#111]/50 text-sm">di GrabFood</div>
              </div>
              <div className="w-full h-px md:w-px md:h-10 bg-[#111]/10" />
              <div>
                <div className="text-3xl font-black text-[#111]">100%</div>
                <div className="text-[#111]/50 text-sm">Halal</div>
              </div>
              <div className="w-full h-px md:w-px md:h-10 bg-[#111]/10" />
              <div>
                <div className="text-3xl font-black text-[#111]">11</div>
                <div className="text-[#111]/50 text-sm">Pilihan Menu</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Pizza image */}
        <div className="order-1 md:order-2 flex items-end md:items-center justify-center pt-20 md:pt-0 pb-4 md:pb-0">
          <div ref={pizzaRef} className="relative w-60 h-60 sm:w-75 sm:h-75 md:w-105 md:h-105">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#fccf03]/30 blur-3xl scale-75" />
            {/* Decorative rings, rotated via GSAP */}
            <div ref={ring1Ref} className="absolute inset-0 rounded-full border-2 border-[#fccf03]/60 scale-90" />
            <div ref={ring2Ref} className="absolute inset-0 rounded-full border-2 border-dashed border-[#fccf03]/35 scale-110" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#fccf03]/50 shadow-2xl shadow-[#fccf03]/30">
              <Image
                src="https://cdn.pixabay.com/photo/2017/12/05/20/08/pizza-3000273_1280.jpg"
                alt="Pizza Kaya Halal"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 340px, 480px"
              />
            </div>

            {/* Price tag */}
            <div className="absolute -bottom-2 -right-2 bg-[#fccf03] text-[#111] rounded-2xl px-4 py-3 font-black shadow-xl shadow-[#fccf03]/30">
              <div className="text-xs font-semibold">Mulai dari</div>
              <div className="text-xl">28-ribuan!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#111]/30 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
