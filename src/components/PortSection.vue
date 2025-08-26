<script setup>
// Vue 생명주기 훅과 반응형 변수 불러오기
import { onMounted, onUnmounted, ref } from "vue";
// 학습 자료 데이터 불러오기
import { portText } from "@/constants/index";
// GSAP 애니메이션 라이브러리 불러오기
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// GSAP 컨텍스트 변수 (애니메이션 정리를 위해 사용)
let ctx;

// 모바일 상태 관리  
const isMobile = ref(false);

// 모바일 체크 함수 (CSS 미디어쿼리와 일치시키기)
const checkMobile = () => {
    // CSS 미디어쿼리와 정확히 일치하도록 matchMedia 사용
    isMobile.value = window.matchMedia('(max-width: 480px)').matches;
};

// 가로 스크롤 애니메이션 설정 함수 (하이브리드 방식)
const setupAnimation = () => {
    // 기존 애니메이션 완전 정리
    if (ctx) {
        ctx.revert();
        ctx = null;
    }
    
    // 기존 포트 섹션 스크롤 트리거만 정리 (안전한 방법)
    const portTriggers = ScrollTrigger.getAll().filter(trigger => 
        trigger.trigger && trigger.trigger.id === 'port'
    );
    portTriggers.forEach(trigger => trigger.kill());
    
    // 모바일 체크
    checkMobile();
    
    // 모바일에서는 GSAP 애니메이션 비활성화
    if (isMobile.value) {
        return;
    }

    ctx = gsap.context(() => {
        const portItems = document.querySelectorAll(".port__item");
        const portWrap = document.querySelector(".port__wrap");
        const portSection = document.querySelector("#port");

        if (!portItems.length || !portWrap || !portSection) return;

        // ★★★ 하이브리드 스크롤 시스템 ★★★
        // 정확한 아이템 개수로 계산 (portText 배열은 6개)
        gsap.to(portItems, {
            xPercent: -100 * (portItems.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#port",
                pin: true,
                scrub: 1,
                end: () => "+=" + (portWrap.offsetWidth - portItems[portItems.length - 1].offsetWidth),
                invalidateOnRefresh: true,
                
                // 스크롤 감지 제거 - 더 이상 호버 차단하지 않음
            }
        });
    });
};

// Vue reactive 시스템만 사용하므로 별도 클래스 업데이트 불필요

// 화면 크기 변경 감지 (디바운스 적용)
let resizeTimeout;
let mediaQueryTimeout;
let mediaQueryList;
const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const oldMobile = isMobile.value;
        checkMobile();
        
        // 모바일 ↔ 데스크톱 전환 시에만 재설정
        if (oldMobile !== isMobile.value) {
            if (!isMobile.value) {
                setupAnimation(); // 데스크톱으로 전환 시 애니메이션 활성화
            } else {
                // 모바일로 전환 시 GSAP 정리
                if (ctx) {
                    ctx.revert();
                    ctx = null;
                }
            }
        }
    }, 200);
};

// Media Query 변화 감지 (경합 조건 방지)
const handleMediaQueryChange = (e) => {
    const wasDesktop = !isMobile.value;
    isMobile.value = e.matches;
    
    // 데스크톱 ↔ 모바일 전환 시에만 애니메이션 재설정
    if (wasDesktop !== !e.matches) {
        clearTimeout(mediaQueryTimeout);
        mediaQueryTimeout = setTimeout(() => {
            if (!isMobile.value) {
                setupAnimation();
            } else {
                // 모바일로 전환 시 GSAP 완전 정리
                if (ctx) {
                    ctx.revert();
                    ctx = null;
                }
            }
        }, 250); // resize와 다른 타이밍 사용
    }
};

