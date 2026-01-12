<script setup lang="ts">
  import SkillCategories from './SkillCategories.vue';
  import type { SkillsType } from '@/types/data.models'

  interface Props {
    skills: SkillsType
  }

  defineProps<Props>()
</script>

<template>
  <div class="skills glass-card-dark">
    <h3>Skills</h3>
    <SkillCategories
      v-for="(category, index) in skills.categories"
      :key="index"
      :categoryItem="category"
    />
  </div>
</template>

<style scoped>

</style>
