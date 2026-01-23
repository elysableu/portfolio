<script setup lang="ts">
  import { toRefs } from 'vue'

  import type { ProjectHeader } from '@/types/data.models'

  import Ticker from '@/components/shared/ticker/Ticker.vue'

  interface Props {
    projectHeader: ProjectHeader
  }

  const props = defineProps<Props>()

  const {title, current, tagline, tags, liveUrl, githubUrl, images} = toRefs(props.projectHeader)
</script>

<template>
  <div class="project-header-container">
    <div class="detail-hero-container glass-card-inner">
      <div class="detail-hero">
        <div class="title-current">
          <div v-if="current" class="project-current">Current</div>
          <h2>{{ title }}</h2>
        </div>
        <div class="project-tagline">{{ tagline }}</div>
      </div>
      <div class="project-tags">
        <ul>
          <li v-for="(item, index) in tags" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="project-links">
        <a :href="liveUrl">Live Site</a>
        <a :href="githubUrl">Github Repo</a>
      </div>
    </div>
    <div class="detail-ticker glass-card-inner">
      <Ticker :items="images" />
    </div>
  </div>
</template>

<style scoped>
  .project-header-container {
    display: flex;
    align-items: stretch;
    max-height: 500px;
    position: relative;
    overflow: visible;
    gap: 1rem;
    border-radius: 20px;
  }

  .detail-ticker {
    flex: 1.5;
    width: auto;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }

  .detail-hero-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--spacing-lg) 40px;
    border-radius: 20px;
    height: 500px;
  }

  .detail-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  .title-current {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
  }

  .title-current h2 {
    font-family: 'Metamorphous';
    font-size: 40px;
    font-weight: bold;
  }

  .project-tagline {
    font-size: 20px;
  }

  .project-current {
    background: var(--color-accent-teal);
    color: black;
    font-weight: bold;
    text-align: center;
    padding: 3px 5px;
    border-radius: 50px;
  }

  .project-tags {
    padding: var(--spacing-sm);
    margin-bottom: 10px;
  }

  .project-tags ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .project-tags li {
    background-color: black;
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
  }

  .project-links {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 90px;
    padding: var(--spacing-md);
  }

  .project-links a {
    background-color: var(--color-accent-orange);
    color: black;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 15px;
  }

  .project-links a:hover {
    background-color: #d8ad6b;
    color: white;
    transform: scale(1.1);
  }
</style>
