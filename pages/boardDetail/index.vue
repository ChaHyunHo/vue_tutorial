<script setup lang="ts">
const router = useRouter();

const onClickGoToDetailHandler = () => {
	router.push('/boardDetail');
};
</script>

<template>
	<div class="container" style="margin-top: 15px; height: auto !important">
		<div class="row" style="height: auto !important">
			<div class="col-md-12">
				<!-- best board list -->
				<div class="board-detail-head">
					<span class="list-title">게시글 상세</span>
					<span class="pull-right nav-name">
						<b
							><i class="fas fa-home"></i> 홈
							<i class="fas fa-angle-right"></i> 게시글 목록
							<i class="fas fa-angle-right"></i> 게시글 상세
						</b>
					</span>
					<hr />
				</div>
				<!-- 게시판 상세 페이지 -->

				<div class="board-detail-wrap">
					<section class="board-detail">
						<article class="board-detail-article">
							<h3>
								<span class="board-detail-title">게시글 제목 부분입니다.</span>
							</h3>
							<div
								class="card card-default board-detail-panel rounded-0 shadow-sm"
								style="height: 50px"
							>
								<div class="card-heading">
									<span class="panel-id" style="margin-left: 8px"
										><i class="fas fa-user"></i> chamym</span
									>
									<span class="panel-tag"
										><i class="fas fa-tag"></i> 베스트</span
									>
									<span class=""><i class="fas fa-comments"></i> 7</span>
									<span><i class="fas fa-eye"></i> 7</span>
									<span class="board-good"
										><i class="fas fa-thumbs-up"></i> 7</span
									>
									<span class="board-bad"
										><i class="fas fa-thumbs-down"></i> 7</span
									>
								</div>
							</div>
							<div
								class="board-detail-content"
								style="height: 300px; margin-top: 20px"
							>
								이곳은 게시글의 내용 부분입니다.
							</div>
							<div class="goodorbad" style="height: 60px; margin-bottom: 100px">
								<span class="board-detail-good">
									<a href="#">
										<b id="wr_good">0</b>
										<br />
										<i class="fa fa-thumbs-up"></i>
									</a>
								</span>
								<span class="board-detail-good">
									<a href="#">
										<b id="wr_good">0</b>
										<br />
										<i class="fa fa-thumbs-down"></i>
									</a>
								</span>
							</div>
							<!-- 이전글 다음글 패널 -->
							<div
								class="card card-default rounded-0 nextPrvs"
								style="height: 80px"
							>
								<span class="board-detail-next">
									<a href="#">
										<i class="fas fa-arrow-up"></i> 다음글 :
										<span id="nextPrvs-title">
											다음글 제목 입니다. 다음글 제목 입니다.다음글 제목 입니다.
										</span>
									</a>
								</span>
								<span class="board-detail-prvs">
									<a href="#">
										<i class="fas fa-arrow-down"></i> 다음글 :
										<span id="nextPrvs-title">
											다음글 제목 입니다. 다음글 제목 입니다.다음글 제목 입니다.
										</span>
									</a>
								</span>
							</div>
						</article>
					</section>
					<hr />

					<!-- comment -->
					<div
						class="board-detail-comment-wrap"
						style="height: auto !important; margin-top: 50px"
					>
						<div class="board-detail-comment">
							<section class="board-detail-comment-section">
								<!-- best board list -->
								<div class="board-detail-head">
									<span class="list-title">
										<i class="fas fa-comments"></i> Comment...</span
									>
									<hr />
								</div>
								<!-- end board list -->
								<div class="media comment-media" style="margin-top: 25px">
									<div class="profilefont">
										<i class="fas fa-user" style="margin-right: 15px"></i>
									</div>
									<div class="media-body">
										<div class="media-heading comment-title">
											<span>chamym</span>
											<span><i class="fas fa-clock"></i> 2019.12.23</span>
											<div class="pull-right comment-heding-right">
												<ul>
													<li><a href="#">답변</a></li>
													<li><a href="#">수정</a></li>
													<li><a href="#">삭제</a></li>
													<li><a href="#">신고</a></li>
												</ul>
											</div>
										</div>
										<div class="media-content">
											Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin. Cras purus odio,
											vestibulum in vulputate at, tempus viverra turpis. Fusce
											condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus.
											<p></p>
											<div
												class="media-footer pull-right"
												style="height: 20px; background-color: silver"
											>
												<div class="card card-default shadow-sm rounded-0">
													<a href="#"><i class="fa fa-thumbs-up"></i> 0</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="media comment-media" style="margin-top: 25px">
									<div class="profilefont">
										<i class="fas fa-user" style="margin-right: 15px"></i>
									</div>
									<div class="media-body">
										<div class="media-heading comment-title">
											<span>chamym</span>
											<span><i class="fas fa-clock"></i> 2019.12.23</span>
										</div>
										<div class="media-content">
											Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin. Cras purus odio,
											vestibulum in vulputate at, tempus viverra turpis. Fusce
											condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus.
											<p></p>
											<div
												class="media-footer pull-right"
												style="height: 20px; background-color: silver"
											>
												<div class="card card-default shadow-sm rounded-0">
													<a href="#"><i class="fa fa-thumbs-up"></i> 0</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="media comment-media" style="margin-top: 25px">
									<div class="profilefont">
										<i class="fas fa-user" style="margin-right: 15px"></i>
									</div>
									<div class="media-body">
										<div class="media-heading comment-title">
											<span>chamym</span>
											<span><i class="fas fa-clock"></i> 2019.12.23</span>
										</div>
										<div class="media-content">
											Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin. Cras purus odio,
											vestibulum in vulputate at, tempus viverra turpis. Fusce
											condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus.
											<p></p>
											<div
												class="media-footer pull-right"
												style="height: 20px; background-color: silver"
											>
												<div class="card card-default shadow-sm rounded-0">
													<a href="#"><i class="fa fa-thumbs-up"></i> 0</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="media comment-media" style="margin-top: 25px">
									<div class="profilefont">
										<i class="fas fa-user" style="margin-right: 15px"></i>
									</div>
									<div class="media-body">
										<div class="media-heading comment-title">
											<span>chamym</span>
											<span><i class="fas fa-clock"></i> 2019.12.23</span>
										</div>
										<div class="media-content">
											Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin. Cras purus odio,
											vestibulum in vulputate at, tempus viverra turpis. Fusce
											condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus.
											<p></p>
											<div
												class="media-footer pull-right"
												style="height: 20px; background-color: silver"
											>
												<div class="card card-default shadow-sm rounded-0">
													<a href="#"><i class="fa fa-thumbs-up"></i> 0</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="media comment-media" style="margin-top: 25px">
									<div class="profilefont">
										<i class="fas fa-user" style="margin-right: 15px"></i>
									</div>
									<div class="media-body">
										<div class="media-heading comment-title">
											<span>chamym</span>
											<span><i class="fas fa-clock"></i> 2019.12.23</span>
										</div>
										<div class="media-content">
											Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin. Cras purus odio,
											vestibulum in vulputate at, tempus viverra turpis. Fusce
											condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus.
											<p></p>
											<div
												class="media-footer pull-right"
												style="height: 20px; background-color: silver"
											>
												<div class="card card-default shadow-sm rounded-0">
													<a href="#"><i class="fa fa-thumbs-up"></i> 0</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="media comment-media" style="margin-top: 25px">
									<div class="profilefont">
										<i class="fas fa-user" style="margin-right: 15px"></i>
									</div>
									<div class="media-body">
										<div class="media-heading comment-title">
											<span>chamym</span>
											<span><i class="fas fa-clock"></i> 2019.12.23</span>
										</div>
										<div class="media-content">
											Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin. Cras purus odio,
											vestibulum in vulputate at, tempus viverra turpis. Fusce
											condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus.
											<p></p>
											<div
												class="media-footer pull-right"
												style="height: 20px; background-color: silver"
											>
												<div class="card card-default shadow-sm rounded-0">
													<a href="#"><i class="fa fa-thumbs-up"></i> 0</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="media comment-media" style="margin-top: 25px">
									<div class="profilefont">
										<i class="fas fa-user" style="margin-right: 15px"></i>
									</div>
									<div class="media-body">
										<div class="media-heading comment-title">
											<span>chamym</span>
											<span><i class="fas fa-clock"></i> 2019.12.23</span>
										</div>
										<div class="media-content">
											Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin. Cras purus odio,
											vestibulum in vulputate at, tempus viverra turpis. Fusce
											condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus.
											<p></p>
											<div
												class="media-footer pull-right"
												style="height: 20px; background-color: silver"
											>
												<div class="card card-default shadow-sm rounded-0">
													<a href="#"><i class="fa fa-thumbs-up"></i> 0</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- 댓글 입력박스 -->
								<div class="comment-input-wrap">
									<aside class="c_i_b">
										<form
											class="form"
											id="commentinput"
											name="commentinput"
											action="/"
											method="post"
										>
											<input type="hidden" name="" id="" value="" />
											<input type="hidden" name="" id="" value="" />
											<input type="hidden" name="" id="" value="" />
											<input type="hidden" name="" id="" value="" />
											<input type="hidden" name="" id="" value="" />
											<input type="hidden" name="" id="" value="" />
											<input type="hidden" name="" id="" value="" />

											<!-- 댓글 박스 -->
											<div class="comment-input-box">
												<div class="comment-input-box-title pull-left">
													<i class="fas fa-pencil-alt"></i> 자신이 생각하는
													댓글을 입력해 보세요~
												</div>
												<div class="form-group rounded-0 comment-input-content">
													<div class="comment-input-content-cell">
														<textarea
															tabindex="13"
															id="comment-input-content-wrap"
															name="comment-contnet"
															maxlength="10000"
															rows="5"
															class="form-control comment-input-sm rounded-0"
															title="내용을 입력해주세요."
														></textarea>
													</div>
													<div
														tabindex="14"
														class="comment-input-content-cell comment-input-submit"
													>
														등록
													</div>
												</div>
											</div>
											<!-- end 댓글 박스 -->
											<div class="" style="font-weight: 700"></div>
											<!-- wrtier, list, prvs, next -->
											<div
												class="board-detail-button-wrap pull-right"
												style="
													height: auto;
													margin-top: 10px;
													margin-bottom: 20px;
												"
											>
												<div class="btn-group" role="group">
													<a
														href="#"
														id="listsort"
														role="button"
														class="btn btn-sm rounded-0"
														style="
															background-color: rgba(31, 31, 121, 0.815);
															color: white;
															font-size: 11px;
														"
													>
														<i class="fas fa-arrow-circle-left"></i> 이전
													</a>
													<a
														href="#"
														id="listsort"
														role="button"
														class="btn btn-sm rounded-0"
														style="
															background-color: rgb(103, 103, 238, 0.843);
															color: white;
															font-size: 11px;
														"
													>
														<i class="fas fa-arrow-circle-right"></i> 다음
													</a>
													<a
														href="#"
														id="listsort"
														role="button"
														class="btn btn-sm rounded-0"
														style="
															background-color: rgb(103, 103, 238, 0.843);
															color: white;
															font-size: 11px;
														"
													>
														<i class="fas fa-list-ul"></i> 목록
													</a>
													<a
														href="#"
														id="listsort"
														role="button"
														class="btn btn-sm rounded-0"
														style="
															background-color: rgb(103, 103, 238, 0.843);
															color: white;
															font-size: 11px;
														"
													>
														<i class="fas fa-pencil-alt"></i> 글쓰기
													</a>
												</div>
											</div>
											<!-- end wrtier, list, prvs, next -->
										</form>
									</aside>
								</div>
							</section>
							<!-- 상세페이지 댓글 맨밑 버튼까지 section -->
						</div>
					</div>
					<!-- end content -->
				</div>
				<!-- end board-detail-wrap  -->
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
									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
									</li>

									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
									</li>

									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
									</li>

									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
									</li>

									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
									</li>

									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
									</li>

									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
									</li>

									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
									</li>

									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 버전 리스트 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
									</li>

									<li class="board-list-li">
										<div class="board-num">123412</div>
										<div class="board-title">
											<a href="#">
												<span
													class="pull-right"
													style="color: rgb(255, 130, 71)"
												>
													<i class="far fa-comments"></i>
													<span id="commentcnt"> +7 </span>
												</span>

												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
												게시글 테스트용 제목입니다. 최대한 길게 써주세요!!!!
											</a>
											<!-- 모바일 전용 타이틀 -->
											<div class="mobile-board-title">
												<span>아이디</span>
												<span><i class="far fa-eye"></i> 77</span>
												<span><i class="far fa-thumbs-up"></i> 7</span>
												<span><i class="far fa-thumbs-down"></i> 7</span>
												<span><i class="far fa-clock"></i> 2019.12.20</span>
											</div>
										</div>
										<div class="board-name">차현호</div>
										<div class="board-date">2019.12.19</div>
										<div class="board-view">77</div>
										<div class="board-good">777</div>
										<div class="board-bad">0</div>
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
											<li class="sort">
												<a href="#"><i class="far fa-clock"></i> 날짜순</a>
											</li>
											<li>
												<a href="#"><i class="far fa-eye"></i> 조회순</a>
											</li>
											<li>
												<a href="#"><i class="far fa-thumbs-up"></i> 추천순</a>
											</li>
											<li>
												<a href="#"
													><i class="far fa-thumbs-down"></i> 비추순</a
												>
											</li>
										</ul>

										<a
											href="#"
											id="listsort"
											role="button"
											class="btn btn-sm rounded-0 shadow-sm"
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
											<li class="sort">
												<a href="#"><i class="far fa-clock"></i> 날짜순</a>
											</li>
											<li>
												<a href="#"><i class="far fa-eye"></i> 조회순</a>
											</li>
											<li>
												<a href="#"><i class="far fa-thumbs-up"></i> 추천순</a>
											</li>
											<li>
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
									<li class="page-item">
										<a class="page-link" href="#" aria-label="Previous">
											<span aria-hidden="true">&laquo;</span>
										</a>
									</li>
									<li class="page-item active">
										<a class="page-link" href="#">1</a>
									</li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item"><a class="page-link" href="#">4</a></li>
									<li class="page-item"><a class="page-link" href="#">5</a></li>
									<li class="page-item"><a class="page-link" href="#">6</a></li>
									<li class="page-item"><a class="page-link" href="#">7</a></li>
									<li class="page-item"><a class="page-link" href="#">8</a></li>
									<li class="page-item"><a class="page-link" href="#">9</a></li>
									<li class="page-item">
										<a class="page-link" href="#">10</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#" aria-label="Next">
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
											<input type="hidden" name="searchType" />
											<input type="hidden" name="andOr" />
											<div class="row searchrow">
												<div class="col-xs-6 search-padding">
													<select
														class="form-control rounded-0 custom-input-sm"
														name="searchoption"
													>
														<option value="T">제목</option>
														<option value="C">내용</option>
														<option value="N">이름</option>
														<option value="TC">제목+내용</option>
														<option value="CN">내용+이름</option>
														<option value="TCN">제목+내용+이름</option>
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
