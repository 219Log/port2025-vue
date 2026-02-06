<script setup>
import { aiProjectText } from "@/constants/index";
import { ref } from "vue";

const activeCard = ref(null);

const toggleCard = (index) => {
  activeCard.value = activeCard.value === index ? null : index;
};
</script>

<template>
  <section id="aiproject">
    <div class="aiproject__inner">
      <h2 class="aiproject__title">
        AI Projects <em>AI/GPU 프로젝트(2025-05 ~ 2026~)</em>
      </h2>

      <div class="aiproject__spacer"></div>

      <div class="aiproject__grid">
        <div
          v-for="(project, key) in aiProjectText"
          :key="key"
          class="aiproject__card"
          :class="{ active: activeCard === key }"
          :style="{ '--card-color': project.color, '--card-gradient': project.gradient }"
          @click="toggleCard(key)"
        >
          <!-- 카드 상단: 번호 + 카테고리 -->
          <div class="card__header">
            <span class="card__num">{{ project.num }}</span>
            <span class="card__category">{{ project.category }}</span>
          </div>

          <!-- 비주얼 아이콘 영역 -->
          <div class="card__visual">
            <div class="card__icon-bg" :style="{ background: project.gradient }"></div>
            <span class="card__icon-text">{{ project.title.charAt(0) }}</span>
          </div>

          <!-- 카드 본문 -->
          <div class="card__body">
            <h3 class="card__title">{{ project.title }}</h3>
            <p class="card__subtitle">{{ project.subtitle }}</p>

            <!-- 기술 스택 뱃지 -->
            <div class="card__techstack">
              <span
                v-for="(tech, tKey) in project.techStack.slice(0, 6)"
                :key="tKey"
                class="tech-badge"
              >
                {{ tech }}
              </span>
              <span v-if="project.techStack.length > 6" class="tech-badge more">
                +{{ project.techStack.length - 6 }}
              </span>
            </div>

            <!-- 설명 (확장 시 표시) -->
            <div class="card__detail" v-show="activeCard === key">
              <p class="card__desc">{{ project.desc }}</p>

              <div class="card__features">
                <h4>주요 기능</h4>
                <ul>
                  <li v-for="(feature, fKey) in project.features" :key="fKey">
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div class="card__arch">
                <h4>Architecture</h4>
                <div class="arch-flow">{{ project.architecture }}</div>
              </div>
            </div>
          </div>

          <!-- 카드 하단 -->
          <div class="card__footer">
            <span class="card__expand-hint">
              {{ activeCard === key ? '접기' : '자세히 보기' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/mixin" as *;

#aiproject {
  padding: 120px 0 80px;
  position: relative;
}

.aiproject__inner {
  padding: 0 16px;
  max-width: 1400px;
  margin: 0 auto;
}

.aiproject__title {
  position: sticky;
  top: 70px;
  z-index: 10;
  font-size: 4vw;
  font-weight: 900;
  line-height: 1.2;
  font-family: var(--mainEng-font);
  text-transform: uppercase;
  color: var(--text-primary);
  background: var(--mainBg-color);
  border-bottom: 3px solid var(--primary-color);
  padding: 20px 16px;

  @media (max-width: 800px) {
    font-size: 2rem;
    top: 60px;
    padding: 16px;
  }

  em {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2;
    display: block;
  }
}

.aiproject__spacer {
  height: 60px;

  @media (max-width: 800px) {
    height: 40px;
  }
}

.aiproject__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (min-width: 801px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.aiproject__card {
  background: var(--cardBg-color);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 28px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--card-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--card-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--card-color);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3), 0 0 30px color-mix(in srgb, var(--card-color) 20%, transparent);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 0.03;
    }

    .card__icon-bg {
      transform: scale(1.1) rotate(5deg);
    }

    .card__num {
      color: var(--card-color);
    }
  }

  &.active {
    border-color: var(--card-color);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 40px color-mix(in srgb, var(--card-color) 15%, transparent);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 0.05;
    }
  }

  // 모든 자식 요소의 z-index
  > * {
    position: relative;
    z-index: 1;
  }
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card__num {
  font-size: 2.5rem;
  font-weight: 900;
  font-family: var(--mainNum-font);
  color: var(--text-muted);
  line-height: 1;
  transition: color 0.3s ease;
}

.card__category {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--card-color);
  background: color-mix(in srgb, var(--card-color) 12%, transparent);
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid color-mix(in srgb, var(--card-color) 25%, transparent);
}

.card__visual {
  position: relative;
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__icon-bg {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  opacity: 0.15;
  transition: transform 0.4s ease;
}

.card__icon-text {
  font-size: 1.8rem;
  font-weight: 900;
  font-family: var(--mainEng-font);
  color: var(--card-color);
  z-index: 1;
}

.card__body {
  flex: 1;
}

.card__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 6px;
  font-family: var(--mainEng-font);
  letter-spacing: -0.02em;
}

.card__subtitle {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
  font-family: var(--mainKor-font);
  line-height: 1.5;
}

.card__techstack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.tech-badge {
  font-size: 0.72rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 12px;
  background: var(--subBg200);
  color: var(--text-secondary);
  border: 1px solid var(--subBg300);
  font-family: var(--code-font);
  letter-spacing: 0.02em;
  transition: all 0.2s ease;

  &:hover {
    background: var(--subBg300);
    color: var(--text-primary);
  }

  &.more {
    background: transparent;
    border-color: var(--card-color);
    color: var(--card-color);
  }
}

.card__detail {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--subBg300);
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card__desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-family: var(--mainKor-font);
}

.card__features {
  margin-bottom: 20px;

  h4 {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--card-color);
    margin-bottom: 10px;
    font-family: var(--mainEng-font);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 8px;
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.5;
    font-family: var(--mainKor-font);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--card-color);
      opacity: 0.7;
    }
  }
}

.card__arch {
  h4 {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--card-color);
    margin-bottom: 10px;
    font-family: var(--mainEng-font);
  }
}

.arch-flow {
  font-family: var(--code-font);
  font-size: 0.82rem;
  color: var(--text-secondary);
  background: var(--subBg100);
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid var(--subBg300);
  letter-spacing: 0.5px;
  overflow-x: auto;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.72rem;
    padding: 10px 12px;
  }
}

.card__footer {
  margin-top: 16px;
  text-align: center;
}

.card__expand-hint {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--mainKor-font);
  transition: color 0.2s ease;

  .aiproject__card:hover & {
    color: var(--card-color);
  }
}
</style>
