<script setup lang="ts">
  import resumePdf from '/documents/Elysa_Ward_Resume_2025.pdf'
  import type { About } from '@/types/data.models'

  import DropDown from '@/components/shared/dropdown/DropDown.vue'
  import DropDownItem from '@/components/shared/dropdown/DropDownItem.vue'
  import Journey from './journey/Journey.vue'
  import Values from './values/Values.vue'
  import Interests from './interests/Interests.vue'
  import CurrentlyLearning from './currentlyLearning/CurrentlyLearning.vue'

  interface Props {
    about: About
  }

  defineProps<Props>()

  // const icons = {
  //   view: '/img/eye.svg',
  //   download: '/img/download.svg'
  // }

  const images = {
    teach: '/img/about/teach.svg',
    computer: '/img/about/computer.svg'
  } as const

  const viewResume = () => {
    window.open(resumePdf, '_blank')
  }
</script>

<template>
  <div class="opening glass-card-dark">
    <!-- <div class="resume">
      <DropDown label="Resume" align="left">
        <template #default="{ close }">
          <DropDownItem :icon="icons.view" @click="viewResume(); close()">
            View
          </DropDownItem>
          <DropDownItem :icon="icons.download" :href="resumePdf" download="Elysa_Ward_Resume_2025.pdf" @click="close">
            Download
          </DropDownItem>
        </template>
      </DropDown>
    </div> -->
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

  }

  .currently-learning-container {

  }


</style>
