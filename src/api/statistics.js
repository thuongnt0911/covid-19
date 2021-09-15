export default ($axios) => ({
  getWorlDaysCases(data, startDate, endDate) {
    return $axios({
      url: `world?from=${startDate}&to=${endDate}`,
      method: 'get',
      data,
    })
  },
})
