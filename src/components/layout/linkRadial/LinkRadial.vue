<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useData } from '@/composables/useData'
import { calculateRadialPostions, extractRadialItems } from '@/utils/radialItems'
import type { RadialItem } from '@/types/data.models'

import LinkRadialItem from './LinkRadialItem.vue'

const { loading, error, getPersonal } = useData()
const radialItemData = ref<RadialItem[]>([])

const isMobile = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const radialItemsWithPositons = computed(() => {

  const config = isMobile.value
    ? {
      headshotRadius: 115,
      orbitGap: 40,
      startAngle: 270,
      endAngle: 90
    } : {
      headshotRadius: 115,
      orbitGap: 40,
      startAngle: 60,
      endAngle: 205
  }

  return calculateRadialPostions(radialItemData.value, config)
})

onMounted(async () => {
  const data = await getPersonal()
  if (data) {
    radialItemData.value = extractRadialItems(data)
  }

  updateIsMobile()

  window.addEventListener('resize', updateIsMobile)
})
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else-if="radialItemData.length" class="radial-content">
    <div class="radial-container">
      <div class="headshot-background">
        <div class="headshot">
          <img :src="`https://ui-avatars.com/api/?name=EW&size=64&background=a6429b`" alt="headshot-image" class="headshot-image"/>
        </div>
      </div>
      <div class="radial-items">
        <ul>
          <LinkRadialItem
            v-for="item in radialItemsWithPositons"
            :key="item.label"
            :item="item"
            :x="item.x"
            :y="item.y"
            :rotation="item.rotation"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Base styles - Average full screen (1920px) */
  .radial-content {
    position: fixed;
    top: calc(-1 * var(--spacing-xl) + 2.25rem);
    left: calc(-1 * var(--spacing-xl) + 2.25rem);
    bottom: auto;
    z-index: 9001;
    transition: all 0.4s ease;
  }

  .radial-container {
    position: relative;
    overflow: visible;
    width: 21.875rem;
    height: 21.875rem;
    cursor: pointer;
    pointer-events: none;
  }

  .headshot-background {
    position: absolute;
    top: -4.0625rem;
    left: -4.0625rem;
    width: 21.875rem;
    height: 21.875rem;
    background: var(--glass-dark-bg-medium);
    backdrop-filter: blur(var(--blur-lg));
    -webkit-backdrop-filter: blur(var(--blur-lg));
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
      0 8px 32px var(--glass-dark-bg-medium),
      inset 0 1px 0 var(--glass-bg-medium),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3),
      inset 0 0 12px 6px var(--glass-dark-bg-subtle);
    z-index: 1;
  }

  .headshot-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.0625rem;
    background: linear-gradient(
      90deg,
      transparent,
      var(--glass-border-medium),
      transparent
    );
  }

  .headshot-background::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.0625rem;
    height: 100%;
    background: linear-gradient(
      180deg,
      var(--glass-border-medium),
      transparent,
      var(--glass-bg-medium)
    );
  }

  .headshot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18.75rem;
    height: 18.75rem;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
  }

  .headshot-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .radial-items {
    position: absolute;
    top: 7.8125rem;
    left: 7.8125rem;
    width: 0;
    height: 0;
    z-index: 10;
  }

  .radial-items ul {
    position: relative;
    z-index: 10;
  }

  /* Half-width / Small desktop (960px - 1280px) */
  @media screen and (max-width: 1280px) {
    .radial-content {
      transform: translateY(3.5vh) scale(0.8);
      transform-origin: top left;
    }
  }

  /* Tablet landscape (768px - 960px) */
  @media screen and (max-width: 960px) {
    .radial-content {
      transform: translate(-1.8vh, 2.1vh) scale(0.7);
      transform-origin: top left;
    }
  }

  /* Tablet portrait (600px - 768px) */
  @media screen and (max-width: 768px) {
    .radial-content {
      transform: translate(40vh, 25vh) scale(0.6);
      transform-origin: top center;
    }

    .radial-items {
        transform: translate(-3.5vh, -3.5vh) scale(1.2);
    }
  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {
    .radial-content {
      transform: translate(17.5vh, 18vh) scale(0.7);
      transform-origin: top center;
    }
  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    .radial-content {
      transform: translate(8vh, 18vh) scale(0.7);
      transform-origin: top center;
    }

    .radial-items {
      transform: translate(-2.7vh, -2.5vh) scale(1.25);
    }
  }
</style>
