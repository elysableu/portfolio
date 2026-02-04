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
    border-radius: 20px;
  }
</style>
