<script setup lang="ts">
  import type { Technologies } from '@/types/data.models'

  interface Props {
    content: Technologies
  }

  const props = defineProps<Props>()

  const techCategories = [
    { label: 'Frontend', items: props.content.frontend || [] },
    { label: 'Backend', items: props.content.backend || [] },
    { label: 'Database', items: props.content.database || [] },
    { label: 'Other', items: props.content.other || [] }
  ].filter(cat => cat.items.length > 0)
</script>

<template>
  <div class="technologies-container">
    <table>
      <tbody>
        <tr v-for="(category, index) in techCategories" :key="index">
          <td class="category-label">{{ category.label }}</td>
          <td class="tech-items">
            <span v-for="(item, itemIndex) in category.items" :key="itemIndex" class="tech-tag">
              {{  item }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .technologies-container {
    width: 100%;
    overflow-x: auto;
  }

  .technologies-container table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0 var(--spacing-lg);
  }

  .category-label{
    width: 25%;
    border-right: 3px solid #49CCA4;
    font-size: larger;
  }

  .tech-items {
    padding-left: 2.1875rem;
    overflow-wrap: break-word;
  }

  .tech-tag {
    background: black;
    padding: 0.375rem 0.4375rem;
    margin-right: var(--spacing-2sm);
    border-radius: var(--radius-xl);
    font-size: var(--font-size-base);
  }

  @media (max-width: 480px) {
    .technologies-container table,
    .technologies-container tbody,
    .technologies-container tr,
    .technologies-container td {
      display: block;
      width: 100%;
    }

    .category-label {
      padding-right: 0;
      padding-bottom: var(--spacing-xs);
      border-right: none;
      border-bottom: 3px solid var(--color-accent-teal);
    }

    .tech-items {
      padding-left: 0;
    }

    .tech-tag {
      display: inline-block;
      margin: var(--spacing-2sm);
    }
   }
</style>
