import React from "react";
import { ArrowRight } from "lucide-react";
import { btnSolid } from "../../constants";

const HeroSection = () => {
  return (
    <header className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Izenic Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
      </div>

      {/* Content - Zentriert */}
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          
          {/* Ebene 1: Tech-Tag - Premium Design */}
          <div className="mb-5 md:mb-8">
            <span 
              className="inline-block font-mono text-xs md:text-sm tracking-[0.2em] font-semibold px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-sm"
              style={{ 
                color: '#67E8F9',
                textShadow: '0 0 20px rgba(103, 232, 249, 0.3), 0 0 40px rgba(103, 232, 249, 0.1)',
                boxShadow: '0 0 20px rgba(103, 232, 249, 0.15), inset 0 0 20px rgba(103, 232, 249, 0.05)'
              }}
            >
              // ENTERPRISE AUTOMATION
            </span>
          </div>

          {/* Ebene 2: Headline - Größer und kühles Weiß */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] mb-5 md:mb-7 tracking-tight" style={{ color: '#F0F4F8' }}>
            Weniger Administration.
            <br />
            Mehr Wachstum.
          </h1>

          {/* Ebene 3: Subline - Helles, bläuliches Silbergrau */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-10 max-w-2xl mx-auto font-normal" style={{ color: '#B0BEC5' }}>
            Reduzieren Sie den administrativen Aufwand auf das Nötigste. IZENIC transformiert manuelle Routine in intelligente Prozesse, die hunderte Arbeitsstunden freisetzen und Ihr Wachstum unaufhaltsam machen.
          </p>

          {/* CTA Button - Premium Design */}
          <a
            href="/kontakt"
            className="group relative inline-flex items-center gap-2 px-6 py-3 md:px-12 md:py-6 
                     text-sm md:text-lg lg:text-xl font-bold text-white
                     rounded-xl md:rounded-3xl
                     bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600
                     shadow-[0_8px_30px_rgba(6,182,212,0.4)]
                     hover:shadow-[0_12px_40px_rgba(6,182,212,0.6)]
                     hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-500
                     transform hover:scale-105
                     transition-all duration-300
                     overflow-hidden
                     before:absolute before:inset-0 
                     before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
                     before:translate-x-[-100%] hover:before:translate-x-[100%]
                     before:transition-transform before:duration-700"
          >
            <span className="relative z-10 flex items-center gap-2">
              Potenzialanalyse starten
              <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

        </div>
      </div>
    </header>
  );
};

export default HeroSection;
