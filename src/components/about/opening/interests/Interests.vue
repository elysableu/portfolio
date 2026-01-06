<script setup lang="ts">
  import InterestItem from './InterestItem.vue'

  interface Props {
    interests: string[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="interests">
    <h4>Interests</h4>
    <InterestItem
      v-for="(interest, index) in interests"
      :key="index"
      :interest="interest"
    />
  </div>
</template>

<style scoped>
  .interests {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .interests h4 {
    font-size: larger;
    text-align: center;
  }
</style>
