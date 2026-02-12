<template>
  <div>
    <h2>{{ skin.name }}</h2>
  </div>
</template>

<script setup>
defineProps({
  skin: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 150px;
  border: 3px solid rgba(0, 0, 0, 1);
}
</style>
