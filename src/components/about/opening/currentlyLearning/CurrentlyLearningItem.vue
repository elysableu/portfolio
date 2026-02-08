<script setup lang="ts">
  interface Props {
    currentlyLearning: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="currently-learning-item">
    {{ currentlyLearning }}
  </div>
</template>

<style scoped>
  .currently-learning-item {
    background-color: var(--color-black);
    padding: var(--spacing-xs);
    font-size: var(--font-size-sm);
    font-weight: bold;
    border-radius: var(--radius-xs);
    text-align: center;
  }
</style>
