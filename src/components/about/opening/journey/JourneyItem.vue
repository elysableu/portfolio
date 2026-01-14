<script setup lang="ts">
  interface Props {
    image: string
    paragraph: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="journey-item">
    <img
      alt="journey-icon"
      :src="image"
      width="75"
      height="75"
    />
    <p>{{ paragraph }}</p>
  </div>
</template>

<style scoped>
  .journey-item {
    display: flex;
    align-items: center;
    padding: var(--spacing-md);
  }

  .journey-item img {
    margin-right: 20px;
    width: 60px;
    height: auto;
  }

  .journey-item p {
    text-align: right;
  }
</style>
