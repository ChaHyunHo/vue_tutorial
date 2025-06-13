// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			title: 'vue 튜토리얼',
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Gothic+A1&display=swap&subset=korean',
				},
			],
			script: [
				{
					src: 'https://code.jquery.com/jquery-3.6.0.min.js',
					crossorigin: 'anonymous',
				},
				{ src: '/js/bootstrap.bundle.js' },
				{ src: '/js/bootstrap.js' },
				{ src: '/js/boardReadPage.js' },
				{ src: '/js/mainlnb.js' },
			],
		},
	},
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	css: [
		'~/assets/css/bootstrap.css',
		'~/assets/css/bootstrap-grid.css',
		'~/assets/css/bootstrap-reboot.css',

		// Custom styles
		'~/assets/css/customfooter.css',
		'~/assets/css/customheader.css',
		'~/assets/css/customindex.css',
		// '~/assets/css/customloginform.css',
		'~/assets/css/custommain.css',
	],
});
