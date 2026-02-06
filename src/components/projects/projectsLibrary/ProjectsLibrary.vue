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
    padding: var(--spacing-lg);
  }

  .library {
    display: flex;
    gap: var(--spacing-hlg);
    justify-content: space-around;
  }
</style>

