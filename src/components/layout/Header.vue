<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="navBar">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Base styles - Average full screen (1920px) */
.header {
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9000;
}

.header-content {
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-xl);
}

.navBar nav {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
  padding-top: var(--spacing-xl);
  padding-right: var(--spacing-lg);
}

.navBar a {
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-3xl);
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  position: relative;
}

.navBar a:hover {
  color: var(--color-accent-teal);
  background-color: var(--glass-border-light);
}

.navBar a.router-link-active {
  color: var(--color-accent-teal);
}

.navBar a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-accent-teal);
  border-radius: var(--radius-full);
}

/* Half-width / Small desktop (960px - 1280px) */
@media screen and (max-width: 1280px) {
  .navBar nav {
    transform: translateX(2vw) scale(0.95);
  }
}

/* Tablet landscape (768px - 960px) */
@media screen and (max-width: 960px) {
  .navBar nav {
    transform: translateY(-1vh);
  }
}

/* Tablet portrait (600px - 768px) */
@media screen and (max-width: 768px) {
  .header {
    height: auto;
    background-color: var(--color-primary);
  }

  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-sm) 0;
  }

  .navBar nav {
    transform: none;
    padding: var(--spacing-lg) 0;
    gap: calc(3.5 * var(--spacing-xl));
  }

  .navBar a {
    font-size: 1.75rem;
  }
}

/* Large phones (480px - 600px) */
@media screen and (max-width: 600px) {
  .navBar nav {
    padding: var(--spacing-md) 0;
    gap: calc(2 * var(--spacing-xl));
  }

  .navBar a {
    transform: scale(0.8);
  }
}

/* Standard phones (up to 480px) */
@media screen and (max-width: 480px) {
  .navBar nav {
    padding: var(--spacing-md);
    gap: var(--spacing-xl);
  }

  .navBar a {
     transform: scale(0.7);
  }
}
</style>
