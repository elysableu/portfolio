<script setup lang="ts">
  import type { ExperienceType } from '@/types/data.models';
  import { formatDate } from '@/utils/format';

  interface Props {
    experienceItem: ExperienceType
  }

  defineProps<Props>()

  const xpIcons = {
    gem: '/img/about/gem.svg',
    location: '/img/about/map_marker.svg',
    locationType: '/img/about/location.svg',
    startEnd: '/img/about/calendar.svg',
    check: '/img/about/check.svg',
    xpType: '/img/about/briefcase.svg'
  }

</script>

<template>
  <div class="experience-item">
    <div class="experience-item-banner">
      <img class="experience-icon" alt="experienceItem.title" :src="xpIcons.gem" width="60" height="60" />
      <div class="experience-banner-content">
        <div class="experience-item-heading">
          <h3>{{ experienceItem.title }}</h3>
          <div v-if="experienceItem.current" class="is-current">
            <p>CURRENT</p>
          </div>
        </div>
        <div class="experience-heading-content">
          <h4>{{ experienceItem.company }}</h4>
          <div class="experience-heading-details">
            <span class="xp-heading-detail location">
              <img class="experience-mini-icon" alt="locationIcon" :src="xpIcons.location" />
              <p>{{ experienceItem.location }}</p>
            </span>
            <span class="xp-heading-detail location-type">
              <img class="experience-mini-icon" alt="locationTypeIcon" :src="xpIcons.locationType" />
              <p>{{ experienceItem.locationType }}</p>
            </span>
            <span class="xp-heading-detail xp-type">
              <img class="experience-mini-icon" alt="xpTypeIcon" :src="xpIcons.xpType" />
              <p>{{ experienceItem.type }}</p>
            </span>
            <span class="xp-heading-detail start-end">
              <img class="experience-mini-icon" alt="startEndIcon" :src="xpIcons.startEnd" />
              <p>{{ formatDate(experienceItem.startDate) }} - {{ formatDate(experienceItem.endDate) }}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="experience-item-details">
      <div class="description">
        <p>{{ experienceItem.description }}</p>
      </div>
      <div class="responsibilities">
        <h4>Responsibilities:</h4>
        <ul>
          <li v-for="(item, index) in experienceItem.responsibilities" :key="index">
            <img class="check experience-mini-icon" alt="checkIcon" :src="xpIcons.check" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="skills">
        <h4>Skills:</h4>
        <ul class="tags">
          <li v-for="(item, index) in experienceItem.skills" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="technologies">
        <h4>Technologies:</h4>
        <ul class="tags">
          <li v-for="(item, index) in experienceItem.technologies" :key="index" class="tag">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .experience-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }

  .experience-item-banner {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: black;
    padding: 20px;
    border-radius: 18px 18px 0px 0px;
  }

  .experience-icon {
    width: 60px;
    height: 60px;
  }

  .experience-banner-content {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .experience-item-heading {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .experience-item-heading h3 {
    font-family: 'Dosis';
    font-size: 24px;
  }

  .is-current {
    background-color: var(--color-accent-teal);
    color: black;
    padding: 3px 5px;
    border-radius: 15px;
    font-size: 12px;
  }

  .is-current:hover {
    cursor: default;
  }

  .experience-heading-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .experience-heading-content h4 {
    padding-bottom: 5px;
  }

  .experience-heading-details {
    width: 100%;
    display: flex;
    gap: 15px;
    font-size: 14px;
  }

  .xp-heading-detail {
    display: flex;
    font-weight: bold;
  }

  .experience-mini-icon {
    width: 25px;
    height: 25px;
    padding-right: 5px;
  }

  .location {

  }

  .location-type {

  }

  .xp-type {

  }

  .start-end {

  }

  .experience-item-details {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
  }

  .experience-item-details h4 {
    font-family: 'Dosis';
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5px;
  }

  .description {
    padding-bottom: 5px;
  }

  .responsibilities {

  }

  .responsibilities ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .responsibilities li {
    display: flex;
    align-items: center;
  }

  .check {
    margin: 0px 10px;
  }

  .skills {

  }

  .skills ul {

  }
  .skills li {

  }

  .technologies {

  }

  .technologies ul {

  }
  .technologies li {

  }

  .responsibilities ul,
  .skills ul,
  .technologies ul {
    list-style: none;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tags li {
    background-color: black;
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
  }
</style>
