import React from "react";
import { Workflow, BrainCircuit, BarChart2, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Workflow className="w-7 h-7" />,
      title: "Automatisierte Workflows & Integrationen",
      description: "IZENIC verbindet Ihre Systeme so, dass Daten nahtlos fließen. Wiederkehrende Prozesse laufen automatisch im Hintergrund. Ihr Team gewinnt hunderte Stunden pro Monat zurück, die direkt in Wachstum und Profitabilität investiert werden können.",
      tech: [
        "Workflow-Engines wie n8n oder Make",
        "APIs, Webhooks, REST-Schnittstellen",
        "Backend-Services (Python, Node.js, FastAPI)",
        "Datenbanken wie Postgres / Supabase",
        "Docker für reproduzierbare Deployments"
      ],
      gif: "/gifs/workflow.gif",
      value: "Hunderte Stunden pro Monat für strategische Aufgaben",
      benefit: "Mehr Umsatz durch freigesetzte Kapazitäten"
    },
    {
      icon: <BrainCircuit className="w-7 h-7" />,
      title: "Individuelle KI-Anwendungen & Assistenten",
      description: "IZENIC integriert KI dort, wo sie messbare Wertschöpfung generiert: für intelligente Entscheidungsunterstützung, automatisierte Textverarbeitung und interaktive Wissensformate. Keine Experimente, nur Ergebnisse, die Ihr Unternehmen voranbringen.",
      tech: [
        "Große Sprachmodelle (OpenAI, Claude, LLMs)",
        "Prompt-Design, Tools / Assistants, RAG",
        "Embeddings & Vektor-Suchen",
        "Anbindung über APIs & Webhooks",
        "Lokale / EU-gehostete Modelle"
      ],
      gif: "/gifs/ai.gif",
      value: "Wettbewerbsvorteile durch systemische KI-Integration",
      benefit: "Technologische Überlegenheit gegenüber Mitbewerbern"
    },
    {
      icon: <BarChart2 className="w-7 h-7" />,
      title: "Daten, Reporting & Predictive Analytics",
      description: "IZENIC transformiert Ihre Rohdaten in fundierte Entscheidungsgrundlagen. Von automatisierten Reports bis zu prädiktiven Modellen für Auslastung, Durchlaufzeiten und Risikobewertung. Sie treffen Entscheidungen auf Basis von Daten, nicht von Bauchgefühl.",
      tech: [
        "ETL-/ELT-Pipelines",
        "Dashboards & Kennzahlen (BI-Tools)",
        "Statistische Modelle & Regressionen",
        "Predictive-Modelle (Scorings, Forecasts)",
        "Anbindung an DWHs, SAP, Datenbanken"
      ],
      gif: "/gifs/analytics.gif",
      value: "Datenbasierte Profitabilität und Risikominimierung",
      benefit: "Bessere Entscheidungen = höhere Margen"
    }
  ];

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-white via-[#f8fafc] to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-graphite-900 leading-[1.1] mb-8">
            Technologie, die nicht nur funktioniert,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-500">
              sondern Ihr Unternehmen antreibt.
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 max-w-5xl mx-auto leading-relaxed font-light">
            IZENIC nutzt unterschiedliche Technologien, von Low-Code-Workflows bis zu eigenen Services mit Containern und KI-Modellen.
            <br />
            <span className="font-semibold text-graphite-900 mt-3 block">
              Sie erhalten keine Tool-Sammlung, sondern eine Lösung, die in Ihren Alltag passt und messbare Ergebnisse liefert.
            </span>
          </p>
        </div>

        {/* Services Grid - Kompakt und modern */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-[32px] border border-[rgba(12,18,26,.12)] bg-white/95 backdrop-blur-xl p-8
                         shadow-[0_12px_32px_rgba(15,23,42,.1)] hover:shadow-[0_24px_64px_rgba(15,23,42,.18)]
                         transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(12,18,26,.2)] flex flex-col"
            >
              {/* Icon Badge */}
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white shadow-xl border-3 border-white z-10">
                {service.icon}
              </div>

              {/* GIF - Kompakter */}
              <div className="relative w-full h-44 md:h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-[#2b3542]/10 via-[#4a515a]/5 to-[#6c737f]/5 border border-[rgba(12,18,26,.08)]">
                <img
                  src={service.gif}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center text-graphite-400 text-sm bg-[#f8fafc]">
                  GIF: {service.gif}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-graphite-900 mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-graphite-700 leading-relaxed mb-5 text-base flex-grow">
                {service.description}
              </p>

              {/* Value Proposition - Kompakt */}
              <div className="mb-5 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100/50 border-2 border-cyan-200">
                <p className="text-sm font-bold text-cyan-700 mb-1">{service.value}</p>
                <p className="text-xs text-cyan-600">{service.benefit}</p>
              </div>

              {/* Tech Stack - Kompakt */}
              <div className="border-t border-[rgba(12,18,26,.12)] pt-5 mt-auto">
                <p className="text-[10px] uppercase tracking-wider text-graphite-600 mb-3 font-bold">
                  Unter der Haube
                </p>
                <ul className="space-y-2 text-xs md:text-sm text-graphite-700">
                  {service.tech.map((tech, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <ArrowRight size={14} className="text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
