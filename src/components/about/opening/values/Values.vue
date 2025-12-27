<script setup lang="ts">
  import ValueItem from './ValueItem.vue'
  import type { Value } from '@/types/data.models'

  interface Props {
    values: Value[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="values">
    <ValueItem
      v-for="(value, index) in values"
      :key="index"
      :title="value.title"
      :description="value.description"
      :icon="value.icon"
    />
  </div>
</template>

<style scoped>

</style>
