import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'img-illustrations': 'url("/illustration.png")',
        'img-websites': 'url("/websites.jpg")',
        'img-application': 'url("/apps.jpg")'
      },
      colors: {
        'primary': '#53c28b'
      },
      keyframes: {
        homeImgMove: {
          from: {
            transform: 'translateY(-10px)'
          },
          to: {
            transform: 'translateY(10px)'
          }
        },
        contactImgMove: {
          from: {
            transform: 'translateY(-15px)'
          },
          to: {
            transform: 'translateY(0px) scale(1.03)'
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
