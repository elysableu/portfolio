<script setup lang="ts">
  interface Props {
    currentlyLearning: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="currently-learning-item">
    <p>{{ currentlyLearning }}</p>
  </div>
</template>

<style scoped>

</style>
