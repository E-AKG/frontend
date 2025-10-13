import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ChevronRight, Sparkles, CheckCircle2, Workflow, FileText, BrainCircuit,
  Users, Wrench, LineChart, ShieldCheck, Phone, Mail, Star, Clock4, Wallet, Trophy, Play
} from "lucide-react";
import { Volume2, VolumeX } from "lucide-react";
// oben ergänzen
import {
  Scale, ShoppingCart, Building2, Stethoscope, Truck, Users2,
  Landmark, Factory, Megaphone, Hammer, PlayCircle
} from "lucide-react";


/* =========================
   THEME — Titanium × Weiß
========================= */
const LOGO = "/izenic-logo.png";
const btnSolid =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white " +
  "bg-[linear-gradient(135deg,#2b3542,#0b121a)] border border-white/10 " +
  "shadow-[0_14px_28px_rgba(13,18,26,.32),inset_0_1px_0_rgba(255,255,255,.10)]";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium " +
  "border border-[rgba(12,18,26,.18)] bg-white/80 backdrop-blur text-graphite-900";


/* =========================
   SEPARATOR & REVEAL — Premium Upgrade
========================= */
const SectionCut = ({ label = "", subtle = false, icon = null }) => (
  <div
    role="separator"
    aria-label={label || undefined}
    className="relative my-12 md:my-16"
  >
    {/* Line mit Shine */}
    <div className="relative h-[2px] w-full overflow-hidden rounded-full">
      <div
        className={`absolute inset-0 ${
          subtle
            ? "bg-[linear-gradient(90deg,rgba(12,18,26,.08),rgba(12,18,26,.12),rgba(12,18,26,.08))]"
            : "bg-[linear-gradient(90deg,#cfd6df,#aab4c2,#2b3542,#aab4c2,#cfd6df)]"
        }`}
      />
      {/* Shine Effekt */}
      {!subtle && (
        <div
          className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />
      )}
    </div>

    {/* Floating Label */}
    {label ? (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]
                         bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full 
                         border border-[rgba(12,18,26,.14)] shadow-md
                         text-graphite-800 font-medium">
          {icon && <span className="text-graphite-700">{icon}</span>}
          {label}
        </span>
      </div>
    ) : null}
  </div>
);

const Reveal = ({ children, delay = 0 }) => (
  <div>
    {children}
  </div>
);
// --- Helpers (oberhalb deiner Components platzieren) ---
const isSectorPage = () => new URLSearchParams(window.location.search).has("sector");

const goToLandingAnchor = (id) => {
  const base = `${window.location.origin}${window.location.pathname}`;
  window.location.href = `${base}#${id}`;
};

// Für onClick-Handler: verhindert das Standard-Anchor-Verhalten
const toLanding = (id) => (e) => {
  e.preventDefault();
  goToLandingAnchor(id);
};

/* =========================
   PAGE-QUERY (Leistungen / Über uns)
========================= */
const getPageFromQuery = () => {
  const p = new URLSearchParams(window.location.search);
  return p.get("page"); // "services" | "about" | null
};
const openPageTab = (slug /* "services" | "about" */) => {
  const url = new URL(window.location.href);
  url.searchParams.set("page", slug);
  url.searchParams.delete("sector"); // falls man aus einem Branchen-Tab kommt
  window.open(url.toString(), "_blank", "noopener,noreferrer");
};

