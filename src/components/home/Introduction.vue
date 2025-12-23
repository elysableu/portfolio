<script setup lang="ts">
interface Props {
  introduction: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <p>
      {{ introduction }}
    </p>
  </div>
</template>

<style scoped></style>
