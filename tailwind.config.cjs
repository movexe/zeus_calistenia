module.exports = {
      content: ['./index.html'],
      theme: {
        extend: {
          fontFamily: {
            heading: ['Poppins', 'sans-serif'],
            cinzel: ['Cinzel', 'serif'],
            body: ['Figtree', 'sans-serif'],
            mono: ['Space Mono', 'monospace'],
          },
          colors: {
            brand: {
              primary: '#181514',       /* Deep Obsidian */
              surface: '#221E1C',       /* Dark Slate Rock */
              surfaceLight: '#2C2724',  /* Warm Graphite */
              accent: '#D09F50',        /* Olympian Gold */
              accentLight: '#F5C86C',   /* Radiant Spark */
              accentDark: '#A67930',    /* Antique Bronze */
              secondary: '#709687',     /* Oxley Laurel Green */
              bgAccent: '#C9CBB4',      /* Foggy Stone */
              canvas: '#0E0C0B',        /* Ultra Dark Canvas */
              lightCanvas: '#FAF9F6',   /* Light Warm Card */
            }
          },
          boxShadow: {
            'gold-glow': '0 0 40px -10px rgba(208, 159, 80, 0.45)',
            'gold-subtle': '0 10px 30px -5px rgba(208, 159, 80, 0.2)',
            'dark-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
          },
          animation: {
            'float-slow': 'float 6s ease-in-out infinite',
            'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
            'shimmer': 'shimmer 2.5s infinite linear',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-8px)' },
            },
            pulseGlow: {
              '0%, 100%': { opacity: '0.4' },
              '50%': { opacity: '0.8' },
            },
            shimmer: {
              '0%': { backgroundPosition: '-200% 0' },
              '100%': { backgroundPosition: '200% 0' },
            }
          }
        }
      }
    };
