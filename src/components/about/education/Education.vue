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
    font-size: 30px;
    padding-bottom: 5px;
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
