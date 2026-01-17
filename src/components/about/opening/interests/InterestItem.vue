<script setup lang="ts">
  interface Props {
    interest: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="interest-item">
    {{ interest }}
  </div>
</template>

<style scoped>
  .interest-item {
    background-color: black;
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    text-align: center;
  }
</style>
