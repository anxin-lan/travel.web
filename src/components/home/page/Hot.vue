<template>
  <div class="hot">
    <div class="hot-top">
      <span class="hot-frist">本周热门榜单</span>
      <span class="hot-title">全部榜单 &gt;</span>
    </div>
    <van-grid :border="false" :column-num="2" :gutter="8">
      <van-grid-item>
        <van-image src="//img1.qunarzz.com/sight/p0/1411/61/d92ba6a30aa12eb0a9a4a9c82214cb8e.water.jpg_256x160_f46ee4c5.jpg" />
        <div class="imgtext">
          <div class="title"> 秦始皇帝陵博物院</div>
          <div class="detail">秦始皇的地下御林军</div>
          <span class="price">¥120</span>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="//img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_256x160_39af85ce.jpg" />
        <div class="imgtext">
          <div class="title"> 秦岭野生动物园</div>
          <div class="detail">观看放养的各类猛兽</div>
          <span class="price">¥690</span>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="//img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_256x160_c047d903.jpg" />
        <div class="imgtext">
          <div class="title"> 华清宫</div>
          <div class="detail">唐玄宗和杨贵妃的共浴地</div>
          <span class="price">¥120</span>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="//img1.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg" />
        <div class="imgtext">
          <div class="title"> 华山景区</div>
          <div class="detail">以"奇险出名的五岳之一"</div>
          <span class="price">¥100</span>
        </div>
      </van-grid-item>
    </van-grid>
    <div class="btn"><span>更多特惠门票</span> <em>&gt;</em></div>
  </div>
</template>
<script>
export default {}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl';

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
  padding-top: 0.625rem;
  font-size: 0.9375rem;
  color: #000;
}

.detail {
  padding-top: 0.3125rem;
  font-size: 0.875rem;
  float: left;
  color: #888;
}

.price {
  display: inline-block;
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