<template>
  <div>
    <Header></Header>
    <Swiper :swiperList='swiperList'></Swiper>
    <Icons :iconsList='iconsList'></Icons>
    <Localtion></Localtion>
    <Hot :hotList='hotList'></Hot>
    <Like :contentList='contentList'></Like>
    <Footer></Footer>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Header from './page/Header.vue'
import Swiper from './page/Swiper.vue'
import Icons from './page/Icons.vue'
import Localtion from './page/Localtion.vue'
import Hot from './page/Hot.vue'
import Like from './page/Like.vue'
import Footer from './page/Footer.vue'
import Navbar from '../navbar/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Icons,
    Localtion,
    Hot,
    Like,
    Footer,
    Navbar
  },
  data() {
    return {
      swiperList: [],
      iconsList: [],
      hotList: [],
      contentList: []
    }
  },
  mounted() {
    this.$http.get('/api/dataHome.json').then(res => {
      const data = res.data.data[0]
      this.swiperList = data.swiperList
      this.iconsList = data.iconsList
      this.hotList = data.hotList
      this.contentList = data.contentList
    })
  }
}
</script>

<style>
</style>