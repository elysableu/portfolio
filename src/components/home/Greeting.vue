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

  .greeting-message h1 {
    margin-bottom: 0.5rem !important;
  }

  /* Tablet landscape (768px - 960px) */
  @media screen and (max-width: 960px) {
     .greeting-message {
      transform: translateX(-20vw) scale(1.4);
    }
  }

  /* Tablet portrait (600px - 768px) */
  @media screen and (max-width: 768px) {
    .greeting-message {
      transform: scale(1.6);
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {
    /* Large phone styles */
  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    .greeting-message {
      margin-bottom: 1.5rem;
    }
  }
</style>
