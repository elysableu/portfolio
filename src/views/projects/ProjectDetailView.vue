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
  padding-top: 130px;
  padding-left: calc(var(--spacing-lg) + 10px);
  padding-right: calc(var(--spacing-lg) + 10px);
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
  margin-top: calc(121.719px + 40px + 24px);
  padding-top: calc(var(--spacing-lg) + 10px);
  padding-bottom: 35px;
  border-radius: 20px;
  overflow: auto;
}
</style>
