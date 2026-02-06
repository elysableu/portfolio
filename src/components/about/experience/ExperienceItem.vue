<script setup lang="ts">
  import type { ExperienceType } from '@/types/data.models'
  import { formatDate } from '@/utils/format'
  import { getAssetPath } from '@/utils/assets'

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
      <img class="experience-icon" alt="experienceItem.title" :src="getAssetPath(xpIcons.gem)" width="60" height="60" />
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
              <img class="experience-mini-icon" alt="locationIcon" :src="getAssetPath(xpIcons.location)" />
              <p>{{ experienceItem.location }}</p>
            </span>
            <span class="xp-heading-detail location-type">
              <img class="experience-mini-icon" alt="locationTypeIcon" :src="getAssetPath(xpIcons.locationType)" />
              <p>{{ experienceItem.locationType }}</p>
            </span>
            <span class="xp-heading-detail xp-type">
              <img class="experience-mini-icon" alt="xpTypeIcon" :src="getAssetPath(xpIcons.xpType)" />
              <p>{{ experienceItem.type }}</p>
            </span>
            <span class="xp-heading-detail start-end">
              <img class="experience-mini-icon" alt="startEndIcon" :src="getAssetPath(xpIcons.startEnd)" />
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
            <img class="check experience-mini-icon" alt="checkIcon" :src="getAssetPath(xpIcons.check)" />
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
    gap: var(--spacing-2sm);
    background: transparent;
    border: 1px solid var(--glass-border-medium);
    border-radius: var(--radius-3xl);
  }

  .experience-item-banner {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--color-background);
    padding: var(--spacing-lg);
    border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
  }

  .experience-icon {
    width: var(--icon-lg);
    height: var(--icon-lg);
  }

  .experience-banner-content {
    display: flex;
    flex-direction: column;
    margin-left: var(--spacing-lg);
  }

  .experience-item-heading {
    display: flex;
    align-items: center;
    gap: var(--spacing-2sm);
  }

  .experience-item-heading h3 {
    font-family: 'Dosis';
    font-size: var(--font-size-xl);
  }

  .is-current {
    background-color: var(--color-accent-teal);
    color: var(--color-text-inverse);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-hxl);
    font-size: var(--font-size-xs);
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
    padding-bottom: var(--spacing-sm);
  }

  .experience-heading-details {
    width: 100%;
    display: flex;
    gap: var(--spacing-md);
    font-size: var(--font-size-sm);
  }

  .xp-heading-detail {
    display: flex;
    font-weight: bold;
  }

  .experience-mini-icon {
    width: var(--icon-sm);
    height: var(--icon-sm);
    padding-right: var(--spacing-sm);
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
    padding: var(--spacing-lg);
    gap: var(--spacing-2sm);
  }

  .experience-item-details h4 {
    font-family: 'Dosis';
    font-size: var(--font-size-lg);
    font-weight: bold;
    padding-bottom: var(--spacing-sm);
  }

  .description {
    padding-bottom: var(--spacing-sm);
  }

  .responsibilities {

  }

  .responsibilities ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2sm);
  }

  .responsibilities li {
    display: flex;
    align-items: center;
  }

  .check {
    margin: 0px var(--spacing-2sm);
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
    gap: var(--spacing-2sm);
  }

  .tags li {
    background-color: var(--color-background);
    padding: var(--spacing-xs);
    font-size: var(--font-size-sm);
    font-weight: bold;
    border-radius: var(--radius-xs);
  }
</style>
