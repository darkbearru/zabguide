// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'nuxt-svgo',
		'@nuxtjs/google-fonts',
		'nuxt-security'
	],
	googleFonts: {
		display: 'swap',
		preconnect: true,
		families: {
			'Fira+Sans': {
				wght: [400, 600, 700],
				ital: [400, 700],
			},
		},
	},
	svgo: {
		autoImportPath: './assets/svg/',
		defaultImport: 'component',
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	security: {
		nonce: true,
		headers: {
			crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
		},
	},
	devtools: {enabled: true}
})
