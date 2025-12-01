import React from "react";
import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import animationData from "../../animations/automation-hero.json";

/**
 * Lottie Animation Placeholder
 * 
 * Um eine Lottie-Animation einzubinden:
 * 1. Installiere: npm install lottie-react
 * 2. Erstelle einen Ordner: src/animations/
 * 3. Füge deine Lottie JSON-Datei hinzu (z.B. automation-hero.json)
 * 4. Entkommentiere die Imports oben
 * 5. Ersetze den Fallback-Bereich unten mit: <Lottie animationData={animationData} loop={true} />
 * 
 * Beispiel-Lottie-Quellen:
 * - lottiefiles.com (kostenlose Animationen)
 * - Eigene Animationen mit After Effects + Bodymovin
 */

const LottiePlaceholder = ({ className = "" }) => {
  // Fallback: Animierte SVG/Shapes wenn keine Lottie-Datei vorhanden
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full">
        {/* Animated Circles representing automation flow */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx={80 + i * 60}
            cy={150}
            r={20}
            fill="none"
            stroke="rgba(43,53,66,0.3)"
            strokeWidth="2"
            animate={{
              r: [20, 30, 20],
              opacity: [0.3, 0.6, 0.3],
              cx: [80 + i * 60, 80 + i * 60 + 10, 80 + i * 60]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Connecting Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.line
            key={i}
            x1={100 + i * 60}
            y1={150}
            x2={140 + i * 60}
            y2={150}
            stroke="rgba(43,53,66,0.2)"
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear"
            }}
          />
        ))}
      </svg>
      
      {/* Uncomment when Lottie is ready:
      <Lottie 
        animationData={animationData} 
        loop={true}
        className="w-full h-full"
      />
      */}
    </div>
  );
};

export default LottiePlaceholder;

