import axios from 'axios'
import auth from './auth.js'
import summaryInfo from './summary.js'
import statisticsData from './statistics.js'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
})

export default {
  auth: auth(service),
  summaryInfo: summaryInfo(service),
  statisticsData: statisticsData(service),
}
