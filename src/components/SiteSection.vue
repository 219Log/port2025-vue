<script setup>
// 사이트 섹션에 표시할 데이터를 가져옵니다
import { siteText } from "@/constants/index";
// 이미지들 import
import syIbmsImg from "@/assets/img/sy_ibms.png";
import syApplyImg from "@/assets/img/sy_apply.png";
import syPmsImg from "@/assets/img/sy_pms.png";
import rispecImg from "@/assets/img/rispec.png";
import genieImg from "@/assets/img/genie.png";

</script>

<template>
    <!-- 사이트 코딩 섹션: 작업물을 소개하는 섹션 -->
    <section id="site">
        <div class="site__inner">
            <!-- 섹션 제목 -->
            <h2 class="site__title">
                Site coding <em>나의 작업물</em>
            </h2>
            <!-- 사이트 아이템 리스트 컨테이너 -->
            <div class="site__wrap">
                <!-- 각 사이트 아이템을 반복하여 표시 -->
                <div class="site__item" v-for="(site, key) in siteText" :key="key">
                    <!-- 아이템 번호 (큰 카드 영역) -->
                    <span class="num">{{ key + 1 }}.</span>
                    <!-- 콘텐츠 영역 -->
                    <div class="content-box">
                        <!-- 1번째 카드는 sy_ibms.png 이미지 -->
                        <div v-if="key === 0" class="rd-portal-image-container">
                            <img :src="syIbmsImg" alt="SY IBMS" class="rd-portal-image" />
                        </div>
                        <!-- 2번째 카드는 sy_apply.png 이미지 -->
                        <div v-else-if="key === 1" class="rd-portal-image-container">
                            <img :src="syApplyImg" alt="SY Apply" class="rd-portal-image" />
                        </div>
                        <!-- 3번째 카드는 sy_pms.png 이미지 -->
                        <div v-else-if="key === 2" class="rd-portal-image-container">
                            <img :src="syPmsImg" alt="SY PMS" class="rd-portal-image" />
                        </div>
                        <!-- 4번째 카드는 rispec.png 이미지 -->
                        <div v-else-if="key === 3" class="rd-portal-image-container">
                            <img :src="rispecImg" alt="Rispec" class="rd-portal-image" />
                        </div>
                        <!-- 5번째 카드는 genie.png 이미지 -->
                        <div v-else-if="key === 4" class="rd-portal-image-container">
                            <img :src="genieImg" alt="GENIE" class="rd-portal-image" />
                        </div>
                        <!-- 사이트 제목 -->
                        <h3>
                            {{ site.title }}
                        </h3>
                        <!-- 코드와 뷰 버튼 -->
                        <div class="btn">
                            <a :href="site.code">code</a>
                            <a :href="site.view">view</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> 

<style lang="scss" scoped>
@use "@/assets/scss/mixin" as *;

