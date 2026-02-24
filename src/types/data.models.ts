// ============================================================================
// PERSONAL

// ============================================================================

/** Contact and identity information */
export interface Personal {
  name: string
  title: string           // Professional title, e.g. "Full Stack Developer"
  tagline: string         // Short brand statement
  email: string
  phone: string
  location: string        // City, State format
  timezone: string
  links: PersonalLinks
  resume: string          // URL or path to resume file asset
  avatar: string          // URL or path to profile image asset
}

/** external profile URLs */
export interface PersonalLinks {
  github: string
  linkedin: string
  twitter: string
  portfolio: string
}

// ============================================================================
// HOME
// ============================================================================
/** Content for the home/landing page */
export interface Home {
  greeting: string         // e.g. "Hello, [your name]"
  headline: string         // Primary value proposition statement
  introduction: string     // Longer intro paragraph
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

/** Content for the "New & Soon" featured section on the home page */
export interface NSFeatured {
  new: NewFeature[],    // Recently completed items
  soon: SoonFeature[]   // Planned or in-progress items
}
/** Shared fileds for both new and soon features */
interface BaseFeature {
  id: string,
  type: 'portfolio' | 'project' | 'blog' | 'other',
  project: string,    // ID reference to the associated project
  title: string,
  content: FeatureContent
}
/** A recently completed feature, extends with its completion date */
export interface NewFeature extends BaseFeature {
  dateCompleted: string
}

/** An upcoming feature, extended with its added date and status */
export interface SoonFeature extends BaseFeature {
  dateAdded: string,
  content: SoonFeatureContent
}

export interface FeatureContent {
  tagline: string,
  link: string,       // Internal route or external URL
  icon: string        // Icon asset identifier or path
}

/** Extends Feature Content with status indicator for in-progress or planned items */
export interface SoonFeatureContent extends FeatureContent {
   status: 'planned' | 'in progress'
}

// ============================================================================
// ABOUT
// ============================================================================

/** Content for the about page bio and personal details */
export interface About {
  bio: string
  journey: JourneyType
  values: Value[]
  interests: string[]
  currentlyLearning: string[]
}

/** Multi-paragraph professional journey narrative */
export interface JourneyType {
  title: string
  paragraphs: string[]  // Each string renders as a seperate parapgrah
}

export interface AboutImages {
  teach: string
  computer: string
}

/** A personal or professional value with an associated icon */
export interface Value {
  title: string
  description: string
  icon: string         // Icon asset identifier or path
}

// ============================================================================
// EDUCATION
// ============================================================================
export interface EducationType {
  id: string
  degree: string                  // e.g. "Bachelor of Science"
  field: string                   // e.g. "Computer Science"
  institution: string
  location: string
  startDate: string
  graduationDate: string
  minors?: string[]
  concentration?: string
  relevantCoursework?: string[]
  projects?: ProjectBriefType[]  // Notable academic projects
  logo?: string                  // Institution logo URL or path
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
  endDate: string | null      // null if current position
  current: boolean
  description: string
  responsibilities: string[]
  skills: string[]
  technologies: string[]
  logo?: string               // Company logo URL or path
}

// ============================================================================
// SKILLS
// ============================================================================
export interface SkillsType {
  categories: SkillCategory[]
}

/** A grouped set of skills under a shared category, e.g. "Frontend" */
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
/** Full project data shape, used for the project detail view */
export interface Project {
  id: string
  title: string
  tagline: string
  shortDescription: string        // Used in the project brief cards
  fullDescription: string         // Used in detail view
  motivation: string
  projectPlan: string
  technologies: Technologies
  features: Feature[]
  challenges: Challenge[]
  images: TickerImageType[]       // Gallery images for the project ticker
  thumbnail: string
  githubUrl?: string
  liveUrl?: string
  demoVideo?: string
  status: ProjectStatus
  startDate: string
  endDate: string | null          // null if project is ongoing
  current: boolean
  featured: boolean
  priority: number                // Sort order for display, low to high priority
  role: string
  teamSize: number
  tags: string[]
  metrics?: ProjectMetrics
}

export interface Challenge {
  challenge: string
  solution: string
}

/** Flexible project metrics */
export interface ProjectMetrics {
  users?: string
  uptime?: string
  apiCalls?: string
  [key: string]: string | undefined
}

/** Condensed project shape used in project brief cards */
export interface ProjectBriefType {
  id?: string
  title: string,
  name?: string,
  description: string,
  url: string,
  thumbnail?: string
}

/** Props shape for ProjectDetailHeader component */
export interface ProjectHeader {
  title: string,
  current: boolean,
  tagline: string,
  liveUrl?: string,
  githubUrl?: string,
  tags: string[]
  images: TickerImageType[]
}

/** Props shape for project's Timeline component */
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

/** A single section within the project timeline, dynamically rendered based on content being passed in */
export interface ChapterType {
  chapterNum: string,
  chapterTitle: string,
  chapterSubtitle: string,
  chapterContent: string | string[] | Challenge[] | VisionPacket | ResultPacket | Feature[] | Technologies
}

/** Project outcome data for the results of the project */
export interface ResultPacket {
  status: ProjectStatus,
  teamSize: number,
  startDate: string,
  endDate: string | null,
  demoVideo?: string,
  thumbnail?: string
}

/** Project vision and planning data for the vision chapter of the timeline */
export interface VisionPacket {
  description: string,
  projectPlan: string
}

/** Project features chapter */
export interface Feature {
  title: string,
  description: string
}

/** Technology stack broken down by layer; all layers are optional */
export interface Technologies {
  frontend?: string[],
  backend?: string[],
  database?: string[],
  other?: string[]
}

// ============================================================================
// TICKER (for Ticker component)
// ============================================================================
/** A project referece used in ticker display, identified by id; and set dynaimcally based on content being passed in */
export interface TickerProjectType {
  id: string
  title?: string
  thumbnail: string
  url?: string
}

/** An individual image used in ticker or project gallery display */
export interface TickerImageType {
  id: string
  src: string
  alt: string
  caption?: string
}

/** Union type - ticker items can be either a project reference or a raw image */
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

/** Maps image keys to their URLs or paths */
export type ImageCollection = Record<string, string>

/** A single item in the radial naviagrtion menu, typed by its action */
export type RadialItem =
  | { label: string; type: 'link'; link: string, icon: string }
  | { label: string; type: 'contact'; contact: string, icon: string }
  | { label: string; type: 'resume'; resume: string, icon: string }

/** Layout configuration for the radial navigation component */
export interface RadialConfig {
  headshotRadius: number      // Radius of thecenter of the headshot circle (px)
  orbitGap: number            // Gap between individual links encircling the headshot circle
  startAngle: number          // Angle in degrees where the arc begins
  endAngle: number            // Angle in degrees where the arc ends
  // Offsets included to handle LinkRadial responsive display (toggle mobile layout)
  offsetX: number             // Horizontal offset of the entire radial from center
  offsetY: number             // Vertical offset of the entire radial from center
}

/** RadialItem extended with computed position and rotation for rendering */
export type RadialItemWithPosition = RadialItem & {
  x: number         // Computed x coordinates (px)
  y: number         // Computed y coordinates (px)
  rotation: number  // Computed roation angle for the item (degrees)
}
