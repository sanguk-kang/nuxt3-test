export default defineNuxtRouteMiddleware((to, from) => {
	console.log('> to', to, from);
	// to.meta.test = 1;
	// if (to.params.id === '1') {
	// 	return abortNavigation();
	// }
	// return navigateTo('/error', { replace: true });
	// return abortNavigation();
});
