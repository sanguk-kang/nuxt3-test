import { defineStore } from 'pinia';

// export const useStore = defineStore('main', {
//   state: () => {
//     return {
//       someState: 'hello pinia',
//     }
//   },
//   persist: true,
// })
const useTestStore = defineStore('testStore', {
	state: () => {
		return {
			someState: 'hello pinia',
		};
	},
	persist: {
		storage: persistedState.cookiesWithOptions({
			sameSite: 'strict',
		}),
	},
});

export default useTestStore;
