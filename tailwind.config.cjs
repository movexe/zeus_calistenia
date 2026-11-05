module.exports = {
      content: ['./index.html'],
      theme: {
        extend: {
          fontFamily: {
            heading: ['Poppins', 'sans-serif'],
            body: ['Figtree', 'sans-serif'],
          },
          colors: {
            brand: {
              primary: '#332E2C',
              accent: '#D09F50',
              accentHover: '#b8863b',
              secondary: '#709687',
              bgAccent: '#C9CBB4',
              canvas: '#FAF9F6',
              darkSurface: '#24201E',
            }
          },
          boxShadow: {
            'gold': '0 10px 25px -5px rgba(208, 159, 80, 0.35)',
            'rustic': '0 12px 30px -8px rgba(51, 46, 44, 0.15)',
          }
        }
      }
    };
