<template>
  <div>
    <CostumeCard v-for="skin in skins" :key="skin.name" :skin="skin" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CostumeCard from '@/components/CostumeCard.vue'
const skins = ref([
  { name: 'Spring', rarity: 'S' },
  { name: 'Summer', rarity: 'S' },
  { name: 'Autumn', rarity: 'S' },
  { name: 'Winter', rarity: 'S' },
])
</script>

<style scoped>
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
  border: 1px solid #855a5a;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
