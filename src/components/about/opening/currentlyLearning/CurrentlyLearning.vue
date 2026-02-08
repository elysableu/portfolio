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
   padding-bottom: var(--spacing-2sm);
  }

  .currently-learning h4 {
    font-size: var(--font-size-xl);
    font-family: 'Dosis';
    text-align: center;
  }

  .currently-learning-content {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2sm);
    justify-content: center;
    padding-top: var(--spacing-sm);
  }
</style>
