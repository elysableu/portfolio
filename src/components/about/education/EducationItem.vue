<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import type { EducationType } from '@/types/data.models'
  import { getAssetPath } from '@/utils/assets'

  interface Props {
    educationItem: EducationType
  }

  defineProps<Props>()

  const graduationIcon = '/img/about/graduation.svg'
</script>

<template>
  <div class="education-item">
    <div class="education-item-banner">
      <img alt="education-icon" :src="getAssetPath(graduationIcon)" />
      <div class="education-item-heading">
        <h3>{{ educationItem.institution }}</h3>
        <p>{{ educationItem.location }}</p>
      </div>
      <div class="graduation-date">{{ educationItem.graduationDate }}</div>
    </div>
    <div class="education-item-content">
      <div class="education-item-degree">
        <div class="degree-heading">{{ educationItem.degree }}</div>
        <div class="education-item-field">
          <span>Major:</span>
          {{ educationItem.field }}
        </div>
        <div v-if="educationItem.concentration" class="education-item-concentration">
          <span>Concentration:</span>
          {{ educationItem.concentration }}
        </div>
        <div v-if="educationItem.minors" class="education-item-minor">
          <span>Minor:</span>
          {{ educationItem.minors?.join(', ') }}
        </div>
      </div>
      <div class="divider"></div>
      <div v-if="educationItem.relevantCoursework && educationItem.relevantCoursework.length > 0" class="education-item-relevant">
        <h4>Relevant Courses:</h4>
        <ul>
          <li v-for="(item, index) in educationItem.relevantCoursework" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-if="educationItem.projects" class="education-item-projects">
        <h4>Projects:</h4>
        <div class="ed-projects-container">
          <RouterLink
            v-for="(project, index) in educationItem.projects"
            :key="index"
            :to="project.url"
            class="project-item glass-card-inner"
          >
            <div class="project-header">
              <p>{{ project.title }}</p>
            </div>
            <div class="project-content">
              <div class="project-name">{{  project.name }}</div>
              <p>{{ project.description }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .education-item {
    display: flex;
    flex-direction: column;
    background: transparent;
     border: 1px solid var(--glass-border-medium);
    border-radius: var(--radius-3xl);
  }

  .education-item-banner {
    width: 100%;
    height: 6.25rem;
    display: flex;
    gap: var(--spacing-2sm);
    align-items: center;
    background-color: var(--color-background);
    padding: var(--spacing-lg);
    border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
  }

  .education-item-banner img {
    width: var(--icon-lg);
    height: auto;
  }

  .education-item-banner p {

  }

  .education-item-heading {
    margin-left: var(--spacing-lg);
  }

  .education-item-heading h3 {
    font-family: 'Dosis';
    font-size: var(--font-size-xl);
  }

  .education-item-heading p {

  }

  .graduation-date {
    font-size: var(--font-size-lg);
    font-weight: bold;
    margin-left: 3.125rem;
  }

  .education-item-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2sm);
    padding: var(--spacing-lg);
  }

  .education-item-content h4 {
    padding-bottom: var(--spacing-sm);
  }

  .education-item-content ul {
    list-style: none;
  }

  .education-item-degree {

  }

  .degree-heading {
    margin-bottom: var(--spacing-sm);
    font-size: var(--font-size-lg);
    font-weight: bold;
  }

  .education-item-relevant {

  }

  .education-item-relevant h4 {
    font-size: var(--font-size-md);
  }

  .education-item-relevant ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2sm);
  }

  .education-item-relevant li {
   background-color: var(--color-background);
    padding: var(--spacing-xs);
    font-size: var(--font-size-sm);
    font-weight: bold;
    border-radius: var(--radius-xs);
  }

  .education-item-projects {

  }

  .education-item-projects h4 {
    font-size: var(--font-size-lg);
    font-family: 'Dosis';
  }

  .ed-projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2sm);
  }

  .project-item {
   max-width: 15.625rem;
    color: var(--color-text);
    border-radius: var(--radius-xs);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .project-item:hover {
    cursor: pointer;
    transform: translateY(-4px);
    background: var(--glass-dark-bg-medium);
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.5),
      0 0 20px var(--color-accent-purple-blue-glow);
    border-left-color: var(--color-accent-teal);
  }

  .project-header {
     background-color: var(--color-background);
    width: 100%;
    padding: var(--spacing-sm);
    border-radius: var(--radius-xs) var(--radius-xs) 0 0;
  }

  .project-header p {
    font-weight: bold;
    font-size: var(--font-size-base);
  }

  .project-content {
    padding: var(--spacing-sm);
  }

  .project-content p {
    font-size: var(--font-size-base);
  }

  .project-name {

  }
</style>
