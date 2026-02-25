<template>
  <div class="container">
    <CostumeCard v-for="skin in skins" :key="skin.name" :skin="skin" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CostumeCard from '@/components/CostumeCard.vue'
const skins = ref([
  { name: 'Bird of Prey', rarity: 'S', price: '12,888 fragments' },
  { name: 'Weeping Goddess', rarity: 'S', price: '12,888 fragments' },
  { name: 'Bamboo Silence', rarity: 'S', price: '12,888 fragments' },
  { name: 'Myraid Souls', rarity: 'S', price: '12,888 fragments' },
  { name: 'The Black Tulip', rarity: 'A', price: '4,888 fragments' },
  { name: 'Recluse', rarity: 'A', price: '4,888 fragments' },
  { name: 'Juliet', rarity: 'A', price: '4,888 fragments' },
  { name: 'Romeo', rarity: 'A', price: '4,888 fragments' },
  { name: 'Ben-Hur', rarity: 'A', price: '4,888 fragments' },
  { name: 'Just Around the Corner', rarity: 'A', price: '4,888 fragments' },
  { name: 'So Long at the Fair', rarity: 'A', price: '4,888 fragments' },
  { name: 'Forgotten George', rarity: 'A', price: '4,888 fragments' },
  { name: 'Hamlet', rarity: 'A', price: '4,888 fragments' },
  { name: 'Million Dollar Mermaid', rarity: 'A', price: '4,888 fragments' },
  { name: 'Invisible Man', rarity: 'A', price: '4,888 fragments' },
  { name: 'Rhythm of the Rain', rarity: 'A', price: '4,888 fragments' },
  { name: 'Colonel Dax', rarity: 'A', price: '4,888 fragments' },
  { name: 'Dorothy', rarity: 'A', price: '4,888 fragments' },
  { name: 'Scarlet', rarity: 'A', price: '4,888 fragments' },
  { name: 'Rural Pastor', rarity: 'A', price: '4,888 fragments' },
  { name: 'Boudoir Dream', rarity: 'A', price: '4,888 fragments' },
  { name: 'Iron Lady', rarity: 'A', price: '4,888 fragments' },
  { name: 'Samara', rarity: 'A', price: '4,888 fragments' },
  { name: 'Zouzou', rarity: 'A', price: '4,888 fragments' },
  { name: 'The Red Shoes', rarity: 'A', price: '4,888 fragments' },
  { name: 'Salome', rarity: 'A', price: '4,888 fragments' },
  { name: 'Da Vinci', rarity: 'A', price: '4,888 fragments' },
  { name: 'Mulan', rarity: 'A', price: '4,888 fragments' },
  { name: 'Phyllis', rarity: 'A', price: '4,888 fragments' },
  { name: 'Rising Star', rarity: 'A', price: '4,888 fragments' },
  { name: 'Alice in Dreamland', rarity: 'A', price: '4,888 fragments' },
  { name: 'Werther', rarity: 'A', price: '4,888 fragments' },
  { name: 'Dodger', rarity: 'A', price: '4,888 fragments' },
  { name: 'Dodger', rarity: 'A', price: '4,888 fragments' },
  { name: 'Dodger', rarity: 'A', price: '4,888 fragments' },
  { name: 'Dodger', rarity: 'A', price: '4,888 fragments' },
  { name: 'Dodger', rarity: 'A', price: '4,888 fragments' },
  { name: 'Dodger', rarity: 'A', price: '4,888 fragments' },
  { name: 'Dodger', rarity: 'A', price: '4,888 fragments' },
  { name: 'Dodger', rarity: 'A', price: '4,888 fragments' },
])
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
