<script setup lang="ts">
  import { computed } from 'vue'
  import type { ResultPacket } from '@/types/data.models'

  interface Props {
    content: ResultPacket
  }

  const props = defineProps<Props>()

  const hasValidDemoVideo = computed(() => {
    return props.content.demoVideo && props.content.demoVideo.trim().length > 0
  })
</script>

<template>
  <div class="results-container">
    <span class="result status">
      <label class="result-label">Status: </label>
      {{ (content as ResultPacket).status }}
    </span>
    <span class="result team-size">
      <label class="result-label">Team Size: </label>
      {{ (content as ResultPacket).teamSize }}
    </span>
    <span class="result duration">
      <label class="result-label">Duration: </label>
      {{ (content as ResultPacket).startDate }} - {{ (content as ResultPacket).endDate }}
    </span>
    <div v-if="hasValidDemoVideo" class="demoVideo">
      <h3>Demo Video</h3>
      <video
        controls
        width="50%"
        :poster="(content as ResultPacket).thumbnail"
      >
        <source :src="(content as ResultPacket).demoVideo" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<style scoped>
  .results-container {
    display: flex;
    gap: 80px;
  }
</style>
