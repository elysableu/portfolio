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
    padding-bottom: var(--spacing-2sm);
  }

  .interests h4 {
    font-size: var(--font-size-xl);
    font-family: 'Dosis';
    text-align: center;
  }

  .interests-content {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2sm);
    justify-content: center;
    padding-top: var(--spacing-sm);
  }
</style>
