import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"gro": ['"Space Grotesk"', "serif"],
				"space": ['var(--space-grotesk)', "mono"]
			},
			keyframes: {
				thermal: {
					'0%, 100%': { filter: 'hue-rotate(0deg)' },
					'50%': { filter: 'hue-rotate(20deg)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInDown: {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				flash: {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '1' },
				},
			},
			animation: {
				thermal: 'thermal 5s ease-in-out infinite',
				fadeIn: 'fadeIn 1s ease-out forwards',
				fadeInDown: 'fadeInDown 1s ease-out forwards',
				flash: 'flash 1.5s ease-in-out infinite',
			},
			colors: {
				accent: "#4C0AF5",
				"accent-hover": "#3D08C4",
				// accent: "#5B0B5C",
				cream: "#F9F7FB",
				cream2: "#F7F6F2",
				grey: "#272727",
				lightcharcoal: "#33333339",
				halfwhite: "#ffffff80",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
