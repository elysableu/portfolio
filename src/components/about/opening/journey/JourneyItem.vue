<script setup lang="ts">
  interface Props {
    image: string
    paragraph: string
  }

  const props = defineProps<Props>()

  console.log('JourneyItem - Image path:', props.image)
console.log('JourneyItem - Full URL:', window.location.origin + props.image)
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
