/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: { 950:"#0B0E12",900:"#0E1116",800:"#141922",700:"#1C2230",600:"#283143",500:"#3A465F",400:"#59657B" },
        titanium: {
          50:"#F7F8FA",100:"#F1F3F6",200:"#E6E9EE",300:"#D8DDE3",400:"#C7CDD5",
          500:"#B5BDC7",600:"#A7AFBA",700:"#949CAA",800:"#7F8896",900:"#69717E"
        },
        izenic: {
          accent: "#00C2FF", // sanftes Cyan, modern
          accent2: "#7C9DFF", // bläulicher Verlaufspartner
          blue: "#0041C4", // IZENIC Blue accent
          ink: "#0F1216"
        }
      },
      fontFamily: {
        display: ["Sora","system-ui","sans-serif"],
        sans: ["Inter","system-ui","sans-serif"]
      },
      boxShadow: {
        card: "0 12px 48px rgba(10,16,25,.08)",
        inner: "inset 0 1px 0 rgba(255,255,255,.7)",
        ring: "0 0 0 10px rgba(0,194,255,.12)"
      },
      borderRadius: { xxl: "1.5rem" },
      backgroundImage: {
        paper:
          "radial-gradient(1200px 600px at 80% -10%, rgba(183,191,201,.2), transparent 60%), radial-gradient(1000px 500px at 10% 120%, rgba(183,191,201,.14), transparent 60%)",
        mesh:
          "radial-gradient(1200px 800px at 80% -10%, rgba(0,194,255,.18), transparent 60%), radial-gradient(1000px 600px at 10% 120%, rgba(124,157,255,.18), transparent 60%)"
      }
    }
  },
  plugins: []
}