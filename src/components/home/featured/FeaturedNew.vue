<script setup lang="ts">
import type { NewFeature } from '@/types/data.models';

  interface Props {
    nContent: NewFeature
  }

  defineProps<Props>()
</script>

<template>
  <div class="new-container glass-card-inner">
    <span class="n-icon-wrapper">
      <img
        v-if="nContent.content.icon"
        :alt="nContent.title"
        :src="nContent.content.icon"
        class="n-icon"
      />
    </span>
    <span class="n-details-container">
      <div class="n-title">
        {{ nContent.title }}
      </div>
      <div class="n-tagline">
        {{ nContent.content.tagline }}
      </div>
    </span>
    <div>

    </div>
  </div>
</template>

<style scoped>
  .new-container {
    display: flex;
    border-radius: 18px;
    padding: 10px;
  }

  .n-icon-wrapper {

  }

  .n-icon {

  }

  .n-details-container {

  }

  .n-banner {

  }

  .n-title {

  }

  .n-tagline {

  }
</style>
