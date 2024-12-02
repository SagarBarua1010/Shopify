import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor:"#a92d61",
        lightBg:'#f4f7f9',
        themeWhite:'#ecf0f1',
        lightYellow:'#FFD43A',
        borderColor:'#eaebed',
        skyColor:'#d54f71',
        lightText:'#55585b',

      },
    },
  },
  plugins: [],
} satisfies Config;
