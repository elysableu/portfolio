<script setup lang="ts">
  import { toRefs, computed } from 'vue'
  import type { ChapterType, Feature, Challenge, VisionPacket, ResultPacket } from '@/types/data.models'
  import TimelineFeature from './TimelineFeature.vue';

  interface Props {
  chapterData: ChapterType
  }

  const props = defineProps<Props>()

  const { chapterNum, chapterTitle, chapterSubtitle, chapterContent } = toRefs(props.chapterData)

  const hasValidDemoVideo = computed(() => {
    if (chapterNum.value === '06' && typeof chapterContent.value === 'object' && !Array.isArray(chapterContent.value)) {
      const packet = chapterContent.value as ResultPacket
      return packet.demoVideo && packet.demoVideo.trim().length > 0
    }
    return false
  })
</script>

<template>
  <div class="chapter-container">
    <div class="chapter-num-wrapper">
      <div class="chapter-num">{{ chapterNum }}</div>
      <div class="chapter-line"></div>
    </div>
    <div class="chapter-content-container">
      <h2>{{ chapterTitle }}</h2>
      <h3>{{ chapterSubtitle }}</h3>
      <div class="chapter-content glass-card-inner">

        <div v-if="chapterNum === '01'" class="idea">
          {{ chapterContent }}
        </div>

        <div v-if="chapterNum === '02'" class="vision">
          <span v-if="(chapterContent as VisionPacket).projectPlan">
            <img alt="projectPlan" :src="(chapterContent as VisionPacket).projectPlan"/>
          </span>
          {{ (chapterContent as VisionPacket).description }}
        </div>

        <div v-else-if="chapterNum === '03'">
          <div v-for="(item, index) in (chapterContent as Feature[])" :key="index">
            <TimelineFeature :featureData="item" />
          </div>
        </div>

        <div v-else-if="chapterNum === '04'" class="technologies">
          <ul>
            <li v-for="(item, index) in (chapterContent as string[])" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <div v-else-if="chapterNum === '05'" class="challenge-table">
          <table>
            <thead>
              <tr>
                <th>Challenge</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in (chapterContent as Challenge[])" :key="index">
                <td>{{ item.challenge }}</td>
                <td>{{ item.solution }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-else-if="chapterNum === '06' && typeof chapterContent === 'object' && !Array.isArray(chapterContent)" class="results">
          <template v-if="'status' in chapterContent">
            <span class="status">{{ (chapterContent as ResultPacket).status }}</span>
            <span class="team-size">{{ (chapterContent as ResultPacket).teamSize }}</span>
            <span class="start-end">{{ (chapterContent as ResultPacket).startDate }} - {{ (chapterContent as ResultPacket).endDate }}</span>
            <div v-if="hasValidDemoVideo" class="demoVideo">
              <h3>Demo Video</h3>
              <video
                controls
                width="50%"
                :poster="(chapterContent as ResultPacket).thumbnail"
              >
                <source :src="(chapterContent as ResultPacket).demoVideo" type="video/mp4">
              </video>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .chapter-container {
    margin: 2rem;
    margin-bottom: 3rem;
    position: relative;
    padding-left: 5rem;
  }

  .chapter-num-wrapper {
    position: absolute;
    left: -40px;
    top: 0;
  }

  .chapter-num {
    width: 6rem;
    height: 6rem;
    background: linear-gradient(135deg, var(--color-secondary), var(--color-primary-dark));
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: 'Metamorphous';
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 2;
  }

  .chapter-line {

  }

  .chapter-content-container {
    width: 100%;
  }

  .chapter-content-container h2 {
    font-size: 34px;
  }

  .chapter-content-container h3 {
    font-size: 24px;
    padding-bottom: 20px;
  }

  .chapter-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 20px;
    padding: calc(var(--spacing-lg) + 10px);
    border-radius: 20px;
    z-index: 2;
    margin-bottom: var(--spacing-lg);
  }

  .timeline-text {

  }

  .idea {

  }

  .vision {

  }

  .timeline-list {
    padding: 0px 10px;
  }

  .timeline-list li {
    padding: 3px;
  }

  .features {

  }

  .technologies {

  }

  .challenge-table {

  }

  .results {

  }
</style>
