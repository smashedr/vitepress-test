<script setup>
const props = defineProps({
  type: { type: String, default: 'info' },
})
const classes = `text-block custom-block ${props.type}`
</script>

<template>
  <div :class="classes"><slot></slot></div>
</template>

<style scoped>
.text-block {
  padding-top: 8px;
}
</style>
