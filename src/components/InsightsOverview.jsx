import React from "react";
import { ArrowRight, Calendar } from "lucide-react";

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
  // Format: "4. November, 21:00" -> "4. November, 21:00 Uhr"
  return formatted.replace(/(\d{1,2}):(\d{2})/, "$1:$2 Uhr");
};

const InsightsOverview = () => {
  const handleInsightClick = (id) => {
    window.location.href = `/insights/${id}`;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/insights-0.jpg"
            alt="IZENIC Insights"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          
          {/* Layered Gradients for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-graphite-900/85 via-graphite-900/70 to-graphite-900/85" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_center,rgba(255,255,255,0.15),transparent_70%)] mix-blend-overlay" />
          
          {/* Subtle Mesh Pattern */}
          <div className="absolute inset-0 opacity-20 mesh-bg" />
        </div>
        
        <div className="container-max relative z-10 px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                       bg-white/10 backdrop-blur-md border border-white/20 
                       text-white/95 text-sm font-medium mb-6 md:mb-8 font-sans shadow-lg">
              <span className="w-2 h-2 rounded-full bg-titanium-400" />
              <span>Strategie & Expertise</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-extrabold mb-4 md:mb-8 font-sans tracking-tight leading-[1.1] md:leading-[1.1] overflow-visible">
              <span className="block bg-clip-text text-transparent 
                             bg-[linear-gradient(120deg,#ffffff_0%,#e4ebf2_50%,#cfd6de_100%)]
                             drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)]
                             pb-1 md:pb-2">
                IZENIC
              </span>
              <span className="block mt-0.5 md:mt-3 bg-clip-text text-transparent 
                             bg-[linear-gradient(90deg,#cfd6de_0%,#ffffff_50%,#e4ebf2_100%)]
                             drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                             pb-3 md:pb-4 overflow-visible">
                Insights
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 leading-relaxed font-sans px-4 md:px-0 font-medium max-w-3xl mx-auto">
              Strategie, Automatisierung & KI
              <span className="block mt-2 md:mt-3 text-white/80 text-lg sm:text-xl md:text-2xl font-normal">
                wo sie wirklich wirkt
              </span>
            </p>

            {/* Decorative Elements */}
            <div className="mt-8 md:mt-12 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-titanium-50/50 to-white" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Subtle Blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-titanium-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-graphite-100/30 rounded-full blur-3xl" />
        
        <div className="container-max relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {SAMPLE_INSIGHTS.map((insight, index) => (
              <article
                key={insight.id}
                onClick={() => handleInsightClick(insight.id)}
                className="group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden 
                              bg-white border border-titanium-200/80 
                              shadow-[0_8px_24px_rgba(10,16,25,.08)] 
                              hover:shadow-[0_20px_60px_rgba(10,16,25,.15)]
                              hover:border-titanium-300
                              transition-all duration-500
                              flex flex-col
                              group-hover:scale-[1.02]">
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-titanium-50/0 via-titanium-50/0 to-titanium-100/0 
                                group-hover:from-titanium-50/30 group-hover:via-titanium-50/20 group-hover:to-titanium-100/40
                                transition-all duration-500 pointer-events-none" />
                  
                  {/* Image */}
                  <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-titanium-100 to-titanium-200">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold 
                                     bg-white/95 backdrop-blur-md text-graphite-800 
                                     border border-white/40 shadow-lg
                                     font-sans uppercase tracking-wide">
                        {insight.category}
                      </span>
                    </div>

                    {/* Read More Overlay (appears on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center 
                                  bg-graphite-900/0 group-hover:bg-graphite-900/20
                                  transition-all duration-500">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                    flex items-center gap-2 px-4 py-2 rounded-full
                                    bg-white/95 backdrop-blur-md text-graphite-900 font-medium text-sm">
                        <span>Artikel lesen</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 md:p-6 lg:p-7 flex flex-col relative z-10 bg-white">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-graphite-900 mb-3 
                                  group-hover:text-graphite-700 transition-colors 
                                  line-clamp-2 font-sans tracking-tight
                                  leading-tight">
                      {insight.title}
                    </h2>
                    
                    <p className="text-graphite-600 text-sm md:text-base mb-4 
                                line-clamp-3 flex-1 leading-relaxed font-sans">
                      {insight.excerpt}
                    </p>

                    {/* Date & Footer */}
                    <div className="mt-auto pt-4 border-t border-titanium-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-graphite-500 font-sans">
                          <Calendar size={14} className="text-graphite-400" />
                          <time className="whitespace-nowrap">{formatDate(insight.date)}</time>
                        </div>
                        
                        <div className="flex items-center gap-2 text-graphite-700 font-semibold text-sm 
                                      group-hover:text-graphite-900 transition-colors font-sans">
                          <span className="hidden sm:inline">Mehr lesen</span>
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default InsightsOverview;
