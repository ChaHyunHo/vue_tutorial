<script setup lang="ts">
import { ref, computed } from 'vue';
definePageMeta({
	layout: 'default',
});

const router = useRouter();

const onClickGoToDetailHandler = () => {
	router.push('/boardDetail');
};

interface BoardItemType {
	bno: string;
	title: string;
	writer: string;
	date: string;
	view: string;
	good: string;
	bad: string;
	comment: string;
}

const getBoardList = (): BoardItemType[] => {
	return [
		{
			bno: '123431',
			title: 'Vue.js로 게시판 만들기 튜토리얼입니다.',
			writer: '김지훈',
			date: '2024.12.01',
			view: '84',
			good: '71',
			bad: '0',
			comment: '2',
		},
		{
			bno: '123430',
			title: 'Nuxt3로 서버사이드 렌더링을 구현해보자!',
			writer: '이은지',
			date: '2024.11.30',
			view: '68',
			good: '56',
			bad: '4',
			comment: '9',
		},
		{
			bno: '123429',
			title: 'TypeScript와 함께하는 프론트엔드 프로젝트',
			writer: '박재성',
			date: '2024.11.29',
			view: '146',
			good: '61',
			bad: '0',
			comment: '5',
		},
		{
			bno: '123428',
			title: '게시판 레이아웃 디자인을 어떻게 해야할까?',
			writer: '홍길동',
			date: '2024.11.28',
			view: '140',
			good: '72',
			bad: '3',
			comment: '9',
		},
		{
			bno: '123427',
			title: 'Tailwind CSS를 적용한 게시판 UI',
			writer: '정은하',
			date: '2024.11.27',
			view: '92',
			good: '84',
			bad: '2',
			comment: '7',
		},
		{
			bno: '123426',
			title: 'Vue에서 컴포넌트 분리하는 방법',
			writer: '김태형',
			date: '2024.11.26',
			view: '147',
			good: '67',
			bad: '3',
			comment: '8',
		},
		{
			bno: '123425',
			title: 'Nuxt에서 동적 라우팅 활용하기',
			writer: '오수민',
			date: '2024.11.25',
			view: '88',
			good: '26',
			bad: '0',
			comment: '8',
		},
		{
			bno: '123424',
			title: 'Vue 3 Composition API 완전 정복',
			writer: '나윤아',
			date: '2024.11.24',
			view: '117',
			good: '76',
			bad: '0',
			comment: '9',
		},
		{
			bno: '123423',
			title: '프론트엔드 개발자를 위한 팁 10가지',
			writer: '장현우',
			date: '2024.11.23',
			view: '144',
			good: '57',
			bad: '3',
			comment: '9',
		},
		{
			bno: '123422',
			title: 'Nuxt3와 Pinia로 상태관리 마스터하기',
			writer: '김소연',
			date: '2024.11.22',
			view: '82',
			good: '31',
			bad: '1',
			comment: '7',
		},
		{
			bno: '123421',
			title: 'Javascript ES6 문법 제대로 배우기',
			writer: '오지현',
			date: '2024.11.21',
			view: '132',
			good: '45',
			bad: '2',
			comment: '6',
		},
		{
			bno: '123420',
			title: '백엔드와 프론트엔드 연결해보기',
			writer: '이정민',
			date: '2024.11.20',
			view: '99',
			good: '38',
			bad: '1',
			comment: '5',
		},
		{
			bno: '123419',
			title: 'HTML과 CSS로 반응형 웹 만들기',
			writer: '김세현',
			date: '2024.11.19',
			view: '120',
			good: '66',
			bad: '4',
			comment: '10',
		},
		{
			bno: '123418',
			title: 'Vue에서 Axios로 API 호출하기',
			writer: '박소윤',
			date: '2024.11.18',
			view: '75',
			good: '29',
			bad: '0',
			comment: '3',
		},
		{
			bno: '123417',
			title: 'JavaScript 비동기 처리 완전 이해하기',
			writer: '최윤서',
			date: '2024.11.17',
			view: '110',
			good: '40',
			bad: '1',
			comment: '4',
		},
		{
			bno: '123416',
			title: 'Git과 GitHub 기본 개념 정리',
			writer: '유지훈',
			date: '2024.11.16',
			view: '89',
			good: '34',
			bad: '0',
			comment: '2',
		},
		{
			bno: '123415',
			title: 'API와 RESTful 이해하기',
			writer: '조서현',
			date: '2024.11.15',
			view: '107',
			good: '52',
			bad: '1',
			comment: '5',
		},
		{
			bno: '123414',
			title: 'Next.js와 Nuxt.js 비교 분석',
			writer: '백승민',
			date: '2024.11.14',
			view: '136',
			good: '77',
			bad: '3',
			comment: '6',
		},
		{
			bno: '123413',
			title: 'CSR, SSR, SSG 차이점 정리',
			writer: '한유림',
			date: '2024.11.13',
			view: '104',
			good: '43',
			bad: '0',
			comment: '3',
		},
		{
			bno: '123412',
			title: 'React vs Vue 비교 분석',
			writer: '노하늘',
			date: '2024.11.12',
			view: '156',
			good: '69',
			bad: '2',
			comment: '10',
		},
		{
			bno: '123411',
			title: 'Nuxt3에서 middleware 사용하기',
			writer: '배진우',
			date: '2024.11.11',
			view: '94',
			good: '22',
			bad: '0',
			comment: '5',
		},
		{
			bno: '123410',
			title: 'Vue Router로 페이지 이동 처리하기',
			writer: '심하은',
			date: '2024.11.10',
			view: '108',
			good: '50',
			bad: '0',
			comment: '4',
		},
		{
			bno: '123409',
			title: 'Pinia로 전역 상태 관리 해보기',
			writer: '안세영',
			date: '2024.11.09',
			view: '125',
			good: '59',
			bad: '3',
			comment: '7',
		},
		{
			bno: '123408',
			title: 'Vue의 v-model과 양방향 바인딩',
			writer: '유다인',
			date: '2024.11.08',
			view: '86',
			good: '27',
			bad: '0',
			comment: '2',
		},
		{
			bno: '123407',
			title: 'Vue Lifecycle Hooks 한눈에 보기',
			writer: '장민재',
			date: '2024.11.07',
			view: '113',
			good: '36',
			bad: '2',
			comment: '6',
		},
		{
			bno: '123406',
			title: 'SCSS로 스타일을 더 깔끔하게!',
			writer: '윤다혜',
			date: '2024.11.06',
			view: '91',
			good: '33',
			bad: '0',
			comment: '5',
		},
		{
			bno: '123405',
			title: 'Vue에서 props와 emit 활용법',
			writer: '최시윤',
			date: '2024.11.05',
			view: '134',
			good: '60',
			bad: '1',
			comment: '8',
		},
		{
			bno: '123404',
			title: 'Vue 템플릿 문법 총정리',
			writer: '하도현',
			date: '2024.11.04',
			view: '123',
			good: '46',
			bad: '0',
			comment: '5',
		},
		{
			bno: '123403',
			title: 'Nuxt useFetch 사용 방법',
			writer: '황예은',
			date: '2024.11.03',
			view: '97',
			good: '35',
			bad: '2',
			comment: '3',
		},
		{
			bno: '123402',
			title: '코드 스플리팅이란 무엇인가?',
			writer: '이수아',
			date: '2024.11.02',
			view: '102',
			good: '48',
			bad: '0',
			comment: '6',
		},
		{
			bno: '123401',
			title: 'Nuxt3 app config 사용 예제',
			writer: '정지후',
			date: '2024.11.01',
			view: '139',
			good: '53',
			bad: '2',
			comment: '4',
		},
		{
			bno: '123400',
			title: 'Vue의 Teleport로 모달 구현하기',
			writer: '서가은',
			date: '2024.10.31',
			view: '88',
			good: '29',
			bad: '0',
			comment: '2',
		},
		{
			bno: '123399',
			title: '컴포지션 API vs 옵션 API',
			writer: '윤재훈',
			date: '2024.10.30',
			view: '96',
			good: '36',
			bad: '1',
			comment: '5',
		},
		{
			bno: '123398',
			title: 'Nuxt3에서 환경변수 관리하기',
			writer: '정유나',
			date: '2024.10.29',
			view: '111',
			good: '52',
			bad: '2',
			comment: '4',
		},
		{
			bno: '123397',
			title: 'Vue로 캘린더 컴포넌트 만들기',
			writer: '김승우',
			date: '2024.10.28',
			view: '107',
			good: '45',
			bad: '0',
			comment: '3',
		},
		{
			bno: '123396',
			title: 'Nuxt3에서 서버 API 만들기',
			writer: '이서윤',
			date: '2024.10.27',
			view: '115',
			good: '58',
			bad: '1',
			comment: '7',
		},
		{
			bno: '123395',
			title: 'Vue에서 lazy loading 적용하기',
			writer: '남도현',
			date: '2024.10.26',
			view: '91',
			good: '40',
			bad: '0',
			comment: '4',
		},
		{
			bno: '123394',
			title: 'Nuxt의 useAsyncData 완전 정복',
			writer: '강예진',
			date: '2024.10.25',
			view: '124',
			good: '66',
			bad: '3',
			comment: '6',
		},
		{
			bno: '123393',
			title: 'Vue에서 debounce 함수 적용하기',
			writer: '오태현',
			date: '2024.10.24',
			view: '87',
			good: '33',
			bad: '1',
			comment: '2',
		},
		{
			bno: '123392',
			title: 'Nuxt 서버 사이드 캐싱 전략',
			writer: '문하늘',
			date: '2024.10.23',
			view: '118',
			good: '59',
			bad: '0',
			comment: '5',
		},
		{
			bno: '123391',
			title: 'Vue Form Validation 완벽 가이드',
			writer: '백승우',
			date: '2024.10.22',
			view: '101',
			good: '47',
			bad: '2',
			comment: '3',
		},
		{
			bno: '123390',
			title: 'Nuxt에서 로딩 스피너 처리하기',
			writer: '한지민',
			date: '2024.10.21',
			view: '93',
			good: '38',
			bad: '0',
			comment: '2',
		},
		{
			bno: '123389',
			title: 'Vue 3에서 Provide/Inject 활용법',
			writer: '노윤호',
			date: '2024.10.20',
			view: '119',
			good: '55',
			bad: '1',
			comment: '6',
		},
		{
			bno: '123388',
			title: 'Nuxt의 useHead로 메타 태그 설정하기',
			writer: '정하은',
			date: '2024.10.19',
			view: '106',
			good: '42',
			bad: '2',
			comment: '3',
		},
		{
			bno: '123387',
			title: 'Vue transition으로 애니메이션 추가하기',
			writer: '유가온',
			date: '2024.10.18',
			view: '112',
			good: '49',
			bad: '0',
			comment: '4',
		},
		{
			bno: '123386',
			title: 'Nuxt3에서 플러그인 설정하기',
			writer: '배예린',
			date: '2024.10.17',
			view: '129',
			good: '61',
			bad: '1',
			comment: '7',
		},
		{
			bno: '123385',
			title: 'Vue Devtools로 디버깅하는 법',
			writer: '김준호',
			date: '2024.10.16',
			view: '95',
			good: '39',
			bad: '0',
			comment: '3',
		},
		{
			bno: '123384',
			title: 'Nuxt에서 composables 활용하기',
			writer: '이하린',
			date: '2024.10.15',
			view: '134',
			good: '63',
			bad: '2',
			comment: '6',
		},
		{
			bno: '123383',
			title: 'Vue 컴포넌트 테스트 전략',
			writer: '조유진',
			date: '2024.10.14',
			view: '122',
			good: '54',
			bad: '1',
			comment: '5',
		},
		{
			bno: '123382',
			title: 'Nuxt로 다국어 사이트 구축하기',
			writer: '장은우',
			date: '2024.10.13',
			view: '143',
			good: '70',
			bad: '3',
			comment: '8',
		},
		{
			bno: '123381',
			title: 'Vue의 watch와 watchEffect 차이점',
			writer: '이준석',
			date: '2024.10.12',
			view: '98',
			good: '41',
			bad: '0',
			comment: '2',
		},
		{
			bno: '123380',
			title: 'Nuxt에서 prerendering 처리하기',
			writer: '황서진',
			date: '2024.10.11',
			view: '108',
			good: '44',
			bad: '0',
			comment: '3',
		},
		{
			bno: '123379',
			title: 'Vue에서 chart.js 사용하기',
			writer: '서태현',
			date: '2024.10.10',
			view: '115',
			good: '51',
			bad: '1',
			comment: '4',
		},
		{
			bno: '123378',
			title: 'Nuxt middleware 인증 처리 예제',
			writer: '이소율',
			date: '2024.10.09',
			view: '127',
			good: '64',
			bad: '0',
			comment: '5',
		},
		{
			bno: '123377',
			title: 'Vue에서 커스텀 디렉티브 만들기',
			writer: '정하윤',
			date: '2024.10.08',
			view: '102',
			good: '48',
			bad: '0',
			comment: '4',
		},
		{
			bno: '123376',
			title: 'Nuxt Static Hosting 설정법',
			writer: '박하준',
			date: '2024.10.07',
			view: '110',
			good: '53',
			bad: '2',
			comment: '3',
		},
		{
			bno: '123375',
			title: 'Vue에서 Drag and Drop 구현하기',
			writer: '최이안',
			date: '2024.10.06',
			view: '104',
			good: '46',
			bad: '1',
			comment: '4',
		},
		{
			bno: '123374',
			title: 'Nuxt에서 axios instance 관리하기',
			writer: '이하영',
			date: '2024.10.05',
			view: '138',
			good: '67',
			bad: '2',
			comment: '6',
		},
		{
			bno: '123373',
			title: 'Vue Directive 실전 사용 예제',
			writer: '윤시우',
			date: '2024.10.04',
			view: '113',
			good: '50',
			bad: '0',
			comment: '5',
		},
		{
			bno: '123372',
			title: 'Nuxt에서 API 호출 캐싱하기',
			writer: '이서진',
			date: '2024.10.03',
			view: '126',
			good: '60',
			bad: '1',
			comment: '7',
		},
	];
};

