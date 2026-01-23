<script setup lang="ts">
  import type { Feature } from '@/types/data.models'

  interface Props {
    featureData: Feature
  }

  defineProps<Props>()
</script>

<template>
  <div>
    <h4>{{ featureData.title }}</h4>
    <p>{{ featureData.description }}</p>
  </div>
</template>

<style scoped>

</style>
