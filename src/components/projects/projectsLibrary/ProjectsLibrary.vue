<script setup lang="ts">
  import { serializeProjectBrief } from '@/utils/serializer'

  import type { Project, ProjectBriefType, TickerItemType } from '@/types/data.models'
  import ProjectBrief from './ProjectBrief.vue'

  interface Props {
    projects: Project[]
    featured: TickerItemType[]
    current: ProjectBriefType | undefined
    tags: string[]
    technologies: string[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="library-container glass-card-dark">
    <div class="library">
      <ProjectBrief
        v-for="item in projects"
        :key="item.id"
        :project="serializeProjectBrief(item)"
      />
    </div>
  </div>
</template>

<style scoped>
  .library-container {
    padding: 20px;
  }

  .library {
    display: flex;
    gap: 30px;
    justify-content: space-around;
  }
</style>

