<script setup lang="ts">
import type { TickerItemProps } from '@/types/ticker'

interface Props {
  item: TickerItemProps
}

defineProps<Props>()
</script>

<template>
  <div class="ticker-item">
    <a :href="item.link" target="_blank" rel="noopener noreferrer">
      <img :alt="item.name" :src="item.thumbnail" class="ticker-thumbnail" />
    </a>
    <h3>{{ item.name }}</h3>
  </div>
</template>

<style scoped>

</style>
