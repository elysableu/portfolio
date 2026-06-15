<script setup lang="ts">
  import type { Challenge } from '@/types/data.models';

  interface Props {
    content: Challenge[]
  }

  defineProps<Props>()
</script>

<template>
  <div class="challenges-container">
     <table class="challenges-table">
        <thead>
          <tr class="heading">
            <th>Challenge</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in (content as Challenge[])" :key="index" class="challenge-item">
            <td class="challenge">{{ item.challenge }}</td>
            <td class="solution">{{ item.solution }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<style scoped>
  .challenges-container {
    width: 100%;
    overflow-x: auto;
  }

  .challenges-table {
    width: 100%;
    table-layout: fixed;
  }

  .challenges-table thead th {
    font-size: var(--font-size-xl);
    padding: var(--spacing-md);
    text-align: left;
    border-bottom: 3px solid var(--color-accent-teal);
  }

  .challenges-table th:not(:last-child),
  .challenges-table td:not(:last-child) {
    border-right: 1px solid #6B7280;
  }

  .challenges-table tr:not(:last-child) {
    border-bottom: 1px solid #4B5563;
  }

  .challenges-table th,
  .challenges-table td {
    padding: 1rem;
  }

  .challenges-table td {
    padding: 20px;
    overflow-wrap: break-word;
  }

  @media (max-width: 480px) {
    .challenges-table,
    .challenges-table tbody,
    .challenges-table tr,
    .challenges-table td {
      display: block;
      width: 100%;
    }

    .challenges-table thead {
      display: none;
      border-bottom: 1px solid #4B5563;
    }

     .challenge-item {
      margin-bottom: var(--spacing-lg);

    }

    .challenges-table td {
      padding: var(--spacing-sm);
      border-right: none !important;
    }

    .challenges-table td:not(:last-chlid) {
      border-right: none;
    }

    .challenge::before {
      content: "Challenge";
      display: block;
      font-weight: bold;
      font-size: var(--font-size-md);
      color: var(--color-accent-teal);
      margin-bottom: var(--spacing-2xs);
    }

    .solution::before {
      content: "Solution";
      display: block;
      font-weight: bold;
      font-size: var(--font-size-md);
      color: var(--color-accent-teal);
      margin-bottom: var(--spacing-2xs);
    }
  }
</style>
