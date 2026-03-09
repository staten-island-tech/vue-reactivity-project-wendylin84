<template>
  <div class="container">
    <Stier v-for="skin in STierSkins" :key="skin.name" :skin="skin">
      <button class="btn" @click="addtoCart(skin)">
        <img src="/cardbg/MiniEcho.webp" alt="echoes" />{{ skin.echoprice }} /
        <img src="/cardbg/Fragment.webp" alt="fragments" />{{ skin.fragprice }}
      </button>
    </Stier>
    <Atier v-for="skin in ATierSkins" :key="skin.name" :skin="skin">
      <button class="btn" @click="addtoCart(skin)">
        <img src="/cardbg/MiniEcho.webp" alt="echoes" />{{ skin.echoprice }} /
        <img src="/cardbg/Fragment.webp" alt="fragments" />{{ skin.fragprice }}
      </button>
    </Atier>
  </div>
  <div class="cart">
    <h1>Cart</h1>
    <ul>
      <li v-for="item in cart" :key="item.name">
        {{ item.name }} — {{ item.echoprice }} echoes — {{ item.fragprice }} fragments
        <button @click="removefromCart(item)">Remove from Cart</button>
      </li>
    </ul>
    <p>Total: {{ echototal }} echoes or {{ fragtotal }} fragments</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Stier from '@/components/Stier.vue'
