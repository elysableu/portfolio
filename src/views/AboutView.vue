<script setup lang="ts">
  import {ref, onMounted } from 'vue'
  import { useData } from '@/composables/useData'
  import type { About, EducationType, ExperienceType, SkillsType } from '@/types/data.models'

  import OpeningDetails from '@/components/about/opening/OpeningDetails.vue'
  import Education from '@/components/about/education/Education.vue'
  import Experience from '@/components/about/experience/Experience.vue'
  import Skills from '@/components/about/skills/Skills.vue'

  const { loading, error, getAboutPageData } = useData()
  const aboutData = ref<{
    about: About
    education: EducationType[]
    experience: ExperienceType[]
    skills: SkillsType
  } | null>(null)

  onMounted(async () => {
    aboutData.value = await getAboutPageData()
  })
</script>

<template>
  <main>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="aboutData">
      <div class="openning-container">
        <OpeningDetails :about="aboutData.about"/>
      </div>
      <div class="education-container">
        <Education :education="aboutData.education"/>
      </div>
      <div class="experience-container">
        <Experience :experience="aboutData.experience"/>
      </div>
      <div class="skills-container">
        <Skills :skills="aboutData.skills"/>
      </div>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
