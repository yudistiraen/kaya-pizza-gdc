"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Pizza Medium Chicken Mushroom",
    desc: "Ayam, jamur, saus racikan, mayo, mozzarella. Kombinasi klasik yang susah nggak suka.",
    price: "86.500",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2025120212031433217/photo/menueditor_item_b5362f18546f4f11bc1cd724f95fc257_1764676906735241162.webp",
    tag: "Bestseller",
    tagColor: "bg-[#fccf03] text-[#111]",
  },
  {
    name: "Pizza Medium Meatlovers",
    desc: "Sosis, beef patty, saus kita, mayo, mozzarella. Penuh daging, nggak pake tanggung.",
    price: "86.500",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2025113016223609736/photo/menueditor_item_65fc621733724d358592f4e8aaa443e3_1764519699730070570.webp",
    tag: "Favorit",
    tagColor: "bg-red-500 text-white",
  },
  {
    name: "Pizza Medium Cheesy",
    desc: "Buat yang cheesy banget orangnya. Saus keju + mozzarella di atas dough empuk. Simpel tapi nagih.",
    price: "85.000",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2025113014223379984/photo/menueditor_item_9a2c8a11d27448bab79d50b3101aa99b_1764512503663373099.webp",
    tag: "",
    tagColor: "",
  },
  {
    name: "Pizza Medium American",
    desc: "Sosis, jamur, saus home made, mayo, mozzarella. Yang ini cocok buat semua orang.",
    price: "80.000",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2025113014153777727/photo/menueditor_item_5970f1ca580a46029802fe8f94bbd327_1764512076699953494.webp",
    tag: "",
    tagColor: "",
  },
  {
    name: "Pizza Medium Nuggets",
    desc: "Crispy chicken cincang di atas pizza. Unik? Iya. Enak? Jelas.",
    price: "86.000",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2025113008222031480/photo/menueditor_item_be36ab5448274cdf852928b7a38fecf3_1764490892446020765.webp",
    tag: "",
    tagColor: "",
  },
  {
    name: "Pizza Medium Supreme",
    desc: "Semua yang enak dijadiin satu. Buat kamu yang nggak bisa milih.",
    price: "86.950",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2026042113163383396/photo/menueditor_item_ef49960c56f74b07a16e089761b37ffc_1776777373342554198.webp",
    tag: "New",
    tagColor: "bg-green-500 text-white",
  },
  {
    name: "Splitza Duo Topping",
    desc: "Satu loyang, dua rasa berbeda. Pesen sama temen, masing-masing pilih topping sendiri.",
    price: "94.550",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2026042113192559872/photo/menueditor_item_a54ab55d50ff4949b1514eac6d94c332_1776777519322676748.webp",
    tag: "Spesial",
    tagColor: "bg-purple-500 text-white",
  },
  {
    name: "Pizza Large",
    desc: "31 cm buat berbagi. Atau nggak dibagi, no judgment.",
    price: "140.000",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2025120912080046822/photo/menueditor_item_e49f43f3c3d14f0ea9e579b2de673ea2_1765282003236734999.webp",
    tag: "31 cm",
    tagColor: "bg-orange-500 text-white",
  },
  {
    name: "Pizza Besar 2 Topping",
    desc: "Dua topping pilihan kamu, satu loyang besar. Lebih hemat, lebih kenyang.",
    price: "138.500",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2025122416043238633/photo/menueditor_item_c239508c0db74afe9eed95dd8e8bc683_1766592193525597528.webp",
    tag: "Hemat",
    tagColor: "bg-blue-500 text-white",
  },
  {
    name: "Pizza Small",
    desc: "Porsi buat satu orang. Nggak perlu bagi-bagi, nggak perlu minta izin siapa-siapa.",
    price: "54.000",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2026031712555413878/photo/menueditor_item_d070938da5924642a749170368a135e1_1773752137726439952.webp",
    tag: "Terjangkau",
    tagColor: "bg-[#fccf03] text-[#111]",
  },
  {
    name: "Pizza Small Bundling",
    desc: "Pizza kecil buat temen nongkrong atau makan cepet. Harga bersahabat, rasa nggak bohong.",
    price: "55.000",
    img: "https://huawei-food-cms.grab.com/compressed_webp/items/IDITE2026022218341169681/photo/menueditor_item_9eec2dd2e06849a28c89e03c5a5ec02f_1771785209591294967.webp",
    tag: "Promo",
    tagColor: "bg-red-500 text-white",
  },
];

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
        }
      );

      if (gridRef.current) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="menu" className="py-24 bg-[#fffbf0] relative overflow-hidden">
      {/* Pizza accent repeated background */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: "url('/pizza-accent.png')",
          backgroundSize: "500px 500px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#fccf03]/20 border border-[#fccf03]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#8a6d00] text-xs font-semibold uppercase tracking-widest">
              Yang Paling Laris
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-4">
            Pizza Apa yang <span className="text-[#fccf03]">Lagi Kamu Mau?</span>
          </h2>
          <p className="text-[#111]/50 text-base max-w-lg mx-auto">
            Dari yang simpel sampai yang penuh topping, semua ada. Small buat kamu yang lagi sendiri,
            large buat ramai-ramai.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white border border-[#111]/6 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_40px_rgba(252,207,3,0.22)] hover:border-[#fccf03]/60 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                {product.tag && (
                  <div className={`absolute top-3 left-3 ${product.tagColor} rounded-full px-3 py-1 text-xs font-bold`}>
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-[#111] text-base mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-[#111]/50 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#111]/35 text-xs">Mulai dari</span>
                    <div className="text-[#111] font-black text-xl">
                      Rp {product.price}
                    </div>
                  </div>
                  <a
                    href="#order"
                    className="flex items-center gap-1.5 bg-[#fccf03]/15 hover:bg-[#fccf03] text-[#8a6d00] hover:text-[#111] rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
                  >
                    Pesan
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
