import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import USPSection from '../components/home/USPSection';
import CTASection from '../components/home/CTASection';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const HomePage = () => {
  return (
    <>
      <SEO
        title="IZENIC – Automatisierung & KI-Lösungen für KMU im DACH-Raum"
        description="IZENIC bietet individuelle KI- und Automatisierungslösungen für KMU im DACH-Raum. Von der Beratung über die Entwicklung bis zum Coaching – wir machen Unternehmen effizienter, klarer und zukunftsfähig."
        path="/"
      />
      <StructuredData type="default" currentPath="/" />
      
      <HeroSection />
      <ProblemSection />
      
      {/* Interne Verlinkung für SEO und Sitelinks */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-[#f9fafb] to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-[rgba(12,18,26,.12)] shadow-[0_18px_50px_rgba(15,23,42,.08)] p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-graphite-900 mb-6 text-center">
              Ihr Partner für intelligente Automatisierung
            </h2>
            <div className="prose prose-lg max-w-none text-graphite-700 leading-relaxed">
              <p className="text-base md:text-lg mb-4">
                IZENIC unterstützt Unternehmen im DACH-Raum dabei, manuelle Routinen durch intelligente Automatisierung zu ersetzen. 
                Ob in der Rechtsberatung, im E-Commerce, im Gesundheitswesen oder in der Produktion – 
                unsere <Link to="/leistungen" className="text-[#2b3542] font-semibold underline hover:no-underline">Leistungen</Link> umfassen 
                strategische Beratung, technische Umsetzung und praxisorientiertes Coaching.
              </p>
              <p className="text-base md:text-lg mb-4">
                Entdecken Sie in unseren <Link to="/use-cases" className="text-[#2b3542] font-semibold underline hover:no-underline">Use Cases</Link> konkrete Beispiele, 
                wie Automatisierung und KI in verschiedenen Branchen sofortige Wirkung entfalten. 
                Von der Dokumentenverarbeitung bis zur Prozessoptimierung zeigen wir, wo Technologie echten Mehrwert schafft.
              </p>
              <p className="text-base md:text-lg mb-4">
                Lernen Sie mehr über unsere Vision und unser Team auf der Seite <Link to="/ueber-mich" className="text-[#2b3542] font-semibold underline hover:no-underline">Über IZENIC</Link>. 
                Erfahren Sie, wie wir Technologie mit Haltung verbinden und nachhaltige Strukturen schaffen, die bleiben – auch wenn sich alles verändert.
              </p>
              <p className="text-base md:text-lg mb-4">
                Regelmäßige Einblicke in aktuelle Themen rund um Automatisierung, KI und Digitalisierung finden Sie in unseren <Link to="/insights" className="text-[#2b3542] font-semibold underline hover:no-underline">Insights</Link>. 
                Von Best Practices über Branchentrends bis hin zu praktischen Tipps – wir teilen unser Wissen für Ihren Erfolg.
              </p>
              <p className="text-base md:text-lg">
                Bereit für den nächsten Schritt? Buchen Sie ein kostenloses <Link to="/kontakt" className="text-[#2b3542] font-semibold underline hover:no-underline">Erstgespräch</Link> und erfahren Sie, 
                wo Automatisierung in Ihrem Unternehmen sofort entlastet und KI echten Mehrwert liefert.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      <ProcessSection />
      <USPSection />
      <CTASection />
    </>
  );
};

export default HomePage;

