import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#333',
            lineHeight: '1.75',
            fontSize: '1.125rem',
            h1: { fontWeight: '700', fontSize: '2.25rem', marginTop: '2rem', marginBottom: '1rem' },
            h2: { fontWeight: '600', fontSize: '1.875rem', marginTop: '1.75rem', marginBottom: '0.875rem' },
            h3: { fontWeight: '600', fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.75rem' },
            a: {
              color: '#2563eb',
              textDecoration: 'none',
              '&:hover': { color: '#1d4ed8', textDecoration: 'underline' },
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
              fontSize: '0.875rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#e5e7eb',
              color: '#6b7280',
            },
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
