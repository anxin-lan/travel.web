<template>
  <div class="city">
    <city-header></city-header>
    <city-hot></city-hot>
    <city-sort></city-sort>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from '@/components/city/page/Header.vue'
import CityHot from '@/components/city/page/Hot.vue'
import CitySort from '@/components/city/page/Sort.vue'
import CityList from '@/components/city/page/List.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityHot,
    CitySort,
    CityList
  }
}
</script>
<style>
.city {
  background: #f5f5f5;
}
</style>