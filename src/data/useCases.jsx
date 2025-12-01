import React from "react";
import {
  Scale, ShoppingCart, Building2, Stethoscope, Truck, Users2,
  Landmark, Factory, Megaphone, Hammer
} from "lucide-react";

export const USE_CASES = [
  {
    key: "recht",
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
    key: "onlinehandel",
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
    key: "immobilien",
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
    key: "gesundheitswesen",
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
    key: "logistik",
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
    key: "personal",
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
    key: "finanzen",
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
    key: "produktion",
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
    key: "bau",
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

