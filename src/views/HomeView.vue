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
  <div class="home-container">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="homeData" class="home-content">
      <div class="greeting-header">
        <Greeting :greeting="homeData.home.greeting" />
      </div>
      <div class="intro-wrapper">
        <div class="intro">
          <div class="intro-content glass-card-dark">
            <Headline :headline="homeData.home.headline" />
            <Introduction :introduction="homeData.home.introduction" />
          </div>
        </div>
        <div class="featured glass-card-dark">
          <FeaturedProjects :featured="homeData.featuredProjects" />
        </div>
        <!-- <FeaturedBlogPosts /> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home-container {
    position: fixed;
    padding: var(--spacing-md);
    margin: 0 auto;
  }

  .home-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  .intro-wrapper {
    display: flex;
    gap: var(--spacing-lg);
  }

  .greeting-header {
    font-size: larger;
    text-align: center;
  }

  .intro {
    flex: 2;
  }

  .intro-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl);
  }

  .featured {
     flex: 1;
  }
</style>
