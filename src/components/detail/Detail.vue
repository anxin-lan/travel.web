<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-container></detail-container>
    <detail-recommend></detail-recommend>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/page/Banner.vue'
import DetailHeader from '@/components/detail/page/Header.vue'
import DetailContainer from '@/components/detail/page/Container.vue'
import DetailRecommend from '@/components/detail/page/Recommend.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailContainer,
    DetailRecommend
  },
  activated() {
    document.documentElement.scrollTop = 0
  }
}
</script>

<style scoped>
.detail {
  overflow: hidden;
  height: 1600px;
  /* overflow-y: auto; */
}
</style>