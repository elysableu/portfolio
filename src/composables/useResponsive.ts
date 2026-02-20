import {ref, onMounted, onUnmounted } from 'vue'

export function useResponsive() {
  const isMobile = ref(false)

  const updateBreakpoints = () => {
    isMobile.value = window.innerWidth <= 768
  }

  onMounted(() => {
    updateBreakpoints()
    window.addEventListener('resize', updateBreakpoints)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoints)
  })

  return {isMobile}
}

const { isMobile } = useResponsive()
