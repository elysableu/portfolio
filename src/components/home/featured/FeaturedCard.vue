<script setup lang="ts">
import type { NewFeature, SoonFeature } from '@/types/data.models';

  interface Props {
    cardContent: SoonFeature | NewFeature
  }

  defineProps<Props>()

  const emit = defineEmits<{
    click: []
  }>()

  const handleClick = () => {
    emit('click')
  }
</script>

<template>
  <div
    class="ns-card-container glass-card-inner"
    @click="handleClick"
  >
    <div class="card-peek">
      {{ cardContent.title }}
    </div>
  </div>
</template>

<style scoped>
  .ns-card-container {
    position: relative;
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-2xl);
    padding: var(--spacing-2sm);
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--color-text);
    overflow: hidden;
  }

  .ns-card-container:hover {
    border-color: var(--color-accent-purple-blue);
    box-shadow: 0 4px 12px var(--color-accent-purple-blue-glow);
  }

  .ns-card-container.glass-card-inner {
    min-height: 4.375rem;
    margin-top: 0;
    margin-bottom: calc(-1 * var(--spacing-2xl));
    background: rgba(0, 0, 0, 0.25) !important;
    backdrop-filter: blur(var(--blur-sm)) !important;
    -webkit-backdrop-filter: blur(var(--blur-sm)) !important;
    border-radius: var(--radius-2xl);
  }

  .card-peek {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    padding: var(--spacing-sm) 0;
    line-height: 1.3;
  }

   /* Half-width / Small desktop (960px - 1280px) */
  @media screen and (max-width: 1280px) {

  }

  /* Tablet landscape (768px - 960px) */
  @media screen and (max-width: 960px) {

  }

  /* Tablet portrait (600px - 768px) */
  @media screen and (max-width: 768px) {

  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {

  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    /* Mobile phone styles */
  }
</style>
