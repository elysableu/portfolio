<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import LinkRadial from './components/layout/linkRadial/LinkRadial.vue';
</script>

<template>
  <div id="app">
    <LinkRadial />
    <Header />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
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
</style>

<style scoped>

  .main-content {
    min-height: 100vh;
    z-index: 100;
    position: relative;
  }
</style>
