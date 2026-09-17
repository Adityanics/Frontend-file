/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1E3A8A', // deep indigo/royal blue
                    light: '#3B82F6',
                },
                secondary: {
                    DEFAULT: '#0F766E', // teal
                    light: '#14B8A6',
                },
                accent: {
                    DEFAULT: '#F59E0B', // saffron/golden
                    light: '#FBBF24',
                },
                background: {
                    DEFAULT: '#EEF2F7',
                    alt: '#F3F5F9',
                },
                success: '#10B981',
                warning: '#F59E0B',
                error: '#EF4444',
                text: {
                    DEFAULT: '#111827', // dark navy / charcoal
                    muted: '#6B7280',
                },
                clay: {
                    card: '#F0F4F8',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'clay-out': '8px 8px 16px #c8ccce, -8px -8px 16px #ffffff',
                'clay-in': 'inset 4px 4px 8px #c8ccce, inset -4px -4px 8px #ffffff',
                'clay-btn': '4px 4px 8px #c8ccce, -4px -4px 8px #ffffff',
                'clay-btn-active': 'inset 4px 4px 8px #c8ccce, inset -4px -4px 8px #ffffff',
            },
            borderRadius: {
                'clay': '24px',
                'clay-sm': '16px',
                'clay-lg': '32px',
            }
        },
    },
    plugins: [],
}
