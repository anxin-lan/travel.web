<template>
  <div class="localtion border-top">
    <div class="localtion-item border-right">
      <span class="iconfont">&#xe63f;</span>
      西安
    </div>
    <div class="localtion-item">
      <span class="iconfont">&#xe642;</span>
      滑雪季
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.localtion {
  display: flex;
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  /* background-color: red; */
  text-align: center;
  border-bottom: 10px solid #e0e0e0;
}
.localtion-item {
  flex: 1;
}
.border-top:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  border-top: 1px solid #e0e0e0;
}
.border-right:before {
  content: '';
  position: absolute;
  width: 1px;
  height: 2.75rem;
  left: 50%;
  border-right: 1px solid #e0e0e0;
}
</style>