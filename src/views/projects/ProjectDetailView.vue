<script setup lang="ts">
  import { useProject } from '@/composables/useProject'
  import ProjectDetail from '@/components/projects/projectDetail/ProjectDetail.vue'

  const { project, loading, error, notFound } = useProject()

</script>

<template>
  <div class="project-detail-container">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="notFound" class="not-found">404: Project Not Found</div>
    <div v-else-if="project" class="project">
      <ProjectDetail
        :project="project"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
