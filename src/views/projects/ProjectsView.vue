<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useData } from '@/composables/useData'
  import type { Project, ProjectBriefType, TickerItemType } from '@/types/data.models'

  const { loading, error, getProjectsPageData } = useData()
  const projectsData = ref<{
    projects: Project[]
    featured: TickerItemType[]
    current: ProjectBriefType
    tags: string[]
    technologies: string[]
  } | null>(null)

  onMounted(async () => {
    projectsData.value = await getProjectsPageData()
  })
</script>

<template>
  <div class="projects-container">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="projectsData">
      <div class="projects">
        <h1>Projects</h1>
        <div class="projects-content">
          <ProjectBrief />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
