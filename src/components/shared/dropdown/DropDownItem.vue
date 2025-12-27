<script setup lang="ts">
  interface Props {
    href?: string
    icon?: string
    disabled?: boolean
    external?: boolean
    download?: string
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    click: []
  }>()

  const handleClick = (event: Event) => {
    if (props.disabled) {
      event.preventDefault()
      return
    }
    emit('click')
  }
</script>


<template>
  <li class="dropdown-item-container">
    <a
      v-if="href"
      :href="href"
      :download="download"
      :target="external ? '_blank' : undefined"
      :rel="external ? 'noopener noreferrer' : undefined"
      :class="{ disabled }"
      class="dropdown-item"
      @click="handleClick"
    >
      <img v-if="icon" :src="icon" class="item-icon" width="60" height="60"/>
      <slot></slot>
    </a>

    <button
      v-else
      :disabled="disabled"
      class="dropdown-item"
      @click="handleClick"
    >
      <img v-if="icon" :src="icon" class="item-icon" width="60" height="60" />
      <slot></slot>
    </button>
  </li>
</template>

<style scoped>

</style>
