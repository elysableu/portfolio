<script setup lang="ts">
interface Props {
  greeting: string
}

defineProps<Props>()
</script>

<template>
  <h1>{{ greeting }}</h1>
</template>

<style scoped></style>
