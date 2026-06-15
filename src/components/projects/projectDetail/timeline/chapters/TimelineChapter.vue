<script setup lang="ts">
  import { toRefs } from 'vue'
  import type { ChapterType, Feature, Technologies, Challenge, VisionPacket } from '@/types/data.models'
  import { getAssetPath } from '@/utils/assets'
  import TimelineFeature from './TimelineFeature.vue'
  import TimelineTechnologies from './TimelineTechnologies.vue'
  import TimelineChallenges from './TimelineChallenges.vue'
  import TimelineResults from './TimelineResults.vue'

  interface Props {
  chapterData: ChapterType
  }

  const props = defineProps<Props>()

  const { chapterNum, chapterTitle, chapterSubtitle, chapterContent } = toRefs(props.chapterData)
</script>

<template>
  <div class="chapter-container">
    <div class="chapter-num-wrapper">
      <div class="chapter-num">{{ chapterNum }}</div>
    </div>
    <div class="chapter-content-container">
      <div class="chapter-title-wrapper">
        <h2>{{ chapterTitle }}</h2>
        <h3>{{ chapterSubtitle }}</h3>
      </div>
      <div class="chapter-content glass-card-inner">

        <div v-if="chapterNum === '01'" class="idea">
          {{ chapterContent }}
        </div>

        <div v-if="chapterNum === '02'" class="vision">
          <span v-if="(chapterContent as VisionPacket).projectPlan">
            <img alt="projectPlan" :src="getAssetPath((chapterContent as VisionPacket).projectPlan)"/>
          </span>
          {{ (chapterContent as VisionPacket).description }}
        </div>

        <div v-else-if="chapterNum === '03'" class="features">
          <div v-for="(item, index) in (chapterContent as Feature[])" :key="index">
            <TimelineFeature :featureData="item" />
          </div>
        </div>

        <div v-else-if="chapterNum === '04'" class="technologies">
          <TimelineTechnologies :content="(chapterContent as Technologies)" />
        </div>

        <div v-else-if="chapterNum === '05'" class="challenge-table">
          <TimelineChallenges :content="(chapterContent as Challenge[])"/>
        </div>

        <div v-else-if="chapterNum === '06' && typeof chapterContent === 'object' && !Array.isArray(chapterContent)" class="results">
          <template v-if="'status' in chapterContent">
            <TimelineResults :content="chapterContent"/>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* ===== Base / desktop-first styles go above the breakpoints ===== */
  .chapter-container {
    margin: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
    position: relative;
    padding-left: var(--spacing-4xl);
  }

  .chapter-num-wrapper {
    position: absolute;
    left: -2.5rem;
    top: 0;
  }

  .chapter-num {
   width: var(--spacing-5xl);
    height: var(--spacing-5xl);
    background: linear-gradient(135deg, var(--color-secondary), var(--color-primary-dark));
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-hlg);
    font-weight: bold;
    font-size: var(--font-size-xl);
    font-family: 'Metamorphous';
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 2;
  }

  .chapter-content-container {
    width: 100%;
    min-width: 0;
  }

  .chapter-title-wrapper {
    padding-top: 1rem;
  }

  .chapter-title-wrapper h2 {
    font-size: var(--font-size-3xl);
  }

  .chapter-title-wrapper h3 {
    font-family: 'Dosis';
    font-size: var(--font-size-xl);
    padding-bottom: var(--spacing-lg);
  }

  .chapter-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
    font-size: var(--font-size-lg);
    padding: calc(var(--spacing-lg) + var(--spacing-2sm));
    border-radius: var(--radius-3xl);
    z-index: 2;
    margin-bottom: var(--spacing-lg);
  }

  .timeline-list {
    padding: 0 var(--spacing-2sm);
  }

  .timeline-list li {
    padding: var(--spacing-xs);
  }

  .features {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  .technologies {
    width: 100%;
  }

  /* ===== Large desktop ↓ ===== */
  @media (max-width: 1200px) {

  }

  /* ===== Tablet landscape ↓ ===== */
  @media (max-width: 1024px) {

  }

  /* ===== Tablet portrait / mobile switch ↓ ===== */
  @media (max-width: 768px) {
    .chapter-num-wrapper {
      left: 5.5rem;
    }

    .chapter-title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .features {
      grid-template-columns: 1fr;
    };
  }

  /* ===== Phones ↓ ===== */
  @media (max-width: 480px) {
    .chapter-container {
      margin: var(--spacing-sm);
      padding-left: var(--spacing-2xl);
    }

    .chapter-num-wrapper {
      left: 7rem;
    }

    .chapter-title-wrapper {
       margin-left: 3.5rem;
    }

    .chapter-title-wrapper h2 {
      font-size: var(--font-size-xl)
    }

    .chapter-title-wrapper h3 {
      font-size: var(--font-size-lg)
    }

    .chapter-content {

    }


  }
</style>
