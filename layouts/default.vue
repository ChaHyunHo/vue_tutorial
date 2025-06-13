<template>
	<div>
		<!-- 공통 헤더 -->
		<header>
			<h1>My App</h1>
		</header>

		<!-- 페이지 콘텐츠 -->
		<NuxtPage>
			<!-- 반드시 있어야 함 -->
			<div>page content</div>
			<div>
				<NuxtLink :to="`${useRuntimeConfig().app.baseURL}counter`"
					>← CONTER 샘플 페이지</NuxtLink
				>
			</div>
			<div>
				<NuxtLink :to="`${useRuntimeConfig().app.baseURL}boardlist`"
					>← BOARD_LIST 샘플 페이지</NuxtLink
				>
			</div>
		</NuxtPage>

		<!-- 공통 푸터 -->
		<footer>
			<p>&copy; 2025 My Company</p>
		</footer>
	</div>
</template>

<script setup>
// 필요 시 setup 코드
onMounted(() => {
	console.log(`컴포넌트가 마운트 됐습니다.`);
});
</script>

<style scoped>
/* 스타일 정의 */
header {
	background: #333;
	color: white;
	padding: 1rem;
}

footer {
	background: #f0f0f0;
	padding: 1rem;
	text-align: center;
}
</style>
