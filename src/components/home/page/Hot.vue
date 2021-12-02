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
  // props: ['hotList'],
  data() {
    return {
      name: 'Hot',
      hotList: [
        {
          id: '01',
          imgURL: 'https://img0.baidu.com/it/u=1411955872,2956584459&fm=26&fmt=auto',
          titleName: '秦始皇帝陵博物院',
          titleDetail: '秦始皇的地下御林军',
          price: '¥120'
        },
        {
          id: '02',
          imgURL: 'https://img1.baidu.com/it/u=3267974406,944226451&fm=26&fmt=auto',
          titleName: '秦岭野生动物园',
          titleDetail: '观看放养的各类猛兽',
          price: '¥100'
        },
        {
          id: '03',
          imgURL: 'https://img0.baidu.com/it/u=2434746275,166773544&fm=26&fmt=auto',
          titleName: '华清宫',
          titleDetail: '唐玄宗和杨贵妃的共浴地',
          price: '¥120'
        },
        {
          id: '04',
          imgURL: 'https://img2.baidu.com/it/u=3128481101,1624000683&fm=26&fmt=auto',
          titleName: '华山景区',
          titleDetail: "'以'奇险出名的五岳之一",
          price: '¥100'
        }
      ]
    }
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
  height: 25rem;
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
  height: 6.875rem;
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