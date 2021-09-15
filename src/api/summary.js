export default ($axios) => ({
  getSummaryInfo(data) {
    return $axios({
      url: 'summary',
      method: 'get',
      data,
    })
  },
})
