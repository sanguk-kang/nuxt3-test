export default defineNuxtPlugin(() => {
	// addRouteMiddleware(
	// 	'global-test',
	// 	() => {
	// 		console.log('this global middleware was added in a plugin');
	// 	},
	// 	{ global: true },
	// );
	addRouteMiddleware('redirect-test', () => {
		console.log('this named middleware was added in a plugin');
	});
});
