<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { getAssetPath } from '@/utils/assets'
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
        <img
          v-if="project.thumbnail"
          :alt="project.title"
          :src="getAssetPath(project.thumbnail)"
          />
          <div v-else class="thumbnail-placeholder">
            <span class="placeholdder-icon">💫</span>
          </div>
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
    max-width: 31.25rem;
    border-radius: var(--radius-3xl);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .project-brief-container:hover {
    cursor: pointer;
    transform: translateY(-4px);
    background: var(--glass-dark-bg-medium);
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.5),
      0 0 20px var(--color-accent-purple-blue-glow);
    border-left-color: var(--color-accent-teal);
  }

  .brief-link-card {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-md);
    border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
  }

  .brief-thumbnail {
    width: 100%;
    border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
    overflow: hidden;
  }

  .brief-thumbnail img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
    border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
  }

  .brief-banner {
   padding: var(--spacing-2sm) var(--spacing-lg);
    padding-bottom: var(--spacing-lg);
    text-align: center;
    color: var(--color-text);
  }

  .brief-banner h3 {

  }

  .brief-banner p {

  }
</style>
