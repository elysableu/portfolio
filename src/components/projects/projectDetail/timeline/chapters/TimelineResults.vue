<script setup lang="ts">
  import { computed } from 'vue'
  import { getAssetPath } from '@/utils/assets'
  import type { ResultPacket } from '@/types/data.models'
  import { formatDuration } from '@/utils/format'

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
      {{(content as ResultPacket).teamSize > 1 ? ` ${(content as ResultPacket).teamSize} People` : ` ${(content as ResultPacket).teamSize} Person` }}
    </span>
    <span class="result duration">
      <label class="result-label">Duration: </label>
      {{ formatDuration((content as ResultPacket).startDate, (content as ResultPacket).endDate) }}
    </span>
    <div v-if="hasValidDemoVideo" class="demoVideo">
      <h3>Demo Video</h3>
      <video
        controls
        width="50%"
        :poster="(content as ResultPacket).thumbnail"
      >
        <source :src="getAssetPath(content.demoVideo || '')" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<style scoped>
  .results-container {
    display: flex;
    gap: 80px;
    justify-content: center;
    align-items: center;
  }

  .result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  .result-label {
    width: 100%;
    border-bottom: 2px solid #49CCA4;
    text-align: center;
    font-size: 24px !important;
  }

  .status {

  }

  .team-size {

  }

  .duration {

  }
</style>
