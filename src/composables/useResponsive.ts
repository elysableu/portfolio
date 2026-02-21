import {ref, onMounted, onUnmounted, nextTick } from 'vue'

export function useResponsive() {
  const isMobile = ref(false)
  const navHeight = ref(0)
  const navContainer = ref<HTMLElement | null>(null)

  const updateBreakpoints = () => {
    isMobile.value = window.innerWidth <= 768
  }

  const updateNavHeight = () => {
    if (navContainer.value) {
      navHeight.value = navContainer.value.offsetHeight
    }
  }

  onMounted(async () => {
    updateBreakpoints()
    await nextTick()
    updateNavHeight()
    window.addEventListener('resize', updateBreakpoints)
    window.addEventListener('resize', updateNavHeight)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoints)
    window.removeEventListener('resize', updateNavHeight)
  })

  return {isMobile, navHeight, navContainer}
}
