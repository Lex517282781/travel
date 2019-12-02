<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './subs/Header'
import HomeSwiper from './subs/Swiper'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
