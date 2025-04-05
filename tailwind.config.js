const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|dropdown|link|navbar|ripple|spinner|menu|divider|popover).js"
  ],
	theme: {
    	extend: {
    		colors: {
    			primary: '#3157f1',
    			secondary: '#ffffff',
    			dark: '#2a2a2a',
    			textWhite: '#ffffff',
    			textDark: '#2a2a2a',
    			grey: '#666666',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			supreme: [
    				'Supreme-Regular',
    				'sans-serif'
    			],
    			'supreme-light': [
    				'Supreme-Light',
    				'sans-serif'
    			],
    			'supreme-italic': [
    				'Supreme-Italic',
    				'sans-serif'
    			],
    			'supreme-medium': [
    				'Supreme-Medium',
    				'sans-serif'
    			],
    			'supreme-medium-italic': [
    				'Supreme-MediumItalic',
    				'sans-serif'
    			],
    			'supreme-bold': [
    				'Supreme-Bold',
    				'sans-serif'
    			],
    			'supreme-bold-italic': [
    				'Supreme-BoldItalic',
    				'sans-serif'
    			],
    			'supreme-variable': [
    				'Supreme-Variable',
    				'sans-serif'
    			],
    			'supreme-variable-italic': [
    				'Supreme-VariableItalic',
    				'sans-serif'
    			],
    			'supreme-extrabold': [
    				'Supreme-Extrabold',
    				'sans-serif'
    			]
    		},
    		keyframes: {
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			}
    		},
    		animation: {
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
    		}
    	}
    },
  plugins: [require("tailwindcss-animate"),heroui()],
  }
  