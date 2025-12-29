<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import TickerItem from './TickerItem.vue'
import type { TickerItemType } from '@/types/data.models'

interface Props {
  title: string
  items: TickerItemType[]
  autoPlay?: boolean
  interval?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoPlay: true,
  interval: 3000,
})

const buttonIcons = {
  next: '/img/next.svg',
  previous: '/img/previous.svg',
  play: '/img/play.svg',
  pause: '/img/pause.svg'
}

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

const currentItem = computed(() => {
  if (props.items.length === 0) return null
  return props.items[currentIndex.value]
})

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div class="ticker-container">
    <div class="ticker-label">
      <h4>{{ title }}</h4>
    </div>
    <div class="ticker-content">
      <div v-if="currentItem" class="ticker-wrapper">
        <TickerItem :key="currentItem.id" :item="currentItem" />
      </div>
      <div v-if="currentItem" class="ticker-controls">
        <button @click="previousSlide" class="ticker-button">
          <img :src="buttonIcons.previous" alt="previous" class="button-icon" />
        </button>
        <button @click="toggleAutoPlay" class="ticker-button">
          <img :src="isAutoPlaying ? buttonIcons.pause : buttonIcons.play" alt="play/pause toggle" class="button-icon"/>
        </button>
        <button @click="nextSlide" class="ticker-button">
           <img :src="buttonIcons.next" alt="previous" class="button-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ticker-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ticker-label {
    width: 100%;
    font-family: 'Dosis', sans-serif;
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
    background: black;
    text-align: center;
  }

  .ticker-label h4 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text);
  }

  .ticker-content {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }

  .ticker-wrapper {
    position: relative;
    width: 100%;
  }

  .ticker-controls {
    position: absolute;
    right: var(--spacing-lg);
    bottom: var(--spacing-lg);
    z-index: 300;
    display: flex;
    gap: var(--spacing-sm);
  }

  .ticker-button {
    width: 48px;
    height: 48px;
    background: transparent;
    border: none;
    padding: 0;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all var(--transition-base);
  }

  .ticker-button:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }

 .ticker-button:active {
    transform: scale(0.95);
  }

  .button-icon {
    width: 32px;
    height: 32px;

    display: block;
    pointer-events: none;
  }
</style>
