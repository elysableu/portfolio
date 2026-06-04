/**
 * router/index.ts - Application route configuration
 *
 * Defines all client-side rotues using Vue Router's web history mode.
 * BASE_URL is injected by Vite to handle deployment to non-root paths
 * (e.g. Github Pages at /portfolio/ rather than /)
 *
 * Routes:
 * - /            HomeView
 * - /about       AboutView
 * - /projects    ProjectsView
 * - /projects/:id ProjectsDetailView - id is extracted by useProject()
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import AboutView from '@/views/about/AboutView.vue'
import ProjectsView from '../views/projects/ProjectsView.vue'
import ProjectDetailView from '../views/projects/ProjectDetailView.vue'

const router = createRouter({
  // createWebHistory enables clean URLs (no # prefix) using the History API
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectDetailView    // id param extracted from route in useProject()
    }
  ],

  /**
   *  Controls scroll position on navigation:
   * @param to: smooth scrolls to anchor if the route contains a hash
   * @param from: Furture use
   * @param savedPosition: restores position when using browser back/forward
   * @returns
   */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0, left: 0 }
  }
})

export default router
