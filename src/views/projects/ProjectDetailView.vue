<script setup lang="ts">
  /**
   *  ProjectsDetailView.vue
   *  Renders a single projects full detail view.
   *  Data fetching and routing is handled by useProject().
   */
  import { useProject } from '@/composables/useProject'
  import ProjectDetail from '@/components/projects/projectDetail/ProjectDetail.vue'

  // useProject handles route param extraction, data fetching, and 404 detection
  const { project, loading, error, notFound } = useProject()
</script>

<template>
  <div class="project-container">
     <!-- Loading / error / 404 states shown while project data is resolving -->
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="notFound" class="not-found">404: Project Not Found</div>
    <!-- Delegates all rendering to ProjectDetail once data resolves -->
    <div v-else-if="project" class="project-detail-content">
      <ProjectDetail :project="project" />
    </div>
  </div>
</template>

<style scoped>
.project-container {
  display: flex;
  flex-direction: column;
}

.loading {

}

.error {

}

.notFound {

}

.project-detail-content {
  padding-bottom: var(--page-padding-bottom);
  border-radius: var(--radius-3xl);
  overflow: auto;
}
</style>
