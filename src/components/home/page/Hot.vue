<template>
  <div class="hot">
    <div class="hot-top">
      <span class="hot-frist">本周热门榜单</span>
      <span class="hot-title">全部榜单 &gt;</span>
    </div>
    <!-- 本周热门榜单 -->
    <div class="hot-frist-list">
      <ul>
        <li class="imgtext" v-for="item in hotList" :key="item.index" @click="toDetail">
          <img :src="item.imgURL" alt="">
          <div class="title"> {{ item.titleName }}</div>
          <div class="detail">{{ item.titleDetail }}</div>
          <span class="price">{{ item.price }}</span>
        </li>
      </ul>
    </div>

    <div class="btn"><span>更多特惠门票</span> <em>&gt;</em></div>
  </div>
</template>
<script>
export default {
  name: 'Hot',
  props: ['hotList'],
  data() {
    return {}
  },
  methods: {
    toDetail() {
      this.$router.push('/detail')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl';

.hot-frist-list {
  height: 23.75rem;
  max-height: 28.125rem;
  margin-left: 5%;
  margin-top: 1.125rem;
}

.hot-frist-list ul {
  display: flex;
  flex-wrap: wrap;
}

.hot-frist-list ul li {
  flex: 1;
  margin-top: 0.625rem;
}

.hot-frist-list ul li img {
  width: 10rem;
  border-radius: 0.3125rem;
}

.hot-top {
  height: 2.75rem;
  line-height: 2.75rem;
  font-weight: 700;
  padding-left: 0.625rem;
}

.hot-frist {
  border-left: 3px solid #00bcd4;
}

.hot-title {
  float: right;
  font-size: 14px;
  font-weight: 400;
  padding-right: 0.625rem;
}

.imgtext {
  text-align: left;
}

.van-image img {
  border-radius: 0.3125rem;
}

.title {
  padding-top: 0.3125rem;
  font-size: 0.9375rem;
  color: #000;
}

.detail {
  padding-top: 0.3125rem;
  font-size: 0.875rem;
  color: #888;
}

.price {
  font-size: 1.25rem;
  padding-top: 0.3125rem;
  color: #ff7400;
  font-weight: 700;
}

.btn {
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
  color: #00bcd4;
}

.btn span {
  display: inline-block;
  width: 85%;
  height: 2.625rem;
  border: 1px solid #00bcd4;
  border-radius: 0.3125rem;
}

.btn em {
  position: absolute;
  right: 34%;
}
</style>