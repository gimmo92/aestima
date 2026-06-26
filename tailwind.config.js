/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        navy: {
          950: "#071222",
          900: "#0a1628",
          850: "#0d1e38",
          800: "#102748",
          700: "#163058",
          600: "#1c3a6a",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(37, 99, 235, 0.18)",
        "glow-sm": "0 0 30px rgba(37, 99, 235, 0.12)",
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.15)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        "glass-lg": "0 24px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
