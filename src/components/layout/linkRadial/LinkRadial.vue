<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from '@/composables/useData'
import type { Personal, RadialItem } from '@/types/data.models'

import LinkRadialItem from './LinkRadialItem.vue'

const { loading, error, getPersonal } = useData()
const personalData = ref<Personal | null>(null)

onMounted(async () => {
  personalData.value = await getPersonal()
})

const radialItemData = ref<RadialItem[]>([])


</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else-if="personalData" class="personal-radial-content">
    <div class="radial-container">
      <div class="headshot"></div>
      <div class="radial-links">
        <ul>
          <LinkRadialItem
            v-for="item in personalData?.links"
            :key="item.label"
            :contact="item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
