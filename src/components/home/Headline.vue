<script setup lang="ts">
interface Props {
  headline: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <h3>{{ headline }}</h3>
  </div>
</template>

<style scoped></style>
