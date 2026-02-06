<script setup lang="ts">
  import { getAssetPath } from '@/utils/assets'

  interface Props {
    title: string,
    description: string,
    icon: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="value-item">
    <div class="value-heading">
      <img
      alt="value-icon"
      :src="getAssetPath(icon)"
      width="75"
      height="75"
      />
      <h4>{{ title }}</h4>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
  .value-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spacing-md);
  }

  .value-item p {
    flex: 3;
    text-align: center;
  }

  .value-heading {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .value-heading h4 {
    font-size: larger;
    font-family: 'Dosis';
  }

  .value-heading img {
    width: var(--icon-lg);
    height: auto;
    margin-bottom: var(--spacing-2sm);
  }
</style>
