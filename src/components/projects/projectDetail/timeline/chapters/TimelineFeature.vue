<script setup lang="ts">
  import type { Feature } from '@/types/data.models'

  interface Props {
    featureData: Feature
  }

  defineProps<Props>()
</script>

<template>
  <div class="feature-container">
    <h4>{{ featureData.title }}</h4>
    <p>{{ featureData.description }}</p>
  </div>
</template>

<style scoped>
  .feature-container {
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border-left: 4px solid #49CCA4;
    border-top: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
  }

  .feature-container h4 {
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
  }

  .feature-container p {
    line-height: 1.6;
    color: white;
    font-size: 18px;
  }
</style>
