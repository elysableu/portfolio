<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import TickerItem from './TickerItem.vue'
import type { TickerItemType } from '@/types/data.models'

interface Props {
  title?: string
  items: TickerItemType[]
  autoPlay?: boolean
  interval?: number
}


const props = withDefaults(defineProps<Props>(), {
  autoPlay: true,
  interval: 3000,
})

const buttonIcons = {
  next: '/img/ticker/next.svg',
  previous: '/img/ticker/previous.svg',
  play: '/img/ticker/play.svg',
  pause: '/img/ticker/pause.svg'
}

const currentIndex = ref(0)
const isAutoPlaying = ref(props.autoPlay)
let autoPlayTimer: number | null = null

const validItems = computed(() => {
  return props.items.filter(item => {
    if('src' in item && item.src) return true
    if('thumbnail' in item && item.thumbnail) return true
    return false
  })
})

const hasMultipleItems = computed(() => validItems.value.length > 1)

const nextSlide = () => {
  if (!hasMultipleItems.value) return

  currentIndex.value = (currentIndex.value + 1) % validItems.value.length
  resetAutoPlay()
}

const previousSlide = () => {
  if (!hasMultipleItems.value) return

  currentIndex.value = (currentIndex.value - 1 + validItems.value.length) % validItems.value.length
  resetAutoPlay()
}

const startAutoPlay = () => {
  if (!isAutoPlaying.value || !hasMultipleItems.value) return

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
  if(!hasMultipleItems.value) return
  isAutoPlaying.value = !isAutoPlaying.value

  if (isAutoPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

const currentItem = computed(() => {
  if (validItems.value.length === 0) return null
  return validItems.value[currentIndex.value]
})

onMounted(() => {
  if (hasMultipleItems.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
    isAutoPlaying.value = false
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div class="ticker-container">
    <div v-if="title" class="ticker-label">
      <h4>{{ title }}</h4>
    </div>
    <div class="ticker-content">
      <div v-if="currentItem" class="ticker-wrapper">
        <TickerItem :key="currentItem.id" :item="currentItem" />
      </div>
      <div v-if="currentItem" class="ticker-controls">
        <button
          @click="previousSlide"
          class="ticker-button"
          :class="{'ticker-button-disabled': !hasMultipleItems }"
          :disabled="!hasMultipleItems"
        >
          <img :src="buttonIcons.previous" alt="previous" class="button-icon" />
        </button>
        <button
          @click="toggleAutoPlay"
          class="ticker-button"
          :class="{'ticker-button-disabled': !hasMultipleItems }"
          :disabled="!hasMultipleItems"
        >
          <img :src="isAutoPlaying ? buttonIcons.pause : buttonIcons.play" alt="play/pause toggle" class="button-icon"/>
        </button>
        <button
          @click="nextSlide"
          class="ticker-button"
          :class="{'ticker-button-disabled': !hasMultipleItems }"
          :disabled="!hasMultipleItems"
        >
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

  .ticker-button-disabled {
    opacity: 0.4 !important;
    cursor: not-allowed !important;
    filter: grayscale(100%) brightness(0.7);
    background: rgba(0, 0, 0, 0.1) !important;
  }

  .ticker-button-disabled:hover {
    transform: none !important;
    background: rgba(0, 0, 0, 0.1) !important;
  }

  .ticker-button-disabled .button-icon {
    opacity: 0.6;
  }

  .button-icon {
    width: 32px;
    height: 32px;

    display: block;
    pointer-events: none;
  }
</style>
