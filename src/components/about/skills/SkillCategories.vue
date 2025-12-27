<script setup lang="ts">
  import SkillItem from './SkillItem.vue'
  import type { SkillCategory } from '@/types/data.models'

  interface Props {
    categoryItem: SkillCategory
  }

  defineProps<Props>()
</script>

<template>
  <div class="skills">
    <h4>{{ categoryItem.category }}</h4>
    <img
      alt="value-icon"
      class="value-icon"
      :src="categoryItem.icon"
      width="75"
      height="75"
    />
    />
    <SkillItem
      v-for="(skill, index) in categoryItem.skills"
      :key="index"
      :skill="skill"
    />
  </div>
</template>

<style scoped>

</style>
