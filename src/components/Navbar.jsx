import React, { useState, useEffect } from "react";
import { Menu, X, Home, Workflow, Users, BookOpen, Phone, Grid3x3 } from "lucide-react";
import { LOGO } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const goHome = (e) => {
    e.preventDefault();
    setOpen(false);
    window.location.href = "/";
  };

  const linkFx = `
    relative transition-all after:absolute after:bottom-[-6px] after:left-0 after:h-[2px]
    after:w-0 after:bg-gradient-to-r after:from-[#2b3542] after:to-[#9ca3af]
    hover:after:w-full after:transition-all after:rounded-full
  `;

  // ESC-Taste schließt Menü
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <header className="sticky top-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-[rgba(43,53,66,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
      <nav className="max-w-7xl mx-auto px-4 h-32 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={goHome}
          className="flex items-center group"
          aria-label="Izenic Home"
        >
          <img
            src={LOGO}
            alt="Izenic Logo"
            className="h-28 w-auto md:h-36 object-contain shrink-0 drop-shadow-[0_8px_24px_rgba(43,53,66,0.25)]"
          />
        </a>

        {/* ======== DESKTOP NAVIGATION ======== */}
        <div className="hidden md:flex items-center gap-7 text-[15px]">
          <a href="/" onClick={goHome} className={linkFx}>
            Home
          </a>

          <button
            onClick={() => (window.location.href = "/leistungen")}
            className={linkFx}
          >
            Leistungen
          </button>

          <button
            onClick={() => (window.location.href = "/use-cases")}
            className={linkFx}
          >
            Use Case
          </button>

          <button
            onClick={() => (window.location.href = "/ueber-mich")}
            className={linkFx}
          >
            Über IZENIC
          </button>

          <button
            onClick={() => (window.location.href = "/insights")}
            className={linkFx}
          >
            Insights
          </button>

          <button
            onClick={() => (window.location.href = "/kontakt")}
            className="px-5 py-3 rounded-2xl font-semibold text-white 
                       bg-gradient-to-r from-[#2b3542] to-[#6c737f] 
                       shadow-[0_8px_20px_rgba(43,53,66,0.35)]"
          >
            Kontakt / Erstgespräch
          </button>
        </div>

        {/* ======== MOBILE TOGGLE ======== */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden rounded-xl px-4 py-2.5 border border-titanium-300 bg-white/80 backdrop-blur-sm text-graphite-900 font-medium hover:bg-white transition-colors shadow-sm"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* ======== MOBILE FULLSCREEN SLIDE MENU ======== */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-graphite-900/70 backdrop-blur-md z-[199]"
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed top-0 right-0 h-screen w-full sm:w-[85%] z-[200]
                       bg-gradient-to-br from-white via-titanium-50 to-white
                       backdrop-blur-2xl shadow-[0_0_60px_rgba(15,23,42,0.3)]
                       border-l border-titanium-200
                       flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-titanium-200 bg-white/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-graphite-700 to-graphite-800 flex items-center justify-center">
                  <Menu size={20} className="text-white" />
                </div>
                <span className="font-extrabold text-graphite-900 text-lg font-sans tracking-tight">
                  Navigation
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-xl bg-titanium-100 hover:bg-titanium-200 transition-colors border border-titanium-300"
              >
                <X size={20} className="text-graphite-700" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-6 py-8 flex flex-col gap-2">
              <a 
                onClick={goHome} 
                href="/" 
                className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-white border border-titanium-200 hover:border-titanium-300 hover:bg-titanium-50 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-titanium-200 to-titanium-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Home size={18} className="text-graphite-700" />
                </div>
                <span className="font-semibold text-graphite-900 text-base font-sans">Home</span>
              </a>

              <button
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/leistungen";
                }}
                className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-white border border-titanium-200 hover:border-titanium-300 hover:bg-titanium-50 transition-all group shadow-sm text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-titanium-200 to-titanium-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Workflow size={18} className="text-graphite-700" />
                </div>
                <span className="font-semibold text-graphite-900 text-base font-sans">Leistungen</span>
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/use-cases";
                }}
                className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-white border border-titanium-200 hover:border-titanium-300 hover:bg-titanium-50 transition-all group shadow-sm text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-titanium-200 to-titanium-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Grid3x3 size={18} className="text-graphite-700" />
                </div>
                <span className="font-semibold text-graphite-900 text-base font-sans">Use Case</span>
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/ueber-mich";
                }}
                className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-white border border-titanium-200 hover:border-titanium-300 hover:bg-titanium-50 transition-all group shadow-sm text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-titanium-200 to-titanium-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users size={18} className="text-graphite-700" />
                </div>
                <span className="font-semibold text-graphite-900 text-base font-sans">Über IZENIC</span>
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/insights";
                }}
                className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-white border border-titanium-200 hover:border-titanium-300 hover:bg-titanium-50 transition-all group shadow-sm text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-titanium-200 to-titanium-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen size={18} className="text-graphite-700" />
                </div>
                <span className="font-semibold text-graphite-900 text-base font-sans">Insights</span>
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/kontakt";
                }}
                className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-gradient-to-r from-graphite-700 to-graphite-800 border border-graphite-800 hover:from-graphite-800 hover:to-graphite-900 transition-all group shadow-lg text-left mt-2"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={18} className="text-white" />
                </div>
                <span className="font-semibold text-white text-base font-sans">Kontakt / Erstgespräch</span>
              </button>
            </div>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-titanium-200 bg-titanium-50/50">
              <p className="text-xs text-graphite-500 font-sans text-center">
                © {new Date().getFullYear()} Izenic · Alle Rechte vorbehalten
              </p>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;

