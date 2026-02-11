<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import LinkRadial from './components/layout/linkRadial/LinkRadial.vue';
</script>

<template>
  <div id="app">
    <div class="nav-container">
      <LinkRadial />
      <Header />
    </div>
    <main class="main-content">
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
    background-size: 110%;
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
      background-attachment: scroll;
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
  .nav-container {
    position: relative;
    z-index: 9000;
  }

  .main-content {
    min-height: 100vh;
    z-index: 100;
    position: relative;
  }

/* Small desktop (960px - 1280px) */
@media screen and (max-width: 1280px) {
  .nav-container {
    transform: scale(0.95);
  }
}

/* Tablet landscape (768px - 960px) */
@media screen and (max-width: 960px) {
 .nav-container {
    transform: scale(0.9);
  }
}

/* Tablet portrait (600px - 768px) */
@media screen and (max-width: 768px) {
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 9000;
  }

  .main-content {
    padding-top: 140px;
  }
}

/* Large phones (480px - 600px) */
@media screen and (max-width: 600px) {
  /* Large phone styles */
}

/* Standard phones (up to 480px) */
@media screen and (max-width: 480px) {
  .main-content {
    padding-top: 120px;
  }
}

</style>
