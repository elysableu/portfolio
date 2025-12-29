<script setup lang="ts">
interface Props {
  headline: string
}

defineProps<Props>()
</script>

<template>
  <div class="headline">
    <h3>{{ headline }}</h3>
  </div>
</template>

<style scoped>
  .headline {
    font-family: 'Dosis';
    font-weight: 700;
  }

</style>
