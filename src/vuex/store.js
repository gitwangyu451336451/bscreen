import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
  collogeData: [],
  zslb: [],
  xstj: []
}

// 定义所需的 mutations
const mutations = {
  set_collogeData (val, stus) {
    state.collogeData = stus
  },
  set_zslb (val, stus) {
    state.zslb = stus
  },
  set_xstj (val, stus) {
    state.xstj = stus
  }
}

// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
