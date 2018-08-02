// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import getpath from 'common/js/url'
import router from './router'
import iView from 'iview'
import echarts from 'echarts'
import 'babel-polyfill'
import 'common/stylus/index.styl'
import 'iview/dist/styles/iview.css'

getpath()
Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
