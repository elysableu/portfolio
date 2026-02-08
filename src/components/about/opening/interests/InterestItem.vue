<script setup lang="ts">
  interface Props {
    interest: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="interest-item">
    {{ interest }}
  </div>
</template>

<style scoped>
  .interest-item {
    background-color: var(--color-black);
    padding: var(--spacing-xs);
    font-size: var(--font-size-sm);
    font-weight: bold;
    border-radius: var(--radius-xs);
    text-align: center;
  }
</style>
