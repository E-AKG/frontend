import React from "react";
import { ShieldCheck, Factory, Users2, GraduationCap, BarChart2, Settings2, Cpu, Target, Zap, Brain, Code } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#fafbfc] text-graphite-900 overflow-x-hidden">
      {/* =========================
         HERO — Vision
      ========================== */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
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
            Mehr als Technologie.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2b3542] to-[#6c737f]">
              Eine Vision von Klarheit.
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 max-w-4xl mx-auto leading-relaxed font-light">
            IZENIC steht für intelligente Systeme, die verstehen, strukturieren und Entscheidungen stärken. Technologie, die den Menschen entlastet.
          </p>
        </div>
      </header>

      {/* =========================
         FOUNDER — Emirkaan Akgün
      ========================== */}
      <section className="relative py-32 md:py-40 bg-white border-y border-[rgba(12,18,26,.08)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT — IMAGE */}
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-full max-w-[400px] aspect-square rounded-[40px] overflow-hidden shadow-2xl border-2 border-[rgba(12,18,26,.08)]">
                <img
                  src="/founder.jpg"
                  alt="Emirkaan Akgün"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* RIGHT — TEXT & STRUCTURE */}
            <div className="relative flex flex-col items-start">
              <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-cyan-600 mb-6 font-mono font-bold bg-cyan-50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                GRÜNDER
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-graphite-900 leading-tight">
                Emirkaan Akgün
              </h2>

              <p className="text-xl md:text-2xl text-graphite-700 leading-relaxed mb-10">
                Verbindet technologische Präzision mit unternehmerischer Weitsicht. Der Fokus liegt auf KI-gestützter Prozessoptimierung, Automatisierung und datenbasierter Entscheidungsfindung mit dem Anspruch, Strukturen zu schaffen, die Effizienz, Klarheit und Wirkung vereinen.
              </p>

              {/* Dual Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6 w-full mb-12">
                <div className="rounded-3xl bg-[#f8fafc] border-2 border-[rgba(12,18,26,.1)] p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-graphite-900">Profil</h3>
                  <p className="text-base text-graphite-700 leading-relaxed">
                    Technologische Tiefe, analytisches Denken und klare Strukturen. Ziel ist es, KI und Automatisierung als Werkzeuge einzusetzen, um Organisationen messbar zu stärken.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#f8fafc] border-2 border-[rgba(12,18,26,.1)] p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-graphite-900">Erfahrung</h3>
                  <p className="text-base text-graphite-700 leading-relaxed">
                    Kombination aus akademischem Fundament und praxisnaher Umsetzung in Forschung, Industrie und Startups mit Fokus auf Automatisierung und KI.
                  </p>
                </div>
              </div>

              {/* EXPERTISE CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  { label: "M.Sc. Data Science", icon: <GraduationCap className="w-5 h-5" /> },
                  { label: "B.Sc. Wirtschaftsinformatik", icon: <BarChart2 className="w-5 h-5" /> },
                  { label: "Projekte in Forschung & Industrie", icon: <Settings2 className="w-5 h-5" /> },
                  { label: "Spezialisierung auf KI & Automation", icon: <Cpu className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl border-2 border-[rgba(12,18,26,.1)] 
                               bg-white shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center text-cyan-600">
                      {item.icon}
                    </div>
                    <span className="text-base text-graphite-900 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         MISSION & PHILOSOPHIE
      ========================== */}
      <section className="relative py-32 md:py-40 bg-[#fafbfc] border-y border-[rgba(12,18,26,.08)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-graphite-900">
              Mission & Philosophie
            </h2>
            <p className="text-xl md:text-2xl text-graphite-700 max-w-3xl mx-auto">
              Die Prinzipien, die IZENIC antreiben
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Verstehen, wo KI wirkt",
                desc: (
                  <>
                    Die Gewinner der KI-Revolution werden nicht diejenigen sein, die verstehen,{" "}
                    <span className="font-semibold text-graphite-900">wie KI funktioniert</span>,  
                    sondern diejenigen, die früh erkennen,{" "}
                    <span className="font-semibold text-graphite-900">wo sie wirkt.</span>
                  </>
                ),
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Technologie mit Haltung",
                desc: (
                  <>
                    IZENIC glaubt daran, dass Automatisierung und KI keine Werkzeuge  
                    für Bequemlichkeit sind, sondern{" "}
                    <span className="font-semibold text-graphite-900">Instrumente für Fokus, Struktur und echten Fortschritt.</span>
                  </>
                ),
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Pioniergeist der Gegenwart",
                desc: (
                  <>
                    Wer heute lernt, KI gezielt einzusetzen, verschafft sich denselben Vorteil,  
                    den jede Generation von{" "}
                    <span className="font-semibold text-graphite-900">Pionieren</span> hatte.  
                    Den Mut, neue Technologie nicht nur zu verstehen, sondern sie anzuwenden.
                  </>
                ),
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Klarheit in Komplexität",
                desc: (
                  <>
                    Automatisierung ist kein Selbstzweck. Sie ist{" "}
                    <span className="font-semibold text-graphite-900">Klarheit in einer Zeit der Komplexität.{" "}</span>  
                    Und genau das ist die Mission von IZENIC:{" "}
                    <span className="font-semibold text-graphite-900">Strukturen zu schaffen, die bleiben. Auch wenn sich alles verändert.</span>
                  </>
                ),
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white border-2 border-[rgba(12,18,26,.1)] rounded-3xl p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center text-cyan-600 flex-shrink-0 border-2 border-cyan-200">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-graphite-900">{step.title}</h3>
                      <p className="text-lg md:text-xl text-graphite-700 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
                
                {i < 3 && (
                  <div className="flex justify-center mt-8 mb-4">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-200 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
         WERTE
      ========================== */}
      <section className="relative py-32 md:py-40 bg-white border-y border-[rgba(12,18,26,.08)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-graphite-900">
              Werte, die IZENIC prägen
            </h2>
            <p className="text-xl md:text-2xl text-graphite-700 max-w-3xl mx-auto">
              Die Grundsätze, die jede Entscheidung und jede Lösung leiten
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <ShieldCheck className="w-10 h-10" />, 
                title: "Datensouveränität", 
                desc: "Verantwortungsvoller Umgang mit Daten. Transparent, sicher, nachvollziehbar." 
              },
              { 
                icon: <Factory className="w-10 h-10" />, 
                title: "Made in Germany", 
                desc: "Lokale Entwicklung, geprüfte Qualität und höchste Standards in jedem Schritt." 
              },
              { 
                icon: <Users2 className="w-10 h-10" />, 
                title: "Partnerschaft", 
                desc: "Erfolg entsteht im Dialog, nicht in Isolation. Vertrauen ist Teil des Systems." 
              },
            ].map((v, i) => (
              <div
                key={i}
                className="relative rounded-3xl border-2 border-[rgba(12,18,26,.1)] bg-[#f8fafc] p-10 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center text-cyan-600 mb-6 border-2 border-cyan-200">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-graphite-900 mb-4">{v.title}</h3>
                <p className="text-lg text-graphite-700 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
