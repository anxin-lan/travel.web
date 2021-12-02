<template>
  <div class="banner">
    <div @click="showSwiper">
      <div class="banner-img">
        <img src="https://img0.baidu.com/it/u=1411955872,2956584459&fm=26&fmt=auto" alt="">
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
  name: 'Banner',
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
          imgURL: 'https://img0.baidu.com/it/u=345838085,1350009943&fm=26&fmt=auto'
        },
        {
          id: '02',
          imgURL: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017fed55493eaf0000019ae9e36c03.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641009654&t=4f173af4d100ef8f4ded16ae6a0551c0'
        },
        {
          id: '03',
          imgURL: 'https://img0.baidu.com/it/u=1411955872,2956584459&fm=26&fmt=auto'
        },
        {
          id: '04',
          imgURL:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd1%2F1711%2F89%2F45794a35fcc392b5.jpg_r_680x510x95_e9b41ba1.jpg&refer=http%3A%2F%2Fimg1.qunarzz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641009850&t=a035410f02249954891eeb362c935baf'
        },
        {
          id: '05',
          imgURL: 'https://img2.baidu.com/it/u=1993012818,4286771473&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=311'
        },
        {
          id: '06',
          imgURL: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F8855278295%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641009942&t=dfe2ebfc4ec49c5b34c1c50e60578bc0'
        },
        {
          id: '07',
          imgURL:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fatt2.citysbs.com%2Fhangzhou%2F2021%2F06%2F17%2F20%2Fmiddle_6000x3836-203633_v3_19531623933393977_68530785f48074ee6266e169e277c45a.jpg&refer=http%3A%2F%2Fatt2.citysbs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641010066&t=7d3ecd42d1059a5351bb92cff386438c'
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
  z-index: 99;
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