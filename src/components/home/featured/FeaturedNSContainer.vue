<script setup lang="ts">
  import { ref } from 'vue'
  import type { NSFeatured } from '@/types/data.models'
  import FeaturedCard from './FeaturedCard.vue';

  interface Props {
    nsContent: NSFeatured
  }

  const props = defineProps<Props>()

  const newCards = ref([...props.nsContent.new])
  const soonCards = ref([...props.nsContent.soon])

  const activeNewIndex = ref(0)
  const activeSoonIndex = ref(0)

  const setActiveNew = (index: number) => {
    if (activeNewIndex.value === index) return

    const clickedCard = newCards.value[index]
    if(!clickedCard) return

    const beforeClicked = newCards.value.slice(0, index)
    const afterClicked = newCards.value.slice(index + 1)

    newCards.value = [clickedCard, ...beforeClicked, ...afterClicked]
    activeNewIndex.value = 0
  }

  const setActiveSoon = (index: number) => {
    if (activeSoonIndex.value === index) return

    const clickedCard = soonCards.value[index]
    if(!clickedCard) return

    const beforeClicked = soonCards.value.slice(0, index)
    const afterClicked = soonCards.value.slice(index + 1)

    soonCards.value = [clickedCard, ...beforeClicked, ...afterClicked]
    activeSoonIndex.value = 0
  }
</script>

<template>
  <div class="ns-container">
    <div class="content-container left">
      <h3>What's New</h3>
      <div class="content card-stack">
         <FeaturedCard
          v-for="(item, index) in newCards"
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
          v-for="(item, index) in soonCards"
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
