<script setup lang="ts">
  import type { Project } from '@/types/data.models'
  import Ticker from '@/components/shared/ticker/Ticker.vue'

  interface Props {
    project: Project
  }

  defineProps<Props>()
</script>

<template>
  <div class="project-detail-container">
    <h2>{{ project.title }}</h2>
    <h3>{{ project.tagline }}</h3>
    <p>{{ project.fullDescription }}</p>
    <p>{{ project.startDate }} - {{ project.endDate }}</p>
    <p>{{ project.status }}</p>
    <p v-if="project.current">Current</p>
    <p>{{ project.teamSize }}</p>
    <p>{{ project.role }}</p>
    <a :href="project.liveUrl">Live Site</a>
    <a :href="project.githubUrl">Github Repo</a>
    <Ticker :items="project.images" />
    <div v-if="project.demoVideo">
      <h3>Demo Video</h3>
      <video
        controls
        width="50%"
        :poster="project.thumbnail"
      >
        <source :src="project.demoVideo" type="video/mp4">
      </video>
    </div>
    <p>{{ project.motivation }}</p>
    <ul>
      <li v-for="(item, index) in project.technologies" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in project.features" :key="index">
        {{ item }}
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>Challenge</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in project.challenges" :key="index">
          <td>{{ item.challenge }}</td>
          <td>{{ item.solution }}</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li v-for="(item, index) in project.tags" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in project.technologies" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
