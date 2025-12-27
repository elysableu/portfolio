<script setup lang="ts">
  import ExperienceItem from './ExperienceItem.vue'
  import type { ExperienceType } from '@/types/data.models'

  interface Props {
    experienceList: ExperienceType[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="experience">
    <ExperienceItem
      v-for="item in experienceList"
      :key="item.id"
      :experienceItem="item"
    />
  </div>
</template>

<style scoped>

</style>
