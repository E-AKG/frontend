import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Quote } from "lucide-react";
import CommentSection from "./CommentSection";

// Sample insights data (same as in Overview)
const INSIGHTS_DATA = {
  "1": {
    id: "1",
    title: "Der Use Case beginnt bei euch",
    subtitle: "Warum erfolgreiche KI-Projekte nicht mit Technologie, sondern mit Klarheit starten.",
    date: new Date("2024-11-04T21:00:00"),
    image: "/insights-1.jpg",
    category: "Strategie",
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

IZENIC ist dazu da, Sie bei diesem Prozess zu unterstützen, und Ihnen dabei, Ihre Use Cases zu definieren. Wir schauen gemeinsam mit Ihnen, ob für Ihren Anwendungsfall KI oder Automatisierung die bessere Wahl ist. Wir analysieren, ob sich der Einsatz lohnt und welche Technologie wirklich passt.

Wenn Sie bereits einen konkreten Use Case haben, wenden Sie sich an IZENIC. Gemeinsam finden wir die passende Lösung. Ob Automatisierung oder KI. Ob ein Proof of Concept oder eine umfassendere Transformation. Wir unterstützen Sie von der Idee bis zur Umsetzung.

## Fazit

Der Use Case beginnt bei Ihnen. Nicht bei der Technologie. Verstehen Sie Ihr Problem, bevor Sie nach Lösungen suchen. Und unterscheiden Sie zwischen Automatisierung und KI. Beides hat seinen Platz.

Starten Sie dort, wo Sie schnell Ergebnisse sehen. Skalieren Sie dann schrittweise. Das ist der pragmatische Weg zu erfolgreichen Projekten. Und wenn Sie Unterstützung brauchen, ist IZENIC für Sie da.
    `
  }
};

const InsightDetail = ({ insightId }) => {
  const insight = INSIGHTS_DATA[insightId];

  if (!insight) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-graphite-900 mb-4">Insight nicht gefunden</h1>
          <button
            onClick={() => (window.location.href = "/insights")}
            className="btn-primary"
          >
            Zurück zu Insights
          </button>
        </div>
      </main>
    );
  }

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" };
    const formatted = date.toLocaleDateString("de-DE", options);
    // Format: "4. November, 21:00" -> "4. November, 21:00 Uhr"
    return formatted.replace(/(\d{1,2}):(\d{2})/, "$1:$2 Uhr");
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
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    switch (element.type) {
      case "h1":
        return (
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-graphite-900 mt-8 md:mt-12 mb-4 md:mb-6 font-sans tracking-tight">
            {element.content}
          </h1>
        );
      case "h2":
        return (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-graphite-900 mt-8 md:mt-10 mb-3 md:mb-4 font-sans tracking-tight">
            {element.content}
          </h2>
        );
      case "h3":
        return (
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-graphite-900 mt-6 md:mt-8 mb-2 md:mb-3 font-sans tracking-tight">
            {element.content}
          </h3>
        );
      case "quote":
        return (
          <blockquote className="my-6 md:my-8 pl-4 md:pl-6 border-l-4 border-titanium-400 bg-titanium-50 py-3 md:py-4 rounded-r-2xl">
            <div className="flex items-start gap-2 md:gap-3">
              <Quote className="text-titanium-600 flex-shrink-0 mt-0.5 md:mt-1" size={20} />
              <p className="text-base md:text-lg text-graphite-800 italic font-sans">{renderText(element.content)}</p>
            </div>
          </blockquote>
        );
      case "p":
        return (
          <p className="text-base md:text-lg text-graphite-700 leading-relaxed mb-4 md:mb-6 font-sans">
            {renderText(element.content)}
          </p>
        );
      case "ul":
        return (
          <ul className="list-none space-y-2 md:space-y-3 mb-4 md:mb-6 font-sans">
            {element.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 md:gap-3 text-base md:text-lg text-graphite-700 leading-relaxed">
                <span className="text-titanium-600 mt-1.5 flex-shrink-0">•</span>
                <span>{renderText(item)}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  const contentElements = parseContent(insight.content);

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container-max pt-8">
          <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBack}
          className="flex items-center gap-2 text-graphite-700 hover:text-graphite-900 transition-colors mb-6 md:mb-8 text-sm md:text-base font-sans"
        >
          <ArrowLeft size={18} />
          <span>Zurück zu Insights</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="mb-3 md:mb-4">
              <span className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium bg-titanium-100 text-graphite-800 border border-titanium-300 font-sans">
                {insight.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-graphite-900 mb-3 md:mb-4 font-sans leading-tight tracking-tight">
              {insight.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-graphite-700 mb-4 md:mb-6 leading-relaxed font-sans">
              {insight.subtitle}
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 text-graphite-600 text-sm md:text-base font-sans">
              <Calendar size={16} />
              <time>{formatDate(insight.date)}</time>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-xl md:rounded-2xl overflow-hidden mb-8 md:mb-16 bg-gradient-to-br from-titanium-100 to-titanium-200"
          >
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-6 md:py-8 lg:py-12">
        <div className="container-max max-w-4xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {contentElements.map((element, index) => (
              <div key={index}>{renderContent(element)}</div>
            ))}
          </motion.div>
        </div>
      </article>


      {/* Comments Section */}
      <CommentSection insightId={insightId} />
    </main>
  );
};

export default InsightDetail;
