/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			animation: {
				text: 'text 5s ease infinite',
				typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden"
					},
					"100%": {
						width: "100%"
					}
				},
				blink: {
					"50%": {
						borderColor: "transparent"
					},
					"100%": {
						borderColor: "white"
					}
				}
			},
			colors: {
				red: { 1000: '#530F0F' },
				orange: { 1000: '#521C0B' },
				amber: { 1000: '#54240B' },
				yellow: { 1000: '#4D280A' },
				lime: { 1000: '#213708' },
				green: { 1000: '#0F3D23' },
				emerald: { 1000: '#02392C' },
				teal: { 1000: '#073937' },
				cyan: { 1000: '#09364A' },
				sky: { 1000: '#072F49' },
				blue: { 1000: '#17275C' },
				indigo: { 1000: '#1F1C53' },
				violet: { 1000: '#2F1265' },
				purple: { 1000: '#3D1061' },
				fuchsia: { 1000: '#4C0C4F' },
				pink: { 1000: '#4E0B26' },
				rose: { 1000: '#4E071B' },
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	colors: {
		'is': {
			'50': '#e7fffe',
			'100': '#c2fffd',
			'200': '#8cfffb',
			'300': '#3dfff8',
			'400': '#00fff7',
			'500': '#00e9ff',
			'600': '#00b7e3',
			'700': '#008fb5',
			'800': '#007190',
			'900': '#004d65',
			'950': '#003d55',
		},
	}
}

