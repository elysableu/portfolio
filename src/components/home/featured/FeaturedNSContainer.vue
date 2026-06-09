<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { NSFeatured } from '@/types/data.models'
  import FeaturedCard from './FeaturedCard.vue'
  import FeaturedActiveCard from './FeaturedActiveCard.vue'
  import { useResponsive } from '@/composables/useResponsive'

  interface Props {
    nsContent: NSFeatured
  }

  const props = defineProps<Props>()
  const { isMobile } = useResponsive()

  const newContent = props.nsContent.new
  const soonContent = props.nsContent.soon

  const activeNewId = ref<string | null>(newContent[0]?.id ?? null)
  const activeSoonId = ref<string | null>(soonContent[0]?.id ?? null)

  const newActiveIndex = computed(() => newContent.findIndex(c => c.id === activeNewId.value))
  const soonActiveIndex = computed(() => soonContent.findIndex(c => c.id === activeSoonId.value))

  const activeNew = computed(() => newContent.find( c => c.id === activeNewId.value))
  const activeSoon = computed(() => soonContent.find( c => c.id === activeSoonId.value))

  const peekNew = computed(() =>  newContent.filter( c => c.id !== activeNewId.value))
  const peekSoon = computed(() =>  soonContent.filter( c => c.id !== activeSoonId.value))

  const setActiveNew = (id: string) => {
    if (activeNewId.value === id) return
    activeNewId.value = id
  }

  const setActiveSoon = (id: string) => {
    if (activeSoonId.value === id) return
    activeSoonId.value = id
  }
</script>

<template>
  <div class="ns-container">
    <div class="content-container left">
      <div class="heading-count">
        <h3>What's New</h3>
        <span class="stack-indicator">
          {{ newActiveIndex + 1 }} / {{ newContent.length }}
        </span>
      </div>
      <div class="stack-layers" >
        <TransitionGroup name="stack" tag="div" class="content card-stack">
           <FeaturedCard
            v-for="item in peekNew"
            :key="item.id"
            :cardContent="item"
            @click="setActiveNew(item.id)"
          />
        </TransitionGroup>
        <FeaturedActiveCard
          v-if="activeNew"
          :key="activeNew.id"
          :cardContent="activeNew"
          class="pinned-active"
        />
      </div>
    </div>
    <div v-if="isMobile" class="divider"></div>
    <div class="content-container right">
      <div class="heading-count">
        <h3>Coming Soon</h3>
        <span class="stack-indicator">
          {{ soonActiveIndex + 1 }} / {{ soonContent.length }}
        </span>
      </div>
      <div class="stack-layers">
        <TransitionGroup name="stack" tag="div" class="content card-stack">
          <FeaturedCard
          v-for="item in peekSoon"
          :key="item.id"
          :cardContent="item"
          @click="setActiveSoon(item.id)"
          />
        </TransitionGroup>
        <FeaturedActiveCard
        v-if="activeSoon"
        :key="activeSoon.id"
        :cardContent="activeSoon"
        class="pinned-active"
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

  .stack-layers {
    position: relative;
    min-height: 9rem;
    flex: 1;
    border-radius: var(--radius-2xl);
  }

  .card-stack {
    position: absolute;
    inset: 0;
    overflow-x: hidden;
    overflow-y:  auto;
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 8rem;

    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
    clip-path: inset(0 round var(--radius-2xl));
  }

  .pinned-active {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .stack-move {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
    .ns-container {
      flex-direction: column;
      padding-top: var(--spacing-md);
    }

    .stack-layers {
      min-height: 22rem;
    }

    .card-stack {
      
    }

    .left {
      border-right: none;
    }

    .right {
      border-left: none;
    }
  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {

  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    /* Mobile phone styles */
  }
</style>
