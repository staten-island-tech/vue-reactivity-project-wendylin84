<template>
  <div class="container">
    <Stier @click="addtoCart(skin)" v-for="skin in STierSkins" :key="skin.name" :skin="skin">
      <button class="btn">
        <img src="https://via.placeholder.com/16" alt="fragments" />{{ skin.fragprice }}
      </button>
    </Stier>
    <Atier @click="addtoCart(skin)" v-for="skin in ATierSkins" :key="skin.name" :skin="skin">
      <button>{{ skin.echoprice }}</button>
    </Atier>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Stier from '@/components/Stier.vue'
import Atier from '@/components/Atier.vue'
function addtoCart(item) {
  console.log(item)
}
const STierSkins = ref([
  {
    name: 'Bird of Prey',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphsurv/BirdOfPreyShopSprite.webp',
    alt: 'Bird of Prey',
  },
  {
    name: 'Weeping Goddess',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphhunter/WeepingGoddessShopSprite.webp',
    alt: 'Weeping Goddess',
  },
  {
    name: 'Optimism of Flower',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphsurv/OptimismOfFlowerShopSprite.webp',
    alt: 'Optimism of Flower',
  },
  {
    name: 'Eternal Summer Shall Not Fade',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphsurv/EternalSummerShallNotFadeShopSprite.webp',
    alt: 'Eternal Summer Shall Not Fade',
  },
  {
    name: 'To the Myriad Silent Souls',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphsurv/ToTheMyriadSilentSoulsShopSprite.webp',
    alt: 'To the Myriad Silent Souls',
  },
  {
    name: 'Nocturne of the Nights Chant',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphsurv/NocturneOfTheNightsChantShopSprite.webp',
    alt: 'Nocturne of the Nights Chant',
  },
  {
    name: 'Resilience of Bamboo',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphhunter/ResilienceOfBambooShopSprite.webp',
    alt: 'Resilience of Bamboo',
  },
  {
    name: 'Black Bones',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphhunter/BlackBonesShopSprite.webp',
    alt: 'Black Bones',
  },
  {
    name: 'At This Hour All Is Silent',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphhunter/AtThisHourAllIsSilentShopSprite.webp',
    alt: 'At This Hour All Is Silent',
  },
  {
    name: 'Brilliant Polaris',
    rarity: 'S',
    echoprice: '1,888 echoes',
    fragprice: '12,888 fragments',
    img: '/nymphhunter/BrilliantPolarisShopSprite.webp',
    alt: 'Brilliant Polaris',
  },
])
const ATierSkins = ref([
  {
    name: 'The Black Tulip',
    rarity: 'A',
    echoprice: '1,388 echoes',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/TheBlackTulipShopSprite.webp',
    alt: 'The Black Tulip',
  },
  {
    name: 'Recluse',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/RecluseIllusionHall.webp',
    alt: 'Recluse',
  },
  {
    name: 'Juliet',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/JulietShopSprite.webp',
    alt: 'Juliet',
  },
  {
    name: 'Romeo',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/RomeoShopSprite.webp',
    alt: 'Romeo',
  },
  {
    name: 'Ben-Hur',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/BenHurShopSprite.webp',
    alt: 'Ben-Hur',
  },
  {
    name: 'Just Around the Corner',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/JustAroundTheCornerShopSprite.webp',
    alt: 'Just Around the Corner',
  },
  {
    name: 'So Long at the Fair',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/SoLongAtTheFairShopSprite.webp',
    alt: 'So Long at the Fair',
  },
  {
    name: 'Forgotten George',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/ForgottenGeorgeShopSprite.webp',
    alt: 'Forgotten George',
  },
  {
    name: 'Hamlet',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/HamletShopSprite.webp',
    alt: 'Hamlet',
  },
  {
    name: 'Million Dollar Mermaid',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/MillionDollarMermaidShopSprite.webp',
    alt: 'Million Dollar Mermaid',
  },
  {
    name: 'Rhythm of the Rain',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/RhythmOfTheRainShopSprite.webp',
    alt: 'Rhythm of the Rain',
  },
  {
    name: 'Colonel Dax',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/ColonelDaxIllusionHallSprite.webp',
    alt: 'Colonel Dax',
  },
  {
    name: 'Dorothy',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/DorothyShopSprite.webp',
    alt: 'Dorothy',
  },
  {
    name: 'Scarlett',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/ScarlettShopSprite.webp',
    alt: 'Scarlett',
  },
  {
    name: 'Rural Pastor',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/RuralPastorShopSprite.webp',
    alt: 'Rural Pastor',
  },
  {
    name: 'Boudoir Dream',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/BoudoirDreamShopSprite.webp',
    alt: 'Boudoir Dream',
  },
  {
    name: 'Iron Lady',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/IronLadyShopSprite.webp',
    alt: 'Iron Lady',
  },
  {
    name: 'Samara',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/SamaraShopSprite.webp',
    alt: 'Samara',
  },
  {
    name: 'Zouzou',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/ZouzouShopSprite.webp',
    alt: 'Zouzou',
  },
  {
    name: 'The Red Shoes',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/TheRedShoesShopSprite.webp',
    alt: 'The Red Shoes',
  },
  {
    name: 'Salome',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/SalomeShopSprite.webp',
    alt: 'Salome',
  },
  {
    name: 'Da Vinci',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/DaVinciShopSprite.webp',
    alt: 'Da Vinci',
  },
  {
    name: 'Phyllis',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/PhyllisShopSprite.webp',
    alt: 'Phyllis',
  },
  {
    name: 'Rising Star',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/RisingStarShopSprite.webp',
    alt: 'Rising Star',
  },
  {
    name: 'Alice in Dreamland',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/AliceInDreamlandShopSprite.webp',
    alt: 'Alice in Dreamland',
  },
  {
    name: 'Werther',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/WertherShopSprite.webp',
    alt: 'Werther',
  },
  {
    name: 'Dodger',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/DodgerShopSprite.webp',
    alt: 'Dodger',
  },
  {
    name: '"Edward" Beneath the Crown',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionsurv/EdwardBeneathTheCrownShopSprite.webp',
    alt: '"Edward" Beneath the Crown',
  },
  {
    name: 'Svengali',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/SvengaliShopSprite.webp',
    alt: 'Svengali',
  },
  {
    name: 'Broken Blossoms',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/BrokenBlossomsShopSprite.webp',
    alt: 'Broken Blossoms',
  },
  {
    name: 'Rashomon',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/RashomonShopSprite.webp',
    alt: 'Rashomon',
  },
  {
    name: 'Faust',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/FaustIllusionHallSprite.webp',
    alt: 'Faust',
  },
  {
    name: 'Clara',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/ClaraShopSprite.webp',
    alt: 'Clara',
  },
  {
    name: 'Gold Miner',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/GoldMinerShopSprite.webp',
    alt: 'Gold Miner',
  },
  {
    name: 'Mr. Hyde',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/MrHydeShopSprite.webp',
    alt: 'Mr. Hyde',
  },
  {
    name: 'Femme Fatale',
    rarity: 'A',
    fragprice: '4,888 fragments',
    img: '/deductionhunter/FemmeFataleShopSprite.webp',
    alt: 'Femme Fatale',
  },
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
  background-size: cover;
  background-position: center;
}
</style>