/* 사이트 섹션 내부 컨테이너 */
.site__inner {
    padding: 16px;
    
    /* 충분한 스크롤 공간 확보 */
    .site__wrap {
        padding-bottom: 100vh; /* 마지막 카드가 완전히 표시되도록 */
    }

    /* 사이트 섹션 제목 스타일링 */
    .site__title  {
        position: sticky; /* 스크롤 시 제목을 고정 */
        top: 70px;
        left: 0;
        width: 100%;
        height: auto;
        font-size: 4vw;
        font-weight: 900;
        line-height: 1.2;
        font-family: var(--mainEng-font);
        text-transform: uppercase;
        color: var(--text-primary);
        background: var(--mainBg-color);
        border-bottom: 3px solid var(--primary-color);
        margin-bottom: 50px;
        padding: 20px 16px;
        z-index: 10;

        /* 모바일 화면에서의 제목 스타일 */
        @media (max-width: 800px){ 
            font-size: 2rem;
            padding: 16px;
            top: 60px;
            margin-bottom: 30px;
        }

        /* 제목 내 강조 텍스트 */
        em {
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 2;
        }
    }
    /* 사이트 아이템 리스트 컨테이너 */
    .site__wrap {
        /* 각 사이트 아이템 */
        .site__item {
            height: 80vh;
            min-height: 600px;
            @include flex-center; /* 콘텐츠 가운데 정렬 */
            flex-direction: column;
            position: sticky; /* 스크롤 시 아이템 고정 */
            left: 0;
            border-radius: 20px;
            margin: 0 16px 40px 16px; /* 하단 여백 추가 */
            transition: all 0.3s ease;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
            
            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
                
                &:nth-child(1) { 
                    border-color: var(--primary-color);
                    box-shadow: 0 25px 50px rgba(0, 212, 255, 0.3);
                }
                &:nth-child(2) { 
                    border-color: var(--secondary-color);
                    box-shadow: 0 25px 50px rgba(255, 107, 107, 0.3);
                }
                &:nth-child(3) { 
                    border-color: var(--accent-color);
                    box-shadow: 0 25px 50px rgba(78, 205, 196, 0.3);
                }
                &:nth-child(4) { 
                    border-color: var(--warning-color);
                    box-shadow: 0 25px 50px rgba(255, 217, 61, 0.3);
                }
            }

            /* 첫 번째 사이트 아이템 - 모던 디자인 */
            &:nth-child(1) {
                background: linear-gradient(135deg, 
                    rgba(15, 23, 42, 0.9) 0%, 
                    rgba(30, 41, 59, 0.8) 100%);
                border: 1px solid rgba(0, 212, 255, 0.3);
                top: 70px;
                z-index: 4;
                backdrop-filter: blur(20px);
                transition: all 0.6s ease;

                &:hover {
                    transform: translateY(-5px);
                    border-color: rgba(0, 212, 255, 0.5);
                    box-shadow: 
                        0 20px 40px rgba(0, 212, 255, 0.15),
                        0 8px 16px rgba(0, 0, 0, 0.2);
                }

                @media (max-width: 800px){ 
                    top: 60px;
                }
            }
            /* 두 번째 사이트 아이템 - 일반 카드로 변경 */
            &:nth-child(2) {
                background: linear-gradient(135deg, 
                    rgba(255, 107, 107, 0.1) 0%, 
                    rgba(220, 38, 127, 0.15) 100%);
                border: 1px solid rgba(255, 107, 107, 0.4);
                top: 90px;
                z-index: 3;
                backdrop-filter: blur(15px);
                transition: all 0.6s ease;

                &:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 107, 107, 0.6);
                    box-shadow: 
                        0 20px 40px rgba(255, 107, 107, 0.15),
                        0 8px 16px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 800px){ 
                    top: 80px;
                }
            }
            /* 세 번째 사이트 아이템 - Vue.js 테마 */
            &:nth-child(3) {
                background: linear-gradient(135deg, 
                    rgba(52, 211, 153, 0.1) 0%, 
                    rgba(16, 185, 129, 0.15) 100%);
                border: 1px solid rgba(78, 205, 196, 0.4);
                top: 110px;
                z-index: 2;
                backdrop-filter: blur(15px);
                transition: all 0.6s ease;

                &:hover {
                    transform: translateY(-5px);
                    border-color: rgba(78, 205, 196, 0.6);
                    box-shadow: 
                        0 20px 40px rgba(78, 205, 196, 0.15),
                        0 8px 16px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 800px){ 
                    top: 100px;
                }
            }
            /* 네 번째 사이트 아이템 - Next.js 테마 */
            &:nth-child(4) {
                background: linear-gradient(135deg, 
                    rgba(245, 158, 11, 0.1) 0%, 
                    rgba(217, 119, 6, 0.15) 100%);
                border: 1px solid rgba(255, 217, 61, 0.4);
                top: 130px;
                z-index: 1;
                backdrop-filter: blur(15px);
                transition: all 0.6s ease;

                &:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 217, 61, 0.6);
                    box-shadow: 
                        0 20px 40px rgba(255, 217, 61, 0.15),
                        0 8px 16px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 800px){ 
                    top: 120px;
                }
            }
            /* 다섯 번째 사이트 아이템 - GENIE 테마 */
            &:nth-child(5) {
                background: linear-gradient(135deg, 
                    rgba(34, 197, 94, 0.1) 0%, 
                    rgba(21, 128, 61, 0.15) 100%);
                border: 1px solid rgba(34, 197, 94, 0.4);
                top: 150px;
                z-index: 1;
                backdrop-filter: blur(15px);
                transition: all 0.6s ease;

                &:hover {
                    transform: translateY(-5px);
                    border-color: rgba(34, 197, 94, 0.6);
                    box-shadow: 
                        0 20px 40px rgba(34, 197, 94, 0.15),
                        0 8px 16px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 800px){ 
                    top: 140px;
                }
            }
            /* 모든 카드들의 콘텐츠 박스 - 10% 더 넓게 */
            .content-box {
                width: 100%;
                max-width: 950px !important;
                margin: 0 auto !important;
                position: relative;
                z-index: 15;
                padding: 35px !important;
                border-radius: 23px !important;
                background: linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.1) 0%, 
                    rgba(255, 255, 255, 0.05) 100%) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
                backdrop-filter: blur(20px) !important;
                transition: all 0.4s ease !important;
                transform: none !important;
                
                &:hover {
                    background: linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.15) 0%, 
                        rgba(255, 255, 255, 0.08) 100%) !important;
                    border-color: rgba(255, 255, 255, 0.2) !important;
                    transform: translateY(-2px) !important;
                }
            }

            /* 번호 스타일링 */
            .num {
                font-size: 4vw;
                line-height: 1;
                font-weight: 800;
                font-family: var(--mainNum-font);
                position: absolute;
                left: 20px;
                top: 20px;
                color: var(--text-muted);
                opacity: 0.3;
                transition: all 0.3s ease;

                @media (max-width: 800px) and (min-width: 481px) { 
                    font-size: 50px;
                    left: 16px;
                    top: 16px;
                }
                
                @media (max-width: 480px) { 
                    font-size: 40px;
                    left: 12px;
                    top: 12px;
                }
                
                @media (max-width: 320px) { 
                    font-size: 32px;
                    left: 10px;
                    top: 10px;
                }
            }
            
            &:hover .num {
                opacity: 0.6;
                transform: scale(1.1);
            }
            

            /* 이미지 컨테이너 (모든 카드) */
            .rd-portal-image-container {
                text-align: center !important;
                margin-bottom: 1.8rem !important;
                position: relative;
                z-index: 10;
                
                .rd-portal-image {
                    width: 100% !important;
                    max-width: 400px !important;
                    height: auto !important;
                    border-radius: 12px !important;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
                    transition: all 0.3s ease !important;
                    
                    &:hover {
                        transform: translateY(-2px) scale(1.02) !important;
                        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
                    }
                }
            }

            /* 텍스트 스타일링 - 모든 카드 통일 */
            .content-box .text {
                text-align: center !important;
                margin-bottom: 1.8rem !important;

                /* 텍스트 내부 요소 */
                > div {
                    font-size: 4.03vw !important;
                    line-height: 1.2 !important;
                    font-weight: 800 !important;
                    text-transform: uppercase !important;
                    font-family: var(--mainEng-font) !important;
                    color: rgba(255, 255, 255, 0.9) !important;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
                    margin: 6px 0 !important;
                    transition: all 0.3s ease !important;
                    
                    &:hover {
                        color: rgba(255, 255, 255, 1) !important;
                        transform: translateY(-1px) !important;
                    }

                    @media (max-width: 800px) and (min-width: 481px) { 
                        font-size: 30px;
                    }
                    
                    @media (max-width: 480px) { 
                        font-size: 22px;
                    }
                    
                    @media (max-width: 320px) { 
                        font-size: 18px;
                    }
                }
            }
            /* 제목 스타일링 - 모든 카드 통일 */
            .content-box h3 {
                font-family: var(--mainKor-font) !important;
                margin-bottom: 2.16rem !important;
                color: rgba(255, 255, 255, 0.95) !important;
                font-weight: 700 !important;
                font-size: 2.02rem !important;
                text-align: center !important;
                text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;
                line-height: 1.3 !important;
                transition: all 0.3s ease !important;
                
                &:hover {
                    color: rgba(255, 255, 255, 1) !important;
                    transform: translateY(-1px) !important;
                }
            }
            /* 버튼 스타일링 - 모든 카드 통일 */
            .content-box .btn {
                display: flex !important;
                gap: 23px !important;
                margin-bottom: 2.16rem !important;
                justify-content: center !important;
                
                /* 버튼 링크 */
                a {
                    padding: 17px 29px !important;
                    border-radius: 17px !important;
                    text-transform: uppercase !important;
                    font-size: 1.2rem !important;
                    font-weight: 600 !important;
                    letter-spacing: 0.72px !important;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    border: 1px solid !important;
                    text-decoration: none !important;
                    backdrop-filter: blur(10px) !important;
                    
                    &:first-child {
                        background: linear-gradient(135deg, rgba(0, 212, 255, 0.9), rgba(0, 180, 216, 0.8)) !important;
                        color: rgba(255, 255, 255, 0.95) !important;
                        border-color: rgba(0, 212, 255, 0.6) !important;
                        box-shadow: 0 4px 16px rgba(0, 212, 255, 0.2) !important;
                        
                        &:hover {
                            transform: translateY(-2px) scale(1.05) !important;
                            background: linear-gradient(135deg, rgba(0, 212, 255, 1), rgba(0, 180, 216, 0.9)) !important;
                            box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3) !important;
                        }
                    }
                    
                    &:last-child {
                        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)) !important;
                        color: rgba(255, 255, 255, 0.8) !important;
                        border-color: rgba(255, 255, 255, 0.3) !important;
                        
                        &:hover {
                            transform: translateY(-2px) scale(1.05) !important;
                            background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)) !important;
                            color: rgba(255, 255, 255, 1) !important;
                            border-color: rgba(255, 255, 255, 0.5) !important;
                        }
                    }
                }
            }

        }
    }
}
</style>