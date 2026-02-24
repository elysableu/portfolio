/**
 *  dataService.ts - Statis JSON data fetching layer
 *
 * All portfolio data is served as static JSON files (with plans to add a backend and postgresql db).
 * This module provides typed fetch wrappers and data utilities organized into three categories:
 *
 *  1. Basic Retrieval - raw fetch for each JSON file
 *  2. Filtered/Computed - derived data built on top of basic retrieval
 *  3. Bulk Loading - paralell fetches for page-level data fetching
 *
 *  DATA_PATH switches bewteen /data (dev) and the BASE_URL-relative path
 * (prod) to handle Vite's base URL configuration for deployment
 */
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
  NSFeatured,
} from '@/types/data.models'

import { serializeProjectBrief } from '@/utils/serializer'

const DATA_PATH = import.meta.env.DEV ? '/data' : `${import.meta.env.BASE_URL}data`

// =========================
// BASIC DATA RETRIEVAL
// Thin fetch wrappers - one per JSON file. Each throws errors on a non-OK response
// so callers don't need to check response status themselves
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

export const getNSContent = async (): Promise<NSFeatured> => {
  const response = await fetch(`${DATA_PATH}/new_soon.json`)
  if (!response.ok) throw new Error('Failed to fetch new_soon data')
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
// These functions build on the above basic fetchers.
// Note: each call re-fetches the source data - cahcing will later be added at the module level
// ==============================

/** Returns featured projects shpaed as TickerItemType for the ticker component */
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

/** Return the single currenty active project, or undefined if none is marked current */
export const getCurrentProject = async (): Promise<ProjectBriefType | undefined> => {
  const projects = await getProjects()
  const currentProject = projects.find((project) => project.current === true)

  return currentProject ? serializeProjectBrief(currentProject) : undefined
}

/** Finds a project by its id; returns undefined if no match is found */
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

/** Searches across all technology layers (frontend, backend, database, other) */
export const getProjectsByTechnology = async (technology: string): Promise<Project[]> => {
  const projects = await getProjects()
  return projects.filter((project) => {
    if (project.technologies.frontend?.includes(technology)
      || project.technologies.backend?.includes(technology)
      || project.technologies.database?.includes(technology)
      || project.technologies.other?.includes(technology)) {
        return project
    }
  })
}

/** Returns a sorted list of all tags across all projects (deduplicated) */
export const getAllProjectTags = async (): Promise<string[]> => {
  const projects = await getProjects()
  const tags = new Set<string>()
  projects.forEach((project) => {
    project.tags?.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

/** Returns sorted list of all technologies across all projects and layers */
export const getAllTechnologies = async (): Promise<string[]> => {
  const projects = await getProjects()
  const techSet = new Set<string>()
  projects.forEach((project) => {
    if (project.technologies) {
      Object.values(project.technologies).forEach(techArray => {
        if (Array.isArray(techArray)) {
          techArray.forEach(tech => techSet.add(tech))
        }
      })
    }
  })

  return Array.from(techSet).sort()
}

/** Returns only experiences without and endDate, or where endDate is 'present' */
export const getCurrentExperience = async (): Promise<ExperienceType[]> => {
  const experiences = await getExperience()
  return experiences.filter((exp) => !exp.endDate || exp.endDate === 'Present')
}

/** Returns all experiences sorted by startDate descending (most recent first) */
export const getExperienceSorted = async (): Promise<ExperienceType[]> => {
  const experiences = await getExperience()
  return experiences.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()
    return dateB - dateA
  })
}

/** Returns all education entries sorted by graduationDate descending (mort recent first) */
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
// Page-level loaders that use Promise.all to fetch all required data in parallel.
// These are the primary entry points consumed by useData().
// =====================================

/** Fetches all data sources in parallel; useful for preloading or SSG (will be utilized with the addition of caching in future versions) */
export const getAllData = async () => {
  const [personal, home, nsContent, about, education, experience, skills, projects] = await Promise.all([
    getPersonal(),
    getHome(),
    getNSContent(),
    getAbout(),
    getEducation(),
    getExperience(),
    getSkills(),
    getProjects(),
  ])

  return {
    personal,
    home,
    nsContent,
    about,
    education,
    experience,
    skills,
    projects,
  }
}

/** Fetches all data needed for HomeView in parallel */
export const getHomePageData = async () => {
  const [home, personal, featuredProjects, nsContent] = await Promise.all([
    getHome(),
    getPersonal(),
    getFeaturedProjects(),
    getNSContent(),
  ])

  return {
    home,
    personal,
    featuredProjects,
    nsContent,
  }
}

/** Fetches all data needed for AboutView in parallel */
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

/** Fetches all data needed for ProjectsView in parallel */
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
