<script setup lang="ts">
  import CurrentlyLearningItem from './CurrentlyLearningItem.vue'

  interface Props {
    currentlyLearningList: string[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="currently-learning">
    <CurrentlyLearningItem
      v-for="(item, index) in currentlyLearningList"
      :key="index"
      :currentlyLearning="item"
    />
  </div>
</template>

<style scoped>

</style>
