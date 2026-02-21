<script setup lang="ts">
import Ticker from '@/components/shared/ticker/Ticker.vue'
import type { TickerItemType } from '@/types/data.models'

interface Props {
  featured: TickerItemType[]
}

defineProps<Props>()
</script>

<template>
  <div class="featured-projects-container">
    <Ticker title="Featured Projects" :items="featured" />
  </div>
</template>

<style scoped>
  .featured-projects-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
    border-radius: var(--radius-3xl);
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
