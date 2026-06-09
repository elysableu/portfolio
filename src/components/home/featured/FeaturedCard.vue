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
    <div class="ns-banner">
      <h4>{{ cardContent.title }}</h4>
      <div
        v-if="isNew(cardContent)"
        class="ns-current ns-status"
      >
        {{ cardContent.dateCompleted }}
      </div>

      <div
        v-else-if="isSoon(cardContent) && cardContent.content.status"
        class="ns-current ns-date"
      >
        {{ cardContent.content.status }}
      </div>
    </div>
    <div class="ns-tagline">
      <p>{{ cardContent.content.tagline }}</p>
    </div>
  </div>
</template>

<style scoped>
  .ns-card-container {
    position: relative;
    width: clamp(14rem, 22vw, 18rem);
    height: 100%;
    min-height: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-2xl);
    padding: var(--spacing-md);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--color-text);
    overflow: hidden;
  }

  .ns-card-container.glass-card-inner {
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
    --title-lines: 2;
    --title-line-height: 1.25;

    display: flex;
    align-items: flex-start;
    height: calc(var(--title-lines) * var(--title-line-height) * 1em);
    flex-shrink: 0;
    overflow: hidden;
    font-size: var(--font-size-lg);
  }

  .ns-banner h4 {
    margin: 0;
    margin-right: 5rem;
    color: var(--color-text);
    font-size: inherit;
    line-height: var(--title-line-height);

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ns-current {
    position: absolute;
    top: var(--spacing-sm);
    right: var(--spacing-sm);
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


  .ns-icon-wrapper {
    display: flex;
    align-items: center;
  }

  .ns-tagline {
    flex: 0 0 auto;
    overflow: hidden;
    font-family: 'Dosis';
    padding: 0 var(--spacing-sm);
    color: rgba(255, 255, 255, 0.85);

    -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent);
            mask-image: linear-gradient(to bottom, #000 70%, transparent);
  }

  .ns-tagline p {
    --tagline-visible: calc(clamp(14rem, 22vw, 18rem) - 2 * var(--spacing-2sm) - 2 * var(--spacing-sm));

    margin: 0;
    white-space: nowrap;
    display: inline-block;
    transform: translateX(0);
    transition: transform 0.3s ease;
  }

  .ns-card-container:hover .ns-tagline {
    -webkit-mask-image: none;
            mask-image: none;
  }

  .ns-card-container:hover .ns-tagline p {
    animation: tagline-scroll 5.5s ease-in-out infinite alternate;
  }

  @keyframes tagline-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(min(0px, calc(var(--tagline-visible) - 100%))); }
  }

  @media (prefers-reduced-motion: reduce) {
    .ns-card-container:hover .ns-tagline p {
      animation: none;
    }
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
