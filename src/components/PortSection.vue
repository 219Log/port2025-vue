<script setup>
// Vue 생명주기 훈상 불러오기
import { onMounted, onUnmounted } from "vue";
// 포트폴리오 데이터 불러오기
import { portText } from "@/constants/index";
// GSAP 애니메이션 라이브러리 불러오기
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// GSAP 컨텍스트 변수 (애니메이션 정리를 위해 사용)
let ctx;

// 가로 스크롤 애니메이션 설정 함수
const setupAnimation = () => {
    if (ctx) ctx.revert();

    ctx = gsap.context(() => {
        const portItems = document.querySelectorAll(".port__item");
        const portWrap = document.querySelector(".port__wrap");

        if (!portItems.length || !portWrap) return;

        // ★★★ React 버전과 동일한 애니메이션 로직 ★★★
        // 각 아이템들을 왼쪽으로 이동시켜 가로 스크롤 효과를 만듭니다.
        gsap.to(portItems, {
            xPercent: -100 * (portItems.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#port", // 애니메이션의 기준점
                pin: true,        // #port 섹션을 스크롤 동안 화면에 고정
                scrub: 1,         // 스크롤과 애니메이션을 부드럽게 동기화
                // end: 가로 스크롤이 끝나는 지점
                // 전체 가로 스크롤 거리 = (전체 너비 - 화면에 보이는 마지막 아이템 하나 너비)
                end: () => "+=" + (portWrap.offsetWidth - portItems[portItems.length - 1].offsetWidth),
                invalidateOnRefresh: true
            }
        });
    });
};

// 컴포넌트가 마운트될 때 실행되는 훈상
onMounted(() => {
    // 페이지의 모든 리소스(이미지 등)가 완전히 로드된 후 애니메이션 설정
    if (document.readyState === 'complete') {
        setupAnimation(); // 페이지가 이미 로드되었다면 바로 애니메이션 설정
    } else {
        window.addEventListener('load', setupAnimation); // 아니면 로드 이벤트에 애니메이션 설정 연결
    }
});

// 컴포넌트가 언마운트될 때 실행되는 훈상 (메모리 누수 방지)
onUnmounted(() => {
    // 컴포넌트가 사라질 때 모든 애니메이션과 이벤트 리스너 정리
    if (ctx) ctx.revert(); // GSAP 애니메이션 정리
    window.removeEventListener('load', setupAnimation); // 이벤트 리스너 제거
});
</script>

