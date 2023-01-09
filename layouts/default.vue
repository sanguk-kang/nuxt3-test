<template>
	<div>
		A *default* layout
		<BaseHeader />
		<BaseTabs />
		<slot />
	</div>
</template>
<script setup>
import BaseHeader from '~/layouts/default/BaseHeader.vue';
import BaseTabs from '~/layouts/default/BaseTabs.vue';
</script>
