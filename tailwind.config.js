/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./js/*.js",
  ],

  theme: {  // theme - ПЕРЕЗАПИСЫВАЕМ какой-либо стиль. Т.е меняем базовые стили Tailwind на свои
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
      },
    },

    extend: { // theme.extend - РАСШИРЯЕМ конфиг нашими стилями. Т.е дополняем базовые стили своими
      
    }, 
  },

  darkMode: 'selector',
  
  plugins: [],
}

