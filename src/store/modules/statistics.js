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
    getWorldDaysCases({ startDate, endDate }) {
      return api.statisticsData.getWorlDaysCases(startDate, endDate)
    },
  },
}
export default statisticsData
