<template>
	<div>
		<!-- 공통 헤더 -->
		<header>
			<h1>Vue Tutorial</h1>
		</header>

		<!-- 페이지 콘텐츠 -->
		<NuxtPage />

		<!-- 공통 푸터 -->
		<footer>
			<p>&copy; 2025 My Company</p>
		</footer>
	</div>
</template>

<script setup lang="ts">
onMounted(() => {
	console.log('this root page is mounted');
});
</script>

<style scoped>
/* 스타일 정의 */
header {
	background: #333;
	color: white;
	padding: 1rem;
}

div {
}

footer {
	background: #f0f0f0;
	padding: 1rem;
	text-align: center;
}
</style>
