<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/">
        <span class="iconfont">&#xe660;</span>
      </router-link>
    </div>
    <div class="citytitle">
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  conponents: {}
}
</script>


<style scoped lang='stylus'>
@import '~@/assets/css/var.styl';

.header {
  position: relative;
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  background: $bgColor;
}

.header-left {
  width: 1.875rem;
  text-align: center;
  color: $textColor;
  font-weight: 700;
}

.header-left a {
  color: #fff;
}

.citytitle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  // text-align: center;
  font-weight: 700;
  color: #fff;
}
</style>
