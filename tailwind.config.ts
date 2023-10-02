import type {Config} from 'tailwindcss'
import {nextui} from "@nextui-org/react";


const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'fade-in': 'fade-in 0.5s linear forwards',
                marquee: 'marquee var(--marquee-duration) linear infinite',
                'spin-slow': 'spin 4s linear infinite',
                'spin-slower': 'spin 6s linear infinite',
                'spin-reverse': 'spin-reverse 1s linear infinite',
                'spin-reverse-slow': 'spin-reverse 4s linear infinite',
                'spin-reverse-slower': 'spin-reverse 6s linear infinite',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            colors: ({colors}) => ({
                gray: colors.neutral,
            }),
            fontFamily: {
                sans: 'var(--font-inter)',
            },
            keyframes: {
                'fade-in': {
                    from: {
// @ts-ignore
                        opacity: 0,
                    },
                    to: {
                        // @ts-ignore
                        opacity: 1,
                    },
                },
                marquee: {
                    '100%': {
                        transform: 'translateY(-50%)',
                    },
                },
                'spin-reverse': {
                    to: {
                        transform: 'rotate(-360deg)',
                    },
                },
            },
            maxWidth: {
                '2xl': '40rem',
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            light: {
                colors: {
                    primary: {
                        DEFAULT: "#4D3690",
                        foreground: "#fafafa",
                    },
                    focus: "#4D3690",
                },
            },
            dark: {
                colors: {
                    primary: {
                        DEFAULT: "#4D3690",
                        foreground: "#0a0a0a",
                    },
                    focus: "#4D3690",
                },
            },
        },
    }),]
}
export default config
