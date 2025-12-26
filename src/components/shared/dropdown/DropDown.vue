<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  // import DropDownItem from './DropDownItem.vue';

  interface Props {
    label: string
    align?: 'left' | 'right'
    width?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    align: 'left',
    width: 'auto'
  })

  const isOpen = ref(false)
  const dropDownRef = ref<HTMLElement | null>(null)

  const toggleDropDown = () => {
    isOpen.value = !isOpen.value
  }

  const closeDropdown = () => {
    isOpen.value = false
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropDownRef.value && !dropDownRef.value.contains(event.target as Node)) {
      closeDropdown()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
</script>

<template>
  <div class="dropdown" ref="dropDownRef">
    <button
      class="dropdown-toggle"
      @click="toggleDropDown"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
    {{ label }}
    <span class="dropdown-arrow" :class="{ open: isOpen}">▼</span>
    </button>

    <Transition name="dropdown">
      <ul
        v-show="isOpen"
        class="dropdown-menu"
        :class="`align-${align}`"
        :style="{ width }"
      >
        <slot :close="closeDropdown"></slot>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>

</style>
