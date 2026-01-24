<script setup lang="ts">
  import type { Challenge } from '@/types/data.models';

  interface Props {
    content: Challenge[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="challenges-container">
     <table>
        <thead>
          <tr class="heading">
            <th>Challenge</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in (content as Challenge[])" :key="index" class="row">
            <td class="challenge">{{ item.challenge }}</td>
            <td class="solution">{{ item.solution }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<style scoped>
  .challenges-container {

  }

  .challenges-container table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    border-bottom: 3px solid #49CCA4;
  }

  .challenges-container th:not(:last-child),
  .challenges-container td:not(:last-child) {
    border-right: 1px solid #6B7280;
  }

  .challenges-container tr:not(:last-child) {
    border-bottom: 1px solid #4B5563;
  }

  .challenges-container th,
  .challenges-container td {
    padding: 1rem;
  }

   /* td:not(:last-child), th:not(:last-child) {
    border-right: 1px solid white;
  }

  tr:not(:last-child) td,
  tr:not(:last-child) th {
    border-bottom: 1px solid white;
  } */

  .challenges-container tbody {

  }

  .row {

  }

  td {
    padding: 20px;
  }

  .challenge {

  }

  .solution {

  }
</style>
