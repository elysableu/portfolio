<script setup lang="ts">
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
      <h4>{{ title }}</h4>
      <img
      alt="value-icon"
      class="value-icon"
      :src="icon"
      width="75"
      height="75"
    />
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>

</style>
