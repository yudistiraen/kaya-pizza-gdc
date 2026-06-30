"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        textRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        statsRef.current?.children ? Array.from(statsRef.current.children) : [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white relative overflow-hidden z-10" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.13)" }}>
      {/* Subtle yellow accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#fccf03]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div ref={imgRef} className="relative">
          <div className="relative h-[480px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-[#fccf03]/15">
              <Image
                src="https://cdn.pixabay.com/photo/2014/05/18/11/25/pizza-346985_1280.jpg"
                alt="Pizza Kaya Halal dibuat dengan penuh cinta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating rating card */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-[#fccf03]/30 rounded-2xl p-5 shadow-xl shadow-black/10 max-w-[200px]">
              <div className="text-[#fccf03] text-4xl font-black">4.8</div>
              <div className="flex gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#fccf03]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#111]/50 text-xs leading-tight">Rating dari pelanggan GrabFood</p>
            </div>

            {/* Halal badge */}
            <div className="absolute top-4 left-4 bg-[#fccf03] text-[#111] rounded-xl px-4 py-2 font-black text-sm shadow-lg">
              🌙 Halal Certified
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div ref={textRef}>
          <div className="inline-flex items-center gap-2 bg-[#fccf03]/20 border border-[#fccf03]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#8a6d00] text-xs font-semibold uppercase tracking-widest">
              Siapa Kita
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#111] leading-tight mb-6">
            Toko Pizza Lokal{" "}
            <span className="text-[#fccf03]">yang Nggak</span>{" "}
            Mau Kalah
          </h2>

          <p className="text-[#111]/60 text-base leading-relaxed mb-6">
            Kaya Pizza berdiri di depan B-Quik Grand Depok City, karena menurut kami
            GDC butuh pizza yang beneran enak, bukan sekadar pizza biasa. Jadi kami bikin sendiri.
          </p>

          <p className="text-[#111]/60 text-base leading-relaxed mb-8">
            Doughnya pakai resep American style, lembut di dalam dan sedikit golden di pinggir.
            Sausnya home made, bukan dari kaleng. Toppingnya? Pilih sesuai mood kamu.
          </p>

          <div ref={statsRef} className="grid grid-cols-3 gap-4">
            {[
              { value: "100%", label: "Halal" },
              { value: "Home", label: "Made Sauce" },
              { value: "11+", label: "Pilihan" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#fffbf0] border border-[#fccf03]/30 rounded-2xl p-4 text-center hover:border-[#fccf03] hover:bg-[#fccf03]/10 transition-all duration-200"
              >
                <div className="text-2xl font-black text-[#fccf03]">{stat.value}</div>
                <div className="text-[#111]/50 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
