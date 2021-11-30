<template>
  <div class="header-swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: ['swiperList'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe {
  width: 100%;
  height: 13.1875rem;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>