import React from "react";
import { TrendingUp, Code2, ShieldCheck, UserCheck } from "lucide-react";

const USPSection = () => {
  const usps = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Ergebnisse, die man in der Bilanz sieht",
      text: "IZENIC misst den Erfolg nicht an der Anzahl der implementierten Tools, sondern an Ihrer gesteigerten Marge und den eingesparten Stunden. Jede Lösung muss einen positiven ROI liefern, schnell und dauerhaft."
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Technologische Unabhängigkeit",
      text: "IZENIC verkauft Ihnen keine Tools, IZENIC löst Probleme. Ob komplexe Backend-Entwicklung oder schnelle Low-Code-Integration: IZENIC wählt die Technologie, die für Ihren Anwendungsfall die meiste Power bringt."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Enterprise-Ready Compliance",
      text: "IZENIC versteht die Anforderungen des DACH-Mittelstands. Die Systeme von IZENIC sind so gebaut, dass sie Audits standhalten, Daten schützen und sich nahtlos in professionelle IT-Landschaften einfügen."
    },
    {
      icon: <UserCheck className="w-7 h-7" />,
      title: "Ein Ansprechpartner, der Verantwortung übernimmt",
      text: "Keine Stille Post, keine wechselnden Projektmanager. Sie arbeiten mit Unternehmern, die Ihre Sprache sprechen und Verantwortung für das Ergebnis übernehmen."
    }
  ];

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-white via-[#f8fafc] to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-graphite-900 leading-[1.1] mb-8">
            Warum Marktführer auf IZENIC setzen
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 max-w-5xl mx-auto leading-relaxed font-light">
            Eingriffe in Kernprozesse erfordern die Präzision eines Spezialisten. IZENIC behandelt Ihre IT-Infrastruktur mit höchster Sorgfalt: IZENIC steht für Code-Qualität und System-Architektur, die Audit-Ansprüchen genügt und Risiken eliminiert, statt neue zu schaffen.
          </p>
        </div>

        {/* USP Cards Grid - Modernisiert */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="group relative rounded-[36px] border border-[rgba(12,18,26,.12)] bg-white/95 backdrop-blur-xl p-10 md:p-12
                         shadow-[0_12px_32px_rgba(15,23,42,.1)] hover:shadow-[0_24px_64px_rgba(15,23,42,.18)]
                         transition-all duration-500 hover:-translate-y-3 hover:border-[rgba(12,18,26,.2)]"
            >
              {/* Icon Badge */}
              <div className="absolute -top-6 left-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white shadow-2xl border-4 border-white z-10">
                {usp.icon}
              </div>

              <div className="mt-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-graphite-900 mb-5 leading-tight">
                  {usp.title}
                </h3>
                <p className="text-graphite-700 leading-relaxed text-lg md:text-xl">
                  {usp.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
