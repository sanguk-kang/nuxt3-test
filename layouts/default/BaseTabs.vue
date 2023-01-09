<template>
	<div>
		Tabs
		<button @click="movePage('/app/sysmgt/batch/Batch')">배치</button>
		<button @click="movePage('/app/sysmgt/commoncode/CommonCode')">
			공통코드
		</button>
	</div>
</template>

<script setup>
function movePage(params) {
	const router = useRouter();
	router.push({ path: params });
}
</script>

<style lang="scss" scoped></style>
