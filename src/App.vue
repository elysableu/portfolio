<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from './components/layout/Header.vue'
  import LinkRadial from './components/layout/linkRadial/LinkRadial.vue'
  import { useResponsive } from './composables/useResponsive'

  const {isMobile, navHeight, navContainer} = useResponsive()
</script>

<template>
  <div id="app" :style="{'--nav-height': `${navHeight}px`}">
    <div class="center-line"></div>
    <div class="nav-container" ref="navContainer">
      <div class="radial-wrapper">
        <LinkRadial />
      </div>
      <div class="header-wrapper">
        <Header />
      </div>
    </div>
    <main class="main-content">
      <div class="content-line"></div>
      <RouterView />
    </main>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-image: url(/img/neon-background-unsplash.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-attachment: fixed;
  }

  #app {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  /* ============================================
   GLOBAL TYPOGRAPHY (responsive)
   ============================================ */

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  /* ============================================
   GLOBAL UTILITY CLASSES
   ============================================ */

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
  }

  .section {
    padding: 4rem 0;
  }

  /* ============================================
    UI TEST CLASSES
  ============================================ */

  .center-line {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    background-color: red;
    z-index: 99999;
  }

  .content-line {
    position: absolute;
    left: 0;
    right: 0;
    top: var(--greeting-offset);
    height: 1px;
    background-color: blue;
    z-index: 9999;
  }

  /* ============================================
   RESPONSIVE MEDIA QUERIES - GLOBAL ONLY
  ============================================ */
  /* Small Desktop (1280px and below) */
  @media screen and (max-width: 1280px) {
    body {
      background-size: 120%;
    }

    h1 { font-size: 2.5rem; }
    h2 { font-size: 1.75rem; }

    .container {
      padding: 0 1.5rem;
    }
    .section {
      padding: 3rem 0;
    }
  }

  /* Tablet Landscape (960px and below) */
  @media screen and (max-width: 960px) {
    body {
      background-size: cover;
      background-position: center;
    }

    h1 { font-size: 2.25rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.25rem; }
  }

  /* Tablet Portrait (768px and below) */
  @media screen and (max-width: 768px) {
    body {
      background-size: cover;
    }

    h1 { font-size: 2rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.25rem; }
    h4 { font-size: 1.1rem; }
    p { font-size: 0.95rem; }

    .container {
      padding: 0 1rem;
    }

    .section {
      padding: 2rem 0;
    }
  }

  /* Large Phones (600px and below) */
  @media screen and (max-width: 600px) {
    h1 { font-size: 1.75rem; }
    h2 { font-size: 1.35rem; }

    .section {
      padding: 1.5rem 0;
    }
  }

  /* Mobile (480px and below) */
  @media screen and (max-width: 480px) {
    body {
      background-size: 200%;
      background-position: center;
    }

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }

    h3 { font-size: 1.1rem; }

    p { font-size: 0.9rem; }

    .container {
      padding: 0 0.75rem;
    }
  }

  /* Accessibility: Reduce Motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>

<style scoped>
/* Base styles - Average full screen (1920px) */
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xl);
  }

  .nav-container {
    z-index: 9000;
    width: 100%;
  }

  .main-content {
    flex: 1;
    z-index: 100;
    position: relative;
    padding-top: var(--greeting-offset);
    padding-left: var(--page-padding-horizontal);
    padding-right: var(--page-padding-horizontal);
  }

/* Small desktop (960px - 1280px) */
@media screen and (max-width: 1280px) {

}

/* Tablet landscape (768px - 960px) */
@media screen and (max-width: 960px) {

}

/* Tablet portrait (600px - 768px) */
@media screen and (max-width: 768px) {
  .nav-container {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: clamp(var(--spacing-xl), 7vh, var(--spacing-5xl));
    gap: clamp(var(--spacing-lg), 5vh, var(--spacing-2xl));
  }

  .radial-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .main-content {
    padding-top: var(--spacing-xs);
    padding-left: var(--spacing-sm);
    padding-right: var(--spacing-sm);
    overflow: visible;
    scroll-behavior: auto;
  }
}

/* Large phones (480px - 600px) */
@media screen and (max-width: 600px) {
  .nav-container {

  }
}

/* Standard phones (up to 480px) */
@media screen and (max-width: 480px) {
  .nav-container {
    padding-top: clamp(var(--spacing-xl), 7vh, var(--spacing-3xl));
    gap: 0.2vh;
  }
}
</style>
