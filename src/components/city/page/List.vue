<template>
  <div ref="container" class="container">
    <div>
      <!-- Hot -->
      <div class="hot">
        <div class="hot-title">
          热门城市
        </div>
        <ul class="hot-list">
          <li class="hot-item" v-for="item in hotCities" :key="item.id" @click="changeCityName(item.name)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- Sort -->
      <div class="sort">
        <div class="sort-title">
          字母排序
        </div>
        <ul class="sort-list">
          <li class="sort-item" v-for="(index,item) in cities" :key="item.id" @click="changeSort(item)">
            {{ item }}
          </li>
        </ul>
      </div>
      <!-- List -->
      <div class="list">
        <div v-for="(index,item) in cities" :key="item.id" :ref="item">
          <div class="list-title">
            {{ item }}
          </div>
          <ul class="list-msg">
            <li class="list-item" v-for="item in index" :key="item.id" @click="changeCityName(item.name)">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: ['hotCities', 'cities'],
  data() {
    return {
      scroll: ''
    }
  },
  mounted() {
    let container = this.$refs['container']
    this.scroll = new BScroll(container)
  },
  methods: {
    changeSort(sortName) {
      this.scroll.scrollToElement(this.$refs[sortName][0])
    },
    changeCityName(cityName) {
      this.changeCity(cityName)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl';

.container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 2.75rem;
  background: #f5f5f5;
  overflow: hidden;
}

.hot-title {
  font-size: 0.875rem;
  padding: 0.625rem 0.9375rem;
}

.hot-list {
  position: relative;
  background: #fff;
  font-size: 0.875rem;
  overflow: hidden;
}

.hot-list:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 33.3%;
  left: 33.3%;
  border-left: 0.0625rem solid #ddd;
  border-right: 0.0625rem solid #ddd;
}

.hot-item {
  position: relative;
  width: 33.3%;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  float: left;
  border-bottom: 0.0625rem solid #ddd;
}

.sort-title {
  font-size: 0.875rem;
  padding: 0.625rem 0.9375rem;
}

.sort-list {
  position: relative;
  background: #fff;
  font-size: 0.875rem;
  overflow: hidden;
}

.sort-item {
  width: 16.66%;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  float: left;
}

.list-title {
  font-size: 0.875rem;
  padding: 0.625rem 0.9375rem;
}

.list-msg {
  position: relative;
  background: #fff;
  font-size: 0.875rem;
  overflow: hidden;
}

.list-msg:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 25%;
  left: 25%;
  border-left: 0.0625rem solid #ddd;
  border-right: 0.0625rem solid #ddd;
}

.list-msg:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 0;
  left: 75%;
  border-left: 0.0625rem solid #ddd;
}

.list-item {
  position: relative;
  width: 25%;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  float: left;
  border-bottom: 0.0625rem solid #ddd;
  textOverflow();
}
</style>