<script setup lang="ts">
  import { toRefs } from 'vue'
  import type { TimelineType } from '@/types/data.models'

  import TimelineChapter from './chapters/TimelineChapter.vue'

  interface Props {
    timeline: TimelineType
  }

  const props = defineProps<Props>()

  const {motivation, fullDescription, features, projectPlan, technologies, challenges, status, teamSize, startDate, endDate, demoVideo, thumbnail} = toRefs(props.timeline)

  const chapters = {
    chapterOne: {
      chapterNum: "01",
      chapterTitle: "The Idea",
      chapterSubtitle: "Where It All Began",
      chapterContent: motivation.value
    },
    chapterTwo: {
      chapterNum: "02",
      chapterTitle: "The Vision",
      chapterSubtitle: "What I Set Out To Build",
      chapterContent: {
        description: fullDescription.value,
        projectPlan: projectPlan.value
      }
    },
    chapterThree: {
      chapterNum: "03",
      chapterTitle: "The Features",
      chapterSubtitle: "What Makes It Special",
      chapterContent: features.value
    },
    chapterFour: {
      chapterNum: "04",
      chapterTitle: "The Tech Stack",
      chapterSubtitle: "Tools and Technologies",
      chapterContent: technologies.value
    },
    chapterFive: {
      chapterNum: "05",
      chapterTitle: "The Challenges",
      chapterSubtitle: "Obstacles and Solutions",
      chapterContent: challenges.value
    },
    chapterSix: {
      chapterNum: "06",
      chapterTitle: "The Result",
      chapterSubtitle: "",
      chapterContent: {
        status: status.value,
        teamSize: teamSize.value,
        startDate: startDate.value,
        endDate: endDate.value,
        demoVideo: demoVideo?.value,
        thumbnail: thumbnail?.value
      }
    }
  }

</script>

<template>
  <div class="timeline-container">
    <div class="chapter">
      <TimelineChapter :chapterData="chapters.chapterOne"/>
    </div>
    <div class="chapter">
      <TimelineChapter :chapterData="chapters.chapterTwo"/>
    </div>
    <div class="chapter">
      <TimelineChapter :chapterData="chapters.chapterThree"/>
    </div>
    <div class="chapter">
      <TimelineChapter :chapterData="chapters.chapterFour"/>
    </div>
    <div class="chapter">
      <TimelineChapter :chapterData="chapters.chapterFive"/>
    </div>
    <div class="chapter">
      <TimelineChapter :chapterData="chapters.chapterSix"/>
    </div>
  </div>
</template>

<style scoped>
  .timeline-container {

  }

  .chapter {
    margin: var(--spacing-3xl);
  }
</style>
