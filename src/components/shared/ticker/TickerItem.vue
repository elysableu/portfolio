<script setup lang="ts">
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
        <img :alt="item.title" :src="item.thumbnail" class="ticker-thumbnail" />
      </a>
      <div class="ticker-label">
        <h3>{{ item.title }}</h3>
      </div>
    </div>
    <div v-else-if="isTickerImage(item)" class="image-item">
      <img :alt="item.alt" :src="item.src" class="ticker-thumbnail" />
      <div v-if="item.caption" class="caption">{{ item.caption }}</div>
    </div>
  </div>
</template>

<style scoped>
.ticker-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-md);
}

.ticker-link {
  position: relative;
  display: block;
  width: 100%;
  text-decoration: none;
  transition: transform var(--transition-base);
}

.ticker-link:hover {
  transform: scale(1.02);
}

.ticker-thumbnail {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  display: block;
}

.ticker-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    transparent 100%
  );
  padding: var(--spacing-lg);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
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