const boardItems = ref<BoardItemType[]>(getBoardList());

// 페이징 관련 상태 및 계산
const currentPage = ref(1);
const itemsPerPage = 30;

const paginatedItems = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	return boardItems.value.slice(start, end);
});

const totalPages = computed(() =>
	Math.ceil(boardItems.value.length / itemsPerPage),
);

const setPage = (page: number) => {
	// 페이지 범위 체크
	if (page < 1) page = 1;
	if (page > totalPages.value) page = totalPages.value;
	currentPage.value = page;
};

const sortBoardByKey = (
	key: keyof BoardItemType,
	order: 'asc' | 'desc' = 'desc',
) => {
	boardItems.value = [...boardItems.value].sort((a, b) => {
		const valA = a[key];
		const valB = b[key];

		// 숫자 비교
		if (!isNaN(Number(valA)) && !isNaN(Number(valB))) {
			return order === 'asc'
				? Number(valA) - Number(valB)
				: Number(valB) - Number(valA);
		}

		// 문자열 비교 (예: 날짜나 제목)
		return order === 'asc'
			? String(valA).localeCompare(String(valB))
			: String(valB).localeCompare(String(valA));
	});
};

const onSortBoardListHandler = (sortType: 'date' | 'view' | 'good' | 'bad') => {
	console.log(`sortType : ${sortType}`);
	sortBoardByKey(sortType, 'desc');
};

