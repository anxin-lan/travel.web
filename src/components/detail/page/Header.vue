<template>
  <div class="banner">
    <div @click="showSwiper">
      <div class="banner-img">
        <img src="/api/detailImages/d1.jpg" alt="">
      </div>
      <div class="banner-title">
        秦始皇帝陵博物院（兵马俑）(AAAAA景区)
      </div>
    </div>
    <div class="img-swiper" v-show="imgSwiper" @click="hideSwiper">
      <!-- <img src="/api/detailImages/d1.jpg" alt=""> -->

      <swiper :options="swiperOption">

        <swiper-slide v-for='item in bannerList' :key='item.id'>
          <img :src="item.imgURL">
        </swiper-slide>

      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      bannerList: [
        {
          id: '01',
          imgURL: '/api/detailImages/d1.jpg'
        },
        {
          id: '02',
          imgURL: '/api/detailImages/t1.jpg'
        },
        {
          id: '03',
          imgURL: '/api/detailImages/t2.jpg'
        },
        {
          id: '04',
          imgURL: '/api/detailImages/t3.jpg'
        },
        {
          id: '05',
          imgURL: '/api/detailImages/t4.jpg'
        },
        {
          id: '06',
          imgURL: '/api/detailImages/t5.jpg'
        },
        {
          id: '07',
          imgURL: '/api/detailImages/t6.jpg'
        }
      ],
      imgSwiper: false
    }
  },
  methods: {
    showSwiper() {
      this.imgSwiper = true
    },
    hideSwiper() {
      this.imgSwiper = false
    }
  }
}
</script>
<style scoped>
.banner {
  position: relative;
}
.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img img {
  width: 100%;
}

.banner-title {
  position: absolute;
  bottom: 0.9375rem;
  left: 0.9375rem;
  font-size: 1.125rem;
  color: #fff;
  text-shadow: 0 1px 2px rgb(0 0 0 / 70%);
}

.img-swiper {
  position: fixed;
  background-color: #000;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-swiper img {
  width: 100%;
  height: 16.25rem;
}

.swiper-pagination,
.swiper-pagination-bullets {
  position: absolute;
  bottom: 0.625rem;
}
.swiper-pagination,
.swiper-pagination-fraction {
  color: #fff;
  font-size: 1.25rem;
}
</style>