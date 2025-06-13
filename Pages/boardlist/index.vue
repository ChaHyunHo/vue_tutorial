<script setup lang="ts">
import { ref, computed } from 'vue';
import { getBoardList } from '~/Pages/boardlist/dummyData';
definePageMeta({
	layout: 'board-list',
});

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

const boardItems = ref<BoardItemType[]>(getBoardList());

// 페이징 관련 상태 및 계산
const currentPage = ref(1);
const itemsPerPage = 10;

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
					<span class="list-title">VUE 게시판 튜토리얼</span>
					<span class="pull-right nav-name">
						<b
							><i class="fas fa-home"></i> 홈
							<i class="fas fa-angle-right"></i> 게시판 리스트
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
											<a href="#">
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
