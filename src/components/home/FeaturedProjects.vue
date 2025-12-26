<script setup lang="ts">
import Ticker from '@/components/shared/ticker/Ticker.vue'
import type { TickerItemType } from '@/types/data.models'

interface Props {
  featured: TickerItemType[]
}

defineProps<Props>()
</script>

<template>
  <div>
    <Ticker :items="featured" />
  </div>
</template>

<style scoped></style>
