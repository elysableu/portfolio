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
        <div class="projects-container">
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
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }

  .education-item-banner {
    width: 100%;
    height: 100px;
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: black;
    padding: 20px;
    border-radius: 18px 18px 0px 0px;
  }

  .education-item-banner img {
    width: 60px;
    height: auto;
  }

  .education-item-banner p {

  }

  .education-item-heading {
    margin-left: 20px;
  }

  .education-item-heading h3 {
    font-family: 'Dosis';
    font-size: 24px;
  }

  .education-item-heading p {

  }

  .graduation-date {
    font-size: 20px;
    font-weight: bold;
    margin-left: 50px;
  }

  .education-item-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }

  .education-item-content h4 {
    padding-bottom: 5px;
  }

  .education-item-content ul {
    list-style: none;
  }

  .education-item-degree {

  }

  .degree-heading {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  .education-item-relevant {

  }

  .education-item-relevant h4 {
    font-size: 18px;
  }

  .education-item-relevant ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .education-item-relevant li {
    background-color: black;
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
  }

  .education-item-projects {

  }

  .education-item-projects h4 {
    font-size: 20px;
    font-family: 'Dosis';
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .project-item {
    max-width: 250px;
    color: white;
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .project-item:hover {
    cursor: pointer;
    transform: translateY(-4px);
    background: rgba(0, 0, 0, 0.45);
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.5),
      0 0 20px rgba(102, 126, 234, 0.2);
    border-left-color: var(--color-accent-teal);
  }

  .project-header {
    background-color: black;
    width: 100%;
    padding: 5px;
    border-radius: 5px 5px 0px 0px;
  }

  .project-header p {
    font-weight: bold;
    font-size: 16px;
  }

  .project-content {
    padding: 5px;
  }

  .project-content p {
    font-size: 16px;
  }

  .project-name {

  }
</style>
