<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe660;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe693;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to="/city">
        {{ city }}
      </router-link>
      <span class="iconfont">&#xe600;</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang='stylus'>
@import '~@/assets/css/var.styl';

.header {
  display: flex;
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  // background: #00bcd4;
  background: $bgColor;
}

.header-search {
  flex: 1;
  width: 12.5rem;
  height: 1.875rem;
  line-height: 1.875rem;
  padding-left: 0.625rem;
  margin-top: 0.5rem;
  background: #fff;
  color: #e4e7ea;
  border-radius: 0.3125rem;
}

.header-left {
  width: 1.875rem;
  text-align: center;
  color: $textColor;
  font-weight: 700;
}

.header-right {
  width: 3.125rem;
  padding-left: 0.3125rem;
  font-size: 0.875rem;
  color: $textColor;
}

.header-right a {
  color: #fff;
}
</style>