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
    padding: var(--spacing-lg);
    background: var(--glass-dark-bg-subtle);
    border-radius: var(--radius-lg);
    border-left: 4px solid var(--color-accent-teal);border-left: 4px solid #49CCA4;
    border-top: 0.5px solid var(--color-white);
    border-right: 0.5px solid var(--color-white);
    border-bottom: 0.5px solid var(--color-white);
  }

  .feature-container h4 {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-sm);
  }

  .feature-container p {
    line-height: 1.6;
    color: white;
    font-size: var(--font-size-base);
  }
</style>
