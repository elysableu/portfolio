<script setup lang="ts">
  import { getAssetPath } from '@/utils/assets'
  import type { Skill } from '@/types/data.models'

  import { formatExperience } from '@/utils/format'

  interface Props {
    skill: Skill
  }

  defineProps<Props>()
</script>

<template>
  <div
    class="skill-container"
    :data-skill-name="skill.name"
    :data-experience="formatExperience(skill.yearsOfExperience)"
  >
    <img
      v-if="skill.icon"
      :alt="skill.name"
      class="skill-icon"
      :src="getAssetPath(skill.icon)"
      width="60"
      height="60"
    />

    <div v-else class="skill-icon-placeholder">
      {{ skill.name.charAt(0) }}
    </div>
  </div>
</template>

<style scoped>
  .skill-container {
    display: flex;
    position: relative;
    background-color: white;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .skill-container:hover {
    transform: scale(1.1);
  }

  .skill-container::before {
    content: attr(data-skill-name) "\A" attr(data-experience);
    position: fixed;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%) translateY(-5px);
    background-color: #1F2937;
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    white-space: pre;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.4;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    z-index: 100;
    min-width: max-content;
  }

  .skill-container::after {
    content: '';
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #1f2937;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    z-index: 100;
  }

  .skill-container:hover::before {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .skill-container:hover::after {
    opacity: 1;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
</style>
