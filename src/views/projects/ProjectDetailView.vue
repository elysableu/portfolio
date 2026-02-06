<script setup lang="ts">
  import { useProject } from '@/composables/useProject'
  import ProjectDetail from '@/components/projects/projectDetail/ProjectDetail.vue'

  const { project, loading, error, notFound } = useProject()

</script>

<template>
  <div class="project-container">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="notFound" class="not-found">404: Project Not Found</div>
    <div v-else-if="project" class="project-detail-content">
      <ProjectDetail :project="project" />
    </div>
  </div>
</template>

<style scoped>
.project-container {
  display: flex;
  padding-top: var(--page-padding-top);
  padding-left: var(--page-padding-horizontal);
  padding-right: var(--page-padding-horizontal);
  min-height: 100vh;
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
  margin-top: var(--content-offset);
  padding-top: calc(var(--spacing-lg) + var(--spacing-2sm));
  padding-bottom: var(--page-padding-bottom);
  border-radius: var(--radius-3xl);
  overflow: auto;
}
</style>
