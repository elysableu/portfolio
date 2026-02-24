/**
 * useProject.ts - Single project data fetching composable
 *
 * Handles route param extraction, data fetching, and 404 detection for
 * the project detail page.  Wraps useData() to get consistentn loading/error state.
 *
 * Watches the route id param so the correct project is loaded if the user navigates directly between
 * project detail pages without unmounting the view.
 *
 * Returns:
 * - project: the resovled Project object, or null if not yet loaded
 * - loading: true while the fetch is in progress
 * - error: contains the errror message if the fetch failed
 * - notFound: true if the fetch succeeded but no project matched the route id
 */

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useData } from '@/composables/useData'
import type { Project } from '@/types/data.models'

export function useProject() {
  const route = useRoute()
  const { loading, error, fetchData, getProjectById } = useData()
  const project = ref<Project | null>(null)
  const notFound = ref(false)     // distinct from error - means fetch succeeded but found no matching id

  const loadProject = async () => {
    notFound.value = false
    const projectId = route.params.id as string

    const data = await fetchData(() => getProjectById(projectId))

    if (data) {
      project.value = data
    } else if (!error.value) {
      // fetchData returned null without setting an error - project id not found
      project.value = null
      notFound.value = true
    }

    // if error.value is set, fetchData already handled it -- notFound stays false
  }

  // immediate: true triggers loadproject on first mount as well as on route id changes
  watch(() => route.params.id, loadProject, { immediate: true })

  return {
    project,
    loading,
    error,
    notFound
  }
}
