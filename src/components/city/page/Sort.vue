<template>
  <div class="hot">
    <div class="hot-title">
      字母排序
    </div>
    <ul class="hot-list">
      <li class="hot-item">
        A
      </li>
      <li class="hot-item">
        A
      </li>
      <li class="hot-item">
        A
      </li>
      <li class="hot-item">
        A
      </li>
      <li class="hot-item">
        A
      </li>
      <li class="hot-item">
        A
      </li>
      <li class="hot-item">
        A
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
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

.hot-item {
  width: 16.66%;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  float: left;
}
</style>