<script setup lang="ts">
  import type { ExperienceType } from '@/types/data.models';

  interface Props {
    experienceItem: ExperienceType
  }

  defineProps<Props>()
</script>

<template>
  <div class="experience-item">
    <img alt="experienceItem.title" :src="experienceItem.logo" width="60" height="60" />
    <h3>{{ experienceItem.title }}</h3>
    <p>{{ experienceItem.company }}</p>
    <p>{{ experienceItem.location }}</p>
    <p>{{ experienceItem.locationType }}</p>
    <p>{{ experienceItem.type }}</p>
    <p>{{ experienceItem.startDate }}</p>
    <p>{{ experienceItem.endDate }}</p>
    <p>{{ experienceItem.current }}</p>
    <p>{{ experienceItem.description }}</p>
    <p v-for="(item, index) in experienceItem.responsibilities" :key="index">{{ item }}</p>
    <p v-for="(item, index) in experienceItem.technologies" :key="index">{{ item }}</p>
  </div>
</template>

<style scoped>

</style>