// 컴포넌트가 마운트될 때 실행
onMounted(() => {
    // 초기 모바일 체크
    checkMobile();
    
    // 페이지의 모든 리소스가 완전히 로드된 후 애니메이션 설정
    if (document.readyState === 'complete') {
        setupAnimation();
    } else {
        window.addEventListener('load', setupAnimation);
    }
    
    // 화면 크기 변경 감지
    window.addEventListener('resize', handleResize);
    
    // Media Query 리스너 추가 (최신 API 사용)
    mediaQueryList = window.matchMedia('(max-width: 480px)');
    // 최신 브라우저 호환성: addEventListener 사용
    if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', handleMediaQueryChange);
    } else {
        // 구형 브라우저 지원
        mediaQueryList.addListener(handleMediaQueryChange);
    }
});

// 컴포넌트가 언마운트될 때 실행 (메모리 누수 방지)
onUnmounted(() => {
    // 모든 애니메이션과 이벤트 리스너 정리
    if (ctx) ctx.revert();
    window.removeEventListener('load', setupAnimation);
    window.removeEventListener('resize', handleResize);
    
    // 모든 타이머 정리
    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }
    if (mediaQueryTimeout) {
        clearTimeout(mediaQueryTimeout);
    }
    
    // Media Query 리스너 제거 (최신 API 사용)
    if (mediaQueryList) {
        if (mediaQueryList.removeEventListener) {
            mediaQueryList.removeEventListener('change', handleMediaQueryChange);
        } else {
            // 구형 브라우저 지원
            mediaQueryList.removeListener(handleMediaQueryChange);
        }
    }
});

