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
    text-align: right;
  }

  /* Tablet landscape (768px - 960px) */
  @media screen and (max-width: 960px) {

  }

  /* Tablet portrait (600px - 768px) */
  @media screen and (max-width: 768px) {
    .headline {
      transform: scale(1.4);
      text-align: center;
    }
  }

  /* Large phones (480px - 600px) */
  @media screen and (max-width: 600px) {
    /* Large phone styles */
  }

  /* Standard phones (up to 480px) */
  @media screen and (max-width: 480px) {
    /* Mobile phone styles */
  }

</style>
