<script setup lang="ts">
  import type { NSFeatured } from '@/types/data.models'
  import FeaturedCard from './FeaturedCard.vue'

  interface Props {
    nsContent: NSFeatured
  }

  const props = defineProps<Props>()

  const newContent = props.nsContent.new
  const soonContent = props.nsContent.soon

  const repeat = 3
</script>

<template>
  <div class="ns-container">
    <div class="content-container top">
      <div class="heading">
        <h3>What's New</h3>
      </div>
      <div class="marquee-viewport">
        <div class="marquee">
          <div
            v-for="n in repeat"
            :key="n"
            class="marquee__group"
            :aria-hidden="n > 1 ? 'true' : undefined"
          >
            <FeaturedCard
            v-for="item in newContent"
            :key="item.id"
            :cardContent="item"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="smallScreen" class="divider"></div> -->
    <div class="content-container bottom">
      <div class="heading">
        <h3>Coming Soon</h3>
      </div>
      <div class="marquee-viewport">
        <div class="marquee">
          <div
            v-for="n in repeat"
            :key="n"
            class="marquee__group marquee__group--reverse"
            :aria-hidden="n > 1 ? 'true' : undefined"
          >
            <FeaturedCard
            v-for="item in soonContent"
            :key="item.id"
            :cardContent="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ns-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: var(--spacing-md);
    border-radius: var(--spacing-2sm);
    overflow: hidden;
  }

  .content-container {
    flex: 1;
    min-height: 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    padding: var(--spacing-2sm);
    overflow: hidden;
  }

  .heading h3 {
    font-size: var(--font-size-lg);
    flex-shrink: 0;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .marquee-viewport {
    position: relative;
    flex: 1;
    min-height: 0;
    min-width: 0;
    width: 100%;
    max-width: 100%;
    border-radius: var(--radius-2xl);
    overflow: hidden;
    display: flex;
    align-items: stretch;
    -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
           mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  }

  .marquee {
    --gap: var(--spacing-lg);
    --marquee-duration: 40s;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: var(--gap);
    height: 100%;
  }

  .marquee__group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--gap);
    flex-shrink: 0;
    min-width: max-content;
    animation: marquee-left var(--marquee-duration) linear infinite;
  }

  .marquee__group--reverse {
    animation-direction: reverse;
  }

  .marquee-viewport:hover .marquee__group {
    animation-play-state: paused;
  }

  @keyframes marquee-left {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-100% - var(--gap))); }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-viewport {
      overflow-x: auto;
      -webkit-mask-image: none;
          mask-image: none;
    }

    .marquee__group {
      animation: none;
    }

    .marquee__group:not(:first-child) {
      display: none;
    }
  }

  .top {
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--color-border);
  }

  /* Half-width / Small desktop (960px - 1280px) */
  @media screen and (max-width: 1280px) {

  }

  /* Tablet landscape (768px - 960px) */
  @media screen and (max-width: 960px) {

  }

  /* Tablet portrait (600px - 768px) */
  @media screen and (max-width: 768px) {
    .ns-container {
      flex-direction: column;
      padding-top: var(--spacing-md);
    }
  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {

  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    /* Mobile phone styles */
  }
</style>
