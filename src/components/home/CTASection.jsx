import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, LineChart, Wrench, ArrowRight, Sparkles } from "lucide-react";
import { btnSolid } from "../../constants";

const CTASection = () => {
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
    <section id="kontakt" className="relative py-32 md:py-40 bg-gradient-to-b from-white via-[#f8fafc] to-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-graphite-900 leading-[1.1] mb-8">
            Bereit, Ihre Engstellen zu lösen?
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 max-w-4xl mx-auto leading-relaxed font-light">
            Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wo Automatisierung und KI in Ihrem Alltag messbare Wertschöpfung generieren.
          </p>
        </div>

        {/* Form Container - Modernisiert */}
        <div className="relative bg-white/95 backdrop-blur-xl border border-[rgba(12,18,26,.12)] rounded-[40px] shadow-[0_24px_80px_rgba(15,23,42,.15)] p-10 md:p-14 overflow-hidden">
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/50 to-purple-100/30 rounded-full blur-3xl -z-0" />
          
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
                               focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/40 focus:bg-white
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
                               focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/40 focus:bg-white
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
                             focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/40 focus:bg-white
                             transition-all resize-none placeholder:text-graphite-400"
                  disabled={submitting}
                />
              </div>

              {/* DSGVO */}
              <label className="flex items-start gap-4 text-sm text-graphite-700 bg-[#f8fafc] p-5 rounded-2xl border border-[rgba(12,18,26,.08)]">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-2 border-[rgba(12,18,26,.3)] text-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                  disabled={submitting}
                />
                <span className="leading-relaxed">
                  Ich habe die{" "}
                    <a href="/datenschutz" className="underline hover:no-underline text-cyan-600 font-semibold">
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
                    Erstgespräch vereinbaren <ArrowRight size={22} className="ml-2" />
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

        {/* Trust Indicators - Modernisiert */}
        {!sent && (
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-[rgba(12,18,26,.1)] hover:bg-white/80 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2b3542]/10 to-[#4a515a]/5 flex items-center justify-center">
                <ShieldCheck size={24} className="text-[#2b3542]" />
              </div>
              <span className="text-base font-semibold text-graphite-900">DSGVO-konform</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-[rgba(12,18,26,.1)] hover:bg-white/80 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2b3542]/10 to-[#4a515a]/5 flex items-center justify-center">
                <LineChart size={24} className="text-[#2b3542]" />
              </div>
              <span className="text-base font-semibold text-graphite-900">Messbare Ergebnisse</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-[rgba(12,18,26,.1)] hover:bg-white/80 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2b3542]/10 to-[#4a515a]/5 flex items-center justify-center">
                <Wrench size={24} className="text-[#2b3542]" />
              </div>
              <span className="text-base font-semibold text-graphite-900">Schnell startklar</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
