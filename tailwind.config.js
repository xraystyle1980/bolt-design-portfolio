/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Domine', 'serif'],
        display: ['Domine', 'serif'],
      },
      fontSize: {
        // Display scale
        'display-5xl': ['96px', { lineHeight: '114%', letterSpacing: '-1.92px' }],
        'display-4xl': ['80px', { lineHeight: '114%', letterSpacing: '-1.6px' }],
        'display-3xl': ['64px', { lineHeight: '114%', letterSpacing: '-1.28px' }],
        'display-2xl': ['56px', { lineHeight: '130%', letterSpacing: '-1.12px' }],
        'display-xl': ['48px', { lineHeight: '130%', letterSpacing: '-0.48px' }],
        'display-lg': ['36px', { lineHeight: '130%', letterSpacing: '-0.36px' }],
        'display-md': ['32px', { lineHeight: '124%', letterSpacing: '-0.32px' }],
        'display-sm': ['24px', { lineHeight: '130%', letterSpacing: '-0.24px' }],
        'display-xs': ['20px', { lineHeight: '130%', letterSpacing: '-0.20px' }],
        // Body scale
        'body-xxl': ['30px', { lineHeight: '120%', letterSpacing: '-0.30px', fontWeight: '400' }],
        'body-xl': ['24px', { lineHeight: '150%', letterSpacing: '-0.24px', fontWeight: '400' }],
        'body-lg': ['20px', { lineHeight: '150%', letterSpacing: '-0.20px', fontWeight: '400' }],
        'body-md': ['18px', { lineHeight: '150%', letterSpacing: '-0.18px', fontWeight: '400' }],
        'body-sm': ['16px', { lineHeight: '150%', fontWeight: '400' }],
        'body-xs': ['15px', { lineHeight: '150%', fontWeight: '400' }],
        'body-caption': ['14px', { lineHeight: '164%', fontWeight: '400' }],
      },
      letterSpacing: {
        tighter: '-1.92px',
        tight: '-1.6px',
        normal: '0px',
        wide: '0.32px',
        wider: '0.44px',
      },
      lineHeight: {
        none: '100%',
        tight: '120%',
        normal: '130%',
        relaxed: '150%',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'text-background': 'hsl(var(--background))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'bounce-in': {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0'
          },
          '25%': {
            transform: 'scale(0.5)',
            opacity: '0.3'
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.8'
          },
          '75%': {
            transform: 'scale(0.95)',
            opacity: '0.9'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'bounce-in': 'bounce-in 2.5s ease-out',
      },
      transitionTimingFunction: {
        'custom-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