<template>
    <!-- 포트폴리오 섹션: 가로 스크롤 효과로 작업물을 보여주는 섹션 -->
    <section id="port">
        <!-- 포트폴리오 내부 컨테이너 -->
        <div class="port__inner">
            <!-- 포트폴리오 섹션 제목 -->
            <div class="port__title">
                portfolio <em>포폴 작업물</em>
            </div>
            <!-- 포트폴리오 아이템 리스트 컨테이너 (가로 스크롤 영역) -->
            <div class="port__wrap">
                <!-- 각 포트폴리오 아이템을 반복하여 표시 -->
                <div
                    v-for="(port, key) in portText"
                    :key="key"
                    :class="['port__item', `p${key + 1}`]"
                >
                    <!-- 포트폴리오 번호 -->
                    <span class="num">{{ port.num }}.</span>
                    <!-- 포트폴리오 이미지 링크 -->
                    <a :href="port.view" target="_blank" class="img">
                        <img :src="port.img" :alt="port.title" />
                    </a>
                    <!-- 포트폴리오 제목 -->
                    <h3 class="title">{{ port.title }}</h3>
                    <!-- 포트폴리오 설명 -->
                    <p class="desc">{{ port.desc }}</p>
                    <!-- 사이트 보기 버튼 -->
                    <a :href="port.view" target="_blank" class="site">사이트 보기</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    // 핵심 변경사항: React 버전과 동일하게 CSS를 구성합니다.
    /* 포트폴리오 섹션 기본 스타일링 */
    #port {
        width: 100%; /* 전체 너비 차지 */
        margin-top: 30vh; /* 상단 여백 */
        overflow: hidden; // 가로 스크롤바가 보이지 않도록 함
    }
    /* 포트폴리오 내부 컨테이너 스타일링 */
    .port__inner {
        padding: 16px; /* 내부 여백 */
    }
    /* 포트폴리오 제목 스타일링 */
    .port__title {
        position: relative; // pin이 적용된 섹션 내에서 z-index가 작동하도록
        z-index: 10;       // 스크롤되는 아이템들보다 위에 있도록 설정
        width: 100%; /* 전체 너비 */
        height: 5vw; /* 반응형 높이 */
        font-size: 4vw; /* 반응형 크기 */
        font-weight: 900; /* 굵게 */
        line-height: 1.6;
        font-family: var(--mainKor-font); /* 한글 폰트 */
        text-transform: uppercase; /* 대문자로 변환 */
        color: var(--black100); /* 글자색 */
        border-bottom: 0.4vw solid var(--black100); /* 하단 구분선 */
        margin-bottom: 16px; /* 하단 여백 */
        text-indent: -0.26vw; /* 들여쓰기 조정 */
    }
    /* 포트폴리오 제목 내 강조 텍스트 */
    .port__title em {
        font-size: 1.25rem; /* 고정 크기 */
        font-weight: 400; /* 일반 굵기 */
        line-height: 2; /* 줄간격 */
    }
    /* 포트폴리오 아이템 리스트 컨테이너 */
    .port__wrap {
        display: flex; /* 플렉스박스 레이아웃 */
        flex-wrap: nowrap; // 아이템들이 한 줄로 나열되도록
        width: 5200px;     // (아이템 너비 500 + 마진 20) * 10개 = 5200px
        
        /* 태블릿에서는 너비 축소 */
        @media (max-width: 800px) {
            width: 3200px; // (아이템 너비 300 + 마진 20) * 10개 = 3200px
        }
        
        /* 모바일에서는 세로 배치 */
        @media (max-width: 480px) {
            flex-direction: column;
            width: 100%;
        }
    }
    /* 각 포트폴리오 아이템 */
    .port__item {
        flex-shrink: 0;
        width: 500px;
        height: 70vh;
        background: var(--cardBg-color);
        padding: 2.5rem;
        margin-right: 20px;
        border-radius: 16px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        
        &::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          
          &::before {
            opacity: 1;
          }
        }
        
        /* 태블릿에서는 크기 축소 */
        @media (max-width: 800px) {
            width: 300px;
            height: 60vh;
            padding: 1.5rem;
            margin-right: 20px;
        }
        
        /* 모바일에서는 전체 너비 사용 */
        @media (max-width: 480px) {
            width: 100%;
            height: auto;
            min-height: 400px;
            margin-right: 0;
            margin-bottom: 20px;
            padding: 1.5rem;
        }
    }

    // 이하 나머지 스타일은 기존과 동일하게 유지
    /* 각 포트폴리오 아이템의 배경과 테마 지정 */
    .port__item.p1 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(0, 212, 255, 0.2);
      &:hover { border-color: var(--primary-color); }
    }
    .port__item.p2 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(255, 107, 107, 0.2);
      &:hover { border-color: var(--secondary-color); }
    }
    .port__item.p3 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(78, 205, 196, 0.2);
      &:hover { border-color: var(--accent-color); }
    }
    .port__item.p4 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(255, 217, 61, 0.2);
      &:hover { border-color: var(--warning-color); }
    }
    .port__item.p5 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(107, 207, 127, 0.2);
      &:hover { border-color: var(--success-color); }
    }
    .port__item.p6 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(0, 212, 255, 0.2);
      &:hover { border-color: var(--primary-color); }
    }
    .port__item.p7 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(255, 107, 107, 0.2);
      &:hover { border-color: var(--secondary-color); }
    }
    .port__item.p8 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(78, 205, 196, 0.2);
      &:hover { border-color: var(--accent-color); }
    }
    .port__item.p9 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(255, 217, 61, 0.2);
      &:hover { border-color: var(--warning-color); }
    }
    .port__item.p10 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(107, 207, 127, 0.2);
      &:hover { border-color: var(--success-color); }
    }

    /* 번호 스타일링 */
    .port__item .num { font-size: 2rem; font-family: var(--mainNum-font); /* 숫자용 폰트 */ }
    /* 이미지 컨테이너 스타일링 */
    .port__item .img { display: block; margin-top: -20px; transition: margin-top 0.3s; /* 호버 애니메이션 */ }
    /* 호버 시 이미지 위치 애니메이션 */
    .port__item:hover .img { margin-top: 0; /* 위로 올라가는 효과 */ }
    /* 이미지 스타일링 */
    .port__item .img img { border-radius: 5px; filter: saturate(0%); /* 회색으로 표시 */ transition: all 0.3s; }
    /* 이미지 호버 효과 */
    .port__item .img:hover img { filter: saturate(100%) /* 커러로 변환 */ }
    /* 제목 스타일링 */
    .port__item .title { font-size: 1.5rem; text-align: center; padding: 0.8rem 0; font-weight: 700; color: var(--black100); border-bottom: 2px solid var(--black100); margin-bottom: 1rem; }
    /* 설명 텍스트 스타일링 */
    .port__item .desc { font-size: 1rem; }
    /* 사이트 보기 버튼 스타일링 */
    .port__item .site { border: 1px solid var(--black100); display: block; text-align: center; padding: 0.625rem 1.5rem; margin-top: 1.5rem; }
</style>