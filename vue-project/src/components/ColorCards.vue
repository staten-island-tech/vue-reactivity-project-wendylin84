<template>
  <div>
    <h2>{{ colors.name }}</h2>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 150px;
  border: 3px solid rgba(0, 0, 0, 1);
}
</style>
