import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(90deg, #069AD8, #0B4D8E)",
      },
      fontFamily: {
        sans: ["var(--satoshi-font)"],
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      colors: {
        primary: "#069AD8",
        "primary-dark": "#0F4C8D",
        secondary: "#0B4D8E",
        tertiary: "#4F4F4F",
        red: "#9A0000",
        green: "#7EC61F",
        grey: "#969696",
        darkGrey: "#727272",
        greyDark: "#474747",
        lightGrey: "#8D8D8D",
        statGrey: "#868686",
        statBorder: "#F0F0F0",
        serviceBorder: "#E0E0E0",
        service: "#3D3D3D",
        modelText: "#909090",
        projectDetails: "#898989",
        'blue-1': "#1CB2E8",
      },
    },
  },
};
export default config;
