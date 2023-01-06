export default defineNuxtRouteMiddleware(to => {
	const { $config } = useNuxtApp();
	console.log('redirect-auth', $config, to);
	// if ($config) {
	// 	console.log('Accessed runtime config within middleware.');
	// }
	// console.log(
	// 	'Heading to',
	// 	to.path,
	// 	'but I think we should go somewhere else...',
	// );
	// return '/secret';
});
