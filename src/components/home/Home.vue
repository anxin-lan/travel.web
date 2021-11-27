<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
  </div>
</template>

<script>
import Header from './page/Header.vue'
import Swiper from './page/Swiper.vue'
import Icons from './page/Icons.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Icons
  }
}
</script>

<style>
</style>