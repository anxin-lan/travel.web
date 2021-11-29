<template>
  <div class="list">
    <div class="list-title">
      A
    </div>
    <ul class="list-msg">
      <li class="list-item">
        阿坝藏族羌族自治州
      </li>
      <li class="list-item">
        阿克苏地区
      </li>
      <li class="list-item">
        阿拉尔
      </li>
      <li class="list-item">
        阿拉善盟
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl';

.list-title {
  font-size: 0.875rem;
  padding: 0.625rem 0.9375rem;
}

.list-msg {
  position: relative;
  background: #fff;
  font-size: 0.875rem;
  overflow: hidden;
}

.list-msg:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 25%;
  left: 25%;
  border-left: 0.0625rem solid #ddd;
  border-right: 0.0625rem solid #ddd;
}

.list-msg:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 25%;
  left: 75%;
  border-left: 0.0625rem solid #ddd;
}

.list-item {
  width: 25%;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  float: left;
  border-bottom: 0.0625rem solid #ddd;
  textOverflow();
}
</style>