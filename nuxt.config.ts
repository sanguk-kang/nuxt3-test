import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite';
// import eslint from 'vite-plugin-eslint';

export default defineNuxtConfig({
	ssr: true,
	typescript: {
		shim: false,
	},
	// pages: true,
	modules: [
		// ...
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
	],
	// piniaPersistedstate: {
	//   cookieOptions: {
	//     sameSite: 'strict',
	//   },
	//   storage: 'localStorage'
	// },
	vite: {
		resolve: {
			alias: {
				'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
			},
		},
		plugins: [
			VueI18nVitePlugin({
				include: [
					resolve(dirname(fileURLToPath(import.meta.url)), './lang/**'),
				],
			}),
			// eslint({
			// 	include: ['**/*.vue'],
			// }),
		],
	},
});
