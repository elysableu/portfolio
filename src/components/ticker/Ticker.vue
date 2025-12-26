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
  interval: 3000,
})

const currentIndex = ref(0)
const isAutoPlaying = ref(props.autoPlay)
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
  if (!isAutoPlaying.value) return

  stopAutoPlay()
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

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value

  if (isAutoPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
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
      <div class="ticker-buttons">
        <button @click="previousSlide" class="ticker-button">⇠</button>
        <button @click="toggleAutoPlay"  class="ticker-button">{{ isAutoPlaying ? '⏸' : '▶' }}</button>
        <button @click="nextSlide"  class="ticker-button">⇢</button>
      </div>
    </div>
  </div>
</template>
