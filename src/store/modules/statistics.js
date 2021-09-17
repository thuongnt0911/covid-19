import api from '@/api/index.js'

const statisticsData = {
  state: {
    worldDaysCase: {},
  },
  getters: {
    worldDaysCase: (state) => state.worldDaysCase,
  },
  mutations: {
    setWorldDaysCaseData(state, payload) {
      state.worldDaysCase = payload
    },
  },
  actions: {
    getWorldDaysCases({ commit }, { startDate, endDate }) {
      return new Promise((resolve, reject) => {
        api.statisticsData
          .getWorlDaysCases(startDate, endDate)
          .then((result) => {
            const data = result.data
            resolve(data)
          })
          .catch((err) => reject(err))
      })
    },
    getVietnamCaseLastDay({ commit }, lastDay) {
      return new Promise((resolve, reject) => {
        api.statisticsData
          .getVietnamLastDay(lastDay)
          .then((result) => {
            const data = result.data
            resolve(data)
          })
          .catch((e) => reject(e))
      })
    },
  },
}
export default statisticsData
