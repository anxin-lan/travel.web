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
  // props: ['swiperList'],
  data() {
    return {
      swiperList: [
        {
          id: '01',
          imgUrl: 'https://img0.baidu.com/it/u=1950571386,3752692805&fm=26&fmt=auto'
        },
        {
          id: '02',
          imgUrl: 'https://img0.baidu.com/it/u=1785378616,248684041&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500'
        },
        {
          id: '03',
          imgUrl: 'https://img1.baidu.com/it/u=280602846,1233495361&fm=26&fmt=auto'
        }
      ]
    }
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