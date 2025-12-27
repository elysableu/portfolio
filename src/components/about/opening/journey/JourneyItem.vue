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
      class="journey-icon"
      :src="image"
      width="75"
      height="75"
    />
    <p>{{ paragraph }}</p>
  </div>
</template>

<style scoped>

</style>
