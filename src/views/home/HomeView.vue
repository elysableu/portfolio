<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from '@/composables/useData'
import type { Personal, Home, TickerItemType, NSFeatured } from '@/types/data.models'

import Greeting from '@/components/home/Greeting.vue'
import Headline from '@/components/home/Headline.vue'
import Introduction from '@/components/home/Introduction.vue'
import FeaturedProjects from '@/components/home/featured/FeaturedProjects.vue'
import FeaturedNSContainer from '@/components/home/featured/FeaturedNSContainer.vue'

const { loading, error, getHomePageData } = useData()
const homeData = ref<{
  home: Home
  personal: Personal
  featuredProjects: TickerItemType[],
  nsContent: NSFeatured
} | null>(null)

onMounted(async () => {
  homeData.value = await getHomePageData()
})
</script>

<template>
  <div class="home-container">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="homeData" class="home">
      <div class="greeting-header">
        <Greeting :greeting="homeData.home.greeting" />
        <Headline :headline="homeData.home.headline" />
      </div>
    <div class="home-content">
      <div class="featured glass-card-dark">
        <FeaturedProjects :featured="homeData.featuredProjects" />
      </div>
      <div class="intro-ns-container">
        <div class="intro-content glass-card-dark">
          <Introduction :introduction="homeData.home.introduction" />
        </div>
        <div class="new-soon glass-card-dark">
          <FeaturedNSContainer :nsContent="homeData.nsContent"/>
        </div>
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
    padding-top: var(--page-padding-top);
    padding-left: var(--page-padding-horizontal);
    padding-right: var(--page-padding-horizontal);
  }

  .home {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
  }

  .greeting-header {
    font-size: x-large;
    text-align: right;
    padding: 2.5rem 6.25rem var(--spacing-lg) var(--spacing-sm);
    z-index: 20;
    flex-shrink: 0;
  }

  .home-content {
    display: flex;
    gap: var(--spacing-xl);
    padding-top: calc(var(--spacing-lg) + var(--spacing-2sm));
    padding-bottom: var(--page-padding-bottom);
    min-height: 0;
    flex: 1;
    overflow: hidden;
  }

  .intro-ns-container {
    flex: 3;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-3xl);
    gap: var(--spacing-2sm);
    min-height: 0;
    overflow: hidden;
  }

  .intro-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    min-height: 0;
    overflow: auto;
  }

  .new-soon {
    flex: 5;
    display: flex;
    min-height: 0;
    overflow: hidden;
  }

  .featured {
     flex: 2;
     min-height: 0;
     overflow: hidden;
     border-radius: var(--radius-3xl);
  }
</style>
