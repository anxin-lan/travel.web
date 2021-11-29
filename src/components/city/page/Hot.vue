<template>
  <div class="hot">
    <div class="hot-title">
      热门城市
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="item in hotCities" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityHot',
  props: ['hotCities']
}
</script>

<style scoped>
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
  width: 33.3%;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  float: left;
  border-bottom: 0.0625rem solid #ddd;
}
</style>