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
    <div class="currently-learning-content">
      <CurrentlyLearningItem
        v-for="(item, index) in currentlyLearningList"
        :key="index"
        :currentlyLearning="item"
      />
    </div>
  </div>
</template>

<style scoped>
  .currently-learning {
    padding-bottom: 10px;
  }

  .currently-learning h4 {
    font-size: 24px;
    font-family: 'Dosis';
    text-align: center;
  }

  .currently-learning-content {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding-top: 5px;
  }
</style>
