export default ($axios) => ({
  getWorlDaysCases(startDate, endDate) {
    return $axios({
      url: `world?from=${startDate}&to=${endDate}`,
      method: 'get',
    })
  },
  getVietnamLastDay(lastDay) {
    return $axios({
      url: `live/country/vietnam/status/confirmed/date/${lastDay}`,
      method: 'get',
    })
  },
})
