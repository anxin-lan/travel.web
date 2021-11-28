<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <Localtion></Localtion>
    <Hot></Hot>
    <Like></Like>
  </div>
</template>

<script>
import Header from './page/Header.vue'
import Swiper from './page/Swiper.vue'
import Icons from './page/Icons.vue'
import Localtion from './page/Localtion.vue'
import Hot from './page/Hot.vue'
import Like from './page/Like.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Icons,
    Localtion,
    Hot,
    Like
  }
}
</script>

<style>
</style>