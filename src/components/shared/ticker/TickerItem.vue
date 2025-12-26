<script setup lang="ts">
import type { TickerItemType } from '@/types/data.models'

interface Props {
  item: TickerItemType
}

defineProps<Props>()
</script>

<template>
  <div class="ticker-item">
    <a :href="item.url" target="_blank" rel="noopener noreferrer">
      <img :alt="item.title" :src="item.thumbnail" class="ticker-thumbnail" />
    </a>
    <h3>{{ item.title }}</h3>
  </div>
</template>

<style scoped>
.ticker-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.ticker-thumbnail {
  max-width: 600px; /* Maximum width */
  width: 100%; /* Responsive - will shrink on small screens */
  height: auto; /* Maintains aspect ratio */
  object-fit: contain; /* Ensures full image is visible */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
}

a {
  text-decoration: none;
  transition: transform 0.3s;
}

a:hover {
  transform: scale(1.02);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .ticker-thumbnail {
    max-width: 100%;
  }
}
</style>
