<template>
  <div class="nav-bar">
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">订单</van-tabbar-item>
      <van-tabbar-item name="friends" icon="setting-o">服务</van-tabbar-item>
      <van-tabbar-item name="setting" icon="friends-o">登录/注册</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      active: 'home'
    }
  }
}
</script>

<style>
.van-icon-setting-o:before {
  content: '\e745';
}
</style>