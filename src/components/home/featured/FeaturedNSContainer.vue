<script setup lang="ts">
  import { ref, watch } from 'vue'
  import type { NSFeatured } from '@/types/data.models'
  import FeaturedCard from './FeaturedCard.vue';

  interface Props {
    nsContent: NSFeatured
  }

  defineProps<Props>()

  const activeNewIndex = ref(0)
  const activeSoonIndex = ref(0)

  // const setActiveNew = (index: number) => {
  //   console.log('Setting active new to:', index)
  //   activeNewIndex.value = index
  // }

  // const setActiveSoon = (index: number) => {
  //   console.log('Setting active soon to:', index)
  //   activeSoonIndex.value = index
  // }

  // DEBUG: Watch for changes
  watch(activeNewIndex, (newVal) => {
    console.log('activeNewIndex changed to:', newVal)
  })

  const setActiveNew = (index: number) => {
    console.log('Setting active new to:', index)
    activeNewIndex.value = index
  }

  const setActiveSoon = (index: number) => {
    console.log('Setting active soon to:', index)
    activeSoonIndex.value = index
  }
</script>

<template>
  <div class="ns-container">
    <div class="content-container left">
      <h3>What's New</h3>
      <div class="content card-stack">
         <FeaturedCard
          v-for="(item, index) in nsContent.new"
          :key="item.id"
          :cardContent="item"
          :isActive="activeNewIndex === index"
          :stackPosition="index"
          :totalCards="nsContent.new.length"
          @click="setActiveNew(index)"
        />
      </div>
      <div class="stack-indicator">
        {{ activeNewIndex + 1 }} / {{ nsContent.new.length }}
      </div>
    </div>
    <div class="content-container right">
      <h3>Coming Soon</h3>
      <div class="content card-stack">
        <FeaturedCard
          v-for="(item, index) in nsContent.soon"
          :key="item.id"
          :cardContent="item"
          :isActive="activeSoonIndex === index"
          :stackPosition="index"
          :totalCards="nsContent.soon.length"
          @click="setActiveSoon(index)"
        />
      </div>
      <div class="stack-indicator">
        {{ activeSoonIndex + 1 }} / {{ nsContent.soon.length }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ns-container {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 15px;
    border-radius: 10px;
    overflow: hidden;
  }

  .content-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: hidden;
  }

  .content-container h3 {
    font-size: 24px;
    padding-bottom: var(--spacing-md);
    flex-shrink: 0;
  }

  .card-stack {
    position: relative;
    min-height: 350px;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 0;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
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

  .stack-indicator {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9rem;
    opacity: 0.7;
    font-weight: 500;
    flex-shrink: 0;
  }
</style>
