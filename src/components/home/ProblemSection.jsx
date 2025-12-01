import React, { useRef, useState } from "react";
import { Play, Volume2, VolumeX, Zap, Network, Shield, Brain } from "lucide-react";

const ProblemSection = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const fadeTimeout = useRef(null);

  const triggerControls = () => {
    setShowControls(true);
    clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => setShowControls(false), 2500);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
    triggerControls();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    triggerControls();
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setProgress((v.currentTime / v.duration) * 100 || 0);
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    v.currentTime = pos * v.duration;
    triggerControls();
  };

  const handleUserInteraction = () => triggerControls();

  const problems = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Blindleistung statt Wertschöpfung",
      text: "Schluss mit manueller Statuspflege und Dateiverwaltung. Automatisierung gibt Ihrem Team hunderte Stunden zurück. Zeit, die direkt in Kunden und Umsatz fließen kann.",
      gif: "/gifs/clickwork.gif"
    },
    {
      icon: <Network className="w-7 h-7" />,
      title: "Das Ende der Daten-Silos",
      text: "Isolierte Tools bremsen Entscheidungen. IZENIC vernetzt ERP, CRM und Projektmanagement so, dass Informationen fließen. In Echtzeit. Ohne menschliches Zutun. Ohne Fehler.",
      gif: "/gifs/systems.gif"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Sicherheit statt \"Excel-Chaos\"",
      text: "Verabschieden Sie sich von fragilen Bastellösungen. IZENIC transformiert wacklige Hilfsprozesse in robuste, automatisierte Workflows, die skalierbar sind und audit-sicher laufen.",
      gif: "/gifs/excel.gif"
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Wettbewerbsvorteil durch integrierte KI",
      text: "Nutzen Sie KI nicht nur punktuell, sondern systemisch. IZENIC implementiert Intelligenz dort, wo sie Geld spart: In der Vorbereitung von Entscheidungen und der automatischen Abwicklung von Routineaufgaben.",
      gif: "/gifs/chatgpt.gif"
    }
  ];

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-white via-[#f8fafc] to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-graphite-900 leading-[1.1] mb-8">
            Der wahre Engpass ist meist unsichtbar
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 max-w-5xl mx-auto leading-relaxed font-light">
            Es sind die tausenden kleinen manuellen Handgriffe, die sich zu massiven Kostenblöcken summieren.
            <br />
            <span className="font-semibold text-graphite-900 mt-3 block">
              IZENIC ersetzt Reibungsverlust durch nahtlosen Fluss.
            </span>
          </p>
        </div>

        {/* Video Hero - Moderner und größer */}
        <div className="relative mb-24 md:mb-32 max-w-6xl mx-auto">
          <div className="relative rounded-[40px] p-[3px] bg-[linear-gradient(135deg,#cfd6df_0%,#aab4c2_30%,#2b3542_70%,#0b121a_100%)] shadow-[0_40px_100px_rgba(15,23,42,.25)]">
            <div
              className="relative rounded-[37px] overflow-hidden border border-[rgba(12,18,26,.15)] bg-black/95 backdrop-blur-sm"
              onMouseMove={handleUserInteraction}
              onClick={handleUserInteraction}
            >
              <div className="relative aspect-[16/9]">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://res.cloudinary.com/dvyj9gcni/video/upload/v1760139698/izenic_zmbgrb.mp4"
                  autoPlay
                  loop
                  muted={muted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Modern Controls */}
                <div
                  className={`absolute bottom-0 left-0 right-0 px-8 py-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-md transition-opacity duration-500 ${
                    showControls ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div
                    className="relative h-[8px] rounded-full bg-white/25 cursor-pointer mb-5 group"
                    onClick={handleSeek}
                  >
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-white/90 rounded-full transition-all shadow-lg"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <button
                        onClick={togglePlay}
                        className="inline-flex items-center gap-2.5 text-white text-base font-medium bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-xl hover:bg-white/25 transition-all border border-white/10"
                      >
                        {playing ? (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <rect x="6" y="5" width="4" height="14" />
                              <rect x="14" y="5" width="4" height="14" />
                            </svg>
                            Pause
                          </>
                        ) : (
                          <>
                            <Play size={18} /> Abspielen
                          </>
                        )}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="inline-flex items-center gap-2.5 text-white text-base font-medium bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-xl hover:bg-white/25 transition-all border border-white/10"
                      >
                        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        {muted ? "Stumm" : "Ton"}
                      </button>
                    </div>
                    <span className="hidden md:block text-sm text-white/80 font-medium">
                      60 bis 90 Sek • Full HD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Cards - Modernisiertes Design */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {problems.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-[36px] border border-[rgba(12,18,26,.12)] bg-white/95 backdrop-blur-xl p-10 md:p-12
                         shadow-[0_12px_32px_rgba(15,23,42,.1)] hover:shadow-[0_24px_64px_rgba(15,23,42,.18)]
                         transition-all duration-500 hover:-translate-y-3 hover:border-[rgba(12,18,26,.2)]"
            >
              {/* Icon Badge */}
              <div className="absolute -top-6 left-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white shadow-2xl border-4 border-white">
                {item.icon}
              </div>

              {/* GIF - Größer und prominenter */}
              <div className="relative w-full h-56 md:h-64 rounded-3xl overflow-hidden mb-8 bg-gradient-to-br from-[#2b3542]/10 via-[#4a515a]/5 to-[#6c737f]/5 border border-[rgba(12,18,26,.08)]">
                <img
                  src={item.gif}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center text-graphite-400 text-sm bg-[#f8fafc]">
                  GIF: {item.gif}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-graphite-900 mb-5 leading-tight">
                {item.title}
              </h3>
              <p className="text-graphite-700 leading-relaxed text-lg md:text-xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Outro - Modernisiert */}
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center p-12 md:p-16 rounded-[40px] bg-gradient-to-br from-[#2b3542]/5 via-[#4a515a]/3 to-white border border-[rgba(12,18,26,.1)] shadow-[0_20px_60px_rgba(15,23,42,.1)]">
            <p className="text-2xl md:text-3xl lg:text-4xl text-graphite-900 font-bold leading-tight mb-4">
              IZENIC fokussiert sich auf die kritischen 20% Ihres Alltags,
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 leading-relaxed">
              die heute noch Sand im Getriebe sind und verwandeln sie in den{" "}
              <span className="font-bold text-[#2b3542] bg-clip-text text-transparent bg-gradient-to-r from-[#2b3542] to-[#4a515a]">
                Turbo für Ihr Wachstum.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
