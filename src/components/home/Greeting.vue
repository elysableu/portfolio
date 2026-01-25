<script setup lang="ts">
interface Props {
  greeting: string
}

defineProps<Props>()
</script>

<template>
  <div class="greeting-message">
    <h1>{{ greeting }}</h1>
  </div>
</template>

<style scoped>
  .greeting-message {
    font-family: 'Metamorphous';
  }
</style>
