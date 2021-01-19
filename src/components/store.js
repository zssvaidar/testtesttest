import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 4,
  cold: false,
  initcolpush: true,
  height:'100px',
  newcoltitle: 'none',
  newnotepush:false,
}


export default new Vuex.Store({
  state,
})
