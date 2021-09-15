import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1)
}
const files = require.context('@/store/modules', true, /^.*\.js$/)

const modules = {}

files.keys().forEach((item) => {
  const fileName = item.replace(/^.*[\\\\/]/, '').split('.')[0]
  const key = fileName
    .split('-')
    .map((k, index) => {
      if (index !== 0) {
        k = capitalize(k)
      }
      return k
    })
    .join('')
  modules[key] = require(`@/store/modules/${fileName}`).default
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
})
