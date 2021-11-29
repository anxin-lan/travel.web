<template>
  <div class="city">
    <city-header></city-header>
    <city-hot></city-hot>
    <city-sort></city-sort>
  </div>
</template>

<script>
import CityHeader from '@/components/city/page/Header.vue'
import CityHot from '@/components/city/page/Hot.vue'
import CitySort from '@/components/city/page/Sort.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityHot,
    CitySort
  }
}
</script>
<style>
.city {
  background: #f5f5f5;
}
</style>