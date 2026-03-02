<template>
  <div class="card">
    <h2>{{ skin.name }}</h2>
    <img :src="skin.img" />
    <slot>click me</slot>
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
  font-family: 'Dongle', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 220px;
  width: 250px;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  border: 1px solid #855a5a;
  background-image: url('/cardbg/stier.png');
  background-size: cover;
  background-position: center;
}
h2 {
  margin: 0%;
  padding: 0%;
  text-align: center;
  white-space: nowrap;
}
img {
  height: auto;
  width: auto;
  object-fit: contain;
}
</style>
