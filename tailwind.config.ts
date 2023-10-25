import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';


const mainConfig: Config = {
  content: ['./src/**/*.{ts,js,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1440px',
    },
    extend: {
      fontFamily: {
        display: ['Helvetica', ...fontFamily.sans],
      },
      fontSize: {
        '5xl': '5rem',
      },
    },
  },
  plugins: [],
};

export default mainConfig;
