<script setup lang="ts">
  import type { EducationType } from '@/types/data.models'

  interface Props {
    educationItem: EducationType
  }

  defineProps<Props>()
</script>

<template>
  <div class="education-item">
    <h3>{{ educationItem.degree }}</h3>
    <p>{{ educationItem.field }}</p>
    <p>{{ educationItem.institution }}</p>
    <p>{{ educationItem.location }}</p>
    <p>{{ educationItem.startDate }}</p>
    <p>{{ educationItem.graduationDate }}</p>
    <p v-for="(item, index) in educationItem.minors" :key="index">{{ item }}</p>
    <p>{{ educationItem.concentration }}</p>
    <p v-for="(item, index) in educationItem.relevantCoursework" :key="index">{{ item }}</p>
    <p v-for="(item, index) in educationItem.projects" :key="index">{{ item }}</p>
    <p>{{ educationItem.logo }}</p>
  </div>
</template>

<style scoped>

</style>
