export default defineNuxtRouteMiddleware((to, from) => {
	const router = useRouter();
	console.log('> to', to, router);
	// to.meta.test = 1;
	// if (to.params.id === '1') {
	// 	return abortNavigation();
	// }
	// 메뉴 확인
	if (to.path != '/') {
		// return navigateTo('/');
		// return abortNavigation('zzzzzzzzzzzz');
	}
	// return abortNavigation();
});
