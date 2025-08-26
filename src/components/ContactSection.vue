<script setup>
    // 컨택트 섹션에 표시할 링크 데이터를 가져옵니다
    import { contactText } from "../constants";
</script>

<template>
    <!-- 컨택트 섹션: 연락처 정보를 표시하는 섹션 -->
    <section id="contact">
        <div class="contact__inner">
            <!-- 컨택트 섹션 제목 -->
            <h2 class="contact__title">Contact</h2>
            <!-- 상단 장식용 라인 -->
            <div class="contact__lines" aria-hidden="true">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <!-- 컨택트 링크 텍스트 영역 -->
            <div class="contact__text">
                <!-- 컨택트 링크 텍스트 -->
                <div class="text">
                    <!-- 각 컨택트 링크를 반복하여 표시 -->
                    <div v-for="(contact, key) in contactText" :key="key">
                        <a 
                            :href="contact.link" 
                            :target="contact.download ? '_self' : '_blank'"
                            :download="contact.download ? '' : null"
                        >
                            {{ contact.title }}
                        </a>
                    </div>
                </div>
            </div>
            <!-- 하단 장식용 라인 -->
            <div class="contact__lines bottom" aria-hidden="true">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>
    </section>
</template> 


<style lang="scss" scoped>
/* 컨택트 섹션 기본 스타일링 */
#contact {
    height: 100vh; /* 화면 높이 차지 */
    
    /* 모바일에서 Contact 섹션이 잘 보이도록 조정 */
    @media (max-width: 800px) {
        min-height: 100vh; /* 최소 높이 보장 */
        height: auto; /* 자동 높이 */
        padding-bottom: 50px; /* 하단 여백 추가 */
    }
}
/* 컨택트 섹션 내부 컨테이너 */
.contact__inner {
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    align-items: flex-start; /* 수평 정렬 */
    justify-content: flex-end; /* 세로 하단 정렬 */
    flex-direction: column; /* 세로 배치 */

    /* 모바일 화면에서의 레이아웃 */
    @media (max-width: 800px){ 
        justify-content: flex-start; /* 모바일에서는 상단부터 시작 (왼쪽 정렬을 위해) */
        align-items: flex-start; /* 왼쪽 정렬 강화 */
    }

    /* 컨택트 섹션 제목 스타일링 */
    .contact__title {
        font-size: 10vw; /* 반응형 크기 */
        text-transform: uppercase; /* 대문자로 변환 */
        line-height: 1;
        font-weight: 800;
        white-space: nowrap; /* 줄바꿈 방지 */
        text-indent: -0.5vw; /* 들여쓰기 조정 */
        letter-spacing: -0.3vw; /* 글자 간격 조정 */

        /* 모바일에서 제목 스타일 조정 - 다른 섹션들과 동일한 스타일 */
        @media (max-width: 800px){ 
            position: sticky; /* 스크롤 시 제목을 고정 (다른 섹션들과 동일) */
            top: 68px;
            left: 0;
            width: 48%; /* 다른 섹션들과 동일한 너비 */
            font-size: 30px; /* 다른 섹션들과 동일한 크기 */
            height: auto;
            background-color: var(--mainBg-color); /* 모바일에서 배경색 추가 */
            color: var(--white); /* 흰색으로 잘 보이게 */
            text-align: left !important; /* 왼쪽 정렬 강제 적용 */
            margin-bottom: 10vw; /* 다른 섹션들과 동일한 여백 */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* 가독성을 위한 그림자 */
            border-bottom: 3px solid var(--white); /* 모바일에서 흰색 밑선 추가 */
            padding-bottom: 0; /* 다른 섹션들과 동일 */
            padding-left: 16px !important; /* 왼쪽에 확실히 붙이기 위한 패딩 */
            margin-left: 0 !important; /* 왼쪽 마진 제거 */
            line-height: 1.2; /* 다른 섹션들과 동일 */
            display: block; /* 확실히 표시되도록 */
            text-transform: uppercase; /* 대문자 */
            font-weight: 900; /* 다른 섹션들과 동일한 굵기 */
            text-indent: 0 !important; /* 들여쓰기 제거하여 왼쪽에 붙임 */
            letter-spacing: 0 !important; /* 글자 간격 초기화 */
            white-space: normal !important; /* 줄바꿈 허용으로 정렬 제어 */
        }
        
        /* 아주 작은 화면 */
        @media (max-width: 480px){ 
            width: 100%; /* 작은 화면에서는 전체 너비 */
            font-size: 2rem;
            margin-bottom: 1.5rem;
            border-bottom: 3px solid var(--white); /* 작은 화면에서도 밑선 유지 */
            padding-bottom: 0;
            text-align: center; /* 작은 화면에서는 가운데 정렬 */
        }
    }
    /* 컨택트 텍스트 영역 스타일링 */
    .contact__text {
        width: 100%;
        height: 40vh; /* 화면 높이의 40% 차지 */
        background-color: var(--black); /* 배경색 */
        color: var(--white); /* 글자색 */
        display: flex;
        align-items: center; /* 수평 가운데 정렬 */
        justify-content: center; /* 세로 가운데 정렬 */
        flex-direction: column; /* 세로 배치 */
        position: relative;

        /* 컨택트 링크 텍스트 스타일링 */
        .text {
            font-size: 3vw; /* 반응형 크기 */
            line-height: 1;
            font-weight: 900;
            text-transform: uppercase; /* 대문자로 변환 */
            text-decoration: underline; /* 밑줄 */
            text-align: center; /* 가운데 정렬 */
            position: relative;
            z-index: 100; /* 다른 요소들 위에 표시 */
            transition: all 0.3s; /* 애니메이션 효과 */
            cursor: all-scroll; /* 커서 스타일 */

            /* 태블릿에서의 텍스트 스타일 */
            @media (max-width: 800px) and (min-width: 481px) {
                font-size: 28px;
                padding: 0 20px;
            }
            
            /* 모바일에서의 텍스트 스타일 */
            @media (max-width: 480px){ 
                font-size: 20px; /* 모바일에서의 고정 크기 */
                padding: 0 16px; /* 좌우 여백 */
                word-break: break-all; /* 긴 텍스트 줄바꿈 처리 */
                line-height: 1.2;
            }
            
            /* 아주 작은 화면 */
            @media (max-width: 320px) {
                font-size: 18px;
                padding: 0 12px;
            }
        }
    }
    /* 장식용 라인 스타일링 */
    .contact__lines {
        width: 100%; /* 전체 너비 차지 */

        /* 각 라인 스타일링 */
        .line {
            display: block;
            width: 100%; /* 전체 너비 차지 */
            height: 1px; /* 기본 높이 */
            background-color: var(--black); /* 배경색 */
            margin-bottom: 0.5vw; /* 하단 여백 */

            /* 각 라인마다 다른 높이로 점진적 패턴 생성 */
            &:nth-child(1){
                height: 25px; /* 가장 두꿈 */
            }
            &:nth-child(2){
                height: 17px;
            }
            &:nth-child(3){
                height: 13px;
            }
            &:nth-child(4){
                height: 9px;
            }
            &:nth-child(5){
                height: 5px;
            }
            &:nth-child(6){
                height: 2px;
            }
            &:nth-child(7){
                height: 1px; /* 가장 얼음 */
            }
        }

        /* 상단 라인 특별 스타일 */
        &.top {
            .line {
                margin-top: 0.5vw; /* 상단 여백 */
                margin-bottom: 0; /* 하단 여백 제거 */
                display: none; /* 기본적으로 숨김 */

                /* 모바일에서는 표시하되 타이틀과 겹치지 않도록 조정 */
                @media (max-width: 800px){ 
                    display: block;
                    margin-top: 20px; /* 모바일에서 더 많은 상단 여백 */
                }
                
                /* 매우 작은 화면에서는 더 많은 여백 */
                @media (max-width: 480px){ 
                    margin-top: 30px; /* 더 큰 여백으로 타이틀과 완전 분리 */
                }

                /* 상단 라인은 반대 순서로 높이 배치 */
                &:nth-child(1){
                    height: 1px; /* 가장 얼음 */
                }
                &:nth-child(2){
                    height: 2px;
                }
                &:nth-child(3){
                    height: 5px;
                }
                &:nth-child(4){
                    height: 9px;
                }
                &:nth-child(5){
                    height: 13px;
                }
                &:nth-child(6){
                    height: 17px;
                }
                &:nth-child(7){
                    height: 25px; /* 가장 두꿈 */
                }
            }
        }
    }
}
</style>