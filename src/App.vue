<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router"
import { onMounted, onBeforeUnmount, nextTick } from "vue"

// GSAP + ScrollTrigger
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

defineOptions({ name: "App" })


function initGsap() {
  const horSection = gsap.utils.toArray(".port__item")
  if (!horSection.length) return

  // 기존 로직 그대로 이식
  gsap.to(horSection, {
    xPercent: -120 * (horSection.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#port",
      start: "top 56px",
      end: "+=3000",
      pin: true,
      scrub: 1,
      markers: false,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  })
}

onMounted(async () => {
  // 뷰 렌더 완료 후 DOM 기반 애니메이션 초기화
  await nextTick()
  initGsap()

  // 이미지 로드 등 후 레이아웃 변동 반영
  window.addEventListener("load", ScrollTrigger.refresh)
})

onBeforeUnmount(() => {
  window.removeEventListener("load", ScrollTrigger.refresh)
  // GSAP 트리거 정리
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>
