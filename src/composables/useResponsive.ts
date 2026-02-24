/**
 * useReponsive.ts - Responsive layout composable
 *
 * Tracks viewport breakpoints and nav container height for use across components.
 * State is declared at module scope so that isMobile, navHeight, and navContainer are shared as
 * singletons across all components that call useResponsive() - they all reference the
 * same refs rather than getting their own independent copies
 *
 * Returns:
 * - isMobile:    true when viewport width is <= 800px
 * - navHeight:   measured height of the nav container in px
 * - naContainer: template ref to be bound to the nav element in App.vue;
 *                must be attached for navHeight to update correctly
 */

import {ref, onMounted, onUnmounted, nextTick } from 'vue'

// Module-scoped refs - shared across all useResponsive() callers
const isMobile = ref(false)
const navHeight = ref(0)
const navContainer = ref<HTMLElement | null>(null) // set via ref="navContainer" in App.vue

const updateBreakpoints = () => {
  isMobile.value = window.innerWidth <= 800
}

const updateNavHeight = () => {
  // only measures if the navContainer has been bound to a DOM element
  if (navContainer.value) {
    navHeight.value = navContainer.value.offsetHeight
  }
}

export function useResponsive() {
  onMounted(async () => {
    updateBreakpoints()
    await nextTick()    // waits for the DOM to settle before measuring the nav height
    updateNavHeight()
    window.addEventListener('resize', updateBreakpoints)
    window.addEventListener('resize', updateNavHeight)
  })

  onUnmounted(() => {
    // cleans up listeners when the component unmounts to prevent memory leaks
    window.removeEventListener('resize', updateBreakpoints)
    window.removeEventListener('resize', updateNavHeight)
  })

  return {isMobile, navHeight, navContainer}
}