/**
 * 종속성 명시 없이 실행할 때 (개발 중 디버깅에도 자주 사용)
 */
watchEffect(() => {
	console.log(`현재 리스트값은 체크 :`, boardItems.value);
});
</script>

<template>
	<!-- 모바일 side bar -->
	<div id="mysidenav" class="sidenav">
		<a href="#" class="closebtn">
			<i class="fas fa-times"></i>
		</a>
		<div class="row sidebutton">
			<button class="rounded-pill" id="sidebuttonInfo"><b>MYPAGE</b></button>
			<button
				class="rounded-pill"
				id="sidebuttonlogout"
				style="margin-left: 40px"
			>
				<b>LOGOUT</b>
			</button>
		</div>

		<div class="row" style="margin-left: 30px; margin-top: 20px">
			<span class="sidebarmenutext"
				><b style="text-decoration: underline; text-underline-position: under"
					>Menu</b
				></span
			>
		</div>

		<div class="row" style="margin-left: 20px; margin-top: 20px">
			<span>
				<a href="#">
					<i style="font-size: 32px; margin-right: 20px" class="fas fa-home">
					</i>
					<div><b>Home</b></div>
				</a>
			</span>

			<span>
				<a href="#">
					<i style="font-size: 32px; margin-right: 20px" class="fas fa-pen">
					</i>
					<div><b>글쓰기</b></div>
				</a>
			</span>
		</div>
		<div class="sidebarmenu">
			<a href="bestlistpage.html">베스트게시판</a>
			<hr />
			<a href="#">유머게시판</a>
			<hr />
			<a href="#">미스테리게시판</a>
			<hr />
			<a href="#">익명게시판</a>
			<hr />
			<a href="#">연예인게시판</a>
			<hr />
			<a href="#">고객의소리</a>
		</div>
	</div>

	<!-- 메인 영역 -->
	<div class="container" style="margin-top: 15px">
		<div class="row" style="height: auto !important">
			<div class="col-md-12">
				<!-- best board list -->
				<div class="board-list-head">
					<span class="list-title">게시글 목록</span>
					<span class="pull-right nav-name">
						<b
							><i class="fas fa-home"></i> 홈
							<i class="fas fa-angle-right"></i> 게시글 목록
						</b>
					</span>
				</div>

				<!-- 게시판 리스트 -->
				<section class="board-list-body">
					<div class="board-list-wrap">
						<form
							class="boardform"
							id="boardform"
							action="/"
							method="post"
							name="boardform"
						>
							<input type="hidden" name="bno" id="bno" />
							<input type="hidden" name="title" id="title" />
							<input type="hidden" name="writer" id="writer" />
							<input type="hidden" name="good" id="good" />
							<input type="hidden" name="bad" id="bad" />
							<input type="hidden" name="registerdate" id="registerdate" />
							<input type="hidden" name="replycnt" id="replycnt" />
							<input type="hidden" name="viewcnt" id="viewcnt" />

							<div class="board-list-margin">
								<!-- 게시판 리스트 상단 타이틀 -->
								<div class="board-list-title div-list-tile">
									<span class="board-num">번호</span>
									<span class="board-title">제목</span>
									<span class="board-name">이름</span>
									<span class="board-date">날짜</span>
									<span class="board-view">조회</span>
									<span class="board-good">추천</span>
									<span class="board-bad">비추</span>
								</div>

								<!-- 게시판 리스트 body -->
								<ul class="board-list-ul-body">
									<li
										v-for="item in paginatedItems"
										:key="item.bno"
										class="board-list-li"
									>
										<div class="board-num">{{ item.bno }}</div>
										<div class="board-title">
											<a href="#" @click.prevent="onClickGoToDetailHandler">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>
												{{ item.title }}
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>{{ item.writer }}</span>
												<span><i class="far fa-eye"></i>{{ item.view }}</span>
												<span
													><i class="far fa-thumbs-up"></i>{{ item.good }}</span
												>
												<span
													><i class="far fa-thumbs-down"></i
													>{{ item.bad }}</span
												>
												<span
													><i class="far fa-clock"></i> {{ item.date }}</span
												>
											</div>
										</div>
										<div class="board-name">{{ item.writer }}</div>
										<div class="board-date">{{ item.date }}</div>
										<div class="board-view">{{ item.view }}</div>
										<div class="board-good">{{ item.good }}</div>
										<div class="board-bad">{{ item.bad }}</div>
									</li>
								</ul>
							</div>

							<div class="board-list-last" style="width: auto; height: 45px">
								<div class="form-group pull-right">
									<div class="btn-group dropup" role="group">
										<ul
											class="dropdown-menu custom-drop-menu"
											role="menu"
											aria-labelledby="listsort"
										>
											<li @click="onSortBoardListHandler('date')" class="sort">
												<a href="#"><i class="far fa-clock"></i> 날짜순</a>
											</li>
											<li @click="onSortBoardListHandler('view')">
												<a href="#"><i class="far fa-eye"></i> 조회순</a>
											</li>
											<li @click="onSortBoardListHandler('good')">
												<a href="#"><i class="far fa-thumbs-up"></i> 추천순</a>
											</li>
											<li @click="onSortBoardListHandler('bad')">
												<a href="#"
													><i class="far fa-thumbs-down"></i> 비추순</a
												>
											</li>
										</ul>

										<a
											href="#"
											id="listsort"
											role="button"
											class="btn btn-sm rounded-0"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
											style="
												background-color: rgb(103, 103, 238, 0.843);
												color: white;
												font-size: 12px;
											"
										>
											<i class="fa fa-sort"></i> 정렬
										</a>
									</div>
								</div>
								<div class="pull-left">
									<div class="btn-group dropup" role="group">
										<ul
											class="dropdown-menu custom-drop-menu"
											role="menu"
											aria-labelledby="listsort"
										>
											<li @click="onSortBoardListHandler('date')" class="sort">
												<a href="#"><i class="far fa-clock"></i> 날짜순</a>
											</li>
											<li @click="onSortBoardListHandler('view')">
												<a href="#"><i class="far fa-eye"></i> 조회순</a>
											</li>
											<li @click="onSortBoardListHandler('good')">
												<a href="#"><i class="far fa-thumbs-up"></i> 추천순</a>
											</li>
											<li @click="onSortBoardListHandler('bad')">
												<a href="#"
													><i class="far fa-thumbs-down"></i> 비추순</a
												>
											</li>
										</ul>

										<a
											href="#"
											id="listsortSearch"
											role="button"
											class="btn btn-sm rounded-0"
											data-toggle="modal"
											data-target="#searchModal"
											style="
												background-color: rgb(103, 103, 238, 0.843);
												color: white;
												font-size: 11px;
											"
										>
											<i class="fas fa-search"></i> 검색
										</a>
									</div>
								</div>
							</div>
							<!-- pagination -->

							<nav aria-label="Page navigation example">
								<ul
									class="pagination justify-content-center pagination-sm custompagination"
								>
									<li
										class="page-item"
										:class="{ disabled: currentPage === 1 }"
									>
										<a
											class="page-link"
											href="#"
											@click.prevent="setPage(currentPage - 1)"
										>
											<span aria-hidden="true">&laquo;</span>
										</a>
									</li>
									<li
										v-for="page in totalPages"
										:key="page"
										class="page-item"
										:class="{ active: currentPage === page }"
									>
										<a
											class="page-link"
											href="#"
											@click.prevent="setPage(page)"
											>{{ page }}</a
										>
									</li>
									<li
										:class="{ disabled: currentPage === totalPages }"
										class="page-item"
									>
										<a
											class="page-link"
											href="#"
											@click.prevent="setPage(currentPage + 1)"
										>
											<span aria-hidden="true">&raquo;</span>
										</a>
									</li>
								</ul>
							</nav>

							<!-- end pagination -->
						</form>

						<!-- 검색 모달창 -->
						<div
							class="modal fade"
							id="searchModal"
							tabindex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div class="modal-dialog modal-sm" role="document">
								<div class="modal-content">
									<div class="modal-body">
										<div style="text-align: left; margin-bottom: 20px">
											<h5>
												<b><i class="fa fa-search"></i> 검색</b>
											</h5>
										</div>
										<form class="form" name="searchtotal" role="form">
											<input
												type="hidden"
												name="searchType"
												value="T"
												disabled
											/>
											<input type="hidden" name="andOr" />
											<div class="row searchrow">
												<div class="col-xs-6 search-padding">
													<select
														class="form-control rounded-0 custom-input-sm"
														name="searchoption"
													>
														<option value="T">제목</option>
														<!--														<option value="C">내용</option>-->
														<!--														<option value="N">이름</option>-->
														<!--														<option value="TC">제목+내용</option>-->
														<!--														<option value="CN">내용+이름</option>-->
														<!--														<option value="TCN">제목+내용+이름</option>-->
													</select>
												</div>
												<div class="col-xs-6 search-padding">
													<select
														class="form-control rounded-0 custom-input-sm"
														name="searchAndOr"
													>
														<option value="A">AND</option>
														<option value="O">OR</option>
													</select>
												</div>
											</div>
											<div
												class="form-row align-items-center"
												style="
													margin-top: 10px;
													margin-left: 2px;
													width: 255px;
													margin-bottom: 10px;
												"
											>
												<div class="col-sm-3 my-1">
													<label class="sr-only" for="inlineFormInputName"
														>Name</label
													>
													<input
														type="text"
														class="form-control rounded-0"
														id="inlineFormInputName"
														placeholder="검색해주세요."
														style="font-size: 13px; width: 245px"
														maxlength="15"
													/>
												</div>
											</div>

											<div class="row searchrow">
												<div class="col-xs-6 search-padding">
													<button
														type="submit"
														class="btn btn-color btn-sm rounded-0"
													>
														<i class="fas fa-search"></i> 찾기
													</button>
												</div>
												<div class="col-xs-6 search-padding">
													<button
														type="button"
														data-dismiss="modal"
														class="btn btn-color btn-sm rounded-0"
													>
														<i class="fas fa-times"></i> 닫기
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<!-- end 모달 -->
					</div>
				</section>
			</div>
			<!-- end col-md-9  -->
		</div>
	</div>
	<!-- end 메인 영역 -->
</template>
