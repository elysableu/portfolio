import type {
  Personal,
  Home,
  About,
  EducationType,
  ExperienceType,
  SkillsType,
  Project,
  ProjectBriefType,
  ProjectStatus,
  TickerItemType,
} from '@/types/data.models'

import { serializeProjectBrief } from '@/utils/serializer'

const DATA_PATH = `/data`

// =========================
// BASIC DATA RETRIEVAL
// =========================

export const getPersonal = async (): Promise<Personal> => {
  const response = await fetch(`${DATA_PATH}/personal.json`)
  if (!response.ok) throw new Error('Failed to fetch personal data')
  return response.json()
}

export const getHome = async (): Promise<Home> => {
  const response = await fetch(`${DATA_PATH}/home.json`)
  if (!response.ok) throw new Error('Failed to fetch home data')
  return response.json()
}

export const getAbout = async (): Promise<About> => {
  const response = await fetch(`${DATA_PATH}/about.json`)
  if (!response.ok) throw new Error('Failed to fetch about data')
  return response.json()
}

export const getEducation = async (): Promise<EducationType[]> => {
  const response = await fetch(`${DATA_PATH}/education.json`)
  if (!response.ok) throw new Error('Failed to fetch education data')
  return response.json()
}

export const getExperience = async (): Promise<ExperienceType[]> => {
  const response = await fetch(`${DATA_PATH}/experience.json`)
  if (!response.ok) throw new Error('Failed to fetch experience data')
  return response.json()
}

export const getSkills = async (): Promise<SkillsType> => {
  const response = await fetch(`${DATA_PATH}/skills.json`)
  if (!response.ok) throw new Error('Failed to fetch skills data')
  return response.json()
}

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${DATA_PATH}/projects.json`)
  if (!response.ok) throw new Error('Failed to fetch projects data')
  return response.json()
}

// ==============================
// FILTERED/COMPUTED DATA
// ==============================

export const getFeaturedProjects = async (): Promise<TickerItemType[]> => {
  const projects = await getProjects()
  return projects
    .filter((project) => project.featured === true)
    .map((project) => ({
      id: project.id,
      title: project.title,
      thumbnail: project.thumbnail,
      url: `/projects/${project.id}`,
    }))
}

export const getCurrentProject = async (): Promise<ProjectBriefType | undefined> => {
  const projects = await getProjects()
  const currentProject = projects.find((project) => project.current === true)

  return currentProject ? serializeProjectBrief(currentProject) : undefined
}

export const getProjectById = async (id: string): Promise<Project | undefined> => {
  const projects = await getProjects()
  return projects.find((project) => project.id === id)
}

export const getProjectsByStatus = async (status: ProjectStatus): Promise<Project[]> => {
  const projects = await getProjects()
  return projects.filter((project) => project.status === status)
}

export const getProjectsByTag = async (tag: string): Promise<Project[]> => {
  const projects = await getProjects()
  return projects.filter((project) => project.tags?.includes(tag))
}

export const getProjectsByTechnology = async (technology: string): Promise<Project[]> => {
  const projects = await getProjects()
  return projects.filter((project) => project.technologies?.includes(technology))
}

export const getAllProjectTags = async (): Promise<string[]> => {
  const projects = await getProjects()
  const tags = new Set<string>()
  projects.forEach((project) => {
    project.tags?.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export const getAllTechnologies = async (): Promise<string[]> => {
  const projects = await getProjects()
  const technologies = new Set<string>()
  projects.forEach((project) => {
    project.technologies?.forEach((technology) => technologies.add(technology))
  })
  return Array.from(technologies).sort()
}

export const getCurrentExperience = async (): Promise<ExperienceType[]> => {
  const experiences = await getExperience()
  return experiences.filter((exp) => !exp.endDate || exp.endDate === 'Present')
}

export const getExperienceSorted = async (): Promise<ExperienceType[]> => {
  const experiences = await getExperience()
  return experiences.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()
    return dateB - dateA
  })
}

export const getEducationSorted = async (): Promise<EducationType[]> => {
  const education = await getEducation()
  return education.sort((a, b) => {
    const dateA = new Date(a.graduationDate).getTime()
    const dateB = new Date(b.graduationDate).getTime()
    return dateB - dateA
  })
}

// =====================================
// BULK DATA LOADING
// =====================================

export const getAllData = async () => {
  const [personal, home, about, education, experience, skills, projects] = await Promise.all([
    getPersonal(),
    getHome(),
    getAbout(),
    getEducation(),
    getExperience(),
    getSkills(),
    getProjects(),
  ])

  return {
    personal,
    home,
    about,
    education,
    experience,
    skills,
    projects,
  }
}

export const getHomePageData = async () => {
  const [home, personal, featuredProjects] = await Promise.all([
    getHome(),
    getPersonal(),
    getFeaturedProjects(),
  ])

  return {
    home,
    personal,
    featuredProjects,
  }
}

export const getAboutPageData = async () => {
  const [about, education, experience, skills] = await Promise.all([
    getAbout(),
    getEducation(),
    getExperience(),
    getSkills(),
  ])

  return {
    about,
    education,
    experience,
    skills,
  }
}

export const getProjectsPageData = async () => {
  const [projects, featured, current, tags, technologies] = await Promise.all([
    getProjects(),
    getFeaturedProjects(),
    getCurrentProject(),
    getAllProjectTags(),
    getAllTechnologies(),
  ])

  return {
    projects,
    featured,
    current,
    tags,
    technologies,
  }
}
