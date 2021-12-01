import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


let defaultCity = "上海"
defaultCity = localStorage.city
const state = {
  city: "西安"
}


const mutations = {
  changeCity(state, cityName) {
    state.city = cityName

    localStorage.city = cityName
  }
}
export default new Vuex.Store({
  state,
  mutations
})

