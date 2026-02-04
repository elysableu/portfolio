<script setup lang="ts">
import {computed} from 'vue'
import type { NewFeature, SoonFeature } from '@/types/data.models';

  interface Props {
    cardContent: SoonFeature | NewFeature
    isActive: boolean
    stackPosition: number
    totalCards: number
  }

  const props = defineProps<Props>()

  const emit = defineEmits<{
    click: []
  }>()

  const isNew = (content: SoonFeature | NewFeature): content is NewFeature => {
    return 'dateCompleted' in content
  }

  const isSoon = (content: SoonFeature | NewFeature): content is SoonFeature => {
    return 'dateAdded' in content
  }

  const cardStyle = computed(() => {
    const zIndex = props.isActive ? props.totalCards + 10 : props.totalCards - props.stackPosition

    const baseOffset = 180
    const stackOffset = props.stackPosition * 45
    const translateY = props.isActive ? 0 : baseOffset + stackOffset - 80

    return {
      zIndex,
      transform: `translateY(${translateY}px)`
    }
  })

  const handleClick = () => {
    emit('click')
  }
</script>

<template>
  <div
    class="ns-card-container glass-card-inner"
    :class="{ active: isActive }"
    :style="cardStyle"
    @click="handleClick"
  >
    <template v-if="isActive">
      <div class="ns-banner">
        <span class="ns-icon-wrapper">
          <img
          v-if="cardContent.content.icon"
          :alt="cardContent.title"
          :src="cardContent.content.icon"
          class="ns-icon"
          />
        </span>
        <h4>{{ cardContent.title }}</h4>
      </div>

      <div class="ns-tagline">
        {{ cardContent.content.tagline }}
      </div>

      <div
        v-if="isNew(cardContent)"
        class="ns-current ns-status"
      >
        {{ cardContent.dateCompleted }}
      </div>

      <div
        v-else-if="isSoon(cardContent) && cardContent.content.status"
        class="ns-current ns-date"
      >
        {{ cardContent.content.status }}
      </div>
    </template>

    <template v-else>
      <div class="card-peek">
        {{ cardContent.title }}
      </div>
    </template>
  </div>
</template>

<style scoped>
  .ns-card-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--color-text, #fff);
  }

  .ns-card-container:hover {
    border-color: #667eea;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }


  .ns-card-container.glass-card-inner.active {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(102, 126, 234, 0.6);
  }

  .ns-card-container.glass-card-inner:not(.active) {
    background: rgba(255, 255, 255, 0.02) !important;
    backdrop-filter: blur(3px) !important;
    -webkit-backdrop-filter: blur(3px) !important;
    min-height: 70px;
    justify-content: flex-end;
  }

  .card-peek {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    font-size: 0.95rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    padding: 5px 0;
    line-height: 1.3;

  }

  .ns-banner {
    display: flex;
    gap: 5px;
    font-size: 20px;
    padding: 5px;
  }

  .ns-banner h4 {
    color: var(--color-text, #fff);
  }

  .ns-icon-wrapper {
    display: flex;
    align-items: center;
  }

  .ns-icon {
    width: 24px;
    height: 24px;
  }

  .ns-tagline {
    font-family: 'Dosis';
    padding: 5px;
    color: rgba(255, 255, 255, 0.85);
  }

  .ns-current {
    position: absolute;
    bottom: 15px;
    right: 20px;
    font-family: 'Dosis';
    font-weight: bold;
    padding: 3px 7px;
    border-radius: 20px;
    width: fit-content;
  }

  .ns-date {
    background: #ffca7b;
    color: #333;
  }

  .ns-status {
    background: #5A3896;
    color: white;
  }
</style>
