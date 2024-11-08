import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-blue": "#27a5e0",
      },
      screens: {
        xs: "480px", // Extra small screens
      },
      animation: {
        "text-pop-up-top": "8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite ",
      },
      keyframes: {
        textPopUpTop: {
          "0%": {
            transform: "translateY(0)",
            transformOrigin: "50% 50%",
            textShadow: "none",
          },
          "50%": {
            transform: "translateY(-50px)",
            transformOrigin: "50% 50%",
            textShadow:
              "0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)",
          },
          "100%": {
            transform: "translateY(0)",
            transformOrigin: "50% 50%",
            textShadow: "none",
          },
        },
      },
    },
  },

  plugins: [],
};
export default config;
