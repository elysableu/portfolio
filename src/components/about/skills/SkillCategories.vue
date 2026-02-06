<script setup lang="ts">
  import SkillItem from './SkillItem.vue'
  import type { SkillCategory } from '@/types/data.models'
  import Chevron from '@/components/shared/svgs/Chevron.vue'

  interface Props {
    categoryItem: SkillCategory,
    isExpanded: boolean
  }

  defineProps<Props>()
</script>

<template>
  <div class="skills-category">
    <button
      class="skills-category-header"
      :class="{ 'active': isExpanded }"
      @click="$emit('toggle')"
    >
      <div class="category-header-content">
        <span class="category-name">{{ categoryItem.category + " " }}</span>
        <span class="skill-count">({{  categoryItem.skills.length }})</span>
      </div>
      <Chevron :isRotated="isExpanded"/>
    </button>

    <transition name="accordian">
      <div v-show="isExpanded" class="skills-category-content">
        <SkillItem
          v-for="(skill, index) in categoryItem.skills"
          :key="index"
          :skill="skill"
        />
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .skills-category {
    width: 100%;
    margin-bottom: var(--spacing-sm);
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border-light);
    border-radius: var(--radius-lg);
    overflow: visible;
  }

  .skills-category:first-child {
    border-radius: var(--radius-3xl) var(--radius-3xl) var(--radius-lg) var(--radius-lg);
  }

  .skills-category-header {
    width: 100%;
    height: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--spacing-2sm);
    background-color: var(--color-black);
    color: var(--color-white);
    border: none;
    cursor: pointer;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  }

  .category-header-content {
    font-weight: bold;
    font-family: 'Dosis';
  }

  .category-name {
    font-size: var(--font-size-base);
  }

  .skill-count {

  }

  .skills-category-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    padding-top: var(--spacing-2xl);
    background: rgba(255, 255, 255, 0.03);
    border-top: 1px solid var(--glass-border-light);
  }
</style>
