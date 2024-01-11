/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./wp-blocks/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        'tablet': "1200px",
      },
      
      fontFamily: {
        'Inter': ['Inter','sans-serif']
      },

      colors: {
        'primary': '#00BAFB',
        'background': '#232323',
      },
    },
  },
  plugins: [],
}

