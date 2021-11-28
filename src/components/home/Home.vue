<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <Localtion></Localtion>
  </div>
</template>

<script>
import Header from './page/Header.vue'
import Swiper from './page/Swiper.vue'
import Icons from './page/Icons.vue'
import Localtion from './page/Localtion.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Icons,
    Localtion
  }
}
</script>

<style>
</style>