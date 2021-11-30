<template>
  <div class="hot">
    <div class="hot-top">
      <span class="hot-frist">本周热门榜单</span>
      <span class="hot-title">全部榜单 &gt;</span>
    </div>
    <!-- 本周热门榜单 -->
    <div class="hot-frist-list">
      <ul>
        <li class="imgtext" v-for="item in hotList" :key="item.index">
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
    return {
      // hotList: [
      //   {
      //     id: '01',
      //     imgURL: '//img1.qunarzz.com/sight/p0/1411/61/d92ba6a30aa12eb0a9a4a9c82214cb8e.water.jpg_256x160_f46ee4c5.jpg',
      //     titleName: '秦始皇帝陵博物院',
      //     titleDetail: '秦始皇的地下御林军',
      //     price: '¥120'
      //   },
      //   {
      //     id: '02',
      //     imgURL: '//img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_256x160_39af85ce.jpg',
      //     titleName: '秦岭野生动物园',
      //     titleDetail: '观看放养的各类猛兽',
      //     price: '¥100'
      //   },
      //   {
      //     id: '03',
      //     imgURL: '//img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_256x160_c047d903.jpg',
      //     titleName: '华清宫',
      //     titleDetail: '唐玄宗和杨贵妃的共浴地',
      //     price: '¥120'
      //   },
      //   {
      //     id: '04',
      //     imgURL: '//img1.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg',
      //     titleName: '华山景区',
      //     titleDetail: "'以'奇险出名的五岳之一",
      //     price: '¥100'
      //   }
      // ]
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