import Atier from '@/components/Atier.vue'
const cart = ref([])
const echototal = ref(0)
const fragtotal = ref(0)
function addtoCart(skin) {
  cart.value.push(skin)
  echototal.value += skin.echoprice
  fragtotal.value += skin.fragprice
}
function removefromCart(item) {
  cart.value = cart.value.filter((skin) => skin !== item)

  let echosum = 0
  let fragsum = 0
  cart.value.forEach((skin) => {
    echosum += skin.echoprice
    fragsum += skin.fragprice
  })
  echototal.value = echosum
  fragtotal.value = fragsum
}
const STierSkins = ref([
  {
    name: 'Bird of Prey',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphsurv/BirdOfPreyShopSprite.webp',
    alt: 'Bird of Prey',
  },
  {
    name: 'Weeping Goddess',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphhunter/WeepingGoddessShopSprite.webp',
    alt: 'Weeping Goddess',
  },
  {
    name: 'Optimism of Flower',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphsurv/OptimismOfFlowerShopSprite.webp',
    alt: 'Optimism of Flower',
  },
  {
    name: 'Eternal Summer Shall Not Fade',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphsurv/EternalSummerShallNotFadeShopSprite.webp',
    alt: 'Eternal Summer Shall Not Fade',
  },
  {
    name: 'To the Myriad Silent Souls',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphsurv/ToTheMyriadSilentSoulsShopSprite.webp',
    alt: 'To the Myriad Silent Souls',
  },
  {
    name: 'Nocturne of the Nights Chant',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphsurv/NocturneOfTheNightsChantShopSprite.webp',
    alt: 'Nocturne of the Nights Chant',
  },
  {
    name: 'Resilience of Bamboo',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphhunter/ResilienceOfBambooShopSprite.webp',
    alt: 'Resilience of Bamboo',
  },
  {
    name: 'Black Bones',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphhunter/BlackBonesShopSprite.webp',
    alt: 'Black Bones',
  },
  {
    name: 'At This Hour All Is Silent',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphhunter/AtThisHourAllIsSilentShopSprite.webp',
    alt: 'At This Hour All Is Silent',
  },
  {
    name: 'Brilliant Polaris',
    rarity: 'S',
    echoprice: 2888,
    fragprice: 12888,
    img: '/nymphhunter/BrilliantPolarisShopSprite.webp',
    alt: 'Brilliant Polaris',
  },
])
const ATierSkins = ref([
  {
    name: 'The Black Tulip',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/TheBlackTulipShopSprite.webp',
    alt: 'The Black Tulip',
  },
  {
    name: 'Recluse',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/RecluseIllusionHall.webp',
    alt: 'Recluse',
  },
  {
    name: 'Juliet',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/JulietShopSprite.webp',
    alt: 'Juliet',
  },
  {
    name: 'Romeo',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/RomeoShopSprite.webp',
    alt: 'Romeo',
  },
  {
    name: 'Ben-Hur',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/BenHurShopSprite.webp',
    alt: 'Ben-Hur',
  },
  {
    name: 'Just Around the Corner',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/JustAroundTheCornerShopSprite.webp',
    alt: 'Just Around the Corner',
  },
  {
    name: 'So Long at the Fair',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/SoLongAtTheFairShopSprite.webp',
    alt: 'So Long at the Fair',
  },
  {
    name: 'Forgotten George',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/ForgottenGeorgeShopSprite.webp',
    alt: 'Forgotten George',
  },
  {
    name: 'Hamlet',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/HamletShopSprite.webp',
    alt: 'Hamlet',
  },
  {
    name: 'Million Dollar Mermaid',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/MillionDollarMermaidShopSprite.webp',
    alt: 'Million Dollar Mermaid',
  },
  {
    name: 'Rhythm of the Rain',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/RhythmOfTheRainShopSprite.webp',
    alt: 'Rhythm of the Rain',
  },
  {
    name: 'Colonel Dax',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/ColonelDaxIllusionHallSprite.webp',
    alt: 'Colonel Dax',
  },
  {
    name: 'Dorothy',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/DorothyShopSprite.webp',
    alt: 'Dorothy',
  },
  {
    name: 'Scarlett',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/ScarlettShopSprite.webp',
    alt: 'Scarlett',
  },
  {
    name: 'Rural Pastor',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/RuralPastorShopSprite.webp',
    alt: 'Rural Pastor',
  },
  {
    name: 'Boudoir Dream',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/BoudoirDreamShopSprite.webp',
    alt: 'Boudoir Dream',
  },
  {
    name: 'Iron Lady',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/IronLadyShopSprite.webp',
    alt: 'Iron Lady',
  },
  {
    name: 'Samara',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/SamaraShopSprite.webp',
    alt: 'Samara',
  },
  {
    name: 'Zouzou',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/ZouzouShopSprite.webp',
    alt: 'Zouzou',
  },
  {
    name: 'The Red Shoes',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/TheRedShoesShopSprite.webp',
    alt: 'The Red Shoes',
  },
  {
    name: 'Salome',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/SalomeShopSprite.webp',
    alt: 'Salome',
  },
  {
    name: 'Da Vinci',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/DaVinciShopSprite.webp',
    alt: 'Da Vinci',
  },
  {
    name: 'Phyllis',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/PhyllisShopSprite.webp',
    alt: 'Phyllis',
  },
  {
    name: 'Rising Star',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/RisingStarShopSprite.webp',
    alt: 'Rising Star',
  },
  {
    name: 'Alice in Dreamland',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/AliceInDreamlandShopSprite.webp',
    alt: 'Alice in Dreamland',
  },
  {
    name: 'Werther',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/WertherShopSprite.webp',
    alt: 'Werther',
  },
  {
    name: 'Dodger',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/DodgerShopSprite.webp',
    alt: 'Dodger',
  },
  {
    name: '"Edward" Beneath the Crown',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionsurv/EdwardBeneathTheCrownShopSprite.webp',
    alt: '"Edward" Beneath the Crown',
  },
  {
    name: 'Svengali',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/SvengaliShopSprite.webp',
    alt: 'Svengali',
  },
  {
    name: 'Broken Blossoms',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/BrokenBlossomsShopSprite.webp',
    alt: 'Broken Blossoms',
  },
  {
    name: 'Rashomon',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/RashomonShopSprite.webp',
    alt: 'Rashomon',
  },
  {
    name: 'Faust',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/FaustIllusionHallSprite.webp',
    alt: 'Faust',
  },
  {
    name: 'Clara',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/ClaraShopSprite.webp',
    alt: 'Clara',
  },
  {
    name: 'Gold Miner',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/GoldMinerShopSprite.webp',
    alt: 'Gold Miner',
  },
  {
    name: 'Mr. Hyde',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
    img: '/deductionhunter/MrHydeShopSprite.webp',
    alt: 'Mr. Hyde',
  },
  {
    name: 'Femme Fatale',
    rarity: 'A',
    echoprice: 1388,
    fragprice: 4888,
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
  padding-top: 14px;
  display: flex;
  height: 45vw;
  width: 95vw;
  overflow-y: auto;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  font-family: 'Essay Text W01 Italic';
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 220px;
  width: 205px;
  padding: 12px;
  border-radius: 37px;
  background-size: cover;
  background-position: center;
}
.btn {
  height: auto;
  width: auto;
  margin-top: 10px;
  object-fit: fill;
  font-family: 'Essay Text W01 Italic';
  font-size: 25px;
  background-image: url('/cardbg/buttonimg.png');
  background-position: center;
}
.btn img {
  height: 25px;
  width: 25px;
  vertical-align: middle;
  margin-right: 2.5px;
}
.cart {
  background-color: aliceblue;
  font-family: 'Essay Text W01 Italic';
  font-size: 20px;
  border-radius: 20px;
}
</style>
