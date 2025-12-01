import React from "react";
import { ArrowRight, Search, Lightbulb, Wrench, Settings, CheckCircle2 } from "lucide-react";
import { btnSolid } from "../../constants";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Kennenlernen & Engstelle finden",
      description: "IZENIC analysiert Ihren Alltag und identifiziert 1 bis 2 konkrete Punkte, wo Automatisierung und KI messbare Wertschöpfung generieren.",
      icon: <Search className="w-6 h-6" />,
      outcome: "Klarheit über größte Hebel"
    },
    {
      number: "02",
      title: "Potenzialanalyse & Konzept",
      description: "IZENIC skizziert die technische Lösung, betroffene Systeme und realistische Umsetzbarkeit. Klare Roadmap für maximale Wirkung.",
      icon: <Lightbulb className="w-6 h-6" />,
      outcome: "Konkrete Umsetzungsstrategie"
    },
    {
      number: "03",
      title: "Umsetzung & Integration",
      description: "IZENIC entwickelt die Lösung, integriert sie in Ihre Systeme und testet sie gemeinsam mit Ihnen. Schneller Time-to-Value.",
      icon: <Wrench className="w-6 h-6" />,
      outcome: "Funktionierende Lösung live"
    },
    {
      number: "04",
      title: "Betrieb & Weiterentwicklung",
      description: "IZENIC begleitet die Lösung im Betrieb: Anpassungen, Monitoring, Erweiterungen. Nachhaltige Wertschöpfung statt einmaliger Projekte.",
      icon: <Settings className="w-6 h-6" />,
      outcome: "Langfristige Profitabilität"
    }
  ];

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-white via-[#f8fafc] to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-graphite-900 leading-[1.1] mb-8">
            So läuft ein Projekt mit IZENIC ab
          </h2>
          <p className="text-xl md:text-2xl text-graphite-700 max-w-4xl mx-auto leading-relaxed font-light">
            Von der ersten Analyse bis zur nachhaltigen Wertschöpfung: ein klarer Prozess für messbare Ergebnisse.
          </p>
        </div>

        {/* Steps Grid - Modernisiert */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute top-[76px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 border-4 border-white shadow-xl z-10" />
              
              <div className="group relative rounded-[32px] border border-[rgba(12,18,26,.12)] bg-white/95 backdrop-blur-xl p-8
                             shadow-[0_12px_32px_rgba(15,23,42,.1)] hover:shadow-[0_24px_64px_rgba(15,23,42,.18)]
                             transition-all duration-500 hover:-translate-y-3 hover:border-[rgba(12,18,26,.2)] h-full">
                
                {/* Number Badge */}
                <div className="absolute -top-5 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold text-lg flex items-center justify-center shadow-2xl border-4 border-white z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center text-cyan-600 mb-6 mt-4 border-2 border-cyan-200 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-graphite-900 mb-4 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-graphite-700 leading-relaxed text-base mb-5">
                  {step.description}
                </p>

                {/* Outcome Badge */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100/50 border-2 border-cyan-200">
                  <CheckCircle2 size={16} className="text-cyan-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-cyan-700">{step.outcome}</span>
                </div>
              </div>

              {/* Connector Arrow (Mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-0">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-cyan-200 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-cyan-500 rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA - Premium Design */}
        <div className="text-center mt-20 md:mt-24">
          <a
            href="/kontakt"
            className="group relative inline-flex items-center gap-3 px-8 py-5 md:px-12 md:py-6 
                     text-base md:text-lg lg:text-xl font-bold text-white
                     rounded-2xl md:rounded-3xl
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
              Kostenloses Erstgespräch sichern
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
