<script setup lang="ts">
interface Props {
  introduction: string
}

defineProps<Props>()
</script>

<template>
  <div class="introduction-container">
      {{ introduction }}
  </div>
</template>

<style scoped>
  .introduction-container {
    font-size: 0.9rem;
  }

  /* Tablet landscape (768px - 960px) */
  @media screen and (max-width: 960px) {
    .introduction-container {
      font-size: 1rem;
    }
  }

  /* Tablet portrait (600px - 768px) */
  @media screen and (max-width: 768px) {
    .introduction-container {
      font-size: 1.4rem;
    }
  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {
    .introduction-container {
      font-size: 1rem;
    }
  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    /* Mobile phone styles */
  }
</style>
