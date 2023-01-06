import { defineStore } from 'pinia';
// import router from '@/routes';

const useUserStore = defineStore({
	id: 'userStore',
	state: () => ({
		user: {},
		accessToken: '123',
		refreshToken: '4567',
		locale: '',
		isAccessInfo: false,
	}),
	actions: {
		moveTest() {
			// const router = useRouter();
			// router.push({ path: "/Home" });
			console.log('moveTest');
			// router.push({ name: 'login' });
		},
	},
	persist: true,
});

export default useUserStore;
