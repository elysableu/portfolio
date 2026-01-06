<script setup lang="ts">
  import CurrentlyLearningItem from './CurrentlyLearningItem.vue'

  interface Props {
    currentlyLearningList: string[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="currently-learning">
    <h4>Currently Learning</h4>
    <CurrentlyLearningItem
      v-for="(item, index) in currentlyLearningList"
      :key="index"
      :currentlyLearning="item"
    />
  </div>
</template>

<style scoped>
  .currently-learning {

  }

  .currently-learning h4 {
    font-size: larger;
    text-align: center;
  }
</style>
