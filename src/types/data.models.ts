// ============================================================================
// PERSONAL

import type { ProjectReference } from "typescript"

// ============================================================================
export interface Personal {
  name: string
  title: string
  tagline: string
  email: string
  phone: string
  location: string
  timezone: string
  links: PersonalLinks
  resume: string
  avatar: string
}

export interface PersonalLinks {
  github: string
  linkedin: string
  twitter: string
  portfolio: string
}

// ============================================================================
// HOME
// ============================================================================
export interface Home {
  greeting: string
  headline: string
  introduction: string
  callToAction: CallToAction
  stats: Stat[]
}

export interface CallToAction {
  primary: CallToActionButton
  secondary: CallToActionButton
}

export interface CallToActionButton {
  text: string
  link: string
}

export interface Stat {
  label: string
  value: string
}

// ============================================================================
// ABOUT
// ============================================================================
export interface About {
  bio: string
  journey: JourneyType
  values: Value[]
  interests: string[]
  currentlyLearning: string[]
}

export interface JourneyType {
  title: string
  paragraphs: string[]
}

export interface AboutImages {
  teach: string
  computer: string
}

export interface Value {
  title: string
  description: string
  icon: string
}

// ============================================================================
// EDUCATION
// ============================================================================
export interface EducationType {
  id: string
  degree: string
  field: string
  institution: string
  location: string
  startDate: string
  graduationDate: string
  minors?: string[]
  concentration?: string
  relevantCoursework?: string[]
  projects?: ProjectBriefType[]
  logo?: string
}

// ============================================================================
// EXPERIENCE
// ============================================================================
export interface ExperienceType {
  id: string
  title: string
  company: string
  location: string
  locationType: 'Remote' | 'Hybrid' | 'On-site' | 'Mobile'
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  startDate: string
  endDate: string | null
  current: boolean
  description: string
  responsibilities: string[]
  skills: string[]
  technologies: string[]
  logo?: string
}

// ============================================================================
// SKILLS
// ============================================================================
export interface SkillsType {
  categories: SkillCategory[]
}

export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  yearsOfExperience: number
  icon?: string
}

// ============================================================================
// PROJECTS
// ============================================================================
export interface Project {
  id: string
  title: string
  tagline: string
  shortDescription: string
  fullDescription: string
  motivation: string
  projectPlan: string
  technologies: Technologies
  features: Feature[]
  challenges: Challenge[]
  images: TickerImageType[]
  thumbnail: string
  githubUrl?: string
  liveUrl?: string
  demoVideo?: string
  status: ProjectStatus
  startDate: string
  endDate: string | null
  current: boolean
  featured: boolean
  priority: number
  role: string
  teamSize: number
  tags: string[]
  metrics?: ProjectMetrics
}

export interface Challenge {
  challenge: string
  solution: string
}

export interface ProjectMetrics {
  users?: string
  uptime?: string
  apiCalls?: string
  [key: string]: string | undefined
}

export interface ProjectBriefType {
  id?: string
  title: string,
  name?: string,
  description: string,
  url: string,
  thumbnail?: string
}

export interface ProjectHeader {
  title: string,
  current: boolean,
  tagline: string,
  liveUrl?: string,
  githubUrl?: string,
  tags: string[]
  images: TickerImageType[]
}

export interface TimelineType {
  motivation: string,
  fullDescription: string,
  features: Feature[],
  projectPlan: string,
  technologies: Technologies,
  challenges: Challenge[],
  status: ProjectStatus,
  teamSize: number,
  startDate: string,
  endDate: string | null,
  demoVideo?: string,
  thumbnail?: string
}

export interface ChapterType {
  chapterNum: string,
  chapterTitle: string,
  chapterSubtitle: string,
  chapterContent: string | string[] | Challenge[] | VisionPacket | ResultPacket | Feature[] | Technologies
}

export interface ResultPacket {
  status: ProjectStatus,
  teamSize: number,
  startDate: string,
  endDate: string | null,
  demoVideo?: string,
  thumbnail?: string
}

export interface VisionPacket {
  description: string,
  projectPlan: string
}

export interface Feature {
  title: string,
  description: string
}

export interface Technologies {
  frontend?: string[],
  backend?: string[],
  database?: string[],
  other?: string[]
}

// ============================================================================
// TICKER (for Ticker component)
// ============================================================================
export interface TickerProjectType {
  id: string
  title?: string
  thumbnail: string
  url?: string
}

export interface TickerImageType {
  id: string
  src: string
  alt: string
  caption?: string
}

export type TickerItemType = TickerProjectType | TickerImageType

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type ProjectStatus = 'completed' | 'in-progress' | 'planned'

export interface SearchResult {
  type: 'project' | 'skill' | 'experience'
  id: string
  title: string
  description: string
  url: string
}

export type ImageCollection = Record<string, string>

export type RadialItem =
  | { label: string; type: 'link'; link: string, icon: string }
  | { label: string; type: 'contact'; contact: string, icon: string }
  | { label: string; type: 'resume'; resume: string, icon: string }

export interface RadialConfig {
 headshotRadius: number
  orbitGap: number
  startAngle: number
  endAngle: number
}

export interface RadialItemWithPosition extends RadialItem {
  x: number
  y: number
  rotation: number
}
