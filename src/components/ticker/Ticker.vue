<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import TickerItem from './TickerItem.vue'
import type { TickerItemType } from '@/types/data.models'

interface Props {
  items: TickerItemType[]
  autoPlay?: boolean
  interval?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoPlay: true,
  interval: 7000,
})

const currentIndex = ref(0)
let autoPlayTimer: number | null = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
  resetAutoPlay()
}

const previousSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
  resetAutoPlay()
}

const startAutoPlay = () => {
  if (!props.autoPlay) return

  autoPlayTimer = window.setInterval(() => {
    nextSlide()
  }, props.interval)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

const currentItem = computed(() => props.items[currentIndex.value])

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div class="ticker-container">
    <div class="ticker-label"></div>
    <div class="ticker-content">
      <div class="ticker-wrapper">
        <TickerItem :key="currentItem.id" :item="currentItem" />
      </div>
      <div class="ticker-buttons"></div>
    </div>
  </div>
</template>