// 상세내용 버튼 클릭 시 팝업창으로 열기 (SiteSection과 동일한 방식)
const openDetail = (url, cardKey) => {
    if (url && url !== '#') {
        // 팝업창 설정 (나의 작업물과 동일한 방식)
        const popupWidth = 1200;
        const popupHeight = 800;
        const left = (window.screen.width - popupWidth) / 2;
        const top = (window.screen.height - popupHeight) / 2;
        
        window.open(
            url,
            'studyDetailPopup', // 학습자료용 고유 이름
            `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
        );
    } else if (cardKey === 3) {
        // 4번 카드 (Vue.js): 현재 사이트이므로 최상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // 5번, 6번 카드: 아직 URL이 설정되지 않음
        alert('준비 중인 학습 자료입니다. 곧 업데이트 예정입니다! 😊');
    }
};
</script>

<template>
    <!-- 학습 자료 섹션: 하이브리드 스크롤 시스템 -->
    <section 
        id="port" 
        :class="{ 
            'mobile-mode': isMobile 
        }"
    >
        <!-- 학습 자료 내부 컨테이너 -->
        <div class="port__inner">
            <!-- 학습 자료 섹션 제목 -->
            <div class="port__title">
                study <em>학습 자료 모음</em>
            </div>
            <!-- 학습 자료 아이템 리스트 컨테이너 -->
            <div class="port__wrap">
                <!-- 각 학습 자료 아이템을 반복하여 표시 -->
                <div
                    v-for="(port, key) in portText"
                    :key="key"
                    :class="[
                        'port__item', 
                        `p${key + 1}`
                    ]"
                >
                    <!-- 학습 자료 번호 -->
                    <span class="num">{{ port.num }}.</span>
                    <!-- 학습 자료 이미지 -->
                    <div class="img">
                        <img :src="port.img" :alt="port.title" />
                    </div>
                    <!-- 학습 자료 제목 -->
                    <h3 class="title">{{ port.title }}</h3>
                    <!-- 학습 자료 설명 -->
                    <p class="desc">{{ port.desc }}</p>
                    <!-- 상세내용 버튼 -->
                    <button 
                        v-if="key !== 2" 
                        @click="key !== 3 ? openDetail(port.view, key) : null" 
                        :disabled="key === 3"
                        class="detail-button"
                        :class="{ 'disabled': key === 3 }"
                    >
                        {{ key === 3 ? '해당 사이트 입니다' : '상세내용' }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    // ★★★ 하이브리드 스크롤 시스템 CSS ★★★
    /* 학습 자료 섹션 기본 스타일링 */
    #port {
        width: 100%;
        margin-top: 30vh;
        overflow: hidden;
        position: relative;
        z-index: 1; // 기본 레이어
        
        // 스크롤 감지 제거로 호버 차단 로직 완전 제거
        
        // 모바일 모드
        &.mobile-mode {
            margin-top: 10vh; // 모바일에서 상단 여백 축소
            
            .port__wrap {
                flex-direction: column !important;
                width: 100% !important;
            }
            
            .port__item {
                width: 100% !important;
                margin-right: 0 !important;
                margin-bottom: 20px !important;
                pointer-events: auto !important; // 모바일에서는 항상 클릭 가능
            }
        }
    }
    /* 학습 자료 내부 컨테이너 스타일링 */
    .port__inner {
        padding: 16px; /* 내부 여백 */
    }
    /* 학습 자료 제목 스타일링 - z-index 최적화 */
    .port__title {
        position: relative;
        z-index: 100; // 모든 요소보다 위에 (최우선)
        width: 100%;
        height: 5vw;
        font-size: 4vw;
        font-weight: 900;
        line-height: 1.6;
        font-family: var(--mainKor-font);
        text-transform: uppercase;
        color: var(--black100);
        border-bottom: 0.4vw solid var(--black100);
        margin-bottom: 16px;
        text-indent: -0.26vw;
        background: transparent; // 투명 배경으로 복원
    }
    /* 학습 자료 제목 내 강조 텍스트 */
    .port__title em {
        font-size: 1.25rem; /* 고정 크기 */
        font-weight: 400; /* 일반 굵기 */
        line-height: 2; /* 줄간격 */
    }
    /* 학습 자료 아이템 리스트 컨테이너 */
    .port__wrap {
        display: flex; /* 플렉스박스 레이아웃 */
        flex-wrap: nowrap; // 아이템들이 한 줄로 나열되도록
        width: 3120px;     // (아이템 너비 500 + 마진 20) * 6개 = 3120px
        
        /* 태블릿에서는 너비 축소 */
        @media (max-width: 800px) {
            width: 1920px; // (아이템 너비 300 + 마진 20) * 6개 = 1920px
        }
        
        /* 모바일에서는 세로 배치 */
        @media (max-width: 480px) {
            flex-direction: column;
            width: 100%;
        }
    }
    /* 각 학습 자료 아이템 - 하이브리드 최적화 */
    .port__item {
        flex-shrink: 0;
        width: 500px;
        height: 70vh;
        background: var(--cardBg-color);
        padding: 2.5rem;
        margin-right: 20px;
        border-radius: 16px;
        // GSAP 애니메이션과 충돌 방지: transform 완전 제외
        transition: box-shadow 0.3s ease, border-color 0.3s ease;
        will-change: transform; // GSAP 최적화 힌트
        position: relative;
        overflow: hidden;
        z-index: 2; // 기본 카드 레이어
        
        // 호버 비활성화는 상위 .scrolling 클래스로 통합 관리
        
        &::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        &:hover {
          // 단순하고 안전한 호버 효과 (GSAP와 완전 분리)
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          z-index: 10;
          
          &::before {
            opacity: 1;
          }
          
          // 이미지 호버 효과도 단순하게
          .img {
            margin-top: -10px; // 조금만 위로
            
            img {
              filter: saturate(100%) brightness(1.02); // 미세한 효과
            }
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
            
            /* 모바일에서 숫자와 이미지 겹침 방지 */
            .num {
                font-size: 1.8rem !important; /* 숫자 크기 조정 */
                margin-bottom: 0.5rem; /* 숫자 아래 여백 추가 */
                z-index: 10; /* 숫자를 이미지 위로 */
                position: relative;
            }
            
            .img {
                margin-top: 10px !important; /* 이미지를 아래로 내려서 숫자와 분리 */
                
                img {
                    height: 150px !important; /* 모바일에서 이미지 높이 줄임 */
                    object-fit: contain !important; /* 이미지 비율 유지하면서 전체 표시 */
                }
            }
            
            padding: 1.5rem;
        }
    }

    // 이하 나머지 스타일은 기존과 동일하게 유지
    /* 각 학습 자료 아이템의 배경과 테마 지정 */
    .port__item.p1 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(0, 212, 255, 0.2);
      &:hover { 
        border-color: var(--primary-color);
        .detail-button {
          border-color: var(--primary-color);
          background: var(--primary-color);
          color: var(--white);
        }
      }
    }
    .port__item.p2 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(255, 107, 107, 0.2);
      &:hover { 
        border-color: var(--secondary-color);
        .detail-button {
          border-color: var(--secondary-color);
          background: var(--secondary-color);
          color: var(--white);
        }
      }
    }
    .port__item.p3 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(78, 205, 196, 0.2);
      &:hover { 
        border-color: var(--accent-color);
        .detail-button {
          border-color: var(--accent-color);
          background: var(--accent-color);
          color: var(--white);
        }
      }
    }
    .port__item.p4 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(255, 217, 61, 0.2);
      &:hover { 
        border-color: var(--warning-color);
        .detail-button {
          border-color: var(--warning-color);
          background: var(--warning-color);
          color: var(--black100);
        }
      }
    }
    .port__item.p5 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(107, 207, 127, 0.2);
      &:hover { 
        border-color: var(--success-color);
        .detail-button {
          border-color: var(--success-color);
          background: var(--success-color);
          color: var(--white);
        }
      }
    }
    .port__item.p6 { 
      background: var(--cardBg-color); 
      border: 1px solid rgba(0, 212, 255, 0.2);
      &:hover { 
        border-color: var(--primary-color);
        .detail-button {
          border-color: var(--primary-color);
          background: var(--primary-color);
          color: var(--white);
        }
      }
    }
    /* 불필요한 스타일 제거 (6개 아이템만 존재) */

    /* 번호 스타일링 */
    .port__item .num { font-size: 2rem; font-family: var(--mainNum-font); /* 숫자용 폰트 */ }
    /* 이미지 컨테이너 스타일링 */
    .port__item .img { 
        display: block; 
        margin-top: -20px; 
        transition: margin-top 0.3s;
    }
    /* 이미지 스타일링 (성능 최적화) */
    .port__item .img img { 
        width: 100%; 
        height: 200px; 
        object-fit: contain; 
        border-radius: 5px; 
        filter: saturate(0%); /* 회색으로 표시 */ 
        transition: filter 0.3s ease; 
        will-change: filter; // GPU 가속 힌트
    }
    /* 제목 스타일링 */
    .port__item .title { font-size: 1.5rem; text-align: center; padding: 0.8rem 0; font-weight: 700; color: var(--black100); border-bottom: 2px solid var(--black100); margin-bottom: 1rem; }
    /* 설명 텍스트 스타일링 */
    .port__item .desc { font-size: 1rem; }
    /* 사이트 보기 버튼 스타일링 */
    .port__item .site { border: 1px solid var(--black100); display: block; text-align: center; padding: 0.625rem 1.5rem; margin-top: 1.5rem; }
    
    /* 상세내용 버튼 스타일링 (충돌 방지 강화) */
    .port__item .detail-button { 
        border: 1px solid var(--black300); 
        display: block; 
        width: 100%;
        text-align: center; 
        padding: 0.625rem 1.5rem; 
        margin-top: 1.5rem; 
        background: transparent;
        color: var(--black300);
        cursor: pointer !important;
        font-size: 1rem;
        font-weight: 400;
        border-radius: 5px;
        position: relative !important;
        z-index: 999 !important; /* 최상위 레이어로 강제 */
        pointer-events: auto !important; /* 클릭 가능하도록 강제 */
        // 스크롤 중 강제 변경되는 속성들만 transition
        transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        
        /* 비활성화 상태 스타일링 */
        &.disabled {
            opacity: 0.5 !important;
            cursor: not-allowed !important;
            pointer-events: none !important;
            border-color: var(--black200) !important;
            color: var(--black200) !important;
        }
    }
</style>