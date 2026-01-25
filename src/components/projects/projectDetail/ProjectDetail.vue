<script setup lang="ts">
  import type { Project } from '@/types/data.models'

  import ProjectDetailHeader from './ProjectDetailHeader.vue'
  import Timeline from './timeline/Timeline.vue'

  interface Props {
    project: Project
  }

  const props = defineProps<Props>()

  const projectHeaderData = {
    title: props.project.title,
    current: props.project.current,
    tagline: props.project.tagline,
    liveUrl: props.project.liveUrl,
    githubUrl: props.project.githubUrl,
    tags: props.project.tags,
    images: props.project.images
  }

  const timelineData = {
    motivation: props.project.motivation,
    fullDescription: props.project.fullDescription,
    features: props.project.features,
    projectPlan: props.project.projectPlan,
    technologies: props.project.technologies,
    challenges: props.project.challenges,
    status: props.project.status,
    teamSize: props.project.teamSize,
    startDate: props.project.startDate,
    endDate: props.project.endDate,
    demoVideo: props.project.demoVideo,
    thumbnail: props.project.thumbnail
  }
  </script>

<template>
  <div class="project-detail-container glass-card-dark">
    <div class="detail-header">
      <ProjectDetailHeader :projectHeader="projectHeaderData" />
    </div>
    <div class="divider"></div>
    <div class="timeline">
      <Timeline :timeline="timelineData" />
    </div>
  </div>
</template>

<style scoped>
  .project-detail-container {
    padding: 10px;
    overflow: hidden;
    border-radius: 20px !important;
  }

  .detail-header {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
  }

  .timeline {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

