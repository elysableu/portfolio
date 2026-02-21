<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useData } from '@/composables/useData'

  import type { Project, ProjectBriefType, TickerItemType } from '@/types/data.models'

  import ProjectsLibrary from '@/components/projects/projectsLibrary/ProjectsLibrary.vue'

  const { loading, error, getProjectsPageData } = useData()
  const projectsData = ref<{
    projects: Project[]
    featured: TickerItemType[]
    current: ProjectBriefType | undefined
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
    <div v-else-if="projectsData" class="projects-content">
      <ProjectsLibrary
      :projects="projectsData.projects"
      :featured="projectsData.featured"
      :current="projectsData.current"
      :tags="projectsData.tags"
      :technologies="projectsData.technologies"
      />
    </div>
  </div>
</template>

<style>
  .projects-container {
    display: flex;
  }

  .projects-content {
    padding-bottom: var(--page-padding-bottom);
    flex: 1;
    overflow: auto;
  }

/* @media (min-width: 1024px) {
  .projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
