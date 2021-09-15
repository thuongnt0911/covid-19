const USER_BASE_PATH = 'user'
const apiPaths = {
  login: `${USER_BASE_PATH}/login/`,
}

export default ($axios) => ({
  login(data) {
    return $axios({
      url: apiPaths.login,
      method: 'post',
      data,
    })
  },
})
