<template>
  <div class="header">
    <div class="header-return" @click="goBack" v-show="showHeader">&lt;</div>

    <div class="header-top" v-show="!showHeader" :style="styleOpacity">
      <div class="header-left" @click="goBack">
        <span class="iconfont">&#xe660;</span>
      </div>
      秦始皇帝陵博物院（兵马俑）
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showHeader: true,
      styleOpacity: {
        opacity: 0
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  },
  mounted() {
    let that = this
    window.addEventListener('scroll', function () {
      // console.log(document.documentElement.scrollTop)
      let top = document.documentElement.scrollTop
      if (top > 45) {
        let opacity = top / 130
        opacity = opacity > 1 ? 1 : opacity
        that.styleOpacity = { opacity }
        that.showHeader = false
      } else {
        that.showHeader = true
      }
    })
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/var.styl';

.header-return {
  position: absolute;
  top: 0.9375rem;
  left: 0.625rem;
  width: 2.1875rem;
  height: 2.1875rem;
  line-height: 2.1875rem;
  background-color: #000;
  border-radius: 50%;
  opacity: 0.5;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  text-align: center;
}

.header-top {
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  line-height: 2.75rem;
  color: #fff;
  z-index: 99;
  background: $bgColor;
}

.header-left {
  position: absolute;
  width: 1.875rem;
  text-align: center;
  color: $textColor;
  font-weight: 700;
}
</style>