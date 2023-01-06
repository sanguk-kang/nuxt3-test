// // plugins/persistedstate.client.ts
// // import { createPersistedState } from "pinia-plugin-persistedstate";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export default defineNuxtPlugin(nuxtApp => {
	// console.log('>>>>', nuxtApp);
	// nuxtApp.$pinia.use(createPersistedState());
	const pinia = createPinia();
	pinia.use(piniaPluginPersistedstate);
});
