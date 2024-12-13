/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-background': '0 0 0 7px rgba(59, 117, 95, 0.3)',
      },
      colors: {
        custom: {
          blue: '#2E3A8C',
          green: '#3B755F',
          lightgreen: '#AFC6BD',
          beige: '#F2EBDB',
          white: '#FFFFFF',
          black: '#212121',
          grey: '#B0B0B0',
        },
      },
    },
  },
  // plugins: [require('flowbite/plugin')],
}
