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
/* Base styles - Average full screen (1920px) */
  .home-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .home {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    position: relative;
  }

  .greeting-header {
    position: absolute;
    top: calc(-1 * var(--greeting-offset));
    right: 0;
    left: 0;
    font-size: x-large;
    text-align: right;
    padding: 0.5rem 4rem calc(var(--spacing-lg) + 2.5rem) var(--spacing-sm);
    z-index: 20;
    flex-shrink: 0;
  }

  .home-content {
    display: flex;
    gap: var(--spacing-xl);
    padding-bottom: var(--page-padding-bottom);
    min-height: 0;
    flex: 1;
  }

  .intro-ns-container {
    flex: 3;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-3xl);
    gap: var(--spacing-2sm);
  }

  .intro-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    height: fit-content;
    overflow: auto;
  }

  .new-soon {
    flex: 5;
    display: flex;
    min-height: 0;
    overflow: hidden;
  }

  .featured {
     flex: 3;
     min-height: 0;
     overflow: hidden;
     border-radius: var(--radius-3xl);
  }


  /* Half-width / Small desktop (960px - 1280px) */
  @media screen and (max-width: 1280px) {
    .greeting-header {
      transform: translate(7vw, 4vh) scale(0.95);
    }

    .home-content {
      flex-direction: column-reverse;
    }

    .intro-ns-container {
      gap: var(--spacing-md);
    }

    .intro-content {
      height: fit-content;
    }

    .new-soon {

    }

    .featured {

    }
  }

  /* Tablet landscape (768px - 960px) */
  @media screen and (max-width: 960px) {
    .greeting-header {
      transform: translate(10vw, 5vh) scale(0.8);
      padding: 0;
      padding-top: var(--spacing-md);
    }

    .home-content {
      gap: var(--spacing-md);
    }

    .intro-ns-container {

    }

    .intro-content {

    }

    .new-soon {

    }

    .featured {

    }
  }

  /* Tablet portrait (600px - 768px) */
  @media screen and (max-width: 768px) {
    .home-container {
      padding-top: calc(var(--spacing-5xl) + var(--spacing-md));
    }

    .greeting-header {
      transform: translateY(5vh) scale(0.8);
      text-align: center;
    }

    .home-content {
      gap: var(--spacing-2xl);
    }

    .intro-ns-container {
      gap: var(--spacing-2xl);
    }

    .intro-content {

    }

    .new-soon {

    }

    .featured {

    }
  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {
   .home-container {
      padding-top: calc(var(--spacing-5xl) + var(--spacing-lg));
    }

    .intro-ns-container {
      padding-top: 2.2rem;
    }
  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    .home-container {
      padding-top: calc(var(--spacing-5xl));
    }

    .intro-ns-container {
      padding-top: 0;
    }

     .home-content {
      gap: var(--spacing-xl);
    }

    .intro-ns-container {
      gap: var(--spacing-xl);
    }
  }
</style>
