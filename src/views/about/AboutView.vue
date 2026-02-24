<script setup lang="ts">
  /**
   * AboutView.vue - About page component
   *
   * Fetches and renders all about page content via useData()
   * Layout:
   * - Left Column: Openning/bio details and skills
   * - Right Column: Education history and work experience
   *
   * Data is fetched on mount and stored in aboutData.
   *
   */
  import {ref, onMounted } from 'vue'
  import { useData } from '@/composables/useData'
  import type { About, EducationType, ExperienceType, SkillsType } from '@/types/data.models'

  import OpeningDetails from '@/components/about/opening/OpeningDetails.vue'
  import Education from '@/components/about/education/Education.vue'
  import Experience from '@/components/about/experience/Experience.vue'
  import Skills from '@/components/about/skills/Skills.vue'

  const { loading, error, fetchData, getAboutPageData } = useData()

  // Typed ref for all about page data; null until fetch resolves
  const aboutData = ref<{
    about: About
    education: EducationType[]
    experience: ExperienceType[]
    skills: SkillsType
  } | null>(null)

  onMounted(async () => {
    aboutData.value = await fetchData(() => getAboutPageData())
  })
</script>

<template>
  <div class="about-container">
    <!-- Loading / error states shown while aboutData is null -->
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <!-- Two Column (main content): only renders once aboutData resolves -->
    <div v-else-if="aboutData" class="about-content">
      <!-- Left Column: who I am and what I know -->
      <div class="about-content-left">
        <div class="opening-container">
          <OpeningDetails :about="aboutData.about"/>
        </div>
        <div class="skills-container">
          <Skills :skills="aboutData.skills"/>
        </div>
      </div>
      <!-- Right Column: where I've studied and where I'e worked -->
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
</template>

<style>
.about-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 100%;
}

.about-content {
  display: flex;
  gap: var(--spacing-md);
  padding-bottom: var(--page-padding-bottom);
  overflow: hidden;
}

.about-content-left {
 min-width: 0;
 display: flex;
 flex-direction: column;
 gap: var(--spacing-md);
}

.about-content-right {
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
  width: 100%;
  position: relative;
  border-radius: var(--radius-3xl);
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
