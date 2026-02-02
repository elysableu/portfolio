<script setup lang="ts">
import type { SoonFeature } from '@/types/data.models';

  interface Props {
    sContent: SoonFeature
  }

  defineProps<Props>()
</script>

<template>
 <div class="soon-container glass-card-inner">
    <span class="s-icon-wrapper">
      <img
        v-if="sContent.content.icon"
        :alt="sContent.title"
        :src="sContent.content.icon"
        class="s-icon"
      />
    </span>
    <span class="s-details-container">
      <div class="s-title">
        {{ sContent.title }}
      </div>
      <div class="s-tagline">
        {{ sContent.content.tagline }}
      </div>
    </span>
  </div>
</template>

<style scoped>
  .soon-container {
    display: flex;
    border-radius: 18px;
    padding: 10px;
  }

  .s-icon-wrapper {

  }

  .s-icon {

  }

  .s-details-container {

  }

  .s-title {

  }

  .s-tagline {

  }
</style>
