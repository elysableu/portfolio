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
    background-color: black;
    padding: 4px;
    font-size: 14px;
    border-radius: 5px;
  }

  .interest-item p {
    text-align: center;
  }
</style>
