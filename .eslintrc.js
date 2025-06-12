// ESLint 설정 파일
module.exports = {
	// 이 파일이 ESLint 설정의 루트임을 명시 (하위 설정 무시)
	root: true,

	// 코드가 실행될 환경 설정 (전역 변수 허용)
	env: {
		browser: true, // window, document 등 브라우저 전역 변수 허용
		node: true, // require, process 등 Node.js 전역 변수 허용
	},

	// 기본적으로 확장할 룰 세트들
	extends: [
		'eslint:recommended', // ESLint 기본 권장 룰
		'plugin:vue/vue3-recommended', // Vue 3 권장 스타일 가이드
		'plugin:prettier/recommended', // Prettier와 ESLint 충돌 방지 + Prettier 룰 활성화
	],

	// 사용할 ESLint 플러그인 목록
	plugins: [
		'vue', // .vue 파일과 Vue 문법 인식용
		'prettier', // Prettier 포맷 오류를 ESLint 오류로 처리
	],

	// 사용자 정의 규칙
	rules: {
		// Vue 컴포넌트 이름을 반드시 두 단어 이상 사용하라는 규칙 해제
		// 예: 'App', 'Login' 같은 단일 이름 허용
		'vue/multi-word-component-names': 'off',

		// Prettier 포맷 위반을 ESLint 에러로 표시 (빨간줄 생김)
		'prettier/prettier': 'error',
	},
};
