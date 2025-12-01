import React from 'react';
import InsightsOverview from '../components/InsightsOverview';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

/**
 * Insights-Übersichtsseite mit SEO
 */
const InsightsPage = () => {
  return (
    <>
      <SEO
        title="Insights & Artikel | IZENIC"
        description="Aktuelle Einblicke in Automatisierung, KI und Digitalisierung für KMU im DACH-Raum. Best Practices, Branchentrends und praktische Tipps von IZENIC."
        path="/insights"
      />
      <StructuredData type="default" currentPath="/insights" />
      <InsightsOverview />
    </>
  );
};

export default InsightsPage;

