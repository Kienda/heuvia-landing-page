import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#8A2BE2",
          secondary: "#0D1B3D",
          soft: "#F5EDFF",
          mist: "#FAF7FF",
          ink: "#121729",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(47, 24, 89, 0.14)",
        card: "0 18px 50px rgba(13, 27, 61, 0.08)",
        glow: "0 24px 70px rgba(138, 43, 226, 0.26)",
      },
      backgroundImage: {
        "hero-panel":
          "linear-gradient(135deg, #FCFAFF 0%, #F3E8FF 42%, #E4D1FF 100%)",
        "purple-depth":
          "linear-gradient(135deg, #9C35FF 0%, #7B22D8 48%, #2E0E76 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
