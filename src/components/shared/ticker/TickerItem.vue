<script setup lang="ts">
import {RouterLink} from 'vue-router'
import { getAssetPath } from '@/utils/assets'
import type { TickerItemType, TickerProjectType } from '@/types/data.models'
import { isTickerImage, isTickerProject } from '@/utils/typeGuards'

interface Props {
  item: TickerItemType
}

defineProps<Props>()
</script>

<template>
  <div class="ticker-item" :class="{ 'ticker-item-image': isTickerImage(item), 'ticker-item-project': isTickerProject(item) }">
    <div v-if="isTickerProject(item)" class="project-item">
      <RouterLink :to="(item as TickerProjectType).url || '/projects'" class="ticker-link ticker-link-project">
        <img :alt="item.title" :src="getAssetPath(item.thumbnail)" class="ticker-thumbnail ticker-thumbnail-project" />
      </RouterLink>
    </div>
    <div v-else-if="isTickerImage(item)" class="image-item">
      <img :alt="item.alt" :src="getAssetPath(item.src)" class="ticker-thumbnail ticker-thumbnail-image" />
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
  transform: translateY(-10px);
  padding: 0 var(--spacing-md);
  overflow: visible;
}

.ticker-item-image {
  border-radius: 0 var(--radius-3xl) 0 0;
  padding: var(--spacing-md) var(--spacing-sm);
}

.ticker-item-project {
}

.ticker-link {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  transition: transform var(--transition-base);
  overflow: visible;
}

.ticker-link:hover {
  transform: scale(1.02);
}

.project-item,
.image-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.ticker-thumbnail {
  width: 100%;
  box-shadow: var(--shadow-md);
  display: block;
}

.project-item {
  height: auto;
}

.ticker-link-project {
  overflow: hidden;
}

.ticker-thumbnail-project {
  height: auto;
  object-fit: contain;
}

.image-item{
  height: 100%;
  border-radius: 0 var(--radius-3xl) 0 0;
}

.ticker-thumbnail-image {
  height: 100%;
  object-fit: cover;
  border-radius: 0 var(--radius-3xl) 0 0;
}

.ticker-label,
.caption {
  text-transform: uppercase;
  font-size: var(--font-size-lg);
  font-weight: bold;
  position: absolute;
  bottom: -0.40625rem;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    var(--glass-dark-bg-card) 0%,
    var(--glass-dark-bg-strong) 50%,
    transparent 100%
  );
  padding: var(--spacing-xl) var(--spacing-lg);
  pointer-events: none;
  margin: 0;
  border-radius: 0;
}

.ticker-label {
  border-radius: 0;
}

.caption {
  border-radius: 0;
}

.ticker-label h3,
.caption {
  margin: 0;
}

h3 {
  margin: var(--spacing-lg);
  font-size: var(--font-size-xl);
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
