import React from "react";
import { Calendar, ArrowLeft, Quote, Sparkles } from "lucide-react";

// Sample insights data (same as in Overview)
const INSIGHTS_DATA = {
  "usecases": {
    id: "usecases",
    title: "Der Use Case beginnt bei euch",
    subtitle: "Warum erfolgreiche KI-Projekte nicht mit Technologie, sondern mit Klarheit starten.",
    date: new Date("2024-11-04T21:00:00"),
    image: "/insights-1.jpg",
    category: "Use Case",
    content: `
# Ihr Use Case. Ihre Wirkung.

Erfolgreiche KI-Projekte starten nicht mit Technologie. Sie starten mit Klarheit. Bevor Sie in Tools investieren, müssen Sie verstehen, was Sie wirklich brauchen.

## Warum Klarheit vor Technologie kommt

Viele Unternehmen machen einen klassischen Fehler: Sie springen direkt zu Lösungen, ohne das Problem zu verstehen. Das Ergebnis sind Investitionen, die keine messbaren Ergebnisse liefern.

Der entscheidende Unterschied zwischen erfolgreichen und gescheiterten Projekten liegt nicht in der Technologie. Er liegt darin, wie gut Sie Ihr Geschäftsproblem definiert haben.

## KI ist nicht gleich Automatisierung

Hier liegt ein häufiges Missverständnis. Nicht alles, was automatisiert wird, ist KI. Und nicht alles, was KI heißt, ist tatsächlich KI.

**Automatisierung** bedeutet, dass wiederkehrende Aufgaben ohne menschliches Eingreifen ablaufen. Ein simples Beispiel: Wenn ein System automatisch E-Mails sortiert, ist das Automatisierung.

**KI** bedeutet, dass ein System aus Daten lernt und Entscheidungen trifft, die nicht vorprogrammiert sind. Ein Beispiel: Wenn ein System aus hunderten Verträgen lernt, welche Klauseln problematisch sind, ist das KI.

Die meisten Use Cases lassen sich mit klassischer Automatisierung lösen. KI wird dort relevant, wo Muster gelernt werden müssen, wo Entscheidungen auf Basis von Daten getroffen werden, wo Unvorhersehbares erkannt werden soll.

## Wo fängt der Use Case an?

Der Use Case fängt bei Ihnen an. Nicht bei der Technologie. Nicht bei dem, was möglich ist. Sondern bei dem, was Sie wirklich brauchen.

Fragen Sie sich zuerst:

• Welcher Prozess kostet Sie am meisten Zeit?
• Wo passieren die meisten Fehler?
• Was blockiert Ihr Team täglich?
• Welche Aufgabe wiederholt sich hundertmal, ohne dass jemand wirklich nachdenken muss?

Die Antworten auf diese Fragen zeigen Ihnen, wo Automatisierung oder KI wirklich Sinn macht.

## Der pragmatische Ansatz

Beginnen Sie mit einem klar abgegrenzten Bereich. Ein Proof of Concept, nicht eine große Transformation. Wählen Sie einen Prozess, der:

• Schnell messbare Ergebnisse liefert
• Ihr Team entlastet
• Fehler reduziert
• Skalierungspotenzial hat

Dokumentenverarbeitung ist ein gutes Beispiel. Wenn Rechnungen automatisch erkannt und erfasst werden, spart das Zeit. Wenn das System dann auch lernt, welche Rechnungen problematisch sind, wird es zu KI.

## Was wirklich zählt

Technologie ist ein Werkzeug. Entscheidend ist, dass Sie wissen, welches Problem Sie lösen wollen. Dann finden Sie die passende Technologie. Nicht umgekehrt.

Erfolgreiche Projekte haben klare Ziele. Sie haben messbare KPIs. Sie starten klein und skalieren basierend auf Ergebnissen. Und sie nehmen das Team mit, statt es zu überrumpeln.

## IZENIC unterstützt Sie dabei

IZENIC ist dazu da, Sie bei diesem Prozess zu unterstützen, und Ihnen dabei, Ihre Use Cases zu definieren. IZENIC schaut gemeinsam mit Ihnen, ob für Ihren Anwendungsfall KI oder Automatisierung die bessere Wahl ist. IZENIC analysiert, ob sich der Einsatz lohnt und welche Technologie wirklich passt.

Wenn Sie bereits einen konkreten Use Case haben, wenden Sie sich an IZENIC. Gemeinsam mit IZENIC finden Sie die passende Lösung. Ob Automatisierung oder KI. Ob ein Proof of Concept oder eine umfassendere Transformation. IZENIC unterstützt Sie von der Idee bis zur Umsetzung.

## Fazit

Der Use Case beginnt bei Ihnen. Nicht bei der Technologie. Verstehen Sie Ihr Problem, bevor Sie nach Lösungen suchen. Und unterscheiden Sie zwischen Automatisierung und KI. Beides hat seinen Platz.

Starten Sie dort, wo Sie schnell Ergebnisse sehen. Skalieren Sie dann schrittweise. Das ist der pragmatische Weg zu erfolgreichen Projekten. Und wenn Sie Unterstützung brauchen, ist IZENIC für Sie da.
    `
  }
};

