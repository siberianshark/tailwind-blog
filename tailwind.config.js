/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html', 
      './src/**/*.{html,js}',
     
        
        './input.css',
      ],
    
    darkMode: 'class',
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Architects Daughter",  'serif'],
              },
          colors: {
            gray: {
              50: '#f9fafb',
              // другие оттенки серого
            },
          },
        },
      },
      plugins: [],
  }