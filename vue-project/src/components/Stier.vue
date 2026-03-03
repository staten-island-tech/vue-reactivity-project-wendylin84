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
  background-image: url('/cardbg/stier.png');
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
