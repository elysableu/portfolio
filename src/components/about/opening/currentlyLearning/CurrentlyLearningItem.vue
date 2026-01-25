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
    background-color: black;
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    text-align: center;
  }
</style>
