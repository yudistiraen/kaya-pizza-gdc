export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#111]/8 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-5">

        {/* Brand + tagline */}
        <div className="text-center">
          <div className="text-lg font-black mb-1">
            <span className="text-yellow">KAYA</span>
            <span className="text-[#111]"> PIZZA</span>
          </div>
          <p className="text-[#111]/35 text-xs tracking-wide">
            100% Halal · Grand Depok City · 4.8★ GrabFood
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {[
            { href: "#about", label: "Tentang" },
            { href: "#menu", label: "Menu" },
            { href: "#order", label: "Pesan" },
            { href: "#lokasi", label: "Lokasi" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#111]/40 text-xs hover:text-yellow transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full border-t border-[#111]/6" />

        {/* Copyright */}
        <div className="flex justify-between w-full">
          <p className="text-[#111]/30 text-xs">
            © 2026 Kaya Pizza. Hak cipta dilindungi.
          </p>

          {/* Trademark */}
          <a
            href="https://laterra.click"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 transition-opacity duration-300 opacity-40 hover:opacity-100"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#111]/50 font-medium">
              Crafted by
            </span>
            <span className="text-xs font-black tracking-tight text-[#111] group-hover:text-yellow transition-colors duration-300">
              laterra.click
            </span>
            <span className="text-[10px] text-[#111]/30">™</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