const InsightDetail = ({ insightId }) => {
  // Fallback für fehlende insightId
  if (!insightId) {
    return (
      <main className="min-h-screen bg-[#fafbfc] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-graphite-900 mb-4">Insight nicht gefunden</h1>
          <button
            onClick={() => (window.location.href = "/insights")}
            className="px-6 py-3 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors"
          >
            Zurück zu Insights
          </button>
        </div>
      </main>
    );
  }

  const insight = INSIGHTS_DATA[insightId];

  if (!insight) {
    return (
      <main className="min-h-screen bg-[#fafbfc] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-graphite-900 mb-4">Insight nicht gefunden</h1>
          <button
            onClick={() => (window.location.href = "/insights")}
            className="px-6 py-3 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors"
          >
            Zurück zu Insights
          </button>
        </div>
      </main>
    );
  }

  const formatDate = (date) => {
    try {
      const options = { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" };
      const formatted = date.toLocaleDateString("de-DE", options);
      return formatted.replace(/(\d{1,2}):(\d{2})/, "$1:$2 Uhr");
    } catch (e) {
      return "Datum unbekannt";
    }
  };

  const handleBack = () => {
    window.location.href = "/insights";
  };

  // Simple markdown-like parsing for content
  const parseContent = (content) => {
    const lines = content.trim().split("\n");
    const elements = [];
    let currentParagraph = [];
    let currentList = [];

    lines.forEach((line, index) => {
      // Headers
      if (line.startsWith("# ")) {
        if (currentList.length) {
          elements.push({ type: "ul", items: currentList });
          currentList = [];
        }
        if (currentParagraph.length) {
          elements.push({ type: "p", content: currentParagraph.join(" ") });
          currentParagraph = [];
        }
        elements.push({ type: "h1", content: line.substring(2) });
      } else if (line.startsWith("## ")) {
        if (currentList.length) {
          elements.push({ type: "ul", items: currentList });
          currentList = [];
        }
        if (currentParagraph.length) {
          elements.push({ type: "p", content: currentParagraph.join(" ") });
          currentParagraph = [];
        }
        elements.push({ type: "h2", content: line.substring(3) });
      } else if (line.startsWith("### ")) {
        if (currentList.length) {
          elements.push({ type: "ul", items: currentList });
          currentList = [];
        }
        if (currentParagraph.length) {
          elements.push({ type: "p", content: currentParagraph.join(" ") });
          currentParagraph = [];
        }
        elements.push({ type: "h3", content: line.substring(4) });
      }
      // Bullet points (•)
      else if (line.trim().startsWith("•")) {
        if (currentParagraph.length) {
          elements.push({ type: "p", content: currentParagraph.join(" ") });
          currentParagraph = [];
        }
        const itemText = line.trim().substring(1).trim();
        currentList.push(itemText);
      }
      // Blockquote
      else if (line.startsWith("> ")) {
        if (currentList.length) {
          elements.push({ type: "ul", items: currentList });
          currentList = [];
        }
        if (currentParagraph.length) {
          elements.push({ type: "p", content: currentParagraph.join(" ") });
          currentParagraph = [];
        }
        elements.push({ type: "quote", content: line.substring(2) });
      }
      // Empty line
      else if (!line.trim()) {
        if (currentList.length) {
          elements.push({ type: "ul", items: currentList });
          currentList = [];
        }
        if (currentParagraph.length) {
          elements.push({ type: "p", content: currentParagraph.join(" ") });
          currentParagraph = [];
        }
      }
      // Regular text
      else {
        if (currentList.length) {
          elements.push({ type: "ul", items: currentList });
          currentList = [];
        }
        currentParagraph.push(line);
      }
    });

    if (currentList.length) {
      elements.push({ type: "ul", items: currentList });
    }
    if (currentParagraph.length) {
      elements.push({ type: "p", content: currentParagraph.join(" ") });
    }

    return elements;
  };

  const renderContent = (element) => {
    const renderText = (text) => {
      // Simple bold rendering
      const parts = text.split(/(\*\*[^*]+\*\*)/);
      return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="text-graphite-900 font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    switch (element.type) {
      case "h1":
        return (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-graphite-900 mt-12 md:mt-16 mb-6 md:mb-8 tracking-tight leading-tight">
            {element.content}
          </h1>
        );
      case "h2":
        return (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-graphite-900 mt-10 md:mt-12 mb-5 md:mb-6 tracking-tight leading-tight">
            {element.content}
          </h2>
        );
      case "h3":
        return (
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-graphite-900 mt-8 md:mt-10 mb-4 md:mb-5 tracking-tight leading-tight">
            {element.content}
          </h3>
        );
      case "quote":
        return (
          <blockquote className="my-8 md:my-10 pl-6 md:pl-8 border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-50/50 to-transparent py-6 md:py-8 rounded-r-2xl shadow-sm">
            <div className="flex items-start gap-3 md:gap-4">
              <Quote className="text-cyan-600 flex-shrink-0 mt-1" size={24} />
              <p className="text-lg md:text-xl text-graphite-800 italic leading-relaxed font-medium">{renderText(element.content)}</p>
            </div>
          </blockquote>
        );
      case "p":
        return (
          <p className="text-lg md:text-xl text-graphite-700 leading-relaxed mb-6 md:mb-8">
            {renderText(element.content)}
          </p>
        );
      case "ul":
        return (
          <ul className="list-none space-y-3 md:space-y-4 mb-6 md:mb-8">
            {element.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-lg md:text-xl text-graphite-700 leading-relaxed">
                <div className="w-2 h-2 rounded-full bg-cyan-600 mt-2.5 flex-shrink-0 shadow-sm" />
                <span>{renderText(item)}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  let contentElements = [];
  try {
    contentElements = parseContent(insight.content || "");
  } catch (e) {
    console.error("Error parsing content:", e);
    contentElements = [{ type: "p", content: "Fehler beim Laden des Inhalts." }];
  }

  return (
    <main className="min-h-screen bg-[#fafbfc] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16">
        {/* Background Pattern */}
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

        {/* Decorative Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          {/* Back Button - Premium Design */}
          <button
            onClick={handleBack}
            className="group flex items-center gap-2 text-graphite-700 hover:text-cyan-600 transition-colors mb-8 md:mb-10 text-sm md:text-base font-medium"
          >
            <div className="w-8 h-8 rounded-lg bg-white border border-[rgba(12,18,26,.1)] flex items-center justify-center group-hover:border-cyan-300 group-hover:bg-cyan-50 transition-all shadow-sm">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            </div>
            <span>Zurück zu Insights</span>
          </button>

          {/* Category Badge */}
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-50 to-cyan-100/50 text-cyan-700 border border-cyan-200/50 shadow-sm uppercase tracking-wider">
              <Sparkles size={14} className="text-cyan-600" />
              {insight.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-graphite-900 mb-5 md:mb-6 leading-tight tracking-tight">
            {insight.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-graphite-700 mb-6 md:mb-8 leading-relaxed font-light">
            {insight.subtitle}
          </p>

          {/* Date */}
          <div className="flex items-center gap-3 text-graphite-600 text-base md:text-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center border border-cyan-200/50">
              <Calendar size={18} className="text-cyan-600" />
            </div>
            <time className="font-medium">{formatDate(insight.date)}</time>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-[rgba(12,18,26,.08)]">
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Content Card - Premium Design */}
          <div className="bg-white rounded-[32px] md:rounded-3xl border-2 border-[rgba(12,18,26,.08)] shadow-[0_12px_32px_rgba(15,23,42,.1)] p-8 md:p-12 lg:p-16">
            <div className="prose prose-lg max-w-none">
              {contentElements.map((element, index) => (
                <div key={index}>{renderContent(element)}</div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default InsightDetail;
