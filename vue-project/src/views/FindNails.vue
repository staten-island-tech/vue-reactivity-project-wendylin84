<template>
  <div>
    <SeasonCard v-for="season in seasons" :key="season.name" :season="season" />
    <ColorCard v-for="color in colors" :key="color.name" :color="color" />
    <TypeofFood v-for="food in foods" :key="food.name" :food="food" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SeasonCard from '@/components/SeasonCards.vue'
import ColorCard from '@/components/ColorCards.vue'
import TypeofFood from '@/components/TypeofFood.vue'
const seasons = ref([
  { name: 'Spring', category: 1 },
  { name: 'Summer', category: 2 },
  { name: 'Autumn', category: 3 },
  { name: 'Winter', category: 4 },
])
const colortype = ref([
  { name: 'Light, Pastel Colors', category: 1 },
  { name: 'Bright, Vibrant Colors', category: 2 },
  { name: 'Cozy, Warm Colors', category: 3 },
  { name: 'Dark, Gloomy Colors', category: 4 },
])
const foodtype = ref([
  { name: 'Sweet', category: 1 },
  { name: 'Salty', category: 2 },
  { name: 'Spicy', category: 3 },
  { name: 'Bitter', category: 4 },
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
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
