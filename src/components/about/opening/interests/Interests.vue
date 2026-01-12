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
    <div class="interests-content">
      <InterestItem
        v-for="(interest, index) in interests"
        :key="index"
        :interest="interest"
      />
    </div>
  </div>
</template>

<style scoped>
  .interests {

  }

  .interests h4 {
    font-size: larger;
    text-align: center;
  }

  .interests-content {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding-top: 5px;
  }
</style>
