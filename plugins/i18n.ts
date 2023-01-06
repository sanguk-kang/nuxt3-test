import { createI18n } from 'vue-i18n';
import ko from '~/lang/ko.js';
import en from '~/lang/en.js';

export default defineNuxtPlugin(({ vueApp }) => {
	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		locale: 'en',
		messages: {
			ko,
			en,
		},
	});

	vueApp.use(i18n);
});
