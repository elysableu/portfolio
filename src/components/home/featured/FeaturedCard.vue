<script setup lang="ts">
import type { NewFeature, SoonFeature } from '@/types/data.models';

  interface Props {
    cardContent: SoonFeature | NewFeature
  }

  const props = defineProps<Props>()

  const isNew = (content: SoonFeature | NewFeature): content is NewFeature => {
    return 'dateCompleted' in content
  }

  const isSoon = (content: SoonFeature | NewFeature): content is SoonFeature => {
    return 'dateAdded' in content
  }
</script>

<template>
 <div class="ns-card-container glass-card-inner">
    <span class="ns-icon-wrapper">
      <img
        v-if="cardContent.content.icon"
        :alt="cardContent.title"
        :src="cardContent.content.icon"
        class="ns-icon"
      />
    </span>

    <span class="ns-details-container">
      <div class="ns-banner">
        <h4>{{ cardContent.title }}</h4>
      </div>
      <div class="ns-tagline">
        {{ cardContent.content.tagline }}
      </div>
    </span>
    <div
      v-if="isNew(cardContent)"
      class="ns-current ns-status">
     {{ cardContent.dateCompleted }}
    </div>
    <div
      v-else-if="isSoon(cardContent) && cardContent.content.status"
      class="ns-current ns-date"
    >
      {{ cardContent.content.status }}
    </div>
  </div>
</template>

<style scoped>
  .ns-card-container {
    width: 80%;
    height: 150px;
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    padding: 10px;
  }

  .ns-icon-wrapper {

  }

  .ns-icon {

  }

  .ns-details-container {
    display: flex;
    flex-direction: column;

  }

  .ns-title {
    font-size: 18px;
    font-weight: bold;
    padding: 5px;
  }

  .ns-tagline {
    font-family: 'Dosis';

  }

  .ns-current {

  }

  .ns-date {
     font-family: 'Dosis';
  }

  .ns-status {
     font-family: 'Dosis';
  }
</style>
