<script setup lang="ts">
  import EducationItem from './EducationItem.vue'
  import type { EducationType } from '@/types/data.models'

  interface Props {
    educationList: EducationType[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="education">
    <EducationItem
      v-for="item in educationList"
      :key="item.id" 
      :education-item="item"
    />
  </div>
</template>

<style scoped>

</style>
