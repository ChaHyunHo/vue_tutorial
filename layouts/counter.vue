<template>
	<div>
		<header class="admin-header">
			<h1>Counter Layout</h1>
			<NuxtLink to="/">← Back to Home</NuxtLink>
		</header>

		<main class="admin-content">
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
onMounted(() => {
	console.log('this counter page is mounted');
});
</script>

<style scoped>
.admin-header {
	background: darkred;
	color: white;
	padding: 1rem;
}
.admin-content {
	padding: 2rem;
	background: #f8f8f8;
}
</style>
