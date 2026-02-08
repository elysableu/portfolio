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
}

.navBar a {
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-xl);
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
