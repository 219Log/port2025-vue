<script setup>
// 스킬 섹션에 표시할 데이터를 가져옵니다
import { skillText } from "@/constants/index";
</script>

<template>
    <!-- 스킬 섹션: 도전과 스킬을 소개하는 섹션 -->
    <section id="skill">
        <div class="skill__inner">
            <!-- 섹션 제목 -->
            <h2 class="skill__title">
                Challenge <em>나의 도전</em>
            </h2>
            <!-- 스킬 설명 리스트 -->
            <div class="skill__desc">
                <!-- 각 스킬 항목을 반복하여 표시 -->
                <div v-for="(text, key) in skillText" :key="key">
                    <span>{{ key + 1 }}.</span>
                    <h3>{{ text.title }}</h3>
                    <p v-html="text.desc.replace(/\n/g, '<br>')"></p>
                </div>
            </div>
        </div>
    </section>
</template> 

<style lang="scss">
/* 스킬 섹션 내부 컨테이너 */
.skill__inner {
  padding: 16px;
  display: flex; /* 플렉스박스 레이아웃 */
  justify-content: space-between; /* 제목과 내용을 양쪽에 배치 */

  /* 모바일 화면에서의 레이아웃 */
  @media (max-width: 800px){ 
    flex-direction: column; /* 모바일에서는 세로로 정렬 */
  }

  /* 스킬 섹션 제목 스타일링 */
  .skill__title {
    position: sticky; /* 스크롤 시 제목을 고정 */
    top: 70px;
    left: 0;
    width: 48%;
    height: 5vw;
    font-size: 4vw;
    font-weight: 900;
    line-height: 1.6;
    font-family: var(--mainKor-font);
    text-transform: uppercase;
    color: var(--black100);
    border-bottom: 0.4vw solid var(--black100); /* 하단 구분선 */

    /* 모바일 화면에서의 제목 스타일 */
    @media (max-width: 800px){ 
      width: 100%;
      margin-bottom: 10vw;
      font-size: 30px;
      height: auto;
      top: 68px;
      background-color: var(--mainBg-color); /* 모바일에서 배경색 추가 */
    }

    /* 제목 내 강조 텍스트 */
    em {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 2;
    }
  }

  /* 스킬 설명 컨테이너 */
  .skill__desc {
    width: 50%; /* 전체 너비의 절반 차지 */

    /* 모바일 화면에서의 너비 */
    @media (max-width: 800px){ 
      width: 100%; /* 모바일에서는 전체 너비 차지 */
    }

    /* 번호 스타일링 */
    span {
      font-size: 5vw; /* 반응형 크기 */
      line-height: 1.3;
      font-weight: 900;
      font-family: var(--mainNum-font); /* 숫자용 폰트 */

      /* 태블릿에서의 번호 크기 */
      @media (max-width: 800px) and (min-width: 481px) { 
        font-size: 15vw;
      }
      
      /* 모바일에서의 번호 크기 */
      @media (max-width: 480px){ 
        font-size: 18vw; /* 모바일에서 더 크게 표시 */
      }
      
      /* 아주 작은 화면 */
      @media (max-width: 320px) {
        font-size: 15vw;
      }
    }
    /* 스킬 제목 스타일링 */
    h3 {
      font-size: 1.5rem;
      text-decoration: underline; /* 밑줄 추가 */
      text-underline-position: under; /* 밑줄 위치 조정 */
      margin-bottom: 1vw;
    }
    /* 스킬 설명 텍스트 */
    p {
      margin-bottom: 30vh; /* 항목 간 여백 확보 */
      font-size: 1.1rem;
      line-height: 1.7;
      white-space: pre-line; /* 개행 유지 */
      
      /* 섹션 제목 스타일 (개행 후 텍스트) */
      br + br + :not(br) {
        font-size: 1.3rem;
        font-weight: 700;
        margin-top: 2rem;
        margin-bottom: 1rem;
        display: block;
      }
    }
  }
}
</style>