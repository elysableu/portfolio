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
  <div class="about-container">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="aboutData">
      <div class="about-content">
        <div class="about-content-left">
          <div class="opening-container">
            <OpeningDetails :about="aboutData.about"/>
          </div>
          <div class="skills-container">
            <Skills :skills="aboutData.skills"/>
          </div>
        </div>
        <div class="about-content-right">
          <div class="education-container">
            <Education :educationList="aboutData.education"/>
          </div>
          <div class="experience-container">
            <Experience :experienceList="aboutData.experience"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about-container {
  display: flex;
  flex-direction: column;
  padding: calc(var(--spacing-lg) + 110px) calc(var(--spacing-lg) + 10px) var(--spacing-sm) calc(var(--spacing-lg) + 10px);
  margin: 0 auto;
}

.about-content {
  display: flex;
  gap: var(--spacing-md);
}

.about-content-left {
 flex: 3;
 display: flex;
 flex-direction: column;
 gap: var(--spacing-md);
}

.about-content-right {
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.opening-container {

}

.education-container {

}

.experience-container {

}

.skills-container {

}

.loading {

}

.error {

}

/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
