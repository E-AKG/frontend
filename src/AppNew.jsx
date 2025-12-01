import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import StructuredData from './components/StructuredData';

// Seiten-Komponenten
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UseCasesPage from './pages/UseCasesPage';
import InsightsPage from './pages/InsightsPage';
import InsightsOverview from './components/InsightsOverview';
import InsightDetail from './components/InsightDetail';

// Weitere Komponenten aus App.jsx (werden später extrahiert)
// TODO: Diese Komponenten sollten später in separate Dateien extrahiert werden
import { 
  ImpressumPage, 
  DatenschutzPage, 
  TrustPage 
} from './pages/LegalPages';

/**
 * Layout-Komponente für alle Seiten
 */
const Layout = ({ children }) => (
  <div className="min-h-screen bg-white">
    <Navbar />
    {children}
    <Footer />
  </div>
);

/**
 * Wrapper für ServicesPage mit SEO
 */
const ServicesPageWithSEO = () => (
  <>
    <SEO
      title="Leistungen für KI & Automatisierung | IZENIC"
      description="IZENIC bietet strategische Beratung, technische Entwicklung und praxisorientiertes Coaching für intelligente Automatisierung und verantwortungsvolle KI-Lösungen im DACH-Raum."
      path="/leistungen"
    />
    <StructuredData type="default" currentPath="/leistungen" />
    <ServicesPage />
  </>
);

/**
 * Wrapper für AboutPage mit SEO
 * Route: /ueber-izenic (angepasst vom ursprünglichen /ueber-mich)
 */
const AboutPageWithSEO = () => (
  <>
    <SEO
      title="Über IZENIC – Vision, Mission & Team | IZENIC"
      description="IZENIC steht für intelligente Systeme, die verstehen, strukturieren und Entscheidungen stärken. Lernen Sie unsere Vision, Mission und unser Team kennen."
      path="/ueber-izenic"
    />
    <StructuredData type="default" currentPath="/ueber-izenic" />
    <AboutPage />
  </>
);

/**
 * Wrapper für UseCasesPage mit SEO
 */
const UseCasesPageWithSEO = () => (
  <>
    <SEO
      title="Use Cases für Automatisierung & KI | IZENIC"
      description="Konkrete Beispiele, wie Automatisierung und KI in verschiedenen Branchen sofortige Wirkung entfalten. Von Dokumentenverarbeitung bis Prozessoptimierung."
      path="/use-cases"
    />
    <StructuredData type="default" currentPath="/use-cases" />
    <UseCasesPage />
  </>
);

/**
 * Wrapper für ContactPage mit SEO
 */
const ContactPageWithSEO = () => (
  <>
    <SEO
      title="Kontakt & Erstgespräch | IZENIC"
      description="Buchen Sie ein kostenloses Erstgespräch mit IZENIC und erfahren Sie, wo Automatisierung in Ihrem Unternehmen sofort entlastet und KI echten Mehrwert liefert."
      path="/kontakt"
    />
    <StructuredData type="default" currentPath="/kontakt" />
    <ContactPage />
  </>
);

/**
 * Wrapper für InsightDetail mit SEO
 */
const InsightDetailWithSEO = () => {
  const { insightId } = useParams();
  return (
    <>
      <SEO
        title={`Insight: ${insightId} | IZENIC`}
        description="Vertiefende Einblicke in Automatisierung, KI und Digitalisierung von IZENIC."
        path={`/insights/${insightId}`}
      />
      <StructuredData type="default" currentPath={`/insights/${insightId}`} />
      <InsightDetail insightId={insightId} />
    </>
  );
};

/**
 * Wrapper für Legal Pages mit SEO
 */
const ImpressumPageWithSEO = () => (
  <>
    <SEO
      title="Impressum | IZENIC"
      description="Rechtliche Angaben zu IZENIC gemäß DDG und RStV."
      path="/impressum"
    />
    <ImpressumPage />
  </>
);

const DatenschutzPageWithSEO = () => (
  <>
    <SEO
      title="Datenschutzerklärung | IZENIC"
      description="DSGVO-konforme Datenschutzerklärung von IZENIC."
      path="/datenschutz"
    />
    <DatenschutzPage />
  </>
);

const TrustPageWithSEO = () => (
  <>
    <SEO
      title="Vertrauen & Sicherheit | IZENIC"
      description="Datenschutz, Nachhaltigkeit und verantwortungsvolle KI: Das Fundament jeder Automatisierung bei IZENIC."
      path="/trust"
    />
    <StructuredData type="default" currentPath="/trust" />
    <TrustPage />
  </>
);

/**
 * Haupt-App-Komponente mit React Router
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* Leistungen */}
        <Route
          path="/leistungen"
          element={
            <Layout>
              <ServicesPageWithSEO />
            </Layout>
          }
        />

        {/* Über IZENIC (Route angepasst von /ueber-mich zu /ueber-izenic) */}
        <Route
          path="/ueber-izenic"
          element={
            <Layout>
              <AboutPageWithSEO />
            </Layout>
          }
        />

        {/* Redirect von alter URL /ueber-mich zu /ueber-izenic */}
        <Route
          path="/ueber-mich"
          element={
            <Layout>
              <AboutPageWithSEO />
            </Layout>
          }
        />

        {/* Use Cases */}
        <Route
          path="/use-cases"
          element={
            <Layout>
              <UseCasesPageWithSEO />
            </Layout>
          }
        />

        {/* Insights Overview */}
        <Route
          path="/insights"
          element={
            <Layout>
              <InsightsPage />
            </Layout>
          }
        />

        {/* Insight Detail */}
        <Route
          path="/insights/:insightId"
          element={
            <Layout>
              <InsightDetailWithSEO />
            </Layout>
          }
        />

        {/* Kontakt */}
        <Route
          path="/kontakt"
          element={
            <Layout>
              <ContactPageWithSEO />
            </Layout>
          }
        />

        {/* Legal Pages */}
        <Route
          path="/impressum"
          element={
            <Layout>
              <ImpressumPageWithSEO />
            </Layout>
          }
        />

        <Route
          path="/datenschutz"
          element={
            <Layout>
              <DatenschutzPageWithSEO />
            </Layout>
          }
        />

        <Route
          path="/trust"
          element={
            <Layout>
              <TrustPageWithSEO />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

