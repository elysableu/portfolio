<script setup lang="ts">
  import { ref } from 'vue'
  import SkillCategories from './SkillCategories.vue';
  import type { SkillsType } from '@/types/data.models'

  interface Props {
    skills: SkillsType
  }

  defineProps<Props>()

  const expandedCategories = ref<number[]>([0])

  const toggleCategory = (index: number) => {
    const position = expandedCategories.value.indexOf(index)

    if (position > -1 ) {
      expandedCategories.value.splice(position, 1)
    } else {
      expandedCategories.value.push(index)
    }
  }
</script>

<template>
  <div class="skills glass-card-dark">
    <h2>Skills</h2>
    <div class="skills-content">
      <SkillCategories
        v-for="(category, index) in skills.categories"
        :key="index"
        :categoryItem="category"
        :isExpanded="expandedCategories.includes(index)"
        @toggle="toggleCategory(index)"
      />
    </div>
    <div class="proficiencies">

    </div>
  </div>
</template>

<style scoped>
  .skills {
    padding: var(--spacing-lg);
    width: 100%;
    border-radius: var(--radius-3xl);
    overflow: visible !important;
  }

  .skills::before,
  .skills::after {
    display: none;
  }

  .skills h2 {
    font-size: var(--font-size-2xl);
    padding-bottom: var(--spacing-sm);
    font-family: 'Metamorphous';
  }

  .skills-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2sm);
    width: 100%;
    min-height: 12.5rem;
    overflow: visible;
  }
</style>
