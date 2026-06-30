"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GRABFOOD_URL =
  "https://food.grab.com/id/id/restaurant/pizza-kaya-halal-jl-boulevard-grand-depok-city-delivery/6-C7VESFBTTLJWDE";
const GOFOOD_URL =
  "https://gofood.co.id/jakarta/restaurant/kaya-kitchen-gdc-depan-b-quik-44b1114a-b6c6-411b-ac1e-48a65f3fc077";

export default function Order() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pizzaImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );

      gsap.fromTo(
        pizzaImgRef.current,
        { scale: 0.8, opacity: 0, rotate: -10 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );

      gsap.to(pizzaImgRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="order"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fccf03]/50 to-transparent" />

      {/* Background blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fccf03]/8 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Pizza image */}
        <div ref={pizzaImgRef} className="relative flex items-center justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-[#fccf03]/20 blur-3xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#fccf03]/40 shadow-2xl shadow-[#fccf03]/20">
              <Image
                src="https://cdn.pixabay.com/photo/2020/04/01/16/34/pepperoni-4991789_1280.jpg"
                alt="Pizza Kaya - Order Now"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 420px"
              />
            </div>
          </div>
        </div>

        {/* Right: Order CTA */}
        <div ref={contentRef}>
          <div className="inline-flex items-center gap-2 bg-[#fccf03]/20 border border-[#fccf03]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#8a6d00] text-xs font-semibold uppercase tracking-widest">
              Tinggal Klik
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#111] leading-tight mb-4">
            Laper? Pizza-nya Kita{" "}
            <span className="text-[#fccf03]">yang Anterin.</span>
          </h2>

          <p className="text-[#111]/55 text-base leading-relaxed mb-10">
            Kamu nggak harus ke sini langsung. Pesan lewat GrabFood atau GoFood,
            nanti pizzanya sampai pas masih anget.
          </p>

          <div className="space-y-4">
            {/* GrabFood button */}
            <a
              href={GRABFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#00B14F] hover:bg-[#00a046] text-white rounded-2xl px-6 py-4 font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00B14F]/30 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon-grabfood.png"
                alt="GrabFood"
                width={40}
                height={40}
                className="rounded-xl shrink-0"
              />
              <div className="flex-1">
                <div className="text-sm text-white/75 font-normal">Pesan lewat</div>
                <div className="text-lg font-bold">GrabFood</div>
              </div>
              <svg
                className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* GoFood button */}
            <a
              href={GOFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#E8202B] hover:bg-[#d01a24] text-white rounded-2xl px-6 py-4 font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#E8202B]/30 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon-gofood.png"
                alt="GoFood"
                width={40}
                height={40}
                className="rounded-xl shrink-0"
              />
              <div className="flex-1">
                <div className="text-sm text-white/75 font-normal">Pesan lewat</div>
                <div className="text-lg font-bold">GoFood</div>
              </div>
              <svg
                className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <p className="text-[#111]/30 text-sm mt-6 text-center">
            Pengiriman cepat &nbsp;·&nbsp; Datang masih panas &nbsp;·&nbsp; 100% Halal
          </p>
        </div>
      </div>
    </section>
  );
}
