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
  /* ===== Base / desktop-first styles go above the breakpoints ===== */
  .currently-learning-item {
    background-color: var(--color-black);
    padding: var(--spacing-xs);
    font-size: var(--font-size-sm);
    font-weight: bold;
    border-radius: var(--radius-xs);
    text-align: center;
  }

   /* ===== Tablet portrait / mobile switch ↓ ===== */
  @media (max-width: 768px) {

  }

  /* ===== Phones ↓ ===== */
  @media (max-width: 480px) {
    .currently-learning-item {
      font-size: var(--font-size-xs);
    }
  }
</style>
