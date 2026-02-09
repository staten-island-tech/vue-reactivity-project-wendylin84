<template>
  <div>
    <AnimalCard v-for="animal in animals" :key="animal.name" :animal="animal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SeasonCard from '@/components/SeasonCards.vue'
const seasons = ref([
  { name: 'Spring', category: 1 },
  { name: 'Summer', category: 1 },
  { name: 'Autumn', category: 2 },
  { name: 'Winter', category: 2 },
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
