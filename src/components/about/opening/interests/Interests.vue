<script setup lang="ts">
  import InterestItem from './InterestItem.vue'

  interface Props {
    interests: string[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="interests">
    <InterestItem
      v-for="(interest, index) in interests"
      :key="index"
      :interest="interest"
    />
  </div>
</template>

<style scoped>

</style>
