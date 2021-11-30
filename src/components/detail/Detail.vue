<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div style="height:2000px"></div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/page/Banner.vue'
import DetailHeader from '@/components/detail/page/Header.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style>
</style>