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
.header {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: 150;
}

.header-content {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-xl);
}

.logo {
  display: block;
  transition: transform var(--transition-base);
}

.logo:hover {
  transform: scale(1.05);
}

.navBar nav {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
}

.navBar a {
  color: var(--color-text-inverse);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  position: relative;
}

.navBar a:hover {
  color: var(--color-accent-teal);
  background-color: rgba(255, 255, 255, 0.1);
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

/* Responsive */
@media (max-width: 768px) {
  .header {
    padding: var(--spacing-md);
  }

  .navBar nav {
    gap: var(--spacing-md);
  }

  .navBar a {
    font-size: 1rem;
  }
}
</style>
