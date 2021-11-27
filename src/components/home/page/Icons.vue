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
  data() {
    return {
      iconsList: [
        {
          id: '01',
          iconsURL: require('@/assets/icons/icon01.png'),
          title: '找攻略'
        },
        {
          id: '01',
          iconsURL: require('@/assets/icons/icon02.png'),
          title: '看游记'
        },
        {
          id: '01',
          iconsURL: require('@/assets/icons/icon03.png'),
          title: '问达人'
        },
        {
          id: '01',
          iconsURL: require('@/assets/icons/icon04.png'),
          title: '头脑学园'
        },
        {
          id: '01',
          iconsURL: require('@/assets/icons/icon05.png'),
          title: '酒店'
        },
        {
          id: '01',
          iconsURL: require('@/assets/icons/icon06.png'),
          title: '去旅行'
        },
        {
          id: '01',
          iconsURL: require('@/assets/icons/icon07.png'),
          title: '机票'
        },
        {
          id: '01',
          iconsURL: require('@/assets/icons/icon08.png'),
          title: '当地玩乐'
        }
      ]
    }
  }
}
</script>

<style scoped>
.icons {
  width: 100%;
  height: 12.5rem;
  margin-top: 0.625rem;
  /* background-color: pink; */
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