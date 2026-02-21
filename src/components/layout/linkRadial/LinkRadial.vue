<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useData } from '@/composables/useData'
import { useResponsive } from '@/composables/useResponsive'
import { calculateRadialPostions, extractRadialItems } from '@/utils/radialItems'
import type { RadialItem } from '@/types/data.models'

import LinkRadialItem from './LinkRadialItem.vue'

const { loading, error, getPersonal } = useData()
const { isMobile } = useResponsive()
const radialItemData = ref<RadialItem[]>([])

const radialItemsWithPositons = computed(() => {

  const config = isMobile.value
    ? {
      headshotRadius: 110,
      orbitGap: 40,
      startAngle: 270,
      endAngle: 90,
      offsetX: 0,
      offsetY: 0
    } : {
      headshotRadius: 110,
      orbitGap: 50,
      startAngle: 60,
      endAngle: 205,
      offsetX: 7,
      offsetY: 7
  }

  return calculateRadialPostions(radialItemData.value, config)
})

onMounted(async () => {
  const data = await getPersonal()
  if (data) {
    radialItemData.value = extractRadialItems(data)
  }
})
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else-if="radialItemData.length" class="radial-container">
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
</template>

<style scoped>
  /* Base styles - Average full screen (1920px) */
  .radial-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    z-index: 9001;
    transition: all var(--transition-slow);
    transform-origin: top left;
    overflow: visible;
    width: 30rem;
    height: 30rem;
    cursor: pointer;
    pointer-events: none;
  }

  .headshot-background {
    position: absolute;
    top: 0;
    left: 0;
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
    top: 11.875rem;
    left: 11.875rem;
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
    .radial-container {
      transform: scale(0.9);
    }
  }

  /* Tablet landscape (769px - 960px) */
  @media screen and (max-width: 960px) {
    .radial-container {
      transform: scale(0.9);

    }

    .radial-items {
      transform: translate(-2vh, -2.5vh) scale(1.15);
    }
  }

  /* Tablet portrait (600px - 768px) */
  @media screen and (max-width: 768px) {
    .radial-container{
      position: relative;
      width: fit-content;
      height: calc(21.875rem * 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .headshot-background {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(21.875rem * 0.9);
      height: calc(21.875rem * 0.9);
    }

    .headshot {
      width: calc(18.75rem * 0.9);
      height: calc(18.75rem * 0.9);
    }

    .radial-items {
      position: absolute;
      top: calc(10.9375rem * 0.9);
      left: 50%;
      transform: translate(-50%, -50%) scale(1.08);
      width: 0;
      height: 0;
    }
  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {
    .radial-container {
      transform: scale(0.8);
    }
  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    .radial-container {
      transform: scale(0.7);
      transform-origin: top center;
    }

    .radial-items {

    }
  }
</style>
