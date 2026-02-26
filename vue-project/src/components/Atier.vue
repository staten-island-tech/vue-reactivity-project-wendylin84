<template>
  <div class="card">
    <h2>{{ skin.name }}</h2>
    <img :src="skin.img" />
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
  height: 220px;
  width: 150px;
  border: 3px solid;
  background-image: url('/cardbg/atier.png');
  background-size: cover;
  background-position: center;
}
</style>
