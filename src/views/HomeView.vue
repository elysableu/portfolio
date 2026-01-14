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
    <div v-else-if="homeData">
      <div class="greeting-header">
        <Greeting :greeting="homeData.home.greeting" />
      </div>
    <div class="home-content">
      <div class="intro-wrapper">
        <div class="featured glass-card-dark">
          <FeaturedProjects :featured="homeData.featuredProjects" />
        </div>
        <div class="intro">
          <div class="intro-content glass-card-dark">
            <Headline :headline="homeData.home.headline" />
            <Introduction :introduction="homeData.home.introduction" />
          </div>
        </div>
        <!-- <FeaturedBlogPosts /> -->
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
  .home-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 150px calc(var(--spacing-lg) + 10px);
  }

  .greeting-header {
    font-size: x-large;
    text-align: right;
    padding: 70px 100px var(--spacing-lg) var(--spacing-sm);
    z-index: 20;
  }

  .home-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
    padding-top: calc(var(--spacing-lg) + 30px);
  }

  .intro-wrapper {
    display: flex;
    gap: var(--spacing-lg);
  }


  .intro {
    flex: 3;
  }

  .intro-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl);
  }

  .featured {
     flex: 2;
  }
</style>
