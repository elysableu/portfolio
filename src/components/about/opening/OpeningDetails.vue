<script setup lang="ts">
  import type { About } from '@/types/data.models'

  import Journey from './journey/Journey.vue'
  import Values from './values/Values.vue'
  import Interests from './interests/Interests.vue'
  import CurrentlyLearning from './currentlyLearning/CurrentlyLearning.vue'

  interface Props {
    about: About
  }

  defineProps<Props>()

  const images = {
    teach: '/img/about/teach.svg',
    computer: '/img/about/computer.svg'
  } as const
</script>

<template>
  <div class="opening glass-card-dark">
    <div class="bio">
      <p>{{ about.bio }}</p>
    </div>
    <div class="divider"></div>
    <div class="journey-container">
      <Journey :journey="about.journey" :images="images" />
    </div>
    <div class="divider"></div>
    <div class="values-container">
      <Values :values="about.values" />
    </div>
    <div class="divider"></div>
    <div class="interests-learning-container">
      <div class="interests-container">
        <Interests :interests="about.interests"/>
      </div>
      <div class="currently-learning-container">
        <CurrentlyLearning :currentlyLearningList="about.currentlyLearning"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .opening {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-lg);
    gap: var(--spacing-lg);
  }

  .bio {
    text-align: center;
    font-weight: bold;
  }

  .journey-container {

  }

  .values-container {

  }

  .interests-learning-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .interests-container {
    flex: 1;
  }

  .currently-learning-container {
    flex: 1;
  }
</style>
