<script setup lang="ts">
interface Props {
  introduction: string
}

defineProps<Props>()
</script>

<template>
  <div class="introduction-container">
      {{ introduction }}
  </div>
</template>

<style scoped>
  .introduction-container {
    margin-bottom: 2.8125rem;
  }
</style>
