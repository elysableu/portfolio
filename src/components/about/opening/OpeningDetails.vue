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

  const icons = {
    view: '/img/eye.svg',
    download: '/img/download.svg'
  }

  const images = {
    teach: '/img/about/teach.svg',
    computer: '/img/about/computer.svg'
  } as const

  const viewResume = () => {
    window.open(resumePdf, '_blank')
  }
</script>

<template>
  <div class="openning">
    <div class="resume">
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
    </div>
    <div class="bio">
      <p>{{ about.bio }}</p>
    </div>
    <div class="journey">
      <Journey :journey="about.journey" :images="images" />
    </div>
    <div class="values-container">
      <Values :values="about.values" />
    </div>
    <div class="interests">
      <h3>Interests</h3>
      <Interests :interests="about.interests"/>
    </div>
    <div class="currently-learning">
      <h3>Currently Learning</h3>
      <CurrentlyLearning :currentlyLearningList="about.currentlyLearning"/>
    </div>
  </div>
</template>

<style scoped>

</style>
