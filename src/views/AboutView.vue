<script lang="ts">
  import {ref, onMounted } from 'vue'
  import { useData } from '@/composables/useData'
  import type {Personal, About, Education, Experience, Skills } from '@/types/data.models'
</script>

<template>
  <div class="about">
    <div class="openning-container">
      
    </div>
    <div class="education-container">

    </div>
    <div class="experience-container">

    </div>
    <div class="skills-container">

    </div>
  </div>
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
