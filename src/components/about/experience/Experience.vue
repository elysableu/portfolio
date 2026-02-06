<script setup lang="ts">
  import ExperienceItem from './ExperienceItem.vue'
  import type { ExperienceType } from '@/types/data.models'

  interface Props {
    experienceList: ExperienceType[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="experience glass-card-dark">
    <h2>Experience</h2>
    <div class="experience-list">
      <ExperienceItem
        v-for="item in experienceList"
        :key="item.id"
        :experienceItem="item"
      />
    </div>
  </div>
</template>

<style scoped>
  .experience {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-lg);
  }

  .experience h2 {
    text-align: right;
    font-family: 'Metamorphous';
    font-size: var(--font-size-2xl);
    padding-bottom: var(--spacing-sm);
  }

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2sm);
  }
</style>
