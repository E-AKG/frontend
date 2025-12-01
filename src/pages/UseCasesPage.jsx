import React from "react";
import { ArrowRight, Zap, Brain, Eye, Code, CheckCircle2 } from "lucide-react";
import { btnSolid } from "../constants";

const UseCasesPage = () => {
  const cases = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Autonome Finanz-Reconciliation & ERP-Sync",
      challenge: "Ein Handelsunternehmen verlor wöchentlich 25 Stunden durch den manuellen Abgleich von Zahlungsanbietern (PayPal/Stripe) mit dem ERP-System. Hohe Fehlerquote durch händische Übertragungen.",
      architecture: "Entwicklung einer Middleware (Python & n8n), die Transaktionsdaten via API extrahiert, normalisiert und automatisch im Buchhaltungssystem verbucht. Inklusive Anomalie-Erkennung bei Abweichungen.",
      results: [
        { label: "Reduktion des manuellen Aufwands", value: "98%", unit: "" },
        { label: "Übertragungsfehler", value: "0%", unit: "" },
        { label: "ROI", value: "< 8", unit: " Wochen" }
      ],
      diagram: ["Stripe API", "Python Script", "ERP Database"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Interne Knowledge-Intelligence (RAG)",
      challenge: "Technische Vertriebsmitarbeiter mussten komplexe Ausschreibungen manuell gegen tausende Seiten interner PDF-Dokumentationen und Alt-Projekte prüfen. Antwortzeiten waren zu langsam.",
      architecture: "Implementierung eines sicheren RAG-Systems (Retrieval Augmented Generation). Vektorisierung des Firmenarchivs und Bereitstellung eines internen KI-Assistenten, der technische Fragen basierend auf verifizierten Unternehmensdaten beantwortet, inklusive Quellenangabe.",
      results: [
        { label: "Beschleunigung bei der Recherche", value: "Faktor 10", unit: "" },
        { label: "Datenschutz", value: "Lokale", unit: " Datenverarbeitung" },
        { label: "Akzeptanz", value: "Sofortige", unit: " Adoption" }
      ],
      diagram: ["PDF Archive", "Vector DB", "RAG System", "Internal Assistant"]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Automatisierte Dokumentenerfassung & Logistik",
      challenge: "Der Wareneingang wurde durch physische Lieferscheine und Etiketten verlangsamt, die manuell abgetippt werden mussten.",
      architecture: "Einsatz einer Computer-Vision-Pipeline (OCR & Layout-Analyse). Das System \"liest\" Scans oder Fotos von Lieferscheinen, extrahiert relevante Tabellendaten, validiert diese gegen Bestellungen im System und löst die Buchung aus.",
      results: [
        { label: "Verbuchung", value: "Realtime", unit: " statt Stapelverarbeitung" },
        { label: "Skalierbarkeit", value: "50-5.000", unit: " Belege ohne Mehrkosten" }
      ],
      diagram: ["Document Scan", "OCR Pipeline", "Data Extraction", "System Validation"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafbfc] text-graphite-900 overflow-x-hidden">
      {/* =========================
         HERO — Der Anspruch
      ========================== */}
      <header className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafbfc] to-white">
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(43, 53, 66, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(43, 53, 66, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-10 tracking-tight text-graphite-900">
            Validierte Performance in realen Szenarien.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 max-w-4xl mx-auto leading-relaxed font-light">
            Theorie ist geduldig. Hier sind dokumentierte Implementierungen, bei denen IZENIC manuelle Engpässe in skalierbare Automatisierung transformiert hat. Gemessen in Zeit, Kosten und Fehlerreduktion.
          </p>
        </div>
      </header>

      {/* =========================
         CASE STUDIES — Mission Files
      ========================== */}
      <section className="relative py-20 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-4">
          {cases.map((caseItem, index) => (
            <div key={index} className="mb-24 md:mb-32 last:mb-0">
              {/* Case Card - Technisches Datenblatt Design (Titan Weiß) */}
              <div className="bg-white border-2 border-[rgba(12,18,26,.12)] rounded-3xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#f8fafc] to-white border-b border-[rgba(12,18,26,.08)] p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center text-cyan-600 border-2 border-cyan-200">
                      {caseItem.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-cyan-600 font-mono mb-1 font-bold">MISSION FILE #{String(index + 1).padStart(2, '0')}</div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-graphite-900">{caseItem.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-8">
                  {/* Herausforderung */}
                  <div>
                    <div className="text-xs uppercase tracking-widest text-amber-600 font-mono mb-3 font-bold">SITUATION</div>
                    <p className="text-graphite-700 leading-relaxed text-lg">{caseItem.challenge}</p>
                  </div>

                  {/* Architektur Diagram */}
                  <div className="bg-[#f8fafc] border-2 border-[rgba(12,18,26,.1)] rounded-2xl p-6">
                    <div className="text-xs uppercase tracking-widest text-cyan-600 font-mono mb-4 font-bold">ARCHITEKTUR</div>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-graphite-700">
                      {caseItem.diagram.map((item, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && <span className="text-cyan-500">→</span>}
                          <span className="px-3 py-1.5 bg-white rounded-lg border-2 border-[rgba(12,18,26,.1)]">{item}</span>
                        </React.Fragment>
                      ))}
                    </div>
                    <p className="mt-4 text-graphite-700 leading-relaxed">{caseItem.architecture}</p>
                  </div>

                  {/* Ergebnisse - KPIs */}
                  <div>
                    <div className="text-xs uppercase tracking-widest text-emerald-600 font-mono mb-4 font-bold">ERGEBNIS</div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {caseItem.results.map((result, i) => (
                        <div key={i} className="bg-[#f8fafc] border-2 border-[rgba(12,18,26,.1)] rounded-xl p-6">
                          <div className="font-mono text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                            {result.value}
                            <span className="text-lg text-graphite-600">{result.unit}</span>
                          </div>
                          <div className="text-sm text-graphite-700">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
         CUSTOM ENGINEERING — Wildcard Block
      ========================== */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-[#fafbfc] via-white to-[#fafbfc] border-y border-[rgba(12,18,26,.08)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative bg-gradient-to-br from-white to-[#f8fafc] border-2 border-[rgba(12,18,26,.12)] rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/50 to-purple-100/50 rounded-full blur-3xl -z-0" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center text-cyan-600 border-2 border-cyan-200">
                  <Code className="w-8 h-8" />
                </div>
                <div className="text-xs uppercase tracking-widest text-cyan-600 font-mono font-bold">CUSTOM ENGINEERING</div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-graphite-900 mb-6 leading-tight">
                Ihr Szenario ist hier nicht gelistet?
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">
                  Exzellent.
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-graphite-700 leading-relaxed mb-8 max-w-4xl">
                Standardprobleme erfordern Standardlösungen. Wettbewerbsvorteile entstehen jedoch dort, wo Sie Probleme lösen, an die sich andere nicht herantrauen.
              </p>

              <p className="text-lg text-graphite-600 leading-relaxed mb-10 max-w-4xl">
                Die Stärke von IZENIC liegt in der <span className="text-cyan-600 font-semibold">technologischen Agilität</span>. Ob es um IoT-Datenströme, komplexe mathematische Vorhersagemodelle oder eine gänzlich neue Software-Architektur geht: IZENIC analysiert den Prozess, nicht das Tool.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3">
                {['IoT Integration', 'Sprachsteuerung', 'Dynamic Pricing', 'Legacy System Rescue', 'Mathematical Models', 'Edge Computing'].map((tech, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-white border-2 border-[rgba(12,18,26,.1)] rounded-lg font-mono text-sm text-graphite-700 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
                  >
                    &gt; {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         CTA — Engineering Challenge
      ========================== */}
      <section className="relative py-32 md:py-40 bg-white border-t border-[rgba(12,18,26,.08)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-graphite-900 leading-tight">
            Haben Sie einen Engpass, der unlösbar scheint?
          </h2>
          <p className="text-xl md:text-2xl text-graphite-700 mb-12 leading-relaxed">
            Lassen Sie uns die Machbarkeit prüfen.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 px-12 py-6 bg-[#2b3542] text-white font-bold text-lg md:text-xl rounded-2xl
                     hover:bg-[#1a2332] transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Engineering-Challenge starten <ArrowRight size={24} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default UseCasesPage;
