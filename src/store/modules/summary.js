import api from '@/api/index.js'

const summaryCase = {
  state: {
    summaryInfo: {},
  },
  getters: {
    // summaryInfo: (state) => state.summaryInfo,
  },
  mutations: {
    setSummaryData(state, payload) {
      state.summaryInfo = payload
    },
  },
  actions: {
    getSummaryInfo({ commit }) {
      return new Promise((resolve, reject) => {
        api.summaryInfo
          .getSummaryInfo()
          .then((result) => {
            const data = result.data
            // commit('setSummaryData', data)
            resolve(data)
          })
          .catch((err) => reject(err))
      })
    },
  },
}

export default summaryCase
