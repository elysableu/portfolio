<script setup lang="ts">
  import JourneyItem from './JourneyItem.vue'
  import type { JourneyType, AboutImages } from '@/types/data.models'

  interface Props {
    journey: JourneyType,
    images: AboutImages
  }

  const props = defineProps<Props>()

    console.log('Journey - Images received:', props.images)
console.log('Journey - teach path:', props.images.teach)
console.log('Journey - computer path:', props.images.computer)

  const getImage = (index: number) => {
     const imagePath = index % 2 === 0 ? props.images.teach : props.images.computer
  console.log(`Journey - Image for index ${index}:`, imagePath)
  return imagePath
    // return index % 2 === 0 ? props.images.teach : props.images.computer
  }
</script>

<template>
  <div class="journey">
    <JourneyItem
      v-for="(paragraph, index) in journey.paragraphs"
      :key="index"
      :image="getImage(index)"
      :paragraph="paragraph"
    />

  </div>
</template>

<style scoped>

</style>
