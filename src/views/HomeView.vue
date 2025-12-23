<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from '@/composables/useData'
import type { Personal, Home, TickerItemType } from '@/types/data.models'

import Greeting from '@/components/home/Greeting.vue'
import Headline from '@/components/home/Headline.vue'
import Introduction from '@/components/home/Introduction.vue'
import FeaturedProjects from '@/components/home/FeaturedProjects.vue'

const { loading, error, getHomePageData } = useData()
const homeData = ref<{
  home: Home
  personal: Personal
  featuredProjects: TickerItemType[]
} | null>(null)

onMounted(async () => {
  homeData.value = await getHomePageData()
})
</script>

<template>
  <main>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="homeData">
      <Greeting :greeting="homeData.home.greeting" />
      <Headline :headline="homeData.home.headline" />
      <Introduction :introduction="homeData.home.introduction" />
      <FeaturedProjects :featured="homeData.featuredProjects" />
      <!-- <FeaturedBlogPosts /> -->
    </div>
  </main>
</template>

<style scoped></style>
