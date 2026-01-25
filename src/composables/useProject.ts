import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useData } from '@/composables/useData'
import type { Project } from '@/types/data.models'

export function useProject() {
  const route = useRoute()
  const { loading, error, getProjectById } = useData()
  const project = ref<Project | null>(null)
  const notFound = ref(false)

  const loadProject = async () => {
    notFound.value = false
    const projectId = route.params.id as string

    const data = await getProjectById(projectId)

    if (data) {
      project.value = data
    } else {
      project.value = null
      notFound.value = true
    }
  }

  watch(() => route.params.id, loadProject, { immediate: true })

  return {
    project,
    loading,
    error,
    notFound
  }
}
