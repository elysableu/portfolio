<script setup lang="ts">
/**
 * ProjectsView.vue - Projects library page component
 *
 * Fetches and renders the full projects library via useData().
 *
 * Fetch layer ProjectsLibrary handles layout and logic
 */
  import { ref, onMounted } from 'vue'
  import { useData } from '@/composables/useData'

  import type { Project, ProjectBriefType, TickerItemType } from '@/types/data.models'

  import ProjectsLibrary from '@/components/projects/projectsLibrary/ProjectsLibrary.vue'

  const { loading, error, fetchData, getProjectsPageData } = useData()

  const projectsData = ref<{
    projects: Project[]
    featured: TickerItemType[]
    current: ProjectBriefType | undefined
    tags: string[]
    technologies: string[]
  } | null>(null)

  onMounted(async () => {
    projectsData.value = await fetchData(() => getProjectsPageData())
  })
</script>

<template>
  <div class="projects-container">
    <!-- Loading / error states shown while projectsData is null -->
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <!-- Delegates all rendering, (sorting, and filtering) to ProjectsLibrary once data resolves. -->
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
