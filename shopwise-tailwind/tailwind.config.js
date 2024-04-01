/** @type {import('tailwindcss').Config} */
tailwind.config = {
  content: ["*.html"],
  theme: {
    colors: {
      'gray':'#292b2c',
      'graysub':'#eee',
      'graybox':'#ddd',
      'white': '#fff',
      'second': '#FF324D',
      'pera': '#687188',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    screens: {
      
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1140px',

      '2xl': '1140px',
    }
  },
  plugins: [],
}
