import { useEffect } from 'react';

/**
 * SEO-Komponente für dynamische Meta-Tags pro Route
 * TODO: Domain-Platzhalter durch echte Domain ersetzen (z.B. https://www.izenic.com)
 */
const SEO = ({ 
  title = 'IZENIC – Automatisierung & KI-Lösungen für Unternehmen',
  description = 'IZENIC bietet individuelle KI- und Automatisierungslösungen für KMU im DACH-Raum. Beratung, Entwicklung und Coaching für nachhaltige Digitalisierung.',
  path = '/',
  ogImage = '/izenic_logo_3.png'
}) => {
  // TODO: Ersetze MEINE-DOMAIN.de durch die tatsächliche Domain (z.B. www.izenic.com)
  const DOMAIN = 'https://MEINE-DOMAIN.de';
  const fullUrl = `${DOMAIN}${path === '/' ? '' : path}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${DOMAIN}${ogImage}`;

  useEffect(() => {
    // Title aktualisieren
    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Open Graph Tags
    const updateOrCreateMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', title);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:url', fullUrl);
    updateOrCreateMeta('og:image', fullOgImage);
    updateOrCreateMeta('og:type', 'website');
    updateOrCreateMeta('og:locale', 'de_DE');
    updateOrCreateMeta('og:site_name', 'IZENIC');

    // Twitter Tags
    const updateOrCreateTwitter = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateTwitter('twitter:card', 'summary_large_image');
    updateOrCreateTwitter('twitter:title', title);
    updateOrCreateTwitter('twitter:description', description);
    updateOrCreateTwitter('twitter:image', fullOgImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

  }, [title, description, fullUrl, fullOgImage]);

  return null; // Diese Komponente rendert nichts
};

export default SEO;

