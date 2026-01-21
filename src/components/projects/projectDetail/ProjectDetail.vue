<script setup lang="ts">
  import type { Project } from '@/types/data.models'
  import Ticker from '@/components/shared/ticker/Ticker.vue'

  interface Props {
    project: Project
  }

  defineProps<Props>()
  </script>

<template>
  <div class="project-detail-container glass-card-dark">
    <div class="detail-header">
      <div class="detail-header-content glass-card-inner">
        <div class="detail-hero">
          <div class="title-current">
            <div v-if="project.current" class="project-current">Current</div>
            <h2>{{ project.title }}</h2>
          </div>
          <div class="project-tagline">{{ project.tagline }}</div>
        </div>
        <div class="project-tags">
          <ul>
            <li v-for="(item, index) in project.tags" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="project-links">
          <a :href="project.liveUrl">Live Site</a>
          <a :href="project.githubUrl">Github Repo</a>
        </div>
      </div>
      <div class="detail-ticker glass-card-inner">
        <Ticker :items="project.images" />
      </div>
    </div>
    <div class="divider"></div>
    <div class="project-idea chapter">
      <div class="chapter-num">01</div>
      <h2>The Idea</h2>
      <h3>Where It All Began</h3>
      <p>{{ project.motivation }}</p>
    </div>
    <div class="project-vision chapter">
      <div class="chapter-num">02</div>
      <h2>The Vision</h2>
      <h3>What I Set Out To Build</h3>
      <p>{{ project.fullDescription }}</p>
    </div>
    <div class="project-features chapter">
      <div class="chapter-num">03</div>
      <h2>The Features</h2>
      <h3>What Makes It Special</h3>
      <ul>
        <li v-for="(item, index) in project.features" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="project-tech-stack chapter">
      <div class="chapter-num">04</div>
      <h2>The Tech Stack</h2>
      <h3>Tools and Technologies</h3>
      <ul>
        <li v-for="(item, index) in project.technologies" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="project-challenges chapter">
      <div class="chapter-num">05</div>
      <h2>The Challenges</h2>
      <h3>Obstacles and Solutions</h3>
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
    </div>
    <div class="project-result chapter">
      <div class="chapter-num">06</div>
      <h2>The Result</h2>
      <h3>Final Outcome and Impact</h3>
      <p>{{ project.status }}</p>
      <p>{{ project.teamSize }}</p>
      <p>{{ project.startDate }} - {{ project.endDate }}</p>
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
    </div>
    <!-- <p>{{ project.role }}</p> -->
  </div>
</template>

<style scoped>
  .project-detail-container {
    padding: 10px;
    overflow: visible;
    border-radius: 20px;
  }

  .project-detail-container ul {
    list-style: none;
  }

  .detail-header {
    display: flex;
    align-items: stretch;
    max-height: 550px;
    position: relative;
    overflow: visible;
    gap: 1rem;
    border-radius: 20px;
  }

  .detail-ticker {
    flex: 1.5;
    width: auto;
    height: 550px;
    border-radius: 20px;
    overflow: hidden;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }

  .detail-header-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--spacing-lg) 40px;
    border-radius: 20px;
    height: 550px;
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

  .chapter {

  }

  .chapter-num {

  }

  .chapter h2 {

  }

  .chapter h3 {

  }

  .project-idea {

  }

  .project-vision {

  }

  .project-features {

  }

  .project-tech-stack {

  }

  .project-challenges {

  }

  .project-result {

  }
</style>

