<template>
  <div class="icons">
    <ul>
      <li v-for="item in iconsList" :key="item.index">
        <img :src="item.iconsURL" alt="">
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['iconsList'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.icons {
  width: 100%;
  height: 12.5rem;
  margin-top: 0.625rem;
}
.icons ul {
  display: flex;
  flex-wrap: wrap;
}
.icons ul li {
  width: 25%;
  text-align: center;
}
.icons ul li p {
  background-image: linear-gradient(135deg, red, blue);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.icons ul li img {
  width: 3.125rem;
  flex: 1;
}
</style>