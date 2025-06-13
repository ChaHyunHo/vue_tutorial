<script setup lang="ts">
definePageMeta({
	layout: 'default',
});
</script>
<template>
	<div>
		<h2>Welcome to the Home Page</h2>
		<p>This is the main landing page.</p>
	</div>
	<div>page content</div>
	<div><NuxtLink to="/counter">← CONTER 샘플 페이지</NuxtLink></div>
	<div><NuxtLink to="/boardlist">← BOARD_LIST 샘플 페이지</NuxtLink></div>
</template>
