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
      <div class="heading-count">
        <h3>What's New</h3>
        <span class="stack-indicator">
          {{ activeNewIndex + 1 }} / {{ nsContent.new.length }}
        </span>
      </div>
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
    </div>
    <div class="content-container right">
      <div class="heading-count">
        <h3>Coming Soon</h3>
          <span class="stack-indicator">
            {{ activeSoonIndex + 1 }} / {{ nsContent.soon.length }}
          </span>
      </div>
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
    </div>
  </div>
</template>

<style scoped>
  .ns-container {
    width: 100%;
    height: 100%;
    display: flex;
    padding: var(--spacing-md);
    border-radius: var(--spacing-2sm);
    overflow: hidden;
  }

  .content-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: var(--spacing-2sm);
    overflow: hidden;
  }

  .heading-count {
    display: flex;
    padding-bottom: var(--spacing-md);
    justify-content: space-between;
    align-items: center;
  }

  .heading-count h3 {
    font-size: var(--font-size-xl);
    flex-shrink: 0;
    margin: 0;
  }

  .stack-indicator {
    text-align: center;
    font-family: 'Dosis';
    font-size: var(--font-size-sm);
    opacity: 0.7;
    font-weight: bold;
    flex-shrink: 0;
  }

  .card-stack {
    position: relative;
    min-height: 21.875rem;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: var(--radius-2xl);
    min-height: 9rem;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  .left {
    padding-right: var(--spacing-md);
    border-right: 2px solid var(--color-border);
    border-radius: var(--radius-3xl) 0 0 var(--radius-3xl);
  }

  .right {
    padding-left: var(--spacing-md);
    border-left: 2px solid var(--color-border);
    border-radius: 0 var(--radius-3xl) var(--radius-3xl) 0;
  }

  /* Half-width / Small desktop (960px - 1280px) */
  @media screen and (max-width: 1280px) {

  }

  /* Tablet landscape (768px - 960px) */
  @media screen and (max-width: 960px) {

  }

  /* Tablet portrait (600px - 768px) */
  @media screen and (max-width: 768px) {

  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {

  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    /* Mobile phone styles */
  }
</style>
