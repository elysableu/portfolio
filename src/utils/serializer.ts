import type {Project, ProjectBriefType} from '@/types/data.models'

export function serializeProjectBrief(project: Project): ProjectBriefType{
  return {
    id: project.id,
    title: project.title,
    description: project.shortDescription,
    url: `/projects/${project.id}`,
    thumbnail: project.thumbnail
  }
}
