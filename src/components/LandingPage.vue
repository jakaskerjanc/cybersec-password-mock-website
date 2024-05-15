<template>
  <v-sheet
    class="top-sheet d-flex align-center flex-column ga-6 justify-center flex-wrap text-center"
    elevation="4"
    height="250"
    width="100%"
    rounded
  >
    <h2 class="text-h4 font-weight-black text-white">
      Welcome to Odense Fresh
    </h2>
    <div class="text-h5 font-weight-medium mb-2 text-white">
      The best fresh fruit in the whole Denmark!
    </div>
    <v-btn @click="goToRegister">
      Register now
    </v-btn>
  </v-sheet>
  <v-sheet
    elevation="4"
    width="100%"
    height="300"
    rounded
  >
    <h2
      style="text-align: center; padding: 16px;"
    >
      Featured Categories
    </h2>
    <div class="card-wrapper d-flex align-center flex-row ga-6 justify-center flex-wrap text-center">
      <v-card
        v-for="card in cardList"
        :key="card.title"
        color="text-black"
        max-width="340"
        height="200"
        :subtitle="card.subtitle"
        :title="card.title"
      >
        <v-img
          height="124px"
          :src="card.image"
        />
      </v-card>
    </div>
  </v-sheet>
  <v-sheet
    class="bottom-sheet bg-light-blue d-flex align-center flex-column justify-center flex-wrap text-center"
    elevation="4"
    width="100%"
    rounded
  >
    <h3>About Odense Fresh:</h3>
    <span>
      At Odense Fresh, we are passionate about providing our customers with the freshest and highest quality fruits, vegetables, meat, and eggs.
      We believe that everyone deserves access to nutritious and delicious food, and we strive to make that a reality for all.
    </span>
  </v-sheet>
</template>

<script setup>
import { reactive } from 'vue';
import useState from '../composables/state'

const { currentPage } = useState

const cardList = reactive([
  {
    title: 'Fruits',
    subtitle: 'The best fruits in the whole Denmark!',
    image: 'https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg',
  },
  {
    title: 'Vegetables',
    subtitle: 'The best vegetables in the whole Denmark!',
    image: 'https://t3.ftcdn.net/jpg/00/01/58/06/360_F_1580633_VYebvOlRgRSzj7Ms7r6LsGmXYapi5L.jpg',
  },
  {
    title: 'Meat',
    subtitle: 'The best meat in the whole Denmark!',
    image: 'https://media.istockphoto.com/id/935316446/photo/fresh-raw-rib-eye-steaks-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=eRmiuQG93iBU87VCXFOFNUrqrnYrS_2ExMbr2RedSzA=',
  },
  {
    title: 'Egg',
    subtitle: 'The best eggs in the whole Denmark!',
    image: 'https://img.freepik.com/free-photo/three-fresh-organic-raw-eggs-isolated-white-surface_114579-43677.jpg',
  },
])

function goToRegister() {
  currentPage.value = 'Register'
}
</script>

<style scoped lang="less">

.top-sheet {
  background-image: url(/kiwi-background.jpg);
  background-position: center;
  width: 100%;
  height: 100%;
}

.card-wrapper {
  width: 100%;
}

.bottom-sheet {
  height: calc(100vh - 614px);
}
</style>