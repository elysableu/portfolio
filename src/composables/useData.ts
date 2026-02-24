/**
 *  useData.ts - Data fetching composable
 *
 *  Provides shared loading/error statea and generic fetch wrapper used by
 *  all page-level data calls. Spreads the full dataService API into its return
 *  value so components only need a single import for both state and date functions.
 *
 *  Usage: const { loaindg, error, fetchData, [dataService fetch wrapper]} = useData()
 */

import { ref } from 'vue'
import * as dataService from '@/services/dataService'

export function useData() {
  const loading = ref(false)
  const error = ref<string | null>(null)    // null when no error is present


  /**
   *  Generic fetch wrapper that manages loading and error state around any
   * async data function. Returns the resolved data on success, or null if
   * the fetch throws - leaving the error message in the error ref
   *
   * @param fetchFn
   * @returns typed value T
   */

  const fetchData = async <T>(fetchFn: () => Promise<T>): Promise<T | null> => {
    loading.value = true
    error.value = null

    try {
      const data = await fetchFn()
      return data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      console.error('Data fetch error: ' + err)
      return null
    } finally {
      // always returns loading regardless of success of failure
      loading.value = false
    }
  }

  return {
    loading,    // true while any fetch is in progress
    error,      // contains the error message if the last fetch failed
    fetchData,
    ...dataService,
  }
}
