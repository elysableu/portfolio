import { ref } from 'vue'
import * as dataService from '@/services/dataService'

export function useData() {
  const loading = ref(false)
  const error = ref<string | null>(null)

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
      loading.value = false
    }
  }

  return {
    loading,
    error,
    fetchData,
    ...dataService,
  }
}
