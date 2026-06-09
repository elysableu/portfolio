<script setup lang="ts">
  import type { NewFeature, SoonFeature } from '@/types/data.models';

  interface Props {
    cardContent: SoonFeature | NewFeature
  }

  defineProps<Props>()

  const isNew = (content: SoonFeature | NewFeature): content is NewFeature => {
    return 'dateCompleted' in content
  }

  const isSoon = (content: SoonFeature | NewFeature): content is SoonFeature => {
    return 'dateAdded' in content
  }
</script>

<template>
  <div class="ns-active-container glass-card-inner">

   
</template>

<style scoped>
  .ns-active-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-2xl);
    padding: var(--spacing-2sm);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--color-text);
    overflow: hidden;
  }

  .ns-active-container.glass-card-inner {
    min-height: 8rem;
    margin-bottom: 0;
    background: var(--glass-bg-strong) !important;
    backdrop-filter: blur(var(--blur-xl)) !important;
    -webkit-backdrop-filter: blur(var(--blur-xl)) !important;
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-2xl);
  }

  .ns-banner {
    display: flex;
    gap: var(--spacing-sm);
    font-size: var(--font-size-lg);
    padding: var(--spacing-sm);
  }

  .ns-banner h4 {
    color: var(--color-text);
  }

  .ns-icon-wrapper {
    display: flex;
    align-items: center;
  }

  .ns-icon {
    width: var(--icon-xs);
    height: var(--icon-xs);
  }

  .ns-tagline {
    font-family: 'Dosis';
    padding: var(--spacing-sm);
    color: rgba(255, 255, 255, 0.85);
  }

  .ns-current {
    position: absolute;
    bottom: var(--spacing-sm);
    right: var(--spacing-md);
    font-family: 'Dosis';
    font-weight: bold;
    font-size: 0.8rem;
    padding: var(--spacing-xs) 0.4375rem;
    border-radius: var(--radius-3xl);
    width: fit-content;
  }

  .ns-date {
    background: var(--color-accent-orange);
    color: var(--color-text-inverse);
  }

  .ns-status {
    background: var(--color-primary);
    color: var(--color-text);
  }
</style>
