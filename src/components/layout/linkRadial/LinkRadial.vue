<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useData } from '@/composables/useData'
import { calculateRadialPostions, extractRadialItems } from '@/utils/radialItems'
import type { RadialItem } from '@/types/data.models'

import LinkRadialItem from './LinkRadialItem.vue'

const { loading, error, getPersonal } = useData()
const radialItemData = ref<RadialItem[]>([])

const radialItemsWithPositons = computed(() =>
  calculateRadialPostions(radialItemData.value, {
    headshotRadius: 150,
    orbitGap: 20,
    startAngle: 70,
    endAngle: 195
  })
)

console.log(radialItemsWithPositons)

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
  <div v-else-if="radialItemData.length" class="radial-content">
    <div class="radial-container">
      <div class="headshot-background">
        <div class="headshot">
          <img :src="`https://ui-avatars.com/api/?name=EW&size=64&background=7B9BB3`" alt="headshot-image" class="headshot-image"/>
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
  .radial-content {
    position: relative;
    overflow: visible;
  }

  .radial-container {
    position: relative;
    overflow: visible;
  }

  .headshot-background {
    position: fixed;
    top: -65px;
    left: -65px;
    width: 350px;
    height: 350px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3),
      inset 0 0 12px 6px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }

  .headshot-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
  }

  .headshot-background::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2),
      transparent,
      rgba(255, 255, 255, 0.1)
    );
  }

  .headshot {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 200;
  }

  .headshot-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .radial-items {
    position: fixed;
    top: 125px;
    left: 125px;
    width: 0;
    height: 0;
    z-index: 300;
  }
</style>
