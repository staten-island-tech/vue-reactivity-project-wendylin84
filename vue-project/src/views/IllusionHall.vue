<template>
  <div class="container">
    <CostumeCard v-for="skin in skins" :key="skin.name" :skin="skin" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CostumeCard from '@/components/CostumeCard.vue'
</script>

<style scoped>
.love-light-regular {
  font-family: 'Love Light', cursive;
  font-weight: 400;
  font-style: normal;
}
.dongle-regular {
  font-family: 'Dongle', sans-serif;
  font-weight: 400;
  font-style: normal;
}
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  font-family: 'Dongle', sans-serif;
  border: 1px solid #855a5a;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
