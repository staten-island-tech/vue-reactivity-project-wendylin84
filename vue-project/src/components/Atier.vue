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
  background-image: url('/cardbg/atier.png');
}
.card {
  border: 1.5px solid #502b54;
  margin-bottom: 50px;
  margin-top: 20px;
}
h2 {
  margin: 0%;
  font-weight: 300;
  padding: 0%;
  text-align: center;
  white-space: nowrap;
}
.card img {
  height: auto;
  width: auto;
  object-fit: cover;
}
</style>
