<script setup lang="ts">
  import resumePdf from '/documents/Elysa_Ward_Resume_2025.pdf'
  import DropDown from '@/components/shared/dropdown/DropDown.vue'
  import DropDownItem from '../shared/dropdown/DropDownItem.vue'
  import type { About } from '@/types/data.models'

  interface Props {
    about: About
  }

  defineProps<Props>()

  const viewResume = () => {
    window.open(resumePdf, '_blank')
  }
</script>

<template>
  <div class="openning">
    <div class="resume">
      <DropDown label="Resume" align="left">
        <template #default="{ close }">
          <DropDownItem icon="👁️" @click="viewResume(); close()">
            View
          </DropDownItem>
          <DropDownItem icon="⬇️" :href="resumePdf" download="Elysa_Ward_Resume_2025.pdf" @click="close">
            Download
          </DropDownItem>
        </template>
      </DropDown>
    </div>
    <div class="bio">
      <p>{{ about.bio }}</p>
    </div>
    <div class="journey">

    </div>
    <div class="values-container">

    </div>
    <div class="interests">

    </div>
    <div class="currently-learning">

    </div>
  </div>
</template>

<style scoped>

</style>
