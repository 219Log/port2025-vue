<script setup>
import { skillCerts, skillSummary, skillTechStack, skillExperience } from "@/constants/index";
import { ref } from "vue";

const activeExp = ref(null);
const toggleExp = (index) => {
  activeExp.value = activeExp.value === index ? null : index;
};
</script>

<template>
  <section id="skill">
    <div class="skill__inner">
      <h2 class="skill__title">
        Cover Letter <em>이력사항</em>
      </h2>

      <div class="skill__content">
        <!-- 자격증 + 요약 -->
        <div class="skill__row">
          <!-- 자격증 -->
          <div class="skill__block certs-block">
            <h3 class="block__label">Certifications</h3>
            <div class="certs-grid">
              <div class="cert-card" v-for="(cert, key) in skillCerts" :key="key">
                <span class="cert-icon">{{ cert.icon }}</span>
                <div class="cert-info">
                  <span class="cert-name">{{ cert.name }}</span>
                  <span class="cert-date">{{ cert.date }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 요약 -->
          <div class="skill__block summary-block">
            <h3 class="block__label">Summary</h3>
            <ul class="summary-list">
              <li v-for="(item, key) in skillSummary" :key="key">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- 기술 스택 -->
        <div class="skill__block tech-block">
          <h3 class="block__label">Tech Stack</h3>
          <div class="tech-categories">
            <div class="tech-category" v-for="(techs, category) in skillTechStack" :key="category">
              <span class="tech-category-name">{{ category }}</span>
              <div class="tech-badges">
                <span class="tech-badge" v-for="(tech, tKey) in techs" :key="tKey">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 업무 경험 -->
        <div class="skill__block exp-block">
          <h3 class="block__label">Experience</h3>
          <div class="exp-timeline">
            <div
              class="exp-card"
              v-for="(exp, key) in skillExperience"
              :key="key"
              :class="{ active: activeExp === key }"
              :style="{ '--exp-color': exp.color }"
              @click="toggleExp(key)"
            >
              <div class="exp-header">
                <div class="exp-dot"></div>
                <h4 class="exp-title">{{ exp.title }}</h4>
                <span class="exp-toggle">{{ activeExp === key ? '−' : '+' }}</span>
              </div>
              <div class="exp-body" v-show="activeExp === key">
                <ul>
                  <li v-for="(task, tKey) in exp.tasks" :key="tKey">{{ task }}</li>
                </ul>
                <div v-if="exp.integrations" class="exp-integrations">
                  <span class="int-label">연동 솔루션</span>
                  <ul>
                    <li v-for="(int_, iKey) in exp.integrations" :key="iKey">{{ int_ }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#skill {
  padding: 120px 0 80px;
}

.skill__inner {
  padding: 0 16px;
  max-width: 1400px;
  margin: 0 auto;
}

.skill__title {
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
  margin-bottom: 60px;
  padding: 20px 16px;

  @media (max-width: 800px) {
    font-size: 2rem;
    top: 60px;
    margin-bottom: 40px;
    padding: 16px;
  }

  em {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2;
    display: block;
  }
}

.skill__content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.skill__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}

.skill__block {
  background: var(--cardBg-color);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 28px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
}

.block__label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary-color);
  margin-bottom: 20px;
  font-family: var(--mainEng-font);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--subBg300);
}

/* 자격증 */
.certs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.cert-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--subBg100);
  border-radius: 12px;
  border: 1px solid var(--subBg300);
  transition: all 0.2s ease;

  &:hover {
    background: var(--subBg200);
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
}

.cert-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.cert-info {
  display: flex;
  flex-direction: column;
}

.cert-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  font-family: var(--mainKor-font);
}

.cert-date {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-family: var(--code-font);
}

/* 요약 */
.summary-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    position: relative;
    padding-left: 20px;
    font-size: 0.92rem;
    color: var(--text-secondary);
    line-height: 1.6;
    font-family: var(--mainKor-font);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--primary-color);
      opacity: 0.5;
    }
  }
}

/* 기술 스택 */
.tech-categories {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tech-category {
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
}

.tech-category-name {
  flex-shrink: 0;
  width: 130px;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-muted);
  font-family: var(--mainEng-font);
  padding-top: 5px;

  @media (max-width: 600px) {
    width: auto;
  }
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-badge {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 20px;
  background: var(--subBg200);
  color: var(--text-secondary);
  border: 1px solid var(--subBg300);
  font-family: var(--code-font);
  transition: all 0.2s ease;

  &:hover {
    background: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
  }
}

/* 업무 경험 */
.exp-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 20px;
    bottom: 20px;
    width: 2px;
    background: var(--subBg300);
  }
}

.exp-card {
  position: relative;
  margin-left: 32px;
  background: var(--subBg100);
  border: 1px solid var(--subBg300);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: var(--exp-color);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover, &.active {
    border-color: var(--exp-color);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }
}

.exp-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
}

.exp-dot {
  position: absolute;
  left: -27px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--exp-color);
  border: 2px solid var(--cardBg-color);
  z-index: 1;
}

.exp-title {
  flex: 1;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  font-family: var(--mainKor-font);
}

.exp-toggle {
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--text-muted);
  font-family: var(--code-font);
}

.exp-body {
  padding: 0 20px 16px;
  animation: slideDown 0.3s ease;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 6px;
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.6;
    font-family: var(--mainKor-font);

    &::before {
      content: '›';
      position: absolute;
      left: 0;
      color: var(--exp-color);
      font-weight: 700;
    }
  }
}

.exp-integrations {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--subBg300);

  .int-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-bottom: 8px;
    display: block;
    font-family: var(--mainKor-font);
  }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
