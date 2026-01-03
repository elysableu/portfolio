<script setup lang="ts">
  import type { RadialItem } from '@/types/data.models'

  interface Props {
    item: RadialItem
    x: number
    y: number
    rotation: number
  }

  defineProps<Props>()
</script>

<template>
  <li class="radial-item-container" :style="{
    '--rotation':`${rotation}deg`,
    transform: `translate(calc(${x}px - 30px), calc(${y}px - 50%))`
  }">
  <div class="radial-content">
    <div class="radial-icon-container">
      <img alt="{{ item.label }}" :src="item.icon" class="radial-icon"/>
    </div>
    <div class="radial-full-value">
      <a
        v-if="item.type === 'contact'"
        :href="item.contact.includes('@') ? `mailto:${item.contact}` : `tel:${item.contact}`"
        class="radial-link-text"
      >
        {{ item.contact }}
      </a>
      <a
        v-else-if="item.type === 'link'"
        :href="item.link"
        target="_blank"
        class="radial-link-text"
      >
        {{ item.link }}
      </a>
    </div>
  </div>
  </li>
</template>

<style scoped>
  .radial-item-container {
    position: absolute;
    list-style: none;
    z-index: 300;
    pointer-events: auto;
  }

  .radial-content {
    display: flex;
    align-items: center;
    gap: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      inset 0 -1px 0 rgba(0, 0, 0, 0.4),
      inset 0 0 12px 6px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    color: white;
    overflow: hidden;
    transition: all 0.4s ease;
    transform-origin: left center;
    position: relative;
  }

  .radial-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.25), /* Brighter highlight */
      transparent
    );
  }

  .radial-content::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.25), /* Brighter highlight */
      transparent,
      rgba(255, 255, 255, 0.15)
    );
  }

  .radial-icon-container {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: center;
    padding: 12px;
    flex-shrink: 0;
  }

  .radial-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  .radial-full-value {
    max-width: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }

  .radial-link-text {
    color: white;
    text-decoration: none;
    padding: 0 16px;
    display: block;
    white-space: nowrap;
  }

  .radial-item-container:hover .radial-content {
   background: rgba(0, 0, 0, 0.7);
  }

  .radial-item-container:hover .radial-full-value {
    max-width: 300px;
    opacity: 1;
  }
</style>
