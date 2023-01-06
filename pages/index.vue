<template>
	<div>
		<strong>index page</strong>
		<p>
			<strong>router push : </strong>
			<button @click="clickEvent">Click</button>
		</p>
		<p>
			<label for="locale-select">{{ t('com.btn.delete') }} : </label>
			<select id="locale-select" v-model="$i18n.locale">
				<option value="en">en</option>
				<option value="ko">ko</option>
			</select>
		</p>
		<div>
			<ul v-for="item in arrayList" :key="item.id">
				<li>ID : {{ item.id }}</li>
				<li>NAME : {{ item.name }}</li>
			</ul>
		</div>
		<!-- <NuxtLayout>
			<NuxtPage />
		</NuxtLayout> -->
	</div>
</template>

<script setup>
import { ref } from 'vue';
import useUserStore from '~/stores/common/userStore';
import useTestStore from '~/stores/common/testStore';
import { useI18n } from 'vue-i18n';

// definePageMeta({
// 	layout: 'custom',
// });

const { t } = useI18n();

console.log('>>> index page', useUserStore().accessToken);
console.log('>>> useTestStore', useTestStore().someState);
// env
// console.log('>> env', import.meta.env);
// , process.env.BASE_URL
function clickEvent() {
	// useUserStore().moveTest();
	const router = useRouter();
	router.push({ path: '/app/Home' });
}

const arrayList = ref([
	{
		id: 1,
		name: '강상욱님',
	},
	{
		id: 2,
		name: '송서현님',
	},
	{
		id: 3,
		name: '전택희님',
	},
]);
</script>
