<script setup>
// headerNav 상수를 가져와서 네비게이션 메뉴 항목들을 설정합니다
import { headerNav } from "@/constants/index";
</script>

<template>
    <!-- 헤더 섹션: 로고와 네비게이션 메뉴를 포함 -->
    <header id="header" role="heading">
        <div class="header__inner">
            <!-- 사이트 로고 -->
            <h1 class="header__logo">
                <a href="#">DevFolio<em>2025</em></a>
            </h1>
            <!-- 메인 네비게이션: 모바일에서는 토글 가능 -->
            <nav class="header__nav" role="navigation" aria-label="메인 메뉴" :class="{ show: isNavVisible }">
                <ul>
                    <li v-for="(nav, key) in headerNav" :key="key">
                        <a :href="nav.url" @click="scrollLink($event)">
                            {{ nav.title }}
                            <span class="hover-text">test입니다</span>
                        </a>
                    </li> 
                </ul> 
            </nav>
            <!-- 모바일 메뉴 토글 버튼 -->
            <div
                class="header__nav__mobile"
                id="headerToggle"
                aria-controls="primary-menu"
                :aria-expanded="isNavVisible.toString()"
                @click="toggleMobileMenu"
                >
                <span></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isNavVisible: false, // 모바일 메뉴의 표시 여부를 제어하는 상태 변수
        };
    },
    methods: {
        // 모바일 메뉴 토글 기능
        toggleMobileMenu() {
            this.isNavVisible = !this.isNavVisible;
        },
        // 부드러운 스크롤 기능: 네비게이션 링크 클릭 시 해당 섹션으로 스크롤
        scrollLink(event) {
            event.preventDefault();

            const targetId = event.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        },
    },
};
</script>

<style lang="scss">
@use "@/assets/scss/mixin" as *;

/* 헤더 스타일링 */
#header {
    @include position-fixed; /* 헤더를 화면 상단에 고정 */
    z-index: 10000; /* 다른 요소들 위에 표시되도록 z-index 설정 */
}
/* 헤더 내부 컨테이너 스타일링 */
.header__inner {
    @include flex-between; /* 로고와 네비게이션을 양쪽 끝에 배치 */
    background: rgba(10, 10, 10, 0.95); /* 다크 반투명 배경 */
    backdrop-filter: blur(20px); /* 더 강한 블러 효과 */
    border-bottom: 1px solid rgba(0, 212, 255, 0.1); /* 서브틀한 보더 */
    padding: 1rem 2rem;
    transition: all 0.3s ease;

    /* 로고 스타일링 */
    .header__logo {
        font-size: 1.2rem;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        line-height: 1;
        color: var(--primary-color);
        letter-spacing: 0.5px;

        a {
            background: var(--gradient-tech);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: all 0.3s ease;

            &:hover {
                filter: brightness(1.2);
                transform: scale(1.05);
            }
        }

        em {
            font-size: 0.6rem;
            display: block;
            color: var(--text-secondary);
            font-weight: 400;
            margin-top: 2px;
            opacity: 0.8;
        }
    }
    
    /* 네비게이션 메뉴 스타일링 */
    .header__nav {

        /* 모바일 화면에서의 네비게이션 스타일 */
        @media (max-width: 800px){
            display: none;

            /* 모바일에서 메뉴가 표시될 때의 스타일 */
            &.show {
                display: block;

                                    ul {
                        display: block;
                        position: absolute;
                        right: 0;
                        top: 68px;
                        background: rgba(10, 10, 10, 0.95);
                        backdrop-filter: blur(20px);
                        border: 1px solid rgba(0, 212, 255, 0.2);
                        border-radius: 12px;
                        z-index: 10000;
                        min-width: 200px;
                        padding: 16px 0;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

                    li {
                        display: block;
                        text-align: right;

                        a {
                            display: inline-block;
                            padding: 10px;
                        }
                    }
                }
            }
            &.show + .header__nav__mobile span::before {
                width: 20px;
            }
            &.show + .header__nav__mobile span::after {
                width: 20px;
            }
        }
        
        /* 네비게이션 항목 스타일링 */
        li {
            display: inline;
    
            /* 네비게이션 링크 스타일링 */
            a {
                text-transform: uppercase;
                font-size: 0.9rem;
                font-weight: 500;
                padding: 12px 16px;
                position: relative;
                color: var(--text-secondary);
                transition: all 0.3s ease;
                border-radius: 6px;
                letter-spacing: 0.5px;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: var(--gradient-tech);
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }

                &:hover {
                    color: var(--primary-color);
                    background: rgba(0, 212, 255, 0.1);
                    
                    &::before {
                        width: 80%;
                    }
                }
    
                /* 호버 텍스트 기본 스타일 */
                .hover-text {
                    display: none;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -35px;
                    font-size: 0.75rem;
                    white-space: nowrap;
                    background: var(--cardBg-color);
                    color: var(--text-primary);
                    padding: 6px 12px;
                    border-radius: 8px;
                    border: 1px solid var(--primary-color);
                    box-shadow: 0 4px 12px rgba(0, 212, 255, 0.2);
                    z-index: 1000;
                }
                
                /* 호버 시 텍스트 표시 */
                &:hover .hover-text {
                    display: block;
                }
            }
        }
    }
    
    /* 모바일 메뉴 토글 버튼 스타일링 */
    .header__nav__mobile {
        display: none;
        width: 44px;
        height: 44px;
        cursor: pointer;
        border-radius: 8px;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid rgba(0, 212, 255, 0.2);
        transition: all 0.3s ease;

        &:hover {
            background: rgba(0, 212, 255, 0.2);
            transform: scale(1.05);
        }

        @media (max-width: 800px){
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* 햄버거 아이콘 스타일링 */
        span {
            display: block;
            width: 20px;
            height: 2px;
            background-color: var(--primary-color);
            position: relative;
            transition: all 0.3s ease;

            &::before {
                content: "";
                width: 20px;
                height: 2px;
                background-color: var(--primary-color);
                position: absolute;
                right: 0;
                top: -6px;
                transition: all 0.3s ease;
            }
            &::after {
                content: "";
                width: 20px;
                height: 2px;
                background-color: var(--primary-color);
                position: absolute;
                left: 0;
                bottom: -6px;
                transition: all 0.3s ease;
            }
        }
    }
} 
</style>