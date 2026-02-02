<script setup lang="ts">
  import type { NSFeatured } from '@/types/data.models'

  // import FeaturedNew from './FeaturedNew.vue'
  import FeaturedSoon from './FeaturedSoon.vue'
  import FeaturedCard from './FeaturedCard.vue';

  interface Props {
    nsContent: NSFeatured
  }
 defineProps<Props>()
</script>

<template>
  <div class="ns-container">
    <div class="content-container left">
      <h3>What's New</h3>
      <div class="content">
         <FeaturedCard
          v-for="item in nsContent.new"
          :key="item.id"
          :cardContent="item"
        />
      </div>
    </div>
    <div class="content-container right">
      <h3>What's Coming</h3>
      <div class="content">
        <FeaturedCard
          v-for="item in nsContent.soon"
          :key="item.id"
          :cardContent="item"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ns-container {
    width: 100%;
    display: flex;
    padding: 15px;
    border-radius: 10px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .content-container h3 {
    font-size: 24px;
    padding-bottom: var(--spacing-md);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .left {
    padding-right: 15px;
    border-right: solid 2px grey;
    border-radius: 20px 0px 0px 20px;
  }

  .right {
    padding-left: 15px;
    border-left: solid 2px grey;
    border-radius: 0px 20px 20px 0px;
  }
</style>
