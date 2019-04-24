import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import store from './store'
import i18n from './i18n'
import ECharts from 'vue-echarts'

import util from './fn/util'
import project from './fn/project'

import date from './filter/date'
import number from './filter/number'
import phone from './filter/phone'

import './assets/css/global.css'

Vue.use(Element)
Vue.component('v-chart', ECharts)
Vue.use(util)
Vue.use(project)
Vue.filter('date', date)
Vue.filter('number', number)
Vue.filter('phone', phone)
Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
