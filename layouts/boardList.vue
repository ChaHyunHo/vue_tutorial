<template>
	<slot />
</template>
<script setup lang="ts">
onMounted(() => {
	console.log('this root page is mounted');
});
</script>
