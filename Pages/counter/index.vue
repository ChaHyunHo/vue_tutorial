<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

definePageMeta({
	layout: 'counter',
});

// 타입이 추론되지만 명시적으로 지정해도 OK
const count = ref<number>(0);

function handleResize(): void {
	console.log('Resized!');
}

onMounted((): void => {
	console.log('✅ Mounted!');
	window.addEventListener('resize', handleResize);
});

onBeforeUnmount((): void => {
	console.log('⚠️ Before Unmount!');
	window.removeEventListener('resize', handleResize);
});
</script>

<template>
	<div>
		<h2>This is Counter Page</h2>
		<p>This page uses the Counter layout.</p>
	</div>
	<div>
		<h2>Count: {{ count }}</h2>
		<button @click="count++">Increase</button>
		<button @click="count--">decrease</button>
	</div>
</template>
