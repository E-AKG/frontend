import React from "react";
import { ArrowRight, ShieldCheck, GitBranch, Eye, Lock, Database, FileCheck } from "lucide-react";
import { btnSolid } from "../constants";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-[#fafbfc] text-graphite-900 overflow-x-hidden">
      {/* =========================
         HERO — Modern Design
      ========================== */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Titan Weiß Background mit subtilem Grid */}
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-10 tracking-tight text-graphite-900">
            Die Infrastruktur für Ihr Wachstum.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 max-w-4xl mx-auto leading-relaxed font-light">
            IZENIC implementiert keine Einzellösungen. IZENIC konstruiert eine kohärente Architektur aus Automation, Datenintelligenz und kognitiven Services.
          </p>
        </div>
      </header>

      {/* =========================
         INTRO — Modell-Agnostik & Souveränität
      ========================== */}
      <section className="relative py-20 bg-white border-y border-[rgba(12,18,26,.08)]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl text-graphite-900 leading-relaxed font-medium">
            IZENIC bindet sich nicht an einzelne Anbieter, sondern an das beste Ergebnis. Die Architekturen von IZENIC sind modular, sicher und skalierbar, egal ob Cloud-native, Hybrid oder On-Premise.
          </p>
        </div>
      </section>

      {/* =========================
         MODULE — Vertikal untereinander
      ========================== */}
      <section className="relative py-20 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Modul A: Workflow Orchestration */}
          <div className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Links: Business Text */}
              <div>
                <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-cyan-600 mb-8 font-mono font-bold bg-cyan-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-cyan-600" />
                  MODUL A
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-graphite-900">
                  High-Performance Orchestrierung
                </h2>
                <p className="text-xl md:text-2xl text-graphite-700 leading-relaxed mb-6">
                  Isolierte Software bremst Wachstum. IZENIC entwickelt eine zentrale Nervenbahn für Ihr Unternehmen, die ERP, CRM und Fachanwendungen in Echtzeit synchronisiert.
                </p>
                <p className="text-lg text-graphite-600 leading-relaxed">
                  Dabei setzt IZENIC auf „Defensive Design": Systeme, die Fehler selbstständig erkennen, melden und abfangen, bevor sie den Betrieb stören.
                </p>
              </div>

              {/* Rechts: Tech Specs */}
              <div className="relative">
                <div className="bg-white border-2 border-cyan-200 rounded-3xl p-8 font-mono text-sm shadow-xl">
                  <div className="text-cyan-600 mb-4 text-xs uppercase tracking-wider font-bold">// ARCHITEKTUR</div>
                  <div className="space-y-2.5 text-graphite-700 mb-6 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500">▸</span>
                      <span>Event-Driven Architecture (EDA)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500">▸</span>
                      <span>Multi-Protocol (REST / GraphQL / SOAP)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500">▸</span>
                      <span>Error Handling & Auto-Retry Logic</span>
                    </div>
                  </div>
                  
                  <div className="text-cyan-600 mb-4 text-xs uppercase tracking-wider font-bold">// ENGINES & CODE</div>
                  <div className="space-y-2.5 text-graphite-700 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500">▸</span>
                      <span>Low-Code Orchestrator (n8n / Make / Enterprise Stacks)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500">▸</span>
                      <span>Custom Microservices (Python / Node.js)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500">▸</span>
                      <span>Containerized Deployments (Docker / Kubernetes ready)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modul B: Cognitive Computing */}
          <div className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Links: Tech Specs */}
              <div className="relative order-2 md:order-1">
                <div className="bg-white border-2 border-amber-200 rounded-3xl p-8 font-mono text-sm shadow-xl">
                  <div className="text-amber-600 mb-4 text-xs uppercase tracking-wider font-bold">// MODELLE (MULTI-MODEL STRATEGY)</div>
                  <div className="space-y-2.5 text-graphite-700 mb-6 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500">▸</span>
                      <span>SOTA LLMs (GPT-4 / Gemini / Claude 3.5)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500">▸</span>
                      <span>Open Source / Private LLMs (Llama / Mistral)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500">▸</span>
                      <span>Fine-Tuning & Prompt Engineering</span>
                    </div>
                  </div>
                  
                  <div className="text-amber-600 mb-4 text-xs uppercase tracking-wider font-bold">// DATEN-INTEGRITÄT</div>
                  <div className="space-y-2.5 text-graphite-700 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500">▸</span>
                      <span>Vektor-Datenbanken & Embeddings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500">▸</span>
                      <span>Private Context Windows</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500">▸</span>
                      <span>Data Governance & PII Masking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rechts: Business Text */}
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-amber-600 mb-8 font-mono font-bold bg-amber-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  MODUL B
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-graphite-900">
                  Secure Enterprise AI & RAG
                </h2>
                <p className="text-xl md:text-2xl text-graphite-700 leading-relaxed mb-6">
                  KI bietet keinen Mehrwert ohne Kontext. IZENIC implementiert „Retrieval-Augmented Generation" (RAG), eine Architektur, die Sprachmodelle sicher mit Ihrem Unternehmenswissen verknüpft, ohne dass Daten zum Training öffentlicher Modelle abfließen.
                </p>
                <p className="text-lg text-graphite-600 leading-relaxed">
                  IZENIC agiert modell-agnostisch: Ob OpenAI, Google DeepMind, Anthropic oder Open-Source-Modelle auf eigenen Servern, IZENIC wählt die Intelligenz, die Ihr Problem am besten löst.
                </p>
              </div>
            </div>
          </div>

          {/* Modul C: Advanced Data Intelligence */}
          <div className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Links: Business Text */}
              <div>
                <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-purple-600 mb-8 font-mono font-bold bg-purple-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  MODUL C
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-graphite-900">
                  Predictive Analytics & Data Science
                </h2>
                <p className="text-xl md:text-2xl text-graphite-700 leading-relaxed mb-6">
                  Der Blick in die Vergangenheit (Reporting) reicht heute nicht mehr. IZENIC nutzt statistische Verfahren und Machine Learning, um aus Ihren historischen Daten Szenarien für die Zukunft zu berechnen.
                </p>
                <p className="text-lg text-graphite-600 leading-relaxed">
                  Von der Regressionsanalyse zur Bestimmung von Einflussfaktoren bis hin zu Forecasting-Modellen für Lagerbestand oder Cashflow. IZENIC macht aus Daten mathematisch fundierte Entscheidungsvorlagen.
                </p>
              </div>

              {/* Rechts: Tech Specs */}
              <div className="relative">
                <div className="bg-white border-2 border-purple-200 rounded-3xl p-8 font-mono text-sm shadow-xl">
                  <div className="text-purple-600 mb-4 text-xs uppercase tracking-wider font-bold">// ANALYTICS & MATH</div>
                  <div className="space-y-2.5 text-graphite-700 mb-6 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <span>Statistische Modellierung & Regressionen</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <span>Time-Series Forecasting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <span>Cluster-Analysen & Klassifizierung</span>
                    </div>
                  </div>
                  
                  <div className="text-purple-600 mb-4 text-xs uppercase tracking-wider font-bold">// INFRASTRUKTUR</div>
                  <div className="space-y-2.5 text-graphite-700 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <span>Modern Data Stack (ELT / ETL Pipelines)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <span>Data Warehousing Integration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <span>Custom Visualization Layers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modul D: Computer Vision */}
          <div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Links: Tech Specs */}
              <div className="relative order-2 md:order-1">
                <div className="bg-white border-2 border-emerald-200 rounded-3xl p-8 font-mono text-sm shadow-xl">
                  <div className="text-emerald-600 mb-4 text-xs uppercase tracking-wider font-bold">// METHODEN</div>
                  <div className="space-y-2.5 text-graphite-700 mb-6 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500">▸</span>
                      <span>Optical Character Recognition (OCR)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500">▸</span>
                      <span>Object Detection & Tracking (YOLO)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500">▸</span>
                      <span>Image Segmentation & Defect Detection</span>
                    </div>
                  </div>
                  
                  <div className="text-emerald-600 mb-4 text-xs uppercase tracking-wider font-bold">// TECHNOLOGIE & INFERENZ</div>
                  <div className="space-y-2.5 text-graphite-700 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500">▸</span>
                      <span>OpenCV / PyTorch / TensorFlow</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500">▸</span>
                      <span>Specialized OCR (Tesseract / PaddleOCR / AWS Textract)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500">▸</span>
                      <span>Vision Transformers & Multimodal LLMs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500">▸</span>
                      <span>Edge Deployment (bei Bedarf)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rechts: Business Text */}
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-emerald-600 mb-8 font-mono font-bold bg-emerald-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  MODUL D
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-graphite-900">
                  Visuelle Prozess-Automatisierung
                </h2>
                <p className="text-xl md:text-2xl text-graphite-700 leading-relaxed mb-6">
                  Die physische Welt besteht nicht aus Excel-Tabellen. IZENIC implementiert Computer Vision Systeme, die als Brücke zwischen analoger Realität und digitaler Datenbank fungieren.
                </p>
                <p className="text-lg text-graphite-600 leading-relaxed">
                  Ob automatisierte Qualitätskontrolle in der Produktion, intelligentes Auslesen komplexer Dokumente (OCR) oder die Überwachung von Warenströmen: IZENIC verwandelt Pixel in strukturierte Daten, oft direkt auf dem Gerät (Edge Computing), um Latenz zu minimieren und Datenflüsse privat zu halten.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
         SICHERHEIT & SOUVERÄNITÄT
      ========================== */}
      <section className="relative py-32 md:py-40 bg-white border-y border-[rgba(12,18,26,.08)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-graphite-900">
              Datenschutz ist kein Feature.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2b3542] to-[#6c737f]">
                Es ist das Fundament.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Lock className="w-10 h-10" />,
                title: "Zero-Training Policy",
                text: "IZENIC konfiguriert Schnittstellen so, dass Ihre Geschäftsdaten nicht zum Training öffentlicher KI-Modelle verwendet werden. Ihr Wissen bleibt Ihr Eigentum."
              },
              {
                icon: <Database className="w-10 h-10" />,
                title: "Modulare Infrastruktur",
                text: "Sie bevorzugen Server in Deutschland? IZENIC ebenfalls. Auf Wunsch setzt IZENIC auf Hosting-Provider und Modelle mit Standort EU/DE und voller DSGVO-Compliance."
              },
              {
                icon: <FileCheck className="w-10 h-10" />,
                title: "Transparente Pipelines",
                text: "Keine Blackbox. Sie sehen genau, welche Daten wann wohin fließen. IZENIC dokumentiert die Datenströme für Ihre Compliance-Abteilung lückenlos."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#fafbfc] border-2 border-[rgba(12,18,26,.1)] rounded-3xl p-10 hover:border-[#2b3542]/30 hover:shadow-2xl transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2b3542]/10 to-[#4a515a]/5 flex items-center justify-center text-[#2b3542] mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 text-graphite-900">{item.title}</h3>
                <p className="text-graphite-700 leading-relaxed text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
         THE ARMORY — Tech Stack (Kompakt)
      ========================== */}
      <section className="relative py-32 md:py-40 bg-[#fafbfc] border-t border-[rgba(12,18,26,.08)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-graphite-900">
              Eingesetzte Technologien
            </h2>
            <p className="text-xl md:text-2xl text-graphite-700 max-w-3xl mx-auto">
              Ein Arsenal an Tools, die IZENIC nicht nur kennt, sondern deren Architektur IZENIC versteht.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* A. Orchestration & Workflow Engines */}
            <div className="bg-white border-2 border-[rgba(12,18,26,.1)] rounded-2xl p-6">
              <h3 className="text-sm uppercase tracking-widest text-graphite-900 mb-4 font-mono font-bold">A. Orchestration</h3>
              <div className="space-y-2">
                {['n8n', 'Make', 'Zapier', 'Power Automate', 'Camunda', 'Apache Airflow', 'Custom Python', 'Webhooks'].map((tech, i) => (
                  <div
                    key={i}
                    className="text-sm text-graphite-600 font-medium py-1.5 px-3 rounded-lg bg-[#fafbfc] hover:bg-cyan-50 hover:text-cyan-600 transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* B. Artificial Intelligence & LLMs */}
            <div className="bg-white border-2 border-[rgba(12,18,26,.1)] rounded-2xl p-6">
              <h3 className="text-sm uppercase tracking-widest text-graphite-900 mb-4 font-mono font-bold">B. AI & LLMs</h3>
              <div className="space-y-2">
                {['GPT-4o', 'Claude 3.5', 'Gemini', 'Mistral', 'Llama 3', 'HuggingFace', 'LangChain', 'OpenCV', 'YOLO', 'Tesseract'].map((tech, i) => (
                  <div
                    key={i}
                    className="text-sm text-graphite-600 font-medium py-1.5 px-3 rounded-lg bg-[#fafbfc] hover:bg-amber-50 hover:text-amber-600 transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* C. Backend, DevOps & Infrastructure */}
            <div className="bg-white border-2 border-[rgba(12,18,26,.1)] rounded-2xl p-6">
              <h3 className="text-sm uppercase tracking-widest text-graphite-900 mb-4 font-mono font-bold">C. Backend & DevOps</h3>
              <div className="space-y-2">
                {['Python', 'Node.js / TS', 'SQL', 'FastAPI', 'Flask', 'Express.js', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Hetzner'].map((tech, i) => (
                  <div
                    key={i}
                    className="text-sm text-graphite-600 font-medium py-1.5 px-3 rounded-lg bg-[#fafbfc] hover:bg-purple-50 hover:text-purple-600 transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* D. Data & Vector Storage */}
            <div className="bg-white border-2 border-[rgba(12,18,26,.1)] rounded-2xl p-6">
              <h3 className="text-sm uppercase tracking-widest text-graphite-900 mb-4 font-mono font-bold">D. Data & Storage</h3>
              <div className="space-y-2">
                {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Pinecone', 'Weaviate', 'Supabase', 'ChromaDB', 'Airtable'].map((tech, i) => (
                  <div
                    key={i}
                    className="text-sm text-graphite-600 font-medium py-1.5 px-3 rounded-lg bg-[#fafbfc] hover:bg-emerald-50 hover:text-emerald-600 transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         CTA
      ========================== */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-white via-[#fafbfc] to-white border-t border-[rgba(12,18,26,.08)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-graphite-900 leading-tight">
            Genug Theorie.
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 mb-12 leading-relaxed">
            Lassen Sie uns prüfen, welche Architektur Ihr Unternehmen benötigt.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 px-12 py-6 bg-[#2b3542] text-white font-bold text-lg md:text-xl rounded-2xl
                     hover:bg-[#1a2332] transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Architektur-Gespräch vereinbaren <ArrowRight size={24} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
