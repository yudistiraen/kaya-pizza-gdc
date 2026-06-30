"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        mapRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: mapRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        infoRef.current?.children ? Array.from(infoRef.current.children) : [],
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: infoRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="lokasi" className="py-24 bg-[#fffbf0] relative">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#8a6d00 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#fccf03]/20 border border-[#fccf03]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#8a6d00] text-xs font-semibold uppercase tracking-widest">
              Lokasi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-4">
            Di Mana <span className="text-[#fccf03]">Kita?</span>
          </h2>
          <p className="text-[#111]/50 text-base max-w-lg mx-auto">
            Nemplok tepat di depan B-Quik Grand Depok City. Gampang ditemukan, susah dilupain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div ref={mapRef} className="md:col-span-2">
            <div className="relative rounded-3xl overflow-hidden border border-[#111]/8 shadow-xl shadow-black/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.7741258393734!2d106.82560619999999!3d-6.4194227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebaee7c395f5%3A0xdb25fd6055518d3c!2sB-Quik%20Grand%20Depok%20City!5e0!3m2!1sen!2sid!4v1719730000000!5m2!1sen!2sid"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kaya Pizza - Depan B-Quik Grand Depok City"
                className="block"
              />
              {/* Overlay label */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#fccf03]/40 rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#fccf03] animate-pulse" />
                <span className="text-[#111] text-sm font-semibold">Kaya Pizza – GDC</span>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div ref={infoRef} className="flex flex-col gap-4">
            <div className="bg-white border border-[#111]/8 rounded-2xl p-5 hover:border-[#fccf03]/50 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 bg-[#fccf03]/15 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#8a6d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[#111] font-bold text-sm mb-1">Alamat</h3>
              <p className="text-[#111]/50 text-sm leading-relaxed">
                Depan B-Quik Grand Depok City,<br />
                Jl. Boulevard GDC, Depok,<br />
                Jawa Barat
              </p>
            </div>

            <div className="bg-white border border-[#111]/8 rounded-2xl p-5 hover:border-[#fccf03]/50 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 bg-[#fccf03]/15 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#8a6d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[#111] font-bold text-sm mb-1">Jam Operasional</h3>
              <p className="text-[#111]/50 text-sm leading-relaxed">
                Senin – Minggu<br />
                Cek GrabFood / GoFood<br />
                untuk jam terkini
              </p>
            </div>

            <div className="bg-white border border-[#111]/8 rounded-2xl p-5 hover:border-[#fccf03]/50 hover:shadow-md transition-all duration-200">
              <h3 className="text-[#111] font-bold text-sm mb-3">Pesan via App</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://food.grab.com/id/id/restaurant/pizza-kaya-halal-jl-boulevard-grand-depok-city-delivery/6-C7VESFBTTLJWDE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-[#00B14F] hover:bg-[#00a046] text-white rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icon-grabfood.png" alt="" width={24} height={24} className="rounded-md shrink-0" />
                  GrabFood
                </a>
                <a
                  href="https://gofood.co.id/jakarta/restaurant/kaya-kitchen-gdc-depan-b-quik-44b1114a-b6c6-411b-ac1e-48a65f3fc077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-[#E8202B] hover:bg-[#d01a24] text-white rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icon-gofood.png" alt="" width={24} height={24} className="rounded-md shrink-0" />
                  GoFood
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/B-Quik+Grand+Depok+City/@-6.4194227,106.8256062,907m"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-yellow text-[#111] rounded-2xl px-5 py-3.5 text-sm font-bold hover:bg-[#f0c200] hover:scale-[1.02] transition-all duration-200 shadow-md shadow-yellow/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
