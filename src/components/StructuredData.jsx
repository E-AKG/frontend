import { useEffect } from 'react';

/**
 * Komponente für strukturierte Daten (Schema.org JSON-LD)
 * TODO: Domain-Platzhalter durch echte Domain ersetzen
 */
const StructuredData = ({ type = 'default', currentPath = '/' }) => {
  // TODO: Ersetze MEINE-DOMAIN.de durch die tatsächliche Domain (z.B. www.izenic.com)
  const DOMAIN = 'https://MEINE-DOMAIN.de';

  useEffect(() => {
    // Entferne alte strukturierte Daten-Scripts
    const oldScripts = document.querySelectorAll('script[data-structured-data]');
    oldScripts.forEach(script => script.remove());

    let schemas = [];

    // Organization Schema (immer vorhanden)
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${DOMAIN}/#organization`,
      'name': 'IZENIC',
      'url': DOMAIN,
      'logo': `${DOMAIN}/izenic_logo_3.png`, // TODO: Logo-URL anpassen falls nötig
      'description': 'Individuelle KI- und Automatisierungslösungen für KMU im DACH-Raum.',
      'foundingDate': '2025',
      'foundingLocation': {
        '@type': 'Place',
        'name': 'Kiel, Germany'
      },
      'founder': {
        '@type': 'Person',
        'name': 'Emirkaan Akgün'
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Franziusallee 158',
        'addressLocality': 'Kiel',
        'postalCode': '24148',
        'addressCountry': 'DE'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Kundenservice',
        'email': 'kontakt@izenic.com',
        'availableLanguage': ['de', 'en']
      }
    };

    // WebSite Schema (immer vorhanden)
    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'url': DOMAIN,
      'name': 'IZENIC',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': `${DOMAIN}/?s={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };

    // SiteNavigationElement Schema (für Sitelinks) - als ItemList
    const navigationSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'SiteNavigationElement',
          'position': 1,
          'name': 'Home',
          'url': `${DOMAIN}/`
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 2,
          'name': 'Leistungen',
          'url': `${DOMAIN}/leistungen`
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 3,
          'name': 'Use Cases',
          'url': `${DOMAIN}/use-cases`
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 4,
          'name': 'Über IZENIC',
          'url': `${DOMAIN}/ueber-mich`
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 5,
          'name': 'Insights',
          'url': `${DOMAIN}/insights`
        },
        {
          '@type': 'SiteNavigationElement',
          'position': 6,
          'name': 'Kontakt',
          'url': `${DOMAIN}/kontakt`
        }
      ]
    };

    schemas.push(organizationSchema, webSiteSchema, navigationSchema);

    // Zusätzliche Schemas je nach Seite
    if (currentPath === '/') {
      // BreadcrumbList für Home
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': DOMAIN
          }
        ]
      };
      schemas.push(breadcrumbSchema);
    }

    // Alle Schemas ins DOM einfügen
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-structured-data', 'true');
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    });

    // Cleanup-Funktion
    return () => {
      const scripts = document.querySelectorAll('script[data-structured-data]');
      scripts.forEach(script => script.remove());
    };
  }, [DOMAIN, currentPath]);

  return null; // Diese Komponente rendert nichts
};

export default StructuredData;

