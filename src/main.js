// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import getpath from 'common/js/url'
import router from './router'
import store from './vuex/store'
import iView from 'iview'
import echarts from 'echarts'
import 'babel-polyfill'
import 'common/stylus/index.styl'
import 'iview/dist/styles/iview.css'

setTimeout(() => {
  getpath()
}, 3000)
Vue.use(iView)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
