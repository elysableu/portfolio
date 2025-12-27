<script setup lang="ts">
  import type { Skill } from '@/types/data.models'

  interface Props {
    skill: Skill
  }

  defineProps<Props>()
</script>

<template>
  <div class="skill-item">
    <div>
      <h4>{{ skill.name }}</h4>
      <img
      alt="skill-icon"
      class="skill-class"
      :src="skill.icon"
      width="60"
      height="60"
      />
    </div>
    <p>{{ skill.yearsOfExperience }}</p>
  </div>
</template>

<style scoped>

</style>
