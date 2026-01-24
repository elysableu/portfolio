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

  }

  .technologies-container table {
    border-collapse: separate;
    border-spacing: 0 1.5rem;
  }
  .technologies-container tbody {

  }

  .technologies-container tr {

  }

  .category-label{
    padding-right: 35px;
    border-right: 3px solid #49CCA4;
    font-size: larger;
  }

  .tech-items {
    padding-left: 35px;
  }

  .tech-tag {
    background: black;
    padding: 6px 7px;
    margin-right: 10px;
    border-radius: 12.5px;
    font-size: 16px;
  }
</style>
