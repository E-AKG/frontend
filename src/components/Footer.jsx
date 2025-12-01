import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer-Komponente
 * Extrahiert aus App.jsx für bessere Struktur
 */
const Footer = () => (
  <footer className="relative border-t border-[rgba(12,18,26,.1)] bg-gradient-to-b from-white via-[#f9fafc] to-[#fdfdfd] overflow-hidden">
    {/* Soft Ambient Aura */}
    <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full 
                    bg-[radial-gradient(circle,rgba(43,53,66,0.05),transparent_70%)] blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* === COLUMN 1: LOGO + CLAIM === */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="relative flex items-center justify-center">
            {/* Subtle diffuse light behind logo */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,transparent_80%)] blur-[80px]" />

            {/* Transparent Logo */}
            <img
              src="/izenic-logo-2.png"
              alt="Izenic"
              className="relative h-40 md:h-52 lg:h-60 w-auto 
                         mix-blend-luminosity opacity-95 
                         hover:opacity-100 hover:scale-[1.02] transition-all duration-300"
              style={{
                filter: "drop-shadow(0 0 40px rgba(43,53,66,0.2)) brightness(1.05)",
              }}
            />

            {/* Animated soft shine ring */}
            <div className="absolute -inset-12 rounded-full 
                            bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.15),transparent)] 
                            blur-sm mix-blend-overlay" />
          </div>

          {/* Claim */}
          <p className="text-graphite-900 text-center md:text-left text-lg md:text-xl font-medium tracking-tight max-w-sm leading-snug">
            Automatisierung, wo sie wirkt.<br />KI, wo sie muss.
          </p>
        </div>

        {/* === COLUMN 2: NAVIGATION === */}
        <div className="flex md:justify-end">
          <ul className="flex flex-col md:items-end gap-5 text-base font-medium text-graphite-700">
            {[
              { name: "Impressum", href: "/impressum" },
              { name: "Datenschutz", href: "/datenschutz" },
              { name: "Vertrauen & Sicherheit", href: "/trust" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] 
                             after:bg-gradient-to-r after:from-[#2b3542] after:to-[#aab4c2] 
                             after:scale-x-0 hover:after:scale-x-100 after:origin-left 
                             after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Copy */}
    <div className="border-t border-[rgba(12,18,26,.08)] py-6 text-center text-xs md:text-sm text-graphite-600 backdrop-blur-sm bg-white/40">
      © {new Date().getFullYear()} Izenic • Alle Rechte vorbehalten
    </div>
  </footer>
);

export default Footer;