/* =========================
   VIEW: Leistungen — Cinematic Titanium Experience
========================= */
const ServicesView = () => {

  const ref = useRef(null);

  return (
    <main className="min-h-screen bg-white text-graphite-900 overflow-x-hidden">
      {/* =========================
         HERO — Cinematic Entry
      ========================== */}
      <header
        ref={ref}
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      >
{/* Background Image */}
        <div className="absolute inset-0">
  {/* Hintergrundbild */}
  <img
    src="/impact.jpg"
    alt="Impact Background"
    className="absolute inset-0 w-full h-full object-cover"
    loading="eager"
    fetchpriority="high"
  />

  {/* Dunkles Overlay */}
  <div className="absolute inset-0 bg-black/40" /> 
  {/* bg-black/40 = 40% Schwarz, kannst du feintunen: /30 = heller, /60 = dunkler */}
</div>
        {/* Hero Content */}
        <div
          className="relative z-10 max-w-4xl px-6"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1]
                       bg-clip-text text-transparent bg-[linear-gradient(100deg,#ffffff_0%,#cfd6df_45%,#9ca6b3_100%)]
                       drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            Leistungen mit messbarem Impact
          </h1>
          <p className="mt-5 text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            IZENIC hilft Unternehmen, ihre Prozesse mit Automatisierung und KI zu optimieren. Strategisch beratend, technisch entwickelnd und menschlich befähigend.
          </p>
        </div>

      </header>

      {/* =========================
         SERVICES GRID
      ========================== */}
      <section
        className="relative max-w-7xl mx-auto px-6 py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-white to-[#f7f9fc]" />
        <div className="relative grid md:grid-cols-3 gap-10 z-10">
          {[
            {
              title: "Beratung",
              kicker: "Von Analyse zu Wirkung",
              desc: "Strategische Grundlage für intelligente Automatisierung. Bestehende Abläufe werden analysiert, Engpässe erkannt und Quick-Wins priorisiert.",
              points: [
                "Identifikation automatisierbarer Prozesse",
                "Machbarkeits- & ROI-Bewertung",
                "Individuelle Automatisierungs-Roadmaps",
              ],
              icon: <Users className="w-6 h-6" />,
              bg: "/leistung-beratung.jpg",
            },
            {
              title: "Umsetzung",
              kicker: "Von Konzept zu Realität",
              desc: "Von der Idee zum funktionierenden System. Skalierbare, sichere Automatisierungen, die sich nahtlos integrieren.",
              points: [
                "Individuelle Automatisierungstools",
                "KI-gestützte Analysen & Dashboards",
                "Integration in ERP-, CRM- & Datensysteme",
              ],
              icon: <Wrench className="w-6 h-6" />,
              bg: "/leistung-dev.jpg",
            },
            {
              title: "Coaching",
              kicker: "Wissen schafft Wirkung",
              desc: "Teams werden befähigt, KI- und Automatisierungstechnologien sicher einzusetzen. Praxisnah, verständlich, nachhaltig.",
              points: [
                "Workshops & Schulungen mit Praxisbezug",
                "Aufbau interner Automatisierungskompetenzen",
                "Trainings zu KI, Data Science & Prompt Engineering",
              ],
              icon: <FileText className="w-6 h-6" />,
              bg: "/leistung-coaching.jpg",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="relative group rounded-[28px] overflow-hidden
                         border border-[rgba(255,255,255,0.15)] bg-white/90 backdrop-blur-xl
                         shadow-[0_20px_50px_rgba(15,23,42,.08)] "
            >
              <img
                src={c.bg}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover opacity-35  "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="relative z-10 p-8 flex flex-col justify-end text-white">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] mb-2
                                rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
                  {c.icon} {c.kicker}
                </div>
                <h3 className="text-2xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">{c.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/90">
                  {c.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 size={16} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Row */}
        <div
          className="relative z-10 mt-20 grid sm:grid-cols-3 gap-5 text-sm text-graphite-700"
        >
          {[
            { icon: <ShieldCheck size={18} />, text: "DSGVO-konform & revisionssicher" },
            { icon: <LineChart size={18} />, text: "Transparente KPIs & klarer ROI" },
            { icon: <Wrench size={18} />, text: "Flexibel in EU-Cloud oder On-Premises" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white/95 backdrop-blur
                         px-4 py-3 border border-[rgba(12,18,26,.12)]
                         shadow-sm  "
            >
              {t.icon} {t.text}
            </div>
          ))}
        </div>

        {/* CTA Stripe */}
        <div
          className="relative z-10 mt-24 rounded-[32px] p-[2px]
                     bg-[linear-gradient(135deg,#cfd6df,#aab4c2,#2b3542)]
                     shadow-[0_30px_80px_rgba(15,23,42,.15)]"
        >
<div className="rounded-[30px] bg-white/95 backdrop-blur-xl p-10 text-center">
  <h3 className="text-2xl md:text-3xl font-bold text-graphite-900">
    Der erste Schritt zu messbarer Wirkung
  </h3>
  <p className="mt-3 text-graphite-700 max-w-2xl mx-auto">
  Erhalten Sie in einem unverbindlichen Erstgespräch Klarheit darüber, wo Automatisierung unmittelbar entlastet und KI echten Mehrwert schafft. Ohne Risiko. Mit messbaren Ergebnissen.
  </p>
  <a
    href="/kontakt"
    className={
      btnSolid +
      " mt-6 inline-flex px-8 py-4 justify-center text-lg  "
    }
  >
    Erstgespräch vereinbaren
  </a>
</div>
        </div>
      </section>
    </main>
  );
};

/* =========================
   VIEW: Über mich — IZENIC Titanium Vision Contrast v2
========================= */
const AboutView = () => {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-graphite-100 overflow-x-hidden">

      {/* ============= HERO ============= */}
      <section className="relative h-[95vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/us.jpg"
          alt="Izenic Vision Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/60 via-[#121821]/70 to-[#f9fafc]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_center,rgba(255,255,255,0.08),transparent_70%)] mix-blend-overlay" />

        <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
  Mehr als Technologie.<br />
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a3b4c4] via-[#cfd6de] to-[#e4ebf2]">
    Eine Vision von Klarheit.
  </span>
</h1>
          <p className="mt-6 text-white/85 text-lg sm:text-xl md:text-2xl leading-relaxed">
          IZENIC steht für intelligente Systeme, die verstehen, strukturieren und Entscheidungen stärken. Technologie, die den Menschen entlastet.
          </p>
        </div>
      </section>

{/* =========================
   FOUNDER — IZENIC Titanium Harmony Refined v3
========================= */}
<section className="relative py-36 overflow-hidden bg-gradient-to-b from-[#f9fafb] via-[#eef2f6] to-[#e4e8ee] text-[#1c242e]">
  {/* Subtle Noise & Glow */}
  <div className="absolute inset-0 opacity-[.04] [background-image:url('/noise.png')] [background-size:300px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
    
    {/* LEFT — IMAGE */}
    <div className="relative flex justify-center md:justify-end">
      <div className="relative w-[320px] sm:w-[360px] md:w-[400px] aspect-square rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.25)] border border-[rgba(12,18,26,.08)] bg-gradient-to-br from-[#fdfdfd] to-[#e9edf3]">
        <img
          src="/founder.jpg"
          alt="Emirkaan Akgün"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      </div>

      {/* Ambient glow */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[260px] h-[260px] bg-[radial-gradient(circle,rgba(150,170,200,0.25),transparent_70%)] blur-3xl opacity-70" />
    </div>

    {/* RIGHT — TEXT & STRUCTURE */}
    <div className="relative flex flex-col items-start">
      {/* Header */}
      <h2 className="text-[2.2rem] sm:text-[2.4rem] md:text-[2.5rem] font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#2b3542] via-[#4b5460] to-[#9098a4]">
        Emirkaan Akgün
      </h2>
      <p className="text-[#7a828b] text-xs sm:text-sm uppercase tracking-[0.17em] mb-8">
        Gründer
      </p>

      {/* Intro Text */}
      <p className="text-[17px] leading-relaxed text-[#2b3542]/90 mb-10">
        Verbindet technologische Präzision mit unternehmerischer Weitsicht.  
        Der Fokus liegt auf KI-gestützter Prozessoptimierung, Automatisierung  
        und datenbasierter Entscheidungsfindung mit dem Anspruch,  
        Strukturen zu schaffen, die Effizienz, Klarheit und Wirkung vereinen.
      </p>

      {/* Dual Info Cards */}
      <div className="grid sm:grid-cols-2 gap-6 w-full mb-12">
        <div className="rounded-[24px] bg-white/90 backdrop-blur-xl border border-[rgba(12,18,26,0.08)] p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)]">
          <h3 className="text-lg font-semibold mb-2 text-[#1c242e]">Profil</h3>
          <p className="text-sm text-[#2b3542]/90 leading-relaxed">
            Technologische Tiefe, analytisches Denken und klare Strukturen.  
            Ziel ist es, KI und Automatisierung als Werkzeuge einzusetzen,  
            um Organisationen messbar zu stärken.
          </p>
        </div>
        <div className="rounded-[24px] bg-white/90 backdrop-blur-xl border border-[rgba(12,18,26,0.08)] p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)]">
          <h3 className="text-lg font-semibold mb-2 text-[#1c242e]">Erfahrung</h3>
          <p className="text-sm text-[#2b3542]/90 leading-relaxed">
            Kombination aus akademischem Fundament und praxisnaher Umsetzung  
            in Forschung, Industrie und Startups mit Fokus auf Automatisierung und KI.
          </p>
        </div>
      </div>

      {/* Harmonized Bullet Tags */}
      <div className="flex flex-wrap justify-start gap-4">
        {[
          "M.Sc. Data Science",
          "B.Sc. Wirtschaftsinformatik",
          "Projekte in Forschung & Industrie",
          "Spezialisierung auf KI & Automation",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-2 w-[280px] sm:w-[260px] md:w-[270px] h-[46px]
                       rounded-full border border-[#d0d6dc] bg-white/85 
                       shadow-[0_6px_18px_rgba(10,16,25,0.08)] 
                       text-[15px] text-[#2b3542] font-medium tracking-tight"
          >
            <CheckCircle2 size={18} className="text-[#7f8896]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* ============= MISSION & PHILOSOPHIE — Titanium Vision Line Edition ============= */}
<section className="relative py-52 text-center bg-gradient-to-b from-[#0b0f14] via-[#121821] to-[#1a212b] text-white overflow-hidden">
  {/* Subtle radial light */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] blur-[100px]" />

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <h2 className="text-3xl sm:text-5xl font-extrabold mb-24 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#e2e8f0] via-white to-[#b0b8c4]">
      Mission & Philosophie
    </h2>

    {/* === CONNECTED CLEAN FLOW === */}
    <div className="relative flex flex-col items-center space-y-16">
      {[
        {
          title: "Verstehen, wo KI wirkt",
          desc: (
            <>
              Die Gewinner der KI-Revolution werden nicht diejenigen sein, die verstehen,{" "}
              <span className="font-semibold text-[#cfd6de]">wie KI funktioniert</span>,  
              sondern diejenigen, die früh erkennen,{" "}
              <span className="font-semibold text-[#cfd6de]">wo sie wirkt.</span>
            </>
          ),
        },
        {
          title: "Technologie mit Haltung",
          desc: (
            <>
              Izenic glaubt daran, dass Automatisierung und KI keine Werkzeuge  
              für Bequemlichkeit sind, sondern{" "}
              <span className="font-semibold text-[#cfd6de]">Instrumente für Fokus, Struktur und echten Fortschritt.</span>
            </>
          ),
        },
        {
          title: "Pioniergeist der Gegenwart",
          desc: (
            <>
              Wer heute lernt, KI gezielt einzusetzen, verschafft sich denselben Vorteil,  
              den jede Generation von{" "}
              <span className="font-semibold text-[#cfd6de]">Pionieren</span> hatte.  
              Den Mut, neue Technologie nicht nur zu verstehen, sondern sie anzuwenden.
            </>
          ),
        },
        {
          title: "Klarheit in Komplexität",
          desc: (
            <>
              Automatisierung ist kein Selbstzweck. Sie ist{" "}
              <span className="font-semibold text-[#cfd6de]">Klarheit in einer Zeit der Komplexität.{" "}</span>  
               Und genau das ist die Mission von Izenic:{" "}
              <span className="font-semibold text-[#cfd6de]">Strukturen zu schaffen, die bleiben. Auch wenn sich alles verändert.</span>
            </>
          ),
        },
      ].map((step, i) => (
        <div key={i} className="relative flex flex-col items-center w-full max-w-3xl">
          {/* Verbindungspfeil zwischen den Boxen */}
          {i > 0 && (
            <div className="flex items-center justify-center -mt-6 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-[#a7afb9]/80"
              >
                <path d="M12 5v14m0 0l-4-4m4 4l4-4" />
              </svg>
            </div>
          )}

          {/* Card */}
          <div className="relative w-full p-10 rounded-3xl bg-gradient-to-b from-[#1b222d]/90 via-[#1e252f]/90 to-[#141a22]/90 border border-[rgba(255,255,255,0.08)] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-bold mb-3 text-[#e2e8f0]">{step.title}</h3>
            <p className="text-[17px] leading-relaxed text-white/80">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ============= WERTE — jetzt hell & clean ============= */}
      <section className="relative py-44 bg-gradient-to-b from-[#f9fafb] via-[#eef2f6] to-[#dfe5ec] text-center text-[#1c242e] overflow-hidden">
        <div className="absolute inset-0 opacity-[.05] [background-image:url('/noise.png')] [background-size:300px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,200,230,0.08),transparent_70%)] blur-[100px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-[#1c242e] via-[#4b5560] to-[#8d96a2]">
            Werte, die IZENIC prägen
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { icon: <ShieldCheck size={30} />, title: "Datensouveränität", desc: "Verantwortungsvoller Umgang mit Daten. Transparent, sicher, nachvollziehbar." },
              { icon: <Factory size={30} />, title: "Made in Germany", desc: "Lokale Entwicklung, geprüfte Qualität und höchste Standards in jedem Schritt." },
              { icon: <Users2 size={30} />, title: "Partnerschaft", desc: "Erfolg entsteht im Dialog, nicht in Isolation. Vertrauen ist Teil des Systems." },
            ].map((v, i) => (
              <div
                key={i}
                className="relative rounded-[28px] border border-[rgba(12,18,26,.08)] bg-white/90 backdrop-blur-xl shadow-[0_15px_45px_rgba(15,23,42,0.08)] p-10 group"
              >
                <div className="flex justify-center mb-5 text-[#4c5662]">{v.icon}</div>
                <h3 className="font-semibold text-xl text-[#1c242e] mb-2">{v.title}</h3>
                <p className="text-sm text-[#2b3542] leading-relaxed">{v.desc}</p>
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(160,180,200,0.07),transparent_60%)] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

/* =========================
   NAVBAR — Titanium Fullscreen Slide Edition + Branchen-Mega-Menü
========================= */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openSectors, setOpenSectors] = useState(false);

  const goHome = (e) => {
    e.preventDefault();
    setOpen(false);
    setOpenSectors(false);
    window.location.href = "/";
  };

  const linkFx = `
    relative -all              after:absolute after:bottom-[-6px] after:left-0 after:h-[2px]
    after:w-0 after:bg-gradient-to-r after:from-[#2b3542] after:to-[#9ca3af]
    hover:after:w-full after:-all after: after:rounded-full
  `;

  // ESC-Taste schließt Menüs
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenSectors(false);
      }
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  // Klick außerhalb des Branchen-Menüs schließt es
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById("sectors-menu");
      const button = document.getElementById("sectors-button");
      if (
        openSectors &&
        menu &&
        button &&
        !menu.contains(e.target) &&
        !button.contains(e.target)
      ) {
        setOpenSectors(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openSectors]);

  return (
    <header className="sticky top-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-[rgba(43,53,66,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
      <nav className="max-w-7xl mx-auto px-4 h-32 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={goHome}
          className="flex items-center group"
          aria-label="Izenic Home"
        >
          <img
            src={LOGO}
            alt="Izenic Logo"
            className="h-28 w-auto md:h-36 object-contain shrink-0                         group- group- drop-shadow-[0_8px_24px_rgba(43,53,66,0.25)]"
          />
        </a>

        {/* ======== DESKTOP NAVIGATION ======== */}
        <div className="hidden md:flex items-center gap-7 text-[15px]">
          <a href="/" onClick={goHome} className={linkFx}>
            Home
          </a>

          <button
            onClick={() => (window.location.href = "?page=services")}
            className={linkFx}
          >
            Leistungen
          </button>

          {/* Branchen (Mega-Menü) */}
          <div className="relative">
            <button
              id="sectors-button"
              onClick={() => setOpenSectors(!openSectors)}
              className={`${linkFx} inline-flex items-center gap-1`}
            >
              Branchen
              <ChevronRight
                size={16}
                className={`  ${
                  openSectors ? "" : ""
                }`}
              />
            </button>

            {openSectors && (
              <div
                id="sectors-menu"
                className="absolute right-0 mt-4 w-[880px] max-w-[94vw] z-[999] rounded-3xl border border-[rgba(43,53,66,0.2)]
                             bg-white/95 backdrop-blur-xl shadow-[0_25px_70px_rgba(15,23,42,0.15)] p-5"
                >
                  <div className="px-2 pb-2 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-graphite-600">
                      Branchen & Use-Cases
                    </span>
                    <a
                      href="#usecases"
                      onClick={() => {
                        setOpenSectors(false);
                        document
                          .getElementById("usecases")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-xs text-graphite-700  flex items-center gap-1"
                    >
                      Alle Use Cases <ChevronRight size={14} />
                    </a>
                  </div>

                  {/* Branchen-GRID */}
                  <div className="grid grid-cols-3 gap-3 max-h-[65vh] overflow-y-auto pr-1">
                    {SECTORS.map((s) => (
                      <button
                        key={s.key}
                        onClick={() => {
                          setOpenSectors(false);
                          const base = window.location.origin;
                          window.location.href = `${base}?sector=${s.key}`;
                        }}
                        className="group relative text-left rounded-2xl p-3 border border-[rgba(43,53,66,.12)] bg-white -all shadow-[0_6px_20px_rgba(15,23,42,.06)] hover:shadow-[0_14px_35px_rgba(15,23,42,.1)]"
                      >
                        <div className="relative h-28 rounded-xl overflow-hidden border border-[rgba(43,53,66,.15)]">
                          <img
                            src={s.hero}
                            alt={s.title}
                            className="absolute inset-0 w-full h-full object-cover group-  "
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                          <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-2.5 py-0.5 border border-[rgba(43,53,66,.2)] text-[11px] text-graphite-800">
                            {s.icon} {s.title.split(" ")[0]}
                          </span>
                        </div>

                        <div className="mt-3">
                          <div className="text-[15px] font-semibold text-graphite-900">
                            {s.title}
                          </div>
                          <div className="text-xs text-graphite-600 line-clamp-2">
                            {s.intro}
                          </div>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {(s.chips || []).slice(0, 3).map((c, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-full border border-[rgba(43,53,66,.16)] bg-white text-[11px] text-graphite-800"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>

                        <ChevronRight
                          size={16}
                          className="absolute right-3 top-3 text-graphite-700 opacity-0   "
                        />
                      </button>
                    ))}
                  </div>
              </div>
            )}
          </div>

          <button
            onClick={() => (window.location.href = "?page=about")}
            className={linkFx}
          >
            Über mich / Vision
          </button>

          <button
            onClick={() => (window.location.href = "/kontakt")}
            className="px-5 py-3 rounded-2xl font-semibold text-white 
                       bg-gradient-to-r from-[#2b3542] to-[#6c737f] 
                       shadow-[0_8px_20px_rgba(43,53,66,0.35)] 
  "
          >
            Kontakt / Erstgespräch
          </button>
        </div>

        {/* ======== MOBILE TOGGLE ======== */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden rounded-xl px-3 py-2 border border-[rgba(43,53,66,0.25)] text-graphite-900 font-medium  "
        >
          Menü
        </button>
      </nav>

      {/* ======== MOBILE FULLSCREEN SLIDE MENU ======== */}
      {open && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[199]"
              onClick={() => setOpen(false)}
            />
            <div
              className="fixed top-0 right-0 h-screen w-full sm:w-[80%] z-[200]
                         bg-gradient-to-b from-[#fdfefe] to-[#f7f9fc]
                         backdrop-blur-2xl shadow-[0_0_50px_rgba(15,23,42,0.25)]
                         border-l border-[rgba(43,53,66,0.1)]
                         flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-[rgba(43,53,66,0.08)]">
                <span className="font-semibold text-graphite-900 text-lg tracking-tight">
                  Navigation
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl border border-[rgba(43,53,66,0.2)] 
                             bg-white/60 backdrop-blur  "
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 px-8 py-10 flex flex-col gap-6 text-[18px] font-medium text-graphite-900">
                <a onClick={goHome} href="/" className=" ">
                  Home
                </a>
                <button
                  onClick={() => {
                    setOpen(false);
                    window.location.href = "?page=services";
                  }}
                  className="text-left  "
                >
                  Leistungen
                </button>
                <details className="text-left">
                  <summary className="cursor-pointer list-none flex items-center justify-between  ">
                    Branchen <ChevronRight size={16} />
                  </summary>
                  <div className="mt-3 pl-2 flex flex-col gap-2">
                    {SECTORS.map((s) => (
                      <button
                        key={s.key}
                        onClick={() => {
                          setOpen(false);
                          window.location.href = `?sector=${s.key}`;
                        }}
                        className="text-left text-[16px] text-graphite-800  "
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>
                </details>
                <button
                  onClick={() => {
                    setOpen(false);
                    window.location.href = "?page=about";
                  }}
                  className="text-left  "
                >
                  Über mich / Vision
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    window.location.href = "/kontakt";
                  }}
                  className="text-left  "
                >
                  Kontakt / Erstgespräch
                </button>
              </div>

              <div className="px-8 py-6 border-t border-[rgba(43,53,66,0.1)] text-sm text-graphite-600">
                © {new Date().getFullYear()} Izenic · Alle Rechte vorbehalten
              </div>
            </div>
          </>
        )}
    </header>
  );
};

// * =========================
// SECTORS - Branchen mit maximalem Impact
// ========================= */
const SECTORS = [
  {
    key: "legal",
    title: "Rechts- & Steuerwesen",
    icon: <Scale className="w-4 h-4" />,
    intro: "Abläufe verschlanken, Fristen sicher überwachen und Fachwissen zentral verfügbar machen. Ohne permanente Zusatzbelastung für Ihre Teams.",
    hero: "/legal.jpg",
    video: "/legal2.jpg",
    chips: ["Dokumente strukturiert ablegen", "Fristen verlässlich einhalten", "Antwortzeiten verkürzen"],
    highlights: ["Höhere Transparenz", "Schnellere Entscheidungen", "Weniger Routineaufwand"],
    kpis: [{v:"-40%", l:"Bearbeitungszeit"}, {v:"+25%", l:"Zuverlässigkeit"}, {v:"-50%", l:"E-Mail-Volumen"}]
  },
  {
    key: "ecom",
    title: "E-Commerce & Onlinehandel",
    icon: <ShoppingCart className="w-4 h-4" />,
    intro: "Vom Erstkontakt bis zur Retoure: Prozesse klar steuern, Servicekosten senken und Kundenerfahrungen messbar verbessern.",
    hero: "/ecommerce.jpg",
    video: "/ecommerce2.jpg",
    chips: ["Customer Journey optimieren", "Service skalierbar machen", "Feedback automatisiert auswerten"],
    highlights: ["Weniger Rückfragen", "Schnellere Reaktion", "Fundierte Datenbasis"],
    kpis: [{v:"+20%", l:"Conversion"}, {v:"-50%", l:"Supportaufwand"}, {v:"-30%", l:"Retourenkosten"}]
  },
  {
    key: "realestate",
    title: "Immobilienwirtschaft",
    icon: <Building2 className="w-4 h-4" />,
    intro: "Von der Anfrage bis zum Reporting: Verwaltung effizient organisieren, Kommunikation vereinfachen und Compliance sicherstellen.",
    hero: "/realestate.jpg",
    video: "/realestate2.jpg",
    chips: ["Anfragen effizient beantworten", "Dokumente verständlich aufbereiten", "Reports automatisiert erstellen"],
    highlights: ["Weniger Rückfragen", "Klare Strukturen", "Steigende Mieterzufriedenheit"],
    kpis: [{v:"-40%", l:"Durchlaufzeit"}, {v:"+30%", l:"Kundenzufriedenheit"}]
  },
  {
    key: "health",
    title: "Gesundheitswesen",
    icon: <Stethoscope className="w-4 h-4" />,
    intro: "Praxisabläufe und Verwaltung entlasten, Patienten gezielt informieren und medizinische Daten sicher nutzbar machen.",
    hero: "/healthcare.jpg",
    video: "/healthcare2.jpg",
    chips: ["Patientenanfragen bündeln", "Informationen verdichten", "Abläufe verlässlich dokumentieren"],
    highlights: ["Weniger Telefonlast", "Schnellere Orientierung", "Nachvollziehbare Prozesse"],
    kpis: [{v:"-35%", l:"Telefonaufkommen"}, {v:"+20%", l:"Planungssicherheit"}]
  },
  {
    key: "logistics",
    title: "Logistik & Transport",
    icon: <Truck className="w-4 h-4" />,
    intro: "Lieferketten präzise steuern, Abweichungen früh erkennen und Kommunikation durchgängig sichern. Ohne operative Hektik.",
    hero: "/logistics.jpg",
    video: "/logistics2.jpg",
    chips: ["Lieferzeiten zuverlässig planen", "Ausnahmen rechtzeitig erkennen", "Transparenz für alle Beteiligten"],
    highlights: ["Mehr Planungssicherheit", "Weniger Stress", "Frühzeitige Reaktionen"],
    kpis: [{v:"-30%", l:"Verspätungen"}, {v:"-45%", l:"Nachfassaufwand"}]
  },
  {
    key: "hr",
    title: "Personal & Recruiting",
    icon: <Users2 className="w-4 h-4" />,
    intro: "Administrative Aufgaben reduzieren, Bewerberprozesse beschleunigen und Mitarbeiterwissen nachhaltig sichern.",
    hero: "/hr.jpg",
    video: "/hr2.jpg",
    chips: ["Kandidaten schneller bewerten", "Onboarding strukturiert gestalten", "Wissen zentral verfügbar machen"],
    highlights: ["Zeitersparnis", "Mehr Fokus auf das Team", "Klar definierte Abläufe"],
    kpis: [{v:"-45%", l:"Screeningzeit"}, {v:"+18%", l:"Akzeptanzquote"}]
  },
  {
    key: "finance",
    title: "Finanz- & Versicherungsdienstleister",
    icon: <Landmark className="w-4 h-4" />,
    intro: "Vorgänge prüfen, Risiken bewerten und Entscheidungen fundiert treffen. Mit konsistenter Dokumentation und klarer Nachvollziehbarkeit.",
    hero: "/finance.jpg",
    video: "/finance2.jpg",
    chips: ["Risiken präzise einschätzen", "Prüfungen konsistent durchführen", "Kunden professionell informieren"],
    highlights: ["Weniger Doppelarbeit", "Mehr Transparenz", "Verlässliche Nachweise"],
    kpis: [{v:"-35%", l:"Durchlaufzeit"}, {v:"+25%", l:"Erstlösungsquote"}]
  },
  {
    key: "manufacturing",
    title: "Produktion & Mittelstand",
    icon: <Factory className="w-4 h-4" />,
    intro: "Qualität sichern, Ausfälle reduzieren und Ressourcen produktiv einsetzen. Mit datenbasierter Transparenz und planbarer Steuerung.",
    hero: "/manufacturing.jpg",
    video: "/manufacturing2.jpg",
    chips: ["Wartung planbar machen", "Berichte vereinfachen", "Bedarfe frühzeitig erkennen"],
    highlights: ["Weniger Stillstand", "Höhere Effizienz", "Bessere Prognosen"],
    kpis: [{v:"-25%", l:"Stillstand"}, {v:"+18%", l:"Produktivität"}]
  },
  {
    key: "marketing",
    title: "Marketing- & Werbeagenturen",
    icon: <Megaphone className="w-4 h-4" />,
    intro: "Briefings präzisieren, Content schneller produzieren und Abstimmungsprozesse beschleunigen. Ohne Qualitätsverlust.",
    hero: "/marketing.jpg",
    video: "/marketing2.jpg",
    chips: ["Ideen schneller realisieren", "Freigaben effizient steuern", "Auswertungen automatisieren"],
    highlights: ["Klarere Prozesse", "Weniger Nacharbeit", "Höhere Schlagkraft"],
    kpis: [{v:"+30%", l:"Output"}, {v:"-35%", l:"Korrekturschleifen"}]
  },
  {
    key: "construction",
    title: "Bauunternehmen",
    icon: <Hammer className="w-4 h-4" />,
    intro: "Von der Planung bis zur Übergabe: Projekte nahtlos steuern, Informationen zentral bündeln und Ausführung zuverlässig absichern.",
    hero: "/construction.jpg",
    image: "/construction2.jpg",
    chips: ["Angebote strukturiert erstellen", "Baustelleninformationen teilen", "Dokumente sofort verfügbar machen"],
    highlights: ["Schnellere Angebote", "Weniger Missverständnisse", "Mehr Projektsicherheit"],
    kpis: [{v:"-30%", l:"Bearbeitungszeit"}, {v:"+20%", l:"Projektsicherheit"}] 
  }
];

/* =========================
   SECTOR VIEW — Cinematic Titanium Edition
========================= */
const SectorView = ({ slug }) => {
  const sector = SECTORS.find((s) => s.key === slug);
  if (!sector) return null;

  const ref = useRef(null);
  const [spot, setSpot] = useState({ x: 55, y: 60 });

  useEffect(() => {
    const move = (e) => {
      const r = document.getElementById("sector-hero")?.getBoundingClientRect();
      if (!r) return;
      setSpot({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="min-h-screen bg-white text-graphite-900 overflow-x-hidden">
      {/* =========================
         HERO — Cinematic Centered Titanium Edition
      ========================== */}
      <header
        id="sector-hero"
        ref={ref}
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      >
{/* Background Media */}
        <div className="absolute inset-0">
  {sector.video?.endsWith(".mp4") ? (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={sector.video} type="video/mp4" />
    </video>
  ) : (
    <img
      src={sector.image || sector.video}
      alt={sector.title}
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
      fetchpriority="high"
    />
  )}

  <div className="absolute inset-0 bg-black/40" />
</div>

        {/* Moving Light Spot */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            WebkitMaskImage: `radial-gradient(350px 350px at ${spot.x}% ${spot.y}%, rgba(255,255,255,.9), transparent 60%)`,
            maskImage: `radial-gradient(350px 350px at ${spot.x}% ${spot.y}%, rgba(255,255,255,.9), transparent 60%)`,
            background: "radial-gradient(closest-side, rgba(255,255,255,.1), transparent)",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 max-w-4xl px-6 flex flex-col items-center justify-center"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1]
                       bg-clip-text text-transparent bg-[linear-gradient(100deg,#ffffff_0%,#cfd6df_45%,#9ca6b3_100%)]
                       drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            {sector.title}
          </h1>

          <p className="mt-5 text-white/90 text-base md:text-lg max-w-2xl leading-relaxed">
            {sector.intro}
          </p>

          {/* Chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-white/85 text-sm">
            {sector.chips.map((chip, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm  "
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Glow Bottom */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-[120px] opacity-70" />
      </header>

      {/* =========================
         IMPULSE SECTION
      ========================== */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-[#f8fafc] text-center">
        <h2
          className="text-2xl md:text-4xl font-bold text-graphite-900"
        >
          Neue Impulse für messbare Fortschritte
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-graphite-700 text-lg leading-relaxed">
          Effizienz entsteht nicht durch radikale Brüche, sondern durch gezielte
          Verbesserungen. Strukturen, die Komplexität reduzieren, Entscheidungswege
          verkürzen und Ressourcen gezielt einsetzen.
        </p>
      </section>

      {/* =========================
         EINBLICKE SECTION
      ========================== */}
      <section className="py-24 px-6 bg-white">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              t: "Anfragen im Griff",
              d: "Alle Anfragen werden automatisch priorisiert und strukturiert, sodass nichts verloren geht.",
            },
            {
              t: "Prozesse automatisiert",
              d: "Routineaufgaben laufen eigenständig und fehlerfrei ab. Ihr Team gewinnt Zeit für Wertschöpfung.",
            },
            {
              t: "Wissen verfügbar",
              d: "Relevante Informationen sind jederzeit abrufbar und sichern fundierte Entscheidungen.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl p-8   "
            >
              <h3 className="text-lg font-semibold text-graphite-900 mb-2">{b.t}</h3>
              <p className="text-graphite-700">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
         ERGEBNISSE SECTION
      ========================== */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-2xl md:text-4xl font-bold text-graphite-900"
          >
            Nachweisbare Resultate
          </h2>
          <p className="mt-4 text-graphite-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Entscheidend sind Ergebnisse, die sich messen lassen. Weniger operative
            Belastung, klarere Abläufe und mehr Transparenz in jedem Schritt. Kein
            theoretisches Versprechen, sondern konkrete Wertschöpfung im Alltag.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {sector.kpis.map((k, i) => (
              <div
                key={i}
                className="rounded-3xl p-[1px] bg-gradient-to-br from-[#2b3542] via-[#4a515a] to-[#aab4c2] shadow-lg"
              >
                <div className="rounded-3xl bg-white py-6 px-4">
                  <div className="text-2xl font-bold text-graphite-900">{k.v}</div>
                  <div className="text-graphite-700 mt-1 text-sm">{k.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

/* =========================
   Query-Helpers
========================= */
const getSectorFromQuery = () => {
  const p = new URLSearchParams(window.location.search);
  return p.get("sector"); // z.B. "sales"
};

const openSectorTab = (slug) => {
  const url = new URL(window.location.href);
  url.searchParams.set("sector", slug);
  window.open(url.toString(), "_blank", "noopener,noreferrer");
};

/* =========================
   HERO — Video + Parallax + Mobile-Optimierung
========================= */
/* =========================
   HERO — Cinematic Centered Titanium Edition
========================= */
const Hero = () => {
  const ref = useRef(null);
  const [spot, setSpot] = useState({ x: 55, y: 60 });

  useEffect(() => {
    const move = (e) => {
      const r = document.getElementById("hero")?.getBoundingClientRect();
      if (!r) return;
      setSpot({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <header
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* =========================
         Background Video + Depth Layers
      ========================== */}
        <div className="absolute inset-0">
  {/* Hintergrundbild */}
  <img
    src="/hero.jpg"
    alt="Izenic Hero Background"
    className="absolute inset-0 w-full h-full object-cover"
    loading="eager"
    fetchpriority="high"
  />

  {/* Gradient Depth Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/80 via-[#0b0f14]/65 to-[#0b0f14]/85" />
  <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_center,rgba(255,255,255,0.12),transparent)] mix-blend-overlay" />
</div>

      {/* =========================
         Moving Light Spot
      ========================== */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          WebkitMaskImage: `radial-gradient(350px 350px at ${spot.x}% ${spot.y}%, rgba(255,255,255,.9), transparent 60%)`,
          maskImage: `radial-gradient(350px 350px at ${spot.x}% ${spot.y}%, rgba(255,255,255,.9), transparent 60%)`,
          background: "radial-gradient(closest-side, rgba(255,255,255,.1), transparent)"
        }}
      />

      {/* =========================
         Content (Perfectly Centered)
      ========================== */}
      <div
        className="relative z-10 max-w-4xl px-6 flex flex-col items-center justify-center"
      >


        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] md:leading-[1.05]
                     bg-clip-text text-transparent bg-[linear-gradient(100deg,#ffffff_0%,#cfd6df_45%,#9ca6b3_100%)]
                     drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
        >
          Automatisiere, was aufhält. <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#aab4c2_0%,#e3e8ef_50%,#b7bec7_100%)]">
          Nutze KI, wo sie wirkt.
          </span>
        </h1>

        {/* Subline */}
        <p className="mt-5 text-white/90 text-base md:text-lg max-w-2xl leading-relaxed">
          Die Automations- und KI-Revolution schafft die nächste Generation von Marktführern.  
          Gewinner sind die, die früh nutzen, statt nur zu verstehen.
        </p>

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/90 text-sm md:text-[14px]">
          {[{icon:<Clock4 size={18}/>,t:"Zeit sparen"},
            {icon:<Wallet size={18}/>,t:"Kosten senken"},
            {icon:<Trophy size={18}/>,t:"Wettbewerbsvorteil"}].map((x,i)=>(
            <div key={i} className="flex justify-center items-center gap-2  ">
              {x.icon}<span>{x.t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
         Subtle Ambient Glow Bottom
      ========================== */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-[120px] opacity-70" />
    </header>
  );
};


/* =========================
   SECTION: Warum jetzt — Premium Video mit Smart-Fade Controls
========================= */
const WhyNow = () => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const fadeTimeout = useRef(null);
  
    // --- Controls anzeigen / ausblenden ---
    const triggerControls = () => {
      setShowControls(true);
      clearTimeout(fadeTimeout.current);
      fadeTimeout.current = setTimeout(() => setShowControls(false), 2500);
    };
  
    // --- Video-Steuerung ---
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
  
    // --- Mausbewegung oder Tap zeigt Controls ---
    const handleUserInteraction = () => triggerControls();
  
    return (
      <section
        id="whynow"
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-[#f7f9fc] to-white"
      >
        {/* Headline */}
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold text-graphite-900"
          >
            Jetzt ist das Zeitfenster für Vorsprung
          </h2>
          <p
            className="mt-4 text-lg md:text-xl text-graphite-700 max-w-3xl mx-auto"
          >
            Automatisierung und KI setzen eine der größten Chancen des Jahrzehnts
            frei. Wer früh Potenziale erkennt und mutig nutzt, gibt den Takt vor.
          </p>
        </div>
  
        {/* Video Hero */}
        <div className="relative mt-12 max-w-6xl mx-auto px-4">
          <div className="relative rounded-[32px] p-[2px] bg-[linear-gradient(135deg,#cfd6df,#aab4c2,#2b3542)] shadow-[0_30px_80px_rgba(15,23,42,.2)]">
            <div
              className="relative rounded-[30px] overflow-hidden border border-[rgba(12,18,26,.12)]"
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
  
                {/* Smart-Fade Controls */}
                <div
                  className={`absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent -opacity  ${
                    showControls ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Progress Bar */}
                  <div
                    className="relative h-[5px] rounded-full bg-white/20 cursor-pointer mb-3"
                    onClick={handleSeek}
                  >
                    <div
                      className="absolute top-0 left-0 h-full bg-white rounded-full -all "
                      style={{ width: `${progress}%` }}
                    />
                  </div>
  
                  {/* Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <button
                        onClick={togglePlay}
                        className="inline-flex items-center gap-2 text-white text-sm md:text-base font-medium bg-white/10  px-3 py-1.5 rounded-lg backdrop-blur "
                      >
                        {playing ? (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <rect x="6" y="5" width="4" height="14" />
                              <rect x="14" y="5" width="4" height="14" />
                            </svg>
                            Pause
                          </>
                        ) : (
                          <>
                            <Play size={16} /> Abspielen
                          </>
                        )}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="inline-flex items-center gap-2 text-white text-sm md:text-base font-medium bg-white/10  px-3 py-1.5 rounded-lg backdrop-blur "
                      >
                        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        {muted ? "Stumm" : "Ton"}
                      </button>
                    </div>
                    <span className="hidden md:block text-xs text-white/70">
                      60–90 Sek • Full HD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Vorteile */}
        <div className="mt-14 max-w-4xl mx-auto px-4">
          <ul className="grid gap-4 md:grid-cols-3 text-graphite-800">
            {[
              "Routinen reduzieren, Kapazitäten freilegen",
              "Gezielte KI für Sprache, Bild und Daten",
              "Skalierbar und sicher: DSGVO, Rollen, Audit-Logs",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm md:text-base"
              >
                <CheckCircle2 className="mt-[2px] shrink-0 text-titanium-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };

/* =========================
   Pain → Lösung — Premium Stripe (Business Edition)
========================= */
const ProblemSolution = () => (
  <section
    id="problem"
    className="relative py-20 md:py-28 bg-gradient-to-b from-white via-[#f9fafb] to-white"
  >
    <div className="max-w-7xl mx-auto px-4">
      {/* Headline */}
      <h2
        className="text-3xl md:text-5xl font-bold text-center text-graphite-900 leading-tight"
      >
        Wo Unternehmen heute an Effizienz verlieren
      </h2>
      <p className="mt-4 text-center text-graphite-700 max-w-3xl mx-auto text-lg md:text-xl">
        Ob Kanzlei, Agentur, Klinik, Produktion oder Handel.  
        Viele Organisationen kämpfen mit denselben Engpässen, die Ressourcen binden, Entscheidungen verzögern und Wachstum verhindern.
      </p>

      {/* Pain-Points */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Workflow size={30} />,
            t: "Hoher Routineaufwand",
            s: "Tägliche Prozesse laufen manuell und kosten Zeit sowie Energie, die für wertschöpfende Tätigkeiten fehlt."
          },
          {
            icon: <FileText size={30} />,
            t: "Unstrukturierte Informationen",
            s: "Daten, Dokumente und Kommunikation sind verstreut. Relevante Fakten gehen unter und Entscheidungen verzögern sich."
          },
          {
            icon: <BrainCircuit size={30} />,
            t: "Fehlende KI-Strategie",
            s: "Automatisierungspotenziale bleiben ungenutzt, da klare Einsatzfelder und ein sicherer Rahmen für KI fehlen."
          }
        ].map((b, i) => (
          <div
            key={i}
            className="group rounded-3xl border border-[rgba(12,18,26,.12)] 
                       bg-white/90 backdrop-blur-xl p-8 md:p-9 
                       shadow-[0_8px_24px_rgba(15,23,42,.06)] 
                       text-center md:text-left"
          >
            {/* Icon */}
            <div
              className="w-16 h-16 mx-auto md:mx-0 rounded-2xl flex items-center justify-center 
                         bg-gradient-to-br from-gray-100 to-gray-200 text-graphite-800 
                         group-hover:from-[#cfd6df] group-hover:to-[#2b3542] shadow-inner"
            >
              {b.icon}
            </div>

            {/* Title */}
            <h3 className="mt-5 text-lg md:text-xl font-semibold text-graphite-900">
              {b.t}
            </h3>

            {/* Subtext */}
            <p className="mt-3 text-sm md:text-base text-graphite-700 leading-relaxed">
              {b.s}
            </p>
          </div>
        ))}
      </div>

      {/* Lösung */}
      <div
        className="mt-16 md:mt-20 rounded-3xl p-[2px] 
                   bg-[linear-gradient(135deg,#cfd6df,#aab4c2,#2b3542)] 
                   shadow-[0_24px_70px_rgba(15,23,42,.14)]"
      >
        <div className="rounded-3xl bg-white/95 backdrop-blur-xl p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-graphite-900">
            Die Lösung beginnt mit Klarheit
          </h3>
          <p className="mt-5 text-lg md:text-xl text-graphite-700 max-w-3xl mx-auto leading-relaxed">
            Automatisierung reduziert repetitive Aufgaben und gibt Ressourcen frei.  
            Künstliche Intelligenz transformiert verstreute Daten in konkrete Entscheidungsgrundlagen.
          </p>
          <p className="mt-4 text-base md:text-lg text-graphite-800 font-medium">
  Das Ergebnis ist ein Arbeitsalltag, der effizienter, verlässlicher und skalierbarer wird. 
  Dies gilt unabhängig von Branche und Unternehmensgröße.
</p>
        </div>
      </div>
    </div>
  </section>
);

/* =========================
   USP — Premium Segmented Tabs
========================= */
const USP = () => {
  const tabs = [
    {
      key: "beratung",
      label: "Beratung",
      kicker: "Potenzialanalyse & Roadmap",
      bullets: [
        "Analyse bestehender Prozesse und Systeme",
        "Identifikation konkreter Automatisierungspotenziale",
        "Handlungsempfehlungen und klare Roadmap"
      ],
      chip: "Analyse & Strategie",
      image: "/usp-beratung.jpg",
      desc: "Schafft Klarheit, wo Automatisierung den größten Mehrwert erzielt. Von der Analyse bis zur Priorisierung. Der erste Schritt in Richtung Umsetzung."
    },
    {
      key: "umsetzung",
      label: "Umsetzung",
      kicker: "Von Prototyp bis Pilot",
      bullets: [
        "Prozess-Mapping und Machbarkeitsprüfung",
        "Technische Umsetzung und Integration",
        "Schulung der Mitarbeiter im neuen Ablauf"
      ],
      chip: "Pilot & Rollout",
      image: "/usp-umsetzung.jpg",
      desc: "Bringt Ideen in die Praxis. Start mit ein bis zwei Prozessen, real getestet und in Ihrer Systemlandschaft umgesetzt."
    },
    {
      key: "coaching",
      label: "Coaching",
      kicker: "Enablement für Teams",
      bullets: [
        "Praxis-Workshops wie 'Automation & KI hands-on im Büroalltag'",
        "Best Practices für Governance & Compliance",
        "Hands-on Training mit eigenen Unternehmensfällen"
      ],
      chip: "Training & Know-how",
      image: "/usp-coaching.jpg",
      desc: "Befähigt Teams, KI und Automatisierung sicher einzusetzen. Durch Workshops, Coaching-Programme und praxisnahe Umsetzung."
    }
  ];
  const [active, setActive] = React.useState("beratung");
  const current = tabs.find((t) => t.key === active);

  return (
    <section id="usp" className="relative py-14 md:py-20 bg-gradient-to-b from-white via-[#f7f9fc] to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headline */}
        <div
          className="text-center"
        >

          <h2 className="text-3xl md:text-5xl font-bold text-center text-graphite-900 leading-tight">
            Drei Wege zum Ergebnis
          </h2>
          <p className="mt-3 text-graphite-700 max-w-3xl mx-auto text-lg">
          Strategie, Umsetzung und Befähigung sind die drei Hebel erfolgreicher Digitalisierung.
Ob einzeln oder kombiniert, Izenic unterstützt Unternehmen mit Beratung, Entwicklung und Coaching genau dort, wo Automatisierung und KI den größten Mehrwert schaffen.
          </p>
        </div>

        {/* Segmented Control */}
        <div className="mt-6 md:mt-8 w-full max-w-2xl mx-auto p-1.5 rounded-2xl 
                        border border-[rgba(255,255,255,.08)] 
                        bg-[linear-gradient(135deg,#2e333a,#2b3542)] 
                        shadow-[0_6px_18px_rgba(0,0,0,.45)] relative">
          <div className="grid grid-cols-3 relative">
            <span
              layout
              className="absolute inset-y-1 rounded-xl 
                         bg-[linear-gradient(135deg,#4a515a,#2b3542)] 
                         shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_6px_12px_rgba(0,0,0,.4)]"
              style={{
                left:
                  active === "beratung"
                    ? "0.5rem"
                    : active === "umsetzung"
                    ? "33.8%"
                    : "67.3%",
                width: "31.2%"
              }}
            />
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`relative z-10 h-11 rounded-xl text-sm font-medium                   ${active === t.key ? "text-white font-semibold" : "text-gray-200 "}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          key={current.key}
          className="mt-6 md:mt-10 rounded-3xl overflow-hidden border border-[rgba(12,18,26,.12)] bg-white"
        >
          <div className="grid md:grid-cols-[1.1fr_.9fr] items-stretch">
            {/* Text column */}
            <div className="p-7 md:p-9">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-graphite-700 bg-titanium-50/60 border border-titanium-200 rounded-full px-3 py-1">
                {active === "beratung" && <Users size={14} />}
                {active === "umsetzung" && <Wrench size={14} />}
                {active === "coaching" && <FileText size={14} />}
                {current.label}
              </div>
              <h3 className="mt-3 text-xl md:text-2xl font-semibold text-graphite-900">
                {current.kicker}
              </h3>

              <ul className="mt-5 space-y-3">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-[2px] text-graphite-800" />
                    <span className="text-graphite-700">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 inline-flex items-center gap-2 text-sm text-graphite-900 bg-titanium-100/70 border border-titanium-200 rounded-full px-3 py-1">
                {current.chip}
              </div>
            </div>

            {/* Visual column */}
            <div className="relative min-h-[220px] md:min-h-full">
              <img
                src={current.image}
                alt={current.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <p className="text-white text-sm md:text-base font-medium leading-relaxed drop-shadow-md">
                  {current.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   JOURNEY — Edle Timeline mit Progress, Dots und Video
   - Desktop: Sticky-Header, vertikale Linie mit Glow, klickbare Steps + Video-Preview
   - Mobile: Accordion (ein Step offen), kompakt
========================= */
const Journey = () => {
  const steps = [
    {
      n: 1,
      title: "Erstgespräch",
      copy: "Ein kurzes Gespräch (ca. 20 Minuten), in dem Situation und Ziele analysiert werden. Dabei wird klar, wo aktuell Potenziale bestehen und ob eine Zusammenarbeit Mehrwert schafft.",
      clip: "/kickstart.mp4",
      badge: "Kickstart"
    },
    {
      n: 2,
      title: "Prozess-Mapping",
      copy: "Bestehende Abläufe werden aufgenommen und Engpässe sichtbar gemacht. Quick-Wins werden priorisiert und eine klare Roadmap mit messbaren Ansatzpunkten definiert.",
      clip: "/ui1.mp4",
      badge: "Struktur schaffen"
    },
    {
      n: 3,
      title: "Proof of Concept",
      copy: "Ein schlanker Test mit echten Daten prüft die Machbarkeit, vergleicht KPIs mit der bestehenden Baseline und zeigt anhand einer Demo, wie die Lösung in der Praxis wirkt.",
      clip: "/poc.mp4",
      badge: "Machbarkeit prüfen"
    },
    {
      n: 4,
      title: "Pilot & Integration",
      copy: "Ausgewählte Prozesse gehen live. Ob API oder UI: Rechte, Rollen und Nachvollziehbarkeit sind sichergestellt. Ihr Team wird geschult und kann die Lösung aktiv nutzen.",
      clip: "/pilot.mp4",
      badge: "Lösungen einführen"
    },
    {
      n: 5,
      title: "Betrieb & Wirkung",
      copy: "Begleitung des laufenden Betriebs mit Monitoring, Drift-Checks und Optimierungen sorgt dafür, dass die Lösung stabil läuft, Ergebnisse messbar bleiben und sich nachhaltig skalieren lassen.",
      clip: "/ui2.mp4",
      badge: "Langfristiger Nutzen"
    }
  ];

  const [active, setActive] = React.useState(1);

  return (
    <section id="journey" className="relative py-16 md:py-20 bg-white">
      {/* Sticky Headline */}
      <div className="sticky top-16 z-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-2xl border-b border-[rgba(12,18,26,.08)]">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex flex-col items-center justify-center text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-graphite-900 leading-tight">Von der Idee zur Wirkung</h2>
            <p className="mt-3 text-graphite-700 max-w-3xl mx-auto text-lg">Ein klarer Fahrplan: Schritt für Schritt von der ersten Analyse bis zur messbaren Wirkung.</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="max-w-7xl mx-auto px-4 hidden md:grid grid-cols-[0.15fr_0.85fr] gap-8 mt-10">
        {/* Progress Rail */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[rgba(12,18,26,.12)] rounded-full" />
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-[linear-gradient(180deg,#2b3542,rgba(43,53,66,.2))] rounded-full"
            style={{ height: `${(active - 1) * (100 / (steps.length - 1))}%` }}
          />
          <div className="relative h-full flex flex-col justify-between py-2">
            {steps.map((s) => {
              const isActive = s.n === active;
              return (
                <button
                  key={s.n}
                  onClick={() => setActive(s.n)}
                  className="relative -ml-2 w-8 h-8 grid place-items-center group"
                  aria-label={`Step ${s.n}: ${s.title}`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full border                     ${isActive ? "bg-graphite-900 border-graphite-900" : "bg-white border-[rgba(12,18,26,.25)] group-hover:border-graphite-900"}`} />
                  {isActive && (
                    <span className="absolute inset-0 rounded-full  bg-graphite-900/20" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panels */}
        <div className="space-y-8">
          {steps.map((s) => {
            const isActive = s.n === active;
            return (
              <div
                key={s.n}
                onMouseEnter={() => setActive(s.n)}
                className={`rounded-3xl overflow-hidden border backdrop-blur bg-white                   ${isActive ? "border-[rgba(12,18,26,.18)] shadow-[0_24px_50px_rgba(15,23,42,.08)]" : "border-[rgba(12,18,26,.10)]"}`}
              >
                <div className="grid grid-cols-[1.05fr_.95fr] items-stretch">
                  {/* Text */}
                  <div className="p-7 md:p-9">
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-graphite-700 bg-titanium-50/60 border border-titanium-200 rounded-full px-3 py-1">
                      <span>{String(s.n).padStart(2, "0")}</span>
                      <span className="h-3 w-px bg-[rgba(12,18,26,.18)] mx-1" />
                      <span>{s.badge}</span>
                    </div>
                    <h3 className="mt-3 text-xl md:text-2xl font-semibold text-graphite-900">{s.title}</h3>
                    <p className="mt-2 text-graphite-700">{s.copy}</p>
                  </div>

                  {/* Video-Preview */}
                  <div className="relative min-h-[220px]">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={s.clip}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-white via-white/30 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: Accordion */}
      <div className="md:hidden max-w-7xl mx-auto px-4 mt-8">
        <div className="divide-y divide-[rgba(12,18,26,.1)] border border-[rgba(12,18,26,.12)] rounded-2xl overflow-hidden">
          {steps.map((s) => {
            const open = active === s.n;
            return (
              <div key={s.n} className="bg-white">
                <button
                  onClick={() => setActive(open ? 0 : s.n)}
                  className="w-full flex items-center justify-between px-4 py-3"
                >
                  <span className="text-graphite-900 font-medium">
                    {String(s.n).padStart(2, "0")} {s.title}
                  </span>
                  <svg className={`h-5 w-5  ${open ? "" : ""}`} viewBox="0 0 24 24" fill="none">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {open && (
                  <div
                      className="px-4 pb-4"
                    >
                      <div className="rounded-xl overflow-hidden border border-[rgba(12,18,26,.12)]">
                        <div className="relative aspect-video">
                          <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={s.clip}
                          />
                        </div>
                        <div className="p-3">
                          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-graphite-700 bg-titanium-50/60 border border-titanium-200 rounded-full px-3 py-1">
                            {s.badge}
                          </div>
                          <p className="mt-2 text-graphite-700 text-sm">{s.copy}</p>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            );
          })}
        </div>    
      </div>
    </section>
  );
};

/* =========================
   PRINCIPLE — Premium Responsive Redesign
========================= */
const Principle = () => {
  const MODES = [
    {
      key: "rule",
      title: "Regel-Automation",
      subtitle:
        "Deterministische Prozesse auf Basis klarer Wenn-Dann-Logik. Stabil, transparent und revisionssicher.",
      gradient: "from-[#eef2f6] via-[#cfd6df] to-[#aab4c2]",
      barLeft: "Wenn-Dann-Logik",
      barRight: "Stabile Regeln",
      explainer: [
        { h: "Was es ist", t: "Strukturierte Entscheidungen auf Basis klarer Bedingungen, validierter Felder und definierter Pfade." },
        { h: "Wann sinnvoll", t: "Hohe Wiederholrate, konsistente Eingaben und klar messbare Ergebnisse." },
        { h: "Warum stark", t: "Vorhersehbare Laufzeiten, revisionssichere Nachvollziehbarkeit und einfacher Betrieb." }
      ],
      topics: ["Trigger & Workflows", "Validierungen", "Parsing strukturierter Daten", "ETL-/Batch-Jobs", "Rollen & Rechte"]
    },
    {
      key: "ai",
      title: "KI-Automation",
      subtitle:
        "Unstrukturierte Information wird verstanden, klassifiziert und nutzbar gemacht. Von Sprache bis Sensordaten.",
      gradient: "from-[#f7f9fc] via-[#d8e1ee] to-[#2b3542]",
      barLeft: "Unklare Eingaben",
      barRight: "Verstehen & Generieren",
      explainer: [
        { h: "Was es ist", t: "Modelle erkennen Muster in Sprache, Bild oder Zeitreihen und liefern belastbare Entscheidungen." },
        { h: "Wann sinnvoll", t: "Hohe Varianz, freie Texte, heterogene Formate und komplexe Kontexte." },
        { h: "Warum stark", t: "Skalierbare Auswertung, kontinuierliches Lernen und Qualität auch bei Komplexität." }
      ],
      topics: ["NLP / LLM", "Computer Vision", "Embeddings & Suche", "Zeitreihen & Prognose", "Retrieval & Kontext"]
    },
    {
      key: "hybrid",
      title: "Hybrid",
      subtitle: "KI bewertet, Regeln führen aus. Präzision mit Governance, ergänzt durch Human-in-the-Loop.",
      gradient: "from-[#eef2f6] via-[#2b3542] to-[#aab4c2]",
      barLeft: "KI entscheidet",
      barRight: "Regel führt aus",
      explainer: [
        { h: "Was es ist", t: "KI trifft Einstufungen, deterministische Flows übernehmen die exakte Ausführung und Dokumentation." },
        { h: "Wann sinnvoll", t: "Ein Teil erfordert KI (unstrukturierte Daten), andere Bereiche klare Regeln." },
        { h: "Warum stark", t: "Messbare Wirkung mit Audit-Trail, Freigabeschleifen und definierter Fehlerbehandlung." }
      ],
      topics: ["KI-Klassifizierung → Flow", "Human-in-the-Loop", "Audit-Logs", "Policy Enforcement", "KPIs & Drift-Checks"]
    }
  ];

  const [mode, setMode] = React.useState("rule");
  const current = MODES.find((m) => m.key === mode) || MODES[0];

  return (
    <section id="principle" className="relative py-16 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f9fc] to-white" />
        <div className="absolute inset-0 opacity-[.05] [background-image:url('/noise.png')] [background-size:280px]" />
        <div
          className={`absolute inset-0 pointer-events-none [mask-image:radial-gradient(800px_500px_at_50%_0%,rgba(0,0,0,.15),transparent)] bg-gradient-to-tr ${current.gradient}`}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5">
        {/* Headline */}
        <div
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-graphite-900">
            Automatisierung, wo sie wirkt. KI, wo sie muss
          </h2>
          <p className="mt-4 text-graphite-700 max-w-3xl mx-auto text-lg md:text-xl">
            Erst Regeln für Stabilität, dann KI für Flexibilität. So entsteht Geschwindigkeit mit Governance.
          </p>
        </div>

        {/* Segmented Control */}
        <div className="mt-10 w-full max-w-2xl mx-auto p-1.5 rounded-2xl 
                        border border-[rgba(255,255,255,.08)] 
                        bg-[linear-gradient(135deg,#2e333a,#2b3542)] 
                        shadow-[0_6px_18px_rgba(0,0,0,.45)] relative">
          <div className="relative grid grid-cols-3">
            <span
              layout
              className="absolute inset-y-1 rounded-xl 
                         bg-[linear-gradient(135deg,#4a515a,#2b3542)] 
                         shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_6px_12px_rgba(0,0,0,.4)]"
              style={{
                left: mode === "rule" ? "0.5rem" : mode === "ai" ? "33.8%" : "67.3%",
                width: "31.2%"
              }}
            />
            {MODES.map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`relative z-10 h-11 rounded-xl text-sm font-medium                   ${mode === m.key ? "text-white font-semibold" : "text-gray-300 "}`}
              >
                {m.title}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div
          key={mode}
          className="mt-10 md:mt-12 rounded-3xl p-[1px] 
                     bg-[linear-gradient(135deg,#cfd6df,#aab4c2,#2b3542)] 
                     shadow-[0_20px_50px_rgba(15,23,42,.12)]"
        >
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl px-6 md:px-12 py-8 md:py-12">
            
            {/* Title + Subtitle */}
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-3xl font-semibold text-graphite-900">{current.title}</h3>
              <p className="mt-2 text-graphite-700 text-base md:text-lg max-w-2xl">
                {current.subtitle}
              </p>
            </div>

            {/* Explainer Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {current.explainer.map((line, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[rgba(12,18,26,.12)] bg-white/90 p-5 text-center md:text-left
                             shadow-[0_6px_14px_rgba(15,23,42,.06)] hover:shadow-[0_10px_24px_rgba(15,23,42,.12)] "
                >
                  <h4 className="font-semibold text-graphite-900 mb-2">{line.h}</h4>
                  <p className="text-sm md:text-base text-graphite-700 leading-relaxed">{line.t}</p>
                </div>
              ))}
            </div>

            {/* Kompetenzfelder */}
            <div className="mt-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-graphite-600 mb-3 text-center md:text-left">
                Kompetenzfelder
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {current.topics.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full border border-[rgba(12,18,26,.16)] 
                               bg-white text-xs md:text-sm text-graphite-800 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust Row */}
            <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-graphite-700">
              <div className="flex items-center justify-center sm:justify-start gap-2"><ShieldCheck size={16}/> DSGVO & Audit-Logs</div>
              <div className="flex items-center justify-center sm:justify-start gap-2"><LineChart size={16}/> KPIs messen</div>
              <div className="flex items-center justify-center sm:justify-start gap-2"><Wrench size={16}/> on-prem oder EU-Cloud</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   Use Cases — Desktop: List + Preview / Mobile: Snap-Cards
   - FEATURED-Auswahl anpassen
========================= */
const UseCases = () => {
  // kuratierte Auswahl für das Teasing
  const FEATURED = ["legal", "ecom", "realestate", "health", "logistics", "hr", "finance", "manufacturing", "marketing", "construction"];

  const list = SECTORS.filter(s => FEATURED.includes(s.key));
  const [active, setActive] = React.useState(list[0]?.key || null);
  const current = list.find(s => s.key === active) || list[0];

  return (
    <section id="usecases" className="relative py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-graphite-900">Use Cases mit schneller Wirkung</h2>
          <p className="mt-3 text-graphite-700 max-w-3xl mx-auto text-lg">
            Wo Automatisierung sofort entlastet und KI gezielt Mehrwert liefert. Ein Klick führt zu den Branchen-Tabs mit Details.
          </p>
        </div>

        {/* Desktop: zweispaltig – links kompakte Liste, rechts großes Preview */}
        <div className="mt-8 hidden md:grid grid-cols-[0.9fr_1.1fr] gap-8">
          {/* Liste */}
          <div className="rounded-3xl border border-[rgba(12,18,26,.12)] bg-white overflow-hidden">
            <ul className="divide-y divide-[rgba(12,18,26,.08)]">
              {list.map((s, i) => {
                const isActive = s.key === active;
                return (
<li
  key={s.key}
  onMouseEnter={() => setActive(s.key)}
  onFocus={() => setActive(s.key)}
  className="group cursor-pointer relative"
  onClick={(e) => {
    e.preventDefault(); // 🚫 blockiert Standard-Href Verhalten
    const url = new URL(window.location.href);
    url.searchParams.set("sector", s.key);
    window.history.pushState({}, "", url); // URL ändern ohne Reload
    window.dispatchEvent(new PopStateEvent("popstate")); // App reagiert auf neuen State
  }}
>
                    {/* Hover-Highlight */}
                    <div
                      layoutId="usecase-highlight"
                      className={`absolute inset-x-0 ${isActive ? "bg-[#f5f7fa]" : "bg-transparent"}`}
                      style={{ top: 0, bottom: 0 }}
                    />
                    <div className="relative z-10 px-5 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-graphite-900/80" />
                        <div>
                          <div className="text-[15px] font-semibold text-graphite-900">{s.title}</div>
                          <div className="text-xs text-graphite-600 line-clamp-1">{s.intro}</div>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-graphite-800  " />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Preview Panel */}
          <div className="relative rounded-3xl overflow-hidden border border-[rgba(12,18,26,.12)] min-h-[420px]">
            {/* Bild / Video */}
            {current?.hero ? (
              <img src={current.hero} alt={current.title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,#eef2f6_0%,#cfd6df_25%,#aab4c2_55%,#2b3542_100%)]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/70 to-transparent" />

            <div className="relative z-10 p-7 md:p-9 h-full flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-graphite-700 bg-white/90 backdrop-blur border border-[rgba(12,18,26,.12)] rounded-full px-3 py-1 w-max">
                Schnell wirksam
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-graphite-900">{current?.title}</h3>
              <p className="mt-2 text-graphite-800 max-w-2xl">{current?.intro}</p>

              {/* Chips (3–4 Stück) */}
              <div className="mt-4 flex flex-wrap gap-2">
                {(current?.chips || []).slice(0, 4).map((c, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-[rgba(12,18,26,.16)] bg-white text-sm text-graphite-800">
                    {c}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-5 flex flex-wrap gap-3">
              <button
  onClick={() => {
    const base = window.location.origin;
    window.location.href = `${base}?sector=${current.key}`;
  }}
  className={btnSolid}
>
  Details im Branchen-Tab <ArrowRight size={18} />
</button>
                <a href="#kontakt" onClick={toLanding("kontakt")} className={btnGhost}>
  Quick-Wins klären
</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Snap-Cards (kompakt) */}
        <div className="md:hidden mt-8 overflow-x-auto snap-x snap-mandatory no-scrollbar">
          <div className="flex gap-4 px-1">
            {list.map((s) => (
              <div
                key={s.key}
                className="snap-center min-w-[86%] rounded-3xl border border-[rgba(12,18,26,.12)] bg-white overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,.05)]"
              >
                <div className="relative aspect-[16/9]">
                  {s.hero ? (
                    <img src={s.hero} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,#eef2f6_0%,#cfd6df_25%,#aab4c2_55%,#2b3542_100%)]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-base font-semibold text-graphite-900">{s.title}</div>
                  <p className="mt-1 text-sm text-graphite-700 line-clamp-2">{s.intro}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(s.chips || []).slice(0, 3).map((c, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full border border-[rgba(12,18,26,.16)] bg-white text-xs text-graphite-800">
                        {c}
                      </span>
                    ))}
                  </div>
                  <button
  onClick={() => {
    const base = window.location.origin;
    window.location.href = `${base}?sector=${s.key}`;
  }}
  className={btnSolid + " mt-4 w-full justify-center"}
>
  Branchen-Tab öffnen <ArrowRight size={18} />
</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini-Hinweis (Desktop sichtbar) */}
        <p className="hidden md:block mt-4 text-center text-sm text-graphite-600">
          Tipp: Eintrag anklicken oder in der Navigation über Branchen direkt zum Tab springen.
        </p>
      </div>
    </section>
  );
};


/* =========================
   FINAL CALL — simplified CTA + Kontakt
========================= */
const FinalCall = () => {
  const [sent, setSent] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!consent) {
      setError("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }
    const form = e.currentTarget;
    const trap = form.elements.namedItem("company_website")?.value || "";
    if (trap.trim() !== "") return;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      setSubmitting(true);
      const res = await fetch("https://backend-0jvt.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      setSent(true);
    } catch (err) {
      console.error(err);
      setError("Senden fehlgeschlagen. Bitte später erneut versuchen.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="relative py-20 md:py-28 overflow-hidden">
      {/* Hintergrundvideo */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/ui3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="rounded-3xl p-[1px] bg-[linear-gradient(135deg,#cfd6df,#aab4c2,#2b3542)] shadow-[0_20px_60px_rgba(15,23,42,.18)]">
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl p-8 md:p-12">
            {/* Headline */}
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-graphite-700 bg-white border border-[rgba(12,18,26,.12)] rounded-full px-3 py-1">
                Vom Reden ins Tun
              </span>
              <h3 className="mt-3 text-2xl md:text-4xl font-bold text-graphite-900">
                20 Minuten, die Ihre Prozesse verändern
              </h3>
              <p className="mt-3 text-graphite-700 max-w-2xl mx-auto">
                Kostenloses Erstgespräch: Ziele klären, Quick Wins identifizieren, Roadmap skizzieren.
              </p>
            </div>

            {/* Formular */}
            <div className="mt-10">
              {!sent ? (
                <form onSubmit={onSubmit} className="grid gap-4">
                  {/* Honeypot */}
                  <input type="text" name="company_website" className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      name="name"
                      placeholder="Ihr Name"
                      className="w-full rounded-xl border border-[rgba(12,18,26,.18)] p-3 text-[16px] focus:ring-2 focus:ring-[#2b3542]/30"
                      disabled={submitting}
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Ihre E-Mail"
                      className="w-full rounded-xl border border-[rgba(12,18,26,.18)] p-3 text-[16px] focus:ring-2 focus:ring-[#2b3542]/30"
                      disabled={submitting}
                    />
                  </div>

                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Ihr Ziel oder aktueller Engpass"
                    className="w-full rounded-xl border border-[rgba(12,18,26,.18)] p-3 text-[16px] focus:ring-2 focus:ring-[#2b3542]/30"
                    disabled={submitting}
                  />

                  {/* DSGVO */}
                  <label className="flex items-start gap-2 text-sm text-graphite-700">
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-[rgba(12,18,26,.3)]"
                      disabled={submitting}
                    />
                    <span>
                      Ich habe die{" "}
                      <a
                        href="/datenschutz"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "/datenschutz";
                        }}
                        className="underline hover:no-underline"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Angaben zu.
                    </span>
                  </label>

                  {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

                  <button
                    type="submit"
                    className={
                      btnSolid +
                      " justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    }
                    disabled={!consent || submitting}
                  >
                    {submitting ? "Wird gesendet..." : <>Anfrage senden <ArrowRight size={18} /></>}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[linear-gradient(135deg,#2b3542,#0b121a)] text-white">
                    <CheckCircle2 />
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-semibold text-graphite-900">
                    Danke! Ihre Nachricht ist eingegangen
                  </h3>
                  <p className="mt-2 text-graphite-700">
                  Innerhalb von 24 Stunden erfolgt eine Rückmeldung mit passenden Terminvorschlägen.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* =========================
   VERTRAUEN & SICHERHEIT — Izenic Cinematic Titanium Edition
========================= */
const TrustPage = () => {


  return (
    <main className="min-h-screen bg-[#f9fafc] text-graphite-900 overflow-x-hidden">

      {/* =========================
         HERO — Cinematic Intro
      ========================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
  {/* Hintergrundbild */}
  <img
    src="/trust.jpg"
    alt="Trust and Security Background"
    className="absolute inset-0 w-full h-full object-cover"
    loading="eager"
    fetchpriority="high"
  />

        {/* Layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/85 via-[#0b0f14]/60 to-[#0b0f14]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_center,rgba(255,255,255,0.12),transparent)] mix-blend-overlay" />

        {/* Content */}
        <div
          className="relative z-10 max-w-4xl px-6 flex flex-col items-center justify-center"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight 
                       bg-clip-text text-transparent 
                       bg-[linear-gradient(100deg,#ffffff_0%,#cfd6df_45%,#9ca6b3_100%)]
                       drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
          >
            Vertrauen & Sicherheit
          </h1>
          <p className="mt-5 text-white/90 text-base md:text-lg max-w-2xl leading-relaxed">
            Datenschutz, Nachhaltigkeit und verantwortungsvolle KI:  
            Das Fundament jeder Automatisierung bei Izenic.
          </p>
        </div>
      </section>

      {/* =========================
         CONTENT SECTIONS
      ========================== */}
      <section
        className="max-w-6xl mx-auto px-6 py-24 space-y-40"
      >
        {/* Datenschutz */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#1c242e,#4b5563,#1c242e)]">
              Datenschutz & Informationssicherheit
            </h2>
            <p className="mt-4 text-graphite-700 leading-relaxed">
              Entwicklung nach dem Prinzip <strong>„Privacy by Design & Default“</strong>.  
              Alle Daten werden DSGVO-konform verarbeitet, mit Hosting innerhalb der EU, Ende-zu-Ende-Verschlüsselung und klar definierten Zugriffskontrollen.
            </p>
            <p className="mt-3 text-graphite-700 leading-relaxed">
            Sicherheit bedeutet transparente Audit-Logs, differenzierte Rollenrechte und regelmäßige Penetrationstests.
So bleiben Ihre Daten jederzeit geschützt.
            </p>
          </div>
          <div >
            <img
              src="/datenschutz.jpg"
              alt="Datenschutz"
              className="rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.15)]   "
            />
          </div>
        </div>

        {/* AGB */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div  className="order-2 md:order-1">
            <img
              src="/agb.jpg"
              alt="AGB"
              className="rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.15)]   "
            />
          </div>
          <div  className="order-1 md:order-2">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#1c242e,#4b5563,#1c242e)]">
              Allgemeine Geschäftsbedingungen
            </h2>
            <p className="mt-4 text-graphite-700 leading-relaxed">
            Transparente Zusammenarbeit ohne Kleingedrucktes. Die AGB definieren klar, wie Projekte geplant, umgesetzt und rechtlich abgesichert werden. Sie schaffen Verlässlichkeit für beide Seiten und bilden die Grundlage für eine faire Partnerschaft.
            </p>
            <a
              href="/agb_izenic.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white 
                         bg-[linear-gradient(135deg,#2b3542,#0b121a)] shadow  "
            >
              AGB herunterladen (PDF)
            </a>
          </div>
        </div>

        {/* Nachhaltigkeit */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#1c242e,#4b5563,#1c242e)]">
              Nachhaltigkeit & Verantwortung
            </h2>
            <p className="mt-4 text-graphite-700 leading-relaxed">
              Fortschritt bedeutet Verantwortung.  
              Izenic setzt auf energieeffiziente Infrastruktur und einen ressourcenschonenden Betrieb.
            </p>
            <p className="mt-3 text-graphite-700 leading-relaxed">
            Das Ziel ist Technologie, die echten Wert schafft ohne Überverbrauch.
So bleibt Automatisierung nicht nur intelligent, sondern auch nachhaltig und zukunftsfähig.
            </p>
          </div>
          <div >
            <img
              src="/nachhaltigkeit.jpg"
              alt="Nachhaltigkeit"
              className="rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.15)]   "
            />
          </div>
        </div>

        {/* Verantwortungsvolle Automatisierung */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div  className="order-2 md:order-1">
            <img
              src="/automation.jpg"
              alt="Automatisierung"
              className="rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.15)]   "
            />
          </div>
          <div  className="order-1 md:order-2">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#1c242e,#4b5563,#1c242e)]">
              Verantwortungsvolle Automatisierung
            </h2>
            <p className="mt-4 text-graphite-700 leading-relaxed">
              Automatisierung soll entlasten.  
              Mit dem Prinzip <strong>„Human-in-the-Loop“</strong> bleiben kritische Entscheidungen nachvollziehbar.
            </p>
            <p className="mt-3 text-graphite-700 leading-relaxed">
              So entsteht eine Governance, die Fehler minimiert und Vertrauen in technologische Prozesse schafft.
            </p>
          </div>
        </div>

        {/* KI-Ethik */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#1c242e,#4b5563,#1c242e)]">
              Verantwortungsvoller Einsatz von KI
            </h2>
            <p className="mt-4 text-graphite-700 leading-relaxed">
              KI darf nicht blind entscheiden.  
              Bias wird aktiv vermieden, Modelle sind erklärbar und transparent.  
              Daten liegen ausschließlich in vertrauenswürdiger und sicherer Infrastruktur, frei von unsicheren Cloud-Abhängigkeiten.
            </p>
            <p className="mt-3 text-graphite-700 leading-relaxed">
            Im Mittelpunkt stehen <strong>Fairness, Transparenz, Datenschutz und Menschzentrierung.</strong>  
              KI soll den Menschen stärken.
            </p>
          </div>
          <div >
            <img
              src="/ki.jpg"
              alt="KI Ethik"
              className="rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.15)]   "
            />
          </div>
        </div>
      </section>
    </main>
  );
};

/* =========================
   FOOTER — Izenic Signature Fade Edition
========================= */
const Footer = () => (
  <footer className="relative border-t border-[rgba(12,18,26,.1)] bg-gradient-to-b from-white via-[#f9fafc] to-[#fdfdfd] overflow-hidden">
    {/* Soft Ambient Aura */}
    <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full 
                    bg-[radial-gradient(circle,rgba(43,53,66,0.05),transparent_70%)] blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* === COLUMN 1: LOGO + CLAIM === */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="relative flex items-center justify-center">
            {/* Subtle diffuse light behind logo */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,transparent_80%)] blur-[80px]" />

            {/* Transparent Logo */}
            <img
              src="/izenic-logo-2.png"
              alt="Izenic"
              className="relative h-40 md:h-52 lg:h-60 w-auto 
                         mix-blend-luminosity opacity-95 
-all                          hover:opacity-100 hover:scale-[1.02]"
              style={{
                filter: "drop-shadow(0 0 40px rgba(43,53,66,0.2)) brightness(1.05)",
              }}
            />

            {/* Animated soft shine ring */}
            <div className="absolute -inset-12 rounded-full 
                            bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.15),transparent)] 
 blur-sm mix-blend-overlay" />
          </div>

          {/* Claim */}
          <p className="text-graphite-900 text-center md:text-left text-lg md:text-xl font-medium tracking-tight max-w-sm leading-snug">
            Automatisierung, wo sie wirkt.<br />KI, wo sie muss.
          </p>
        </div>

        {/* === COLUMN 2: NAVIGATION === */}
        <div className="flex md:justify-end">
          <ul className="flex flex-col md:items-end gap-5 text-base font-medium text-graphite-700">
            {[
              { name: "Impressum", href: "/impressum" },
              { name: "Datenschutz", href: "/datenschutz" },
              { name: "Vertrauen & Sicherheit", href: "/trust" },
            ].map((link) => (
              <li key={link.name}>
<a
  href={link.href}
  onClick={(e) => {
    e.preventDefault(); // verhindert kompletten Reload
    window.history.pushState({}, "", link.href); // ändert URL
    window.dispatchEvent(new PopStateEvent("popstate")); // triggert dein App-UseEffect
    window.scrollTo({ top: 0, behavior: "instant" }); // nach oben scrollen
  }}
  className="relative               after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] 
             after:bg-gradient-to-r after:from-[#2b3542] after:to-[#aab4c2] 
             after:scale-x-0 hover:after:scale-x-100 after:origin-left 
             after: after:"
>
  {link.name}
</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Copy */}
    <div className="border-t border-[rgba(12,18,26,.08)] py-6 text-center text-xs md:text-sm text-graphite-600 backdrop-blur-sm bg-white/40">
      © {new Date().getFullYear()} Izenic • Alle Rechte vorbehalten
    </div>

    {/* Animations */}
  </footer>
);

/* =========================
   IMPRESSUM — Rechtliche Angaben nach DDG
========================= */
const ImpressumPage = () => (
  <main className="min-h-screen bg-gradient-to-b from-white via-[#f9fafc] to-white py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-graphite-900 mb-8">Impressum</h1>

      <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-[rgba(12,18,26,.12)] shadow-xl p-8 md:p-12 space-y-6">
        <p>
          Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz) und § 55 RStV.
        </p>

        {/* Anbieter */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">Anbieter</h2>
          <p className="text-graphite-700 mt-1">
          Izenic <br />
            Inhaber: Emirkaan Akgün <br />
            Franziusallee 158 <br />
            24148 Kiel <br />
            Deutschland
          </p>
        </div>

        {/* Kontakt */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">Kontakt</h2>
          <p className="text-graphite-700 mt-1">
            E-Mail: <a href="mailto:kontakt@izenic.com" className="text-blue-600 hover:underline">kontakt@izenic.com</a> <br />
            {/* Telefonnummer (optional, falls vorhanden) */}
          </p>
        </div>

        {/* Umsatzsteuer- / Unternehmensangaben */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">Unternehmensangaben</h2>
          <p className="text-graphite-700 mt-1">
            Rechtsform: Einzelunternehmen (Kleingewerbe nach § 19 UStG) <br />
            USt-IdNr.: nicht vergeben / entfällt erstmal aufgrund der Kleinunternehmerregelung
          </p>
        </div>

        {/* Verantwortlich für Inhalte */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="text-graphite-700 mt-1">
            Emirkaan Akgün <br />
            Franziusallee 158 <br />
            24148 Kiel
          </p>
        </div>

        {/* Haftungsausschluss */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">Haftungsausschluss</h2>
          <p className="text-graphite-700 mt-1">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Vollständigkeit, Richtigkeit oder Aktualität
            der bereitgestellten Inhalte. Für den Inhalt externer Links sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>

        {/* Urheberrecht */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">Urheberrecht</h2>
          <p className="text-graphite-700 mt-1">
            Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
            Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und
            jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
            des jeweiligen Autors oder Erstellers.
          </p>
        </div>

        {/* Stand */}
        <p className="text-xs text-graphite-500">
          Stand: Oktober 2025
        </p>
      </div>
    </div>
  </main>
);


/* =========================
   DATENSCHUTZ — DSGVO-konform
========================= */
const DatenschutzPage = () => (
  <main className="min-h-screen bg-gradient-to-b from-white via-[#f7f9fc] to-white py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-graphite-900 mb-8">Datenschutzerklärung</h1>

      <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-[rgba(12,18,26,.12)] shadow-xl p-8 md:p-12 space-y-6">
        <p>
          Diese Datenschutzerklärung informiert gemäß Art. 13 DSGVO darüber, wie personenbezogene Daten verarbeitet werden,
          wenn diese Webseite besucht oder angebotene Dienste genutzt werden.
        </p>

        {/* 1. Verantwortlicher */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">1. Verantwortlicher</h2>
          <p className="text-graphite-700 mt-1">
          Izenic <br />
            Emirkaan Akgün <br />
            Franziusallee 158, 24148 Kiel <br />
            E-Mail: kontakt@izenic.com
          </p>
        </div>

        {/* 2. Arten der verarbeiteten Daten */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">2. Arten der verarbeiteten Daten</h2>
          <ul className="list-disc pl-5 text-graphite-700 mt-1 space-y-1">
            <li>Server-Logfiles (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite, Browsertyp, Betriebssystem)</li>
            <li>Daten aus Kontaktformularen (Name, E-Mail-Adresse, Nachricht, freiwillige Angaben)</li>
            <li>Cookies und vergleichbare Technologien (sofern technisch erforderlich oder mit Einwilligung genutzt)</li>
          </ul>
        </div>

        {/* 3. Zwecke der Verarbeitung */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">3. Zwecke der Verarbeitung</h2>
          <p className="text-graphite-700 mt-1">
            Die Verarbeitung erfolgt zur Bereitstellung und Sicherheit der Webseite, zur Bearbeitung von Kontaktanfragen,
            zur Analyse und Verbesserung der Nutzererfahrung (sofern Analyse-Tools eingesetzt werden)
            sowie zur Erfüllung gesetzlicher Pflichten.
          </p>
        </div>

        {/* 4. Rechtsgrundlagen */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">4. Rechtsgrundlagen</h2>
          <p className="text-graphite-700 mt-1">
            Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) <br />
            Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen) <br />
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z. B. an sicherem Betrieb der Webseite)
          </p>
        </div>

        {/* 5. Empfänger & Hosting */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">5. Empfänger & Hosting</h2>
          <p className="text-graphite-700 mt-1">
            Das Hosting der Webseite erfolgt DSGVO-konform innerhalb der EU. 
            Der Hosting-Dienstleister kann Zugriff auf personenbezogene Daten (z. B. Logfiles) haben,
            soweit dies zur Bereitstellung und Sicherheit der Webseite technisch erforderlich ist.
            Eine darüber hinausgehende Weitergabe erfolgt nur bei gesetzlicher Pflicht oder mit ausdrücklicher Einwilligung.
          </p>
        </div>

        {/* 6. Speicherdauer */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">6. Speicherdauer</h2>
          <p className="text-graphite-700 mt-1">
            Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist
            oder gesetzliche Aufbewahrungspflichten bestehen. Kontaktanfragen werden nach abschließender Bearbeitung gelöscht,
            sofern keine gesetzlichen Pflichten entgegenstehen.
          </p>
        </div>

        {/* 7. Rechte der betroffenen Personen */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">7. Rechte der betroffenen Personen</h2>
          <ul className="list-disc pl-5 text-graphite-700 mt-1 space-y-1">
            <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung der Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          </ul>
          <p className="text-graphite-700 mt-2">
            Zur Ausübung dieser Rechte genügt eine formlose Mitteilung an:{" "}
            <span className="font-medium">kontakt@izenic.com</span>
          </p>
        </div>

        {/* 8. Cookies & Analyse */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">8. Cookies & Analyse</h2>
          <p className="text-graphite-700 mt-1">
            Sofern Cookies oder Analyse-Tools (z. B. Google Analytics, Matomo) eingesetzt werden,
            erfolgt dies nur nach ausdrücklicher Einwilligung über das Cookie-Banner.
            Technisch notwendige Cookies dienen ausschließlich der Funktionalität dieser Webseite.
            Diese Webseite verwendet derzeit keine Analyse-Tools, die personenbezogene Daten verarbeiten.
          </p>
        </div>

        {/* 9. Beschwerderecht */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">9. Beschwerderecht</h2>
          <p className="text-graphite-700 mt-1">
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren,
            wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
          </p>
          <p className="text-graphite-700 mt-2">
            Zuständig ist zum Beispiel: <br />
            <span className="font-medium">Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)</span> <br />
            Holstenstraße 98, 24103 Kiel <br />
            Web:{" "}
            <a
              href="https://www.datenschutzzentrum.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.datenschutzzentrum.de
            </a>
          </p>
        </div>

        {/* 10. Aktualität */}
        <div>
          <h2 className="font-semibold text-xl text-graphite-900">10. Aktualität</h2>
          <p className="text-graphite-700 mt-1">
            Diese Datenschutzerklärung wird regelmäßig überprüft und aktualisiert, um rechtlichen Anforderungen zu entsprechen. <br />
            <span className="text-sm text-graphite-500">Stand: Oktober 2025</span>
          </p>
        </div>

        <p className="text-xs text-graphite-500">
          Hinweis: Diese Erklärung wird regelmäßig aktualisiert, um rechtliche Vorgaben zu erfüllen.
        </p>
      </div>
    </div>
  </main>
);


/* =========================
   KONTAKT-FORMULAR — Premium, Conversion-optimiert
========================= */
const KontaktPage = () => {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  const [error, setError] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!consent) {
      setError("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }

    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      setSubmitting(true);
      const res = await fetch("https://backend-0jvt.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setSent(true);
    } catch (err) {
      setError("Senden fehlgeschlagen. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f7f9fc] to-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-graphite-700 bg-white border border-[rgba(12,18,26,.12)] rounded-full px-3 py-1">
            Kostenloses Erstgespräch
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-graphite-900">
            20 Minuten, die Ihr Unternehmen verändern können
          </h1>
          <p className="mt-3 text-graphite-700 text-lg max-w-2xl mx-auto">
            Erhalten Sie in einem unverbindlichen Erstgespräch Klarheit, wo Automatisierung sofort entlastet 
            und KI echten Mehrwert liefert.  
            <strong> Ohne Risiko. Mit messbaren Ergebnissen.</strong>
          </p>
        </div>

        {/* Formular / Erfolgsmeldung */}
        <div className="bg-white/90 backdrop-blur-xl border border-[rgba(12,18,26,.12)] rounded-3xl shadow-[0_18px_50px_rgba(15,23,42,.08)] p-8 md:p-10">
          {!sent ? (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  placeholder="Ihr Name"
                  className="w-full rounded-xl border border-[rgba(12,18,26,.2)] p-3 focus:ring-2 focus:ring-[#2b3542]/30"
                  disabled={submitting}
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Ihre E-Mail"
                  className="w-full rounded-xl border border-[rgba(12,18,26,.2)] p-3 focus:ring-2 focus:ring-[#2b3542]/30"
                  disabled={submitting}
                />
              </div>

              <textarea
                required
                name="message"
                rows={4}
                placeholder="Beschreiben Sie kurz Ihr Ziel oder Ihren aktuellen Engpass"
                className="w-full rounded-xl border border-[rgba(12,18,26,.2)] p-3 focus:ring-2 focus:ring-[#2b3542]/30"
                disabled={submitting}
              />

              {/* DSGVO */}
              <label className="flex items-start gap-2 text-sm text-graphite-700 text-left">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[rgba(12,18,26,.3)]"
                  disabled={submitting}
                />
                <span>
                  Ich habe die{" "}
                  <a href="/datenschutz" className="underline hover:no-underline">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Angaben zum Zweck der Kontaktaufnahme zu.
                </span>
              </label>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={!consent || submitting}
                className={
                  btnSolid +
                  " justify-center w-full sm:w-auto mx-auto disabled:opacity-60 disabled:cursor-not-allowed"
                }
              >
                {submitting ? "Wird gesendet..." : "Jetzt Gespräch sichern →"}
              </button>
            </form>
          ) : (
            <div className="py-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[linear-gradient(135deg,#2b3542,#0b121a)] text-white mx-auto">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-graphite-900">
                Vielen Dank! Ihre Anfrage ist eingegangen
              </h3>
              <p className="mt-2 text-graphite-700">
              Eine Rückmeldung mit Terminvorschlägen erfolgt innerhalb von 24 Stunden.              </p>
            </div>
          )}
        </div>

        {/* Trust-Benefits */}
        {!sent && (
          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-graphite-700">
            <div className="rounded-xl bg-white/80 backdrop-blur px-3 py-2 border border-[rgba(12,18,26,.12)] flex items-center gap-2 justify-center">
              <ShieldCheck size={16} /> DSGVO-konform
            </div>
            <div className="rounded-xl bg-white/80 backdrop-blur px-3 py-2 border border-[rgba(12,18,26,.12)] flex items-center gap-2 justify-center">
              <LineChart size={16} /> Klare KPIs
            </div>
            <div className="rounded-xl bg-white/80 backdrop-blur px-3 py-2 border border-[rgba(12,18,26,.12)] flex items-center gap-2 justify-center">
              <Wrench size={16} /> Schnell startklar
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

/* =========================
   APP ROOT — erkennt ?sector= oder Seiten
========================= */
export default function App() {
  // 🧭 1) Path in React-State legen, damit Re-Render bei URL-Änderung
  const [path, setPath] = useState(window.location.pathname);

  // 2) Query-basierte Slugs (wie bei dir)
  const [sectorSlug, setSectorSlug] = useState(getSectorFromQuery());
  const [pageSlug, setPageSlug] = useState(getPageFromQuery()); // "services" | "about" | null

  // 3) Wenn Browsernavigation (Vor/Zurück oder interner Tab-Klick)
  useEffect(() => {
    const onPop = () => {
      setSectorSlug(getSectorFromQuery());
      setPageSlug(getPageFromQuery());
      setPath(window.location.pathname); // ✅ triggert Re-Render
      window.scrollTo({ top: 0, behavior: "instant" }); // 🚀 immer oben starten
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // 1) Branchen-Tab
  if (sectorSlug) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <SectorView slug={sectorSlug} />
        <Footer />
      </div>
    );
  }

  // 2) Eigene Tabs: Leistungen / Über mich
  if (pageSlug === "services") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <ServicesView />
        <Footer />
      </div>
    );
  }
  if (pageSlug === "about") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <AboutView />
        <Footer />
      </div>
    );
  }

  // 3) Impressum
  if (path === "/impressum") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <ImpressumPage />
        <Footer />
      </div>
    );
  }

  // 4) Datenschutz
  if (path === "/datenschutz") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <DatenschutzPage />
        <Footer />
      </div>
    );
  }


  // 5) Vertrauen & Sicherheit
  if (path === "/trust") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <TrustPage />
        <Footer />
      </div>
    );
  }
  
    // 6) Kontaktformular eigenes Tab
  if (window.location.pathname === "/kontakt") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <KontaktPage />
        <Footer />
      </div>
    );
  }

  // 5) Landing (Home)
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SectionCut label="Warum jetzt" />
      <Reveal><WhyNow /></Reveal>
      <SectionCut label="Herausforderung → Lösung" />
      <Reveal><ProblemSolution /></Reveal>
      <SectionCut label="Fokuspunkt" />
      <Reveal><USP /></Reveal>
      <SectionCut label="Ablauf" />
      <Reveal><Journey /></Reveal>
      <SectionCut label="Automation × KI" />
      <Reveal><Principle /></Reveal>
      <SectionCut label="Use Cases" />
      <Reveal><UseCases /></Reveal>
      <SectionCut label="Kontakt" />
      <Reveal><FinalCall /></Reveal>
      <Footer />
    </div>
  );
}