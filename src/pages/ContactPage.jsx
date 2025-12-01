import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, LineChart, Wrench, ArrowRight, Mail, Clock, Target } from "lucide-react";
import { btnSolid } from "../constants";

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

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
    <main className="min-h-screen bg-[#fafbfc] text-graphite-900 overflow-x-hidden">
      {/* =========================
         HERO — Der Einstieg
      ========================== */}
      <header className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
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
        
        <div className="relative z-10 max-w-5xl px-6">
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-cyan-600 mb-8 font-mono font-bold bg-cyan-50 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-cyan-600" />
            KOSTENLOSES ERSTGESPRÄCH
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-10 tracking-tight text-graphite-900">
            20 Minuten, die Ihr Unternehmen verändern können
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 max-w-4xl mx-auto leading-relaxed font-light">
            Erhalten Sie in einem unverbindlichen Erstgespräch Klarheit, wo Automatisierung sofort entlastet 
            und KI echten Mehrwert liefert.
            <br />
            <span className="font-semibold text-graphite-900 mt-3 block">
              Ohne Risiko. Mit messbaren Ergebnissen.
            </span>
          </p>
        </div>
      </header>

      {/* =========================
         FORMULAR — Modernisiert
      ========================== */}
      <section className="relative py-20 bg-[#fafbfc]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-2 border-[rgba(12,18,26,.12)] rounded-[40px] shadow-2xl p-10 md:p-14 overflow-hidden">
            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-purple-100/30 rounded-full blur-3xl -z-0" />
            
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-8 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-graphite-900 mb-3">
                      Name
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Ihr Name"
                      className="w-full rounded-2xl border-2 border-[rgba(12,18,26,.15)] bg-white/80 backdrop-blur-sm px-5 py-4 text-base
                                 focus:ring-2 focus:ring-[#2b3542]/20 focus:border-[#2b3542]/40 focus:bg-white
                                 transition-all placeholder:text-graphite-400"
                      disabled={submitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-graphite-900 mb-3">
                      E-Mail
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Ihre E-Mail"
                      className="w-full rounded-2xl border-2 border-[rgba(12,18,26,.15)] bg-white/80 backdrop-blur-sm px-5 py-4 text-base
                                 focus:ring-2 focus:ring-[#2b3542]/20 focus:border-[#2b3542]/40 focus:bg-white
                                 transition-all placeholder:text-graphite-400"
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-graphite-900 mb-3">
                    Ihre Nachricht
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Beschreiben Sie kurz Ihr Ziel oder Ihren aktuellen Engpass"
                    className="w-full rounded-2xl border-2 border-[rgba(12,18,26,.15)] bg-white/80 backdrop-blur-sm px-5 py-4 text-base
                               focus:ring-2 focus:ring-[#2b3542]/20 focus:border-[#2b3542]/40 focus:bg-white
                               transition-all resize-none placeholder:text-graphite-400"
                    disabled={submitting}
                  />
                </div>

                {/* DSGVO */}
                <label className="flex items-start gap-4 text-sm text-graphite-700 bg-[#f8fafc] p-5 rounded-2xl border-2 border-[rgba(12,18,26,.08)]">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-2 border-[rgba(12,18,26,.3)] text-[#2b3542] focus:ring-2 focus:ring-[#2b3542]/20"
                    disabled={submitting}
                  />
                  <span className="leading-relaxed">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="underline hover:no-underline text-[#2b3542] font-semibold">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Angaben zum Zweck der Kontaktaufnahme zu.
                  </span>
                </label>

                {error && (
                  <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-200">
                    <p className="text-sm text-red-700 font-medium">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!consent || submitting}
                  className={
                    btnSolid +
                    " w-full justify-center text-lg md:text-xl py-6 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
                  }
                >
                  {submitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Jetzt Gespräch sichern <ArrowRight size={22} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-16 relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#2b3542] to-[#0b121a] text-white mb-8 shadow-2xl">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-graphite-900 mb-4">
                  Vielen Dank! Ihre Anfrage ist eingegangen
                </h3>
                <p className="text-graphite-700 text-xl leading-relaxed max-w-2xl mx-auto">
                  Eine Rückmeldung mit Terminvorschlägen erfolgt innerhalb von 24 Stunden.
                </p>
              </div>
            )}
          </div>

          {/* Trust-Benefits — Modernisiert */}
          {!sent && (
            <div className="mt-16 grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/60 backdrop-blur-sm border-2 border-[rgba(12,18,26,.1)] hover:bg-white/80 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2b3542]/10 to-[#4a515a]/5 flex items-center justify-center">
                  <ShieldCheck size={24} className="text-[#2b3542]" />
                </div>
                <span className="text-base font-semibold text-graphite-900">DSGVO-konform</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/60 backdrop-blur-sm border-2 border-[rgba(12,18,26,.1)] hover:bg-white/80 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2b3542]/10 to-[#4a515a]/5 flex items-center justify-center">
                  <LineChart size={24} className="text-[#2b3542]" />
                </div>
                <span className="text-base font-semibold text-graphite-900">Klare KPIs</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/60 backdrop-blur-sm border-2 border-[rgba(12,18,26,.1)] hover:bg-white/80 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2b3542]/10 to-[#4a515a]/5 flex items-center justify-center">
                  <Wrench size={24} className="text-[#2b3542]" />
                </div>
                <span className="text-base font-semibold text-graphite-900">Schnell startklar</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================
         BENEFITS — Was Sie erwarten können
      ========================== */}
      {!sent && (
        <section className="relative py-32 md:py-40 bg-white border-y border-[rgba(12,18,26,.08)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-graphite-900">
                Was Sie im Erstgespräch erwarten können
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Klarheit über Engpässe",
                  text: "IZENIC identifiziert gemeinsam mit Ihnen die größten Hebel für Automatisierung und KI in Ihrem Unternehmen."
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "20 Minuten Fokus",
                  text: "Keine Verkaufsgespräche. Nur eine ehrliche Einschätzung, wo Technologie wirklich wirkt."
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Konkrete nächste Schritte",
                  text: "Sie erhalten eine klare Roadmap, wie Sie von der Analyse zur Umsetzung kommen."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#f8fafc] border-2 border-[rgba(12,18,26,.1)] rounded-3xl p-10 hover:border-[#2b3542]/20 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center text-cyan-600 mb-6 border-2 border-cyan-200">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-graphite-900 mb-4">{item.title}</h3>
                  <p className="text-graphite-700 leading-relaxed text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ContactPage;
