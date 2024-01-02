import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'marvel-red': '#F43735',
        'marvel-custom-black': '#202020'
      },
      boxShadow: {
        card: 'box-shadow: 0px 4px 4px 0px #00000040;'
      }
    }
  },
  plugins: []
};
export default config;
