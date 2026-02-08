<script setup lang="ts">
  import EducationItem from './EducationItem.vue'
  import type { EducationType } from '@/types/data.models'

  interface Props {
    educationList: EducationType[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="education glass-card-dark">
    <h2>Education</h2>
    <div class="education-list">
      <EducationItem
        v-for="item in educationList"
        :key="item.id"
        :education-item="item"
      />
    </div>
  </div>
</template>

<style scoped>
  .education {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-lg);
  }

  .education h2 {
    text-align: right;
    font-family: 'Metamorphous';
    font-size: var(--font-size-2xl);
    padding-bottom: var(--spacing-sm);
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2sm);
  }
</style>
