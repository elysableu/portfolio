<script setup lang="ts">
  import { toRefs } from 'vue'
  import { RouterLink } from 'vue-router'

  import type { ProjectHeader } from '@/types/data.models'

  import Ticker from '@/components/shared/ticker/Ticker.vue'

  interface Props {
    projectHeader: ProjectHeader
  }

  const props = defineProps<Props>()
</script>

<template>
  <div class="project-header-container">
    <div class="detail-hero-container glass-card-inner">
      <div class="detail-hero">
        <RouterLink
          to="/projects"
          class="library-return"
        >
          Back To Projects
        </RouterLink>
        <div class="title-current">
          <h2>{{ projectHeader.title }}</h2>
          <div v-if="projectHeader.current" class="project-current">Current</div>
        </div>
        <div class="project-tagline">{{ projectHeader.tagline }}</div>
      </div>
      <div class="project-tags">
        <ul>
          <li v-for="(item, index) in projectHeader.tags" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="project-links">
        <a v-if="projectHeader.liveUrl" :href="projectHeader.liveUrl">Live Site</a>
        <a v-if="projectHeader.githubUrl" :href="projectHeader.githubUrl">Github Repo</a>
      </div>
    </div>
    <div class="detail-ticker glass-card-inner">
      <Ticker :items="projectHeader.images" />
    </div>
  </div>
</template>

<style scoped>
  .project-header-container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: stretch;
    min-height: 25rem;
    position: relative;
    gap: var(--spacing-md);
    border-radius: var(--radius-3xl) var(--radius-3xl) 0 0;
  }

  .detail-ticker {
    flex: 1.5;
    width: auto;
    min-height: 25rem;
    max-height: 25rem;
    height: 25rem;
    border-radius: 0 var(--radius-3xl) 0 0;
    overflow: hidden;
    padding: var(--spacing-2sm);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .detail-hero-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--spacing-lg) 2.5rem;
    border-radius: var(--radius-3xl) 0 0 0;
    min-height: 25rem;
  }

  .detail-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--spacing-hlg);
  }

  .library-return {
    font-family: 'Metamorphous';
    font-size: 15px;
    position: absolute;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
    top: var(--spacing-lg);
    left: var(--spacing-hlg);
  }

  .title-current {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    align-items: center;
    padding-top: var(--spacing-xl);
    padding-bottom: var(--spacing-2sm);
  }

  .title-current h2 {
    font-family: 'Metamorphous';
    font-size: var(--font-size-3xl);
    font-weight: bold;
    margin: 0;
  }

  .project-current {
    background: var(--color-accent-teal);
    color: var(--color-text-inverse);
    font-weight: bold;
    text-align: center;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-full);
  }

  .project-tagline {
    font-size: var(--font-size-lg);
    text-align: center;
  }

  .project-tags {
    padding: var(--spacing-sm);
    margin-bottom: var(--spacing-2sm);
  }

  .project-tags ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-2sm);
  }

  .project-tags li {
     background-color: var(--color-black);
    padding: var(--spacing-xs);
    font-size: var(--font-size-sm);
    font-weight: bold;
    border-radius: var(--radius-xs);
  }

  .project-links {
    display: flex;
    justify-content: center;
    margin-top: var(--spacing-hlg);
    gap: 5.625rem;
    padding: var(--spacing-md);
  }

  .project-links a {
    background-color: var(--color-accent-orange);
    color: var(--color-text-inverse);
    font-size: var(--font-size-base);
    font-weight: bold;
    padding: var(--spacing-2sm) var(--spacing-md);
    border-radius: var(--radius-hxl);
  }

  .project-links a:hover {
    background-color: var(--color-accent-orange-dark);
    color: var(--color-text);
    transform: scale(1.1);
  }
</style>
