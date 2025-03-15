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
    extend: {
      fontFamily: {
        sans: ['Domine', 'serif'],
        body: ['Domine', 'serif'],
        display: ['Domine', 'serif'],
      },
      fontSize: {
        // Display scale
        'display-5xl': ['96px', { lineHeight: '100%', letterSpacing: '-1.92px', fontWeight: '400' }],
        'display-4xl': ['80px', { lineHeight: '100%', letterSpacing: '-1.6px', fontWeight: '400' }],
        'display-3xl': ['64px', { lineHeight: '100%', letterSpacing: '-1.28px', fontWeight: '400' }],
        'display-2xl': ['56px', { lineHeight: '100%', letterSpacing: '-1.12px', fontWeight: '400' }],
        'display-xl': ['48px', { lineHeight: '100%', letterSpacing: '-0.48px', fontWeight: '700' }],
        'display-lg': ['36px', { lineHeight: '100%', letterSpacing: '-0.36px', fontWeight: '700' }],
        'display-md': ['30px', { lineHeight: '100%', fontWeight: '700' }],
        'display-sm': ['24px', { lineHeight: '100%', fontWeight: '700' }],
        'display-xs': ['20px', { lineHeight: '100%', fontWeight: '700' }],
        'display-xxs': ['16px', { lineHeight: '100%', fontWeight: '700' }],
        // Body scale
        'body-xxl': ['28px', { lineHeight: '120%', fontWeight: '400' }],
        'body-xl': ['22px', { lineHeight: '130%', letterSpacing: '0.44px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '150%', letterSpacing: '0.36px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '150%', letterSpacing: '0.32px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '150%', letterSpacing: '0.14px', fontWeight: '400' }],
        'body-caption': ['12px', { lineHeight: '150%', letterSpacing: '0.12px', fontWeight: '400' }],
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
