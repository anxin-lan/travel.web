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
import { mapState } from 'vuex'
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
      contentList: [],
      changeCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHttp() {
      this.$http.get('/api/dataHome.json').then(res => {
        const data = res.data.data
        data.forEach((item, index) => {
          if (item.city == this.city) {
            this.swiperList = item.swiperList
            this.iconsList = item.iconsList
            this.hotList = item.hotList
            this.contentList = item.contentList
          }
        })
      })
    }
  },
  mounted() {
    this.changeCity = this.city
    this.getHttp()
  },
  activated() {
    if (this.changeCity != this.city) {
      this.getHttp()
      this.changeCity = this.city
    }
  }
}
</script>

<style>
</style>