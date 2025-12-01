import React from "react";
import { ArrowRight, Calendar, BookOpen, Sparkles } from "lucide-react";

// Sample insights data
const SAMPLE_INSIGHTS = [
  {
    id: "usecases",
    title: "Der Use Case beginnt bei euch",
    excerpt: "Warum erfolgreiche KI-Projekte nicht mit Technologie, sondern mit Klarheit starten. Und warum KI nicht gleich Automatisierung ist.",
    date: new Date("2024-11-04T21:00:00"),
    image: "/insights-1.jpg",
    category: "Use Cases"
  }
];

const formatDate = (date) => {
  const options = { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" };
  const formatted = date.toLocaleDateString("de-DE", options);
  return formatted.replace(/(\d{1,2}):(\d{2})/, "$1:$2 Uhr");
};

const InsightsOverview = () => {
  const handleInsightClick = (id) => {
    window.location.href = `/insights/${id}`;
  };

  return (
    <main className="min-h-screen bg-[#fafbfc] text-graphite-900 overflow-x-hidden">
      {/* =========================
         HERO — Premium Design
      ========================== */}
      <header className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background mit subtilen Effekten */}
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

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl px-6">
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-cyan-600 mb-8 font-mono font-bold bg-gradient-to-r from-cyan-50 to-cyan-100/50 px-5 py-2.5 rounded-full border border-cyan-200/50 shadow-sm">
            <Sparkles size={14} className="text-cyan-600" />
            <span>STRATEGIE & EXPERTISE</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[1.05] mb-8 tracking-tight text-graphite-900">
            <span className="bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 bg-clip-text text-transparent">
              IZENIC
            </span>
            <br />
            <span className="bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 max-w-4xl mx-auto leading-relaxed font-light">
            Strategie, Automatisierung und KI, wo sie wirklich wirkt.
            <br />
            <span className="text-graphite-600 text-lg md:text-xl lg:text-2xl">
              Erkenntnisse aus der Praxis für nachhaltiges Wachstum.
            </span>
          </p>
        </div>
      </header>

      {/* =========================
         INSIGHTS GRID — Premium Cards
      ========================== */}
      <section className="relative py-24 md:py-32 bg-[#fafbfc]">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-50/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-50/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {SAMPLE_INSIGHTS.map((insight, index) => (
              <article
                key={insight.id}
                onClick={() => handleInsightClick(insight.id)}
                className="group cursor-pointer"
              >
                <div className="relative h-full rounded-[36px] border-2 border-[rgba(12,18,26,.08)] bg-white/80 backdrop-blur-xl p-0
                              shadow-[0_8px_24px_rgba(15,23,42,.08)] hover:shadow-[0_24px_80px_rgba(15,23,42,.2)]
                              transition-all duration-700 hover:-translate-y-3 hover:border-cyan-300/50
                              flex flex-col overflow-hidden
                              group-hover:bg-white">
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-purple-500/0 
                                group-hover:from-cyan-500/5 group-hover:via-cyan-500/10 group-hover:to-purple-500/5
                                transition-all duration-700 rounded-[36px] pointer-events-none" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-64 md:h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-transparent to-purple-100/20 z-10" />
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                    
                    {/* Category Badge - Premium Design */}
                    <div className="absolute top-5 left-5 z-20">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold 
                                     bg-white/95 backdrop-blur-md text-cyan-700 
                                     border border-cyan-200/50 shadow-xl
                                     uppercase tracking-wider
                                     group-hover:bg-cyan-50 group-hover:border-cyan-300 group-hover:shadow-2xl
                                     transition-all duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse" />
                        {insight.category}
                      </span>
                    </div>

                    {/* Read Indicator */}
                    <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/40">
                        <ArrowRight size={18} className="text-cyan-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 md:p-8 flex flex-col bg-white/80 backdrop-blur-sm relative z-10">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-graphite-900 mb-5 
                                  group-hover:text-cyan-600 transition-colors duration-300
                                  leading-tight">
                      {insight.title}
                    </h2>
                    
                    <p className="text-graphite-700 text-base md:text-lg mb-6 
                                line-clamp-3 flex-1 leading-relaxed font-normal">
                      {insight.excerpt}
                    </p>

                    {/* Footer - Premium Design */}
                    <div className="mt-auto pt-6 border-t-2 border-[rgba(12,18,26,.06)]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 text-sm text-graphite-600 font-medium">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center border border-cyan-200/50">
                            <Calendar size={14} className="text-cyan-600" />
                          </div>
                          <time className="whitespace-nowrap">{formatDate(insight.date)}</time>
                        </div>
                        
                        <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm 
                                      group-hover:text-cyan-700 group-hover:gap-3 transition-all duration-300">
                          <span className="hidden sm:inline">Artikel lesen</span>
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center border border-cyan-200/50 group-hover:border-cyan-300 group-hover:shadow-lg transition-all">
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* Empty State - Premium Design */}
          {SAMPLE_INSIGHTS.length === 0 && (
            <div className="text-center py-24">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-100 via-cyan-50 to-purple-50 mb-8 border-2 border-cyan-200/50 shadow-xl">
                <BookOpen className="w-12 h-12 text-cyan-600" />
              </div>
              <h3 className="text-3xl font-bold text-graphite-900 mb-4">Weitere Insights folgen</h3>
              <p className="text-graphite-600 max-w-md mx-auto text-lg">
                Neue Artikel und Erkenntnisse werden regelmäßig veröffentlicht.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default InsightsOverview;
