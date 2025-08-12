import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";


const config: Config = {
  darkMode: ["class"],
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
       screens: {
  x1100: "1100px",
  x1300: "1300px",
  x2000: "2000px",
},
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "primary-dark": "#0F4C8D",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
        "primary-highlight": "#069AD8",
        "blue-1": "#1CB2E8",
        "blue-2": "0B4D8E",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [lineClamp]
};
export default config;
