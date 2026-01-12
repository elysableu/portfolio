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
  .currently-learning-item {
    background-color: black;
    padding: 4px;
    font-size: 14px;
    border-radius: 5px;
  }

  .currently-learning-item p {
    text-align: center;
  }
</style>
