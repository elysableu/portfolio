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
  padding: 0 var(--spacing-md);
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
  max-height: 31.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--spacing-2sm);
  overflow: hidden;
}

.ticker-thumbnail {
  width: 100%;
  height: auto;
  max-height: 28.125rem;
  object-fit: contain;
  border-radius: var(--spacing-2sm);
  box-shadow: var(--shadow-md);
  display: block;
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
