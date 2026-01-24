<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import type {ProjectBriefType} from '@/types/data.models'

  interface Props {
    project: ProjectBriefType
  }

  defineProps<Props>()
</script>

<template>
  <div class="project-brief-container glass-card-inner">
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
    width: 100%;
    height: auto;
    max-width: 500px;
    border-radius: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .project-brief-container:hover {
    cursor: pointer;
    transform: translateY(-4px);
    background: rgba(0, 0, 0, 0.45);
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.5),
      0 0 20px rgba(102, 126, 234, 0.2);
    border-left-color: var(--color-accent-teal);
  }


  .brief-link-card {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-radius: 18px 18px 0px 0px;
  }

  .brief-thumbnail {
    width: 100%;
    border-radius: 18px 18px 0px 0px;
    overflow: hidden;
  }

  .brief-thumbnail img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
    border-radius: 18px 18px 0px 0px;
  }

  .brief-banner {
    padding: 10px var(--spacing-lg);
    padding-bottom: 20px;
    text-align: center;
    color: white;
  }

  .brief-banner h3 {

  }

  .brief-banner p {

  }
</style>
