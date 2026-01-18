<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import type {ProjectBriefType} from '@/types/data.models'

  interface Props {
    project: ProjectBriefType
  }

  defineProps<Props>()
</script>

<template>
  <div class="project-brief-container">
    <RouterLink
      :key="project.id"
      :to="project.url"
      class="brief-link-card"
    >
      <div class="brief-thumbnail">
        <img :alt="project.title" :src="project.thumbnail"/>
      </div>
      <div class="brief-banner">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
  .project-brief-container {
    display: flex;
    
  }

  .brief-link-card {

  }

  .brief-thumbnail {

  }

  .brief-thumbnail img {
    width: 300px;
    height: auto;
  }

  .brief-banner {

  }
</style>
