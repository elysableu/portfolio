<script setup lang="ts">
  interface Props {
    interest: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="interest-item">
    <p>{{ interest }}</p>
  </div>
</template>

<style scoped>
  .interest-item {

  }

  .interest-item p {
    text-align: center;
  }
</style>
