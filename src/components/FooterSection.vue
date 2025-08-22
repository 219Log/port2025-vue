<script setup>
// 푸터 섹션에 표시할 소셜 링크 데이터를 가져옵니다
import { footerText } from "@/constants/index";
</script>

<template>
    <!-- 푸터 섹션: 사이트 하단에 위치하며 사이트 정보와 링크를 포함 -->
    <footer id="footer" role="contentinfo">
        <div class="footer__inner">
            <!-- 푸터 상단 텍스트 -->
            <div class="footer__text">
                <span>webstoryboy</span>
                <span>© webs</span>
            </div>
            <!-- 푸터 정보 섹션 -->
            <div class="footer__info">
                <!-- 왼쪽 회원가입 섹션 -->
                <div class="left">
                    <!-- 회원가입 링크 -->
                    <div class="title">
                        <a href="#">sign up</a>
                    </div>
                    <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                </div>
                <!-- 오른쪽 소셜 링크 섹션 -->
                <div class="right">
                    <h3>social</h3>
                    <!-- 소셜 링크 리스트 -->
                    <ul>
                        <!-- 각 소셜 링크를 반복하여 표시 -->
                        <li v-for="(footer, key) in footerText" :key="key">
                            <a :href="footer.link">{{ footer.title }}</a>
                            <em>{{ footer.desc }}</em>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 푸터 하단 저작권 정보 -->
            <div class="footer__right">
                © 2023 webstoryboy<br />
                이 사이트는 뷰를 이용하여 제작하였습니다.
            </div>
        </div>
    </footer>
</template> 


<style lang="scss">
/* 푸터 섹션 기본 스타일링 */
#footer {
    font-family: var(--mainKor-font); /* 한글 폰트 사용 */
}
/* 푸터 내부 컨테이너 */
.footer__inner {
    padding: 16px;

    /* 푸터 상단 텍스트 스타일링 */
    .footer__text {
        font-size: 12px;
        text-transform: uppercase; /* 대문자로 변환 */
        border-top: 1px solid var(--black); /* 상단 구분선 */
        border-bottom: 1px solid var(--black); /* 하단 구분선 */
        display: flex;
        justify-content: space-between; /* 양쪽 정렬 */
    }
    /* 푸터 정보 섹션 스타일링 */
    .footer__info {
        display: flex;
        justify-content: space-between; /* 좌우 정렬 */
        margin: 100px 0; /* 위아래 여백 */

        /* 모바일 화면에서의 레이아웃 */
        @media (max-width: 800px){
            flex-direction: column; /* 모바일에서는 세로로 정렬 */
        }

        /* 왼쪽 회원가입 섹션 */
        .left {
            width: 40%; /* 전체 너비의 40% 차지 */

            /* 모바일에서의 너비 */
            @media (max-width: 800px){
                width: 100%; /* 모바일에서는 전체 너비 차지 */
            }

            /* 회원가입 링크 스타일링 */
            /* 회원가입 링크 스타일링 */
            .title {
                border-top: 2px solid var(--black); /* 상단 구분선 */
                border-bottom: 1px solid var(--black); /* 하단 구분선 */
                padding: 20px 0;
                text-transform: uppercase; /* 대문자로 변환 */
                font-weight: 700;
                background: url(../../img/arrow.svg) no-repeat right 20px; /* 화살표 아이콘 */
                transition: all 0.3s; /* 호버 효과 애니메이션 */

                /* 호버 효과 */
                &:hover {
                    background-color: var(--black400); /* 배경색 변경 */
                    padding-left: 10px; /* 왼쪽 여백 추가 */
                    border-color: transparent;  /* 테두리 투명하게 */
                }
            }
            /* 설명 텍스트 */
            .desc {
                font-size: 12px;
                padding-top: 20px; /* 상단 여백 */

                /* 모바일에서의 여백 */
                @media (max-width: 800px){
                    margin-bottom: 40px; /* 모바일에서 하단 여백 추가 */
                }
            }
        }

        /* 오른쪽 소셜 링크 섹션 */
        .right {
            width: 50%; /* 전체 너비의 50% 차지 */

            /* 모바일에서의 너비 */
            @media (max-width: 800px){
                width: 100%; /* 모바일에서는 전체 너비 차지 */
            }

            /* 소셜 링크 섹션 제목 */
            /* 소셜 링크 섹션 제목 */
            h3 {
                border-top: 2px solid var(--black); /* 상단 구분선 */
                font-size: 10px;
                margin-bottom: 40px; /* 하단 여백 */
                padding-top: 10px; /* 상단 여백 */
            }
            /* 소셜 링크 리스트 */
            ul {
                border-top: 1px solid var(--black); /* 상단 구분선 */

                /* 각 소셜 링크 항목 */
                li {
                    border-bottom: 1px solid var(--black); /* 하단 구분선 */

                    /* 소셜 링크 */
                    a {
                        padding: 14px 0;
                        font-size: 14px;
                        display: inline-block;
                        text-transform: uppercase; /* 대문자로 변환 */
                    }
                    /* 링크 설명 텍스트 */
                    em {
                        font-size: 12px;
                        padding-left: 10px; /* 왼쪽 여백 */
                        opacity: 0; /* 처음에는 숨김 */
                        transition: all 0.3s; /* 호버 효과 애니메이션 */
                    }

                    /* 호버 효과 */
                    &:hover {
                        em {
                            opacity: 1; /* 호버 시 설명 텍스트 표시 */
                        }
                    }
                }
            }
        }
    }
    /* 푸터 하단 저작권 정보 */
    .footer__right {
        text-align: center; /* 가운데 정렬 */
        text-transform: uppercase; /* 대문자로 변환 */
        font-size: 12px;
        margin-bottom: 20px; /* 하단 여백 */
    }
}
</style>