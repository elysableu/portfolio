<script setup lang="ts">
import { getAssetPath } from '@/utils/assets'
import type { TickerItemType } from '@/types/data.models'
import { isTickerImage, isTickerProject } from '@/utils/typeGuards'

interface Props {
  item: TickerItemType
}

defineProps<Props>()
</script>

<template>
  <div class="ticker-item">
    <div v-if="isTickerProject(item)" class="project-item">
      <a :href="item.url" target="_blank" rel="noopener noreferrer" class="ticker-link">
        <img :alt="item.title" :src="getAssetPath(item.thumbnail)" class="ticker-thumbnail" />
      </a>
      <!-- <div class="ticker-label">
        <h3>{{ item.title }}</h3>
      </div> -->
    </div>
    <div v-else-if="isTickerImage(item)" class="image-item">
      <img :alt="item.alt" :src="getAssetPath(item.src)" class="ticker-thumbnail" />
      <div v-if="item.caption" class="caption">{{ item.caption }}</div>
    </div>
  </div>
</template>

<style scoped>
.ticker-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  transform: translateY(-30px);
  padding: 0px 15px;
}

.ticker-link {
  position: relative;
  display: block;
  width: 100%;
  text-decoration: none;
  transition: transform var(--transition-base);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.ticker-link:hover {
  transform: scale(1.02);
}

.project-item,
.image-item {
  position: relative;
  width: 100%;
  max-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
}

.ticker-thumbnail {
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: var(--shadow-md);
  display: block;
}

.ticker-label,
.caption {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  bottom: -6.5px;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    transparent 100%
  );
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  pointer-events: none;
  margin: 0;
}

.ticker-label h3,
.caption {
  margin: 0;
}

h3 {
  margin: var(--spacing-lg);
  font-size: 1.5rem;
  color: var(--color-text-inverse);
  text-align: left;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .ticker-thumbnail {
    max-width: 100%;
  }
}
</style>
