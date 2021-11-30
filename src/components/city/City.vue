<template>
  <div class="city">
    <city-header></city-header>

    <city-list :cities='cities' :hotCities='hotCities'></city-list>
  </div>
</template>

<script>
import CityHeader from '@/components/city/page/Header.vue'
import CityList from '@/components/city/page/List.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList
  },
  data() {
    return {
      hotCities: [],
      cities: {}
    }
  },
  mounted() {
    this.$http.get('/api/city.json').then(res => {
      let data = res.data.data
      this.hotCities = data.hotCities
      this.cities = data.cities
    })
  }
}
</script>
<style>
.city {
  background: #f5f5f5;
}
</style>