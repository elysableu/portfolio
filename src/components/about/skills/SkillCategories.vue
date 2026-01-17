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
    margin-bottom: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    overflow: visible;
  }

  .skills-category:first-child {
    border-radius: 20px 20px 0.5rem 0.5rem; /* ← Match parent's top corners */
  }

  .skills-category-header {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .category-header-content {
    font-weight: bold;
    font-family: 'Dosis';
  }

  .category-name {
    font-size: 16px;
  }

  .skill-count {

  }

  .skills-category-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 1.5rem;
    padding-top: 3rem;
    background: rgba(255, 255, 255, 0.03);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
</style>
