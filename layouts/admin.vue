<template>
	<div>
		<header class="admin-header">
			<h1>Admin Layout</h1>
			<NuxtLink to="/">← Back to Home</NuxtLink>
		</header>

		<main class="admin-content">
			<slot />
		</main>
	</div>
</template>

<style scoped>
.admin-header { background: darkred; color: white; padding: 1rem; }
.admin-content { padding: 2rem; background: #f8f8f8; }
</style>