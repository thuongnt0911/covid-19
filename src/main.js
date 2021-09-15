import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '@/api'
import router from './router'
import '@/assets/styles/index.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import moment from 'moment'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$api = api

Vue.use(Element)
Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  el: '#app',
  render: (h) => h(App),
})
