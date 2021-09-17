<template>
  <div class="dashboard">
    <h3 class="title-head">Analytics Dashboard</h3>
    <p class="update-text">
      Last Updated: {{ moment(summayData.Date).format('YYYY / MM / DD') }}
    </p>
    <div class="dashboard__content">
      <div class="content-item">
        <div class="left">
          <div class="analytics">
            <p class="icon icon-yellow"><i class="el-icon-warning"></i></p>
            <p class="title-txt">New Confirmed</p>
            <p class="number text-yellow">{{ summayData.NewConfirmed }}</p>
          </div>
          <div class="analytics">
            <p class="icon icon-yellow"><i class="el-icon-warning"></i></p>
            <p class="title-txt">Total Confirmed</p>
            <p class="number text-yellow">{{ summayData.TotalConfirmed }}</p>
          </div>
          <div class="analytics">
            <p class="icon icon-green"><i class="el-icon-success"></i></p>
            <p class="title-txt">NewRecovered</p>
            <p class="number text-green">{{ summayData.NewRecovered }}</p>
          </div>
          <div class="analytics">
            <p class="icon icon-green"><i class="el-icon-success"></i></p>
            <p class="title-txt">TotalRecovered</p>
            <p class="number text-green">{{ summayData.TotalRecovered }}</p>
          </div>
          <div class="analytics">
            <p class="icon icon-red"><i class="el-icon-remove"></i></p>
            <p class="title-txt">New Deaths</p>
            <p class="number text-red">{{ summayData.NewDeaths }}</p>
          </div>
          <div class="analytics">
            <p class="icon icon-red"><i class="el-icon-remove"></i></p>
            <p class="title-txt">Total Deaths</p>
            <p class="number text-red">{{ summayData.TotalDeaths }}</p>
          </div>
        </div>
        <div class="right">
          <div class="chart">
            <AreaChart
              :labelsData="dataChartWorld.labels"
              :datasets="dataChartWorld.datasets"
              ref="test"
            />
          </div>
        </div>
      </div>
      <div class="content-item align-stretch">
        <div class="map">
          <h3 class="title-head">Real Time</h3>
          <MapChart
            class="map-content"
            :countryData="{
              US: 4,
              CA: 7,
              GB: 8,
              IE: 14,
              ES: 1,
              CN: 20,
            }"
            highColor="#ff0000"
            lowColor="#aaaaaa"
            countryStrokeColor="#909090"
            defaultCountryFillColor="#dadada"
          />
        </div>
        <div class="chart">
          <h3 class="title-head">Covid in Viet Nam</h3>
          <PieChart
            class="chart-content"
            :labelsData="dataChartVietNam.labels"
            :datasets="dataChartVietNam.datasets"
            :backgroundColor="dataChartVietNam.backgroundColor"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AreaChart from '@/components/base-chart/AreaChart.vue'
import PieChart from '@/components/base-chart/PieChart.vue'
import MapChart from 'vue-map-chart'
import _ from 'lodash'
import moment from 'moment'

export default {
  components: {
    AreaChart,
    MapChart,
    PieChart,
  },
  data() {
    return {
      summayData: [],
      dataChartWorld: {
        labels: [],
        datasets: [],
      },
      dataChartVietNam: {
        labels: [],
        datasets: [],
        backgroundColor: [],
      },
    }
  },
  computed: {
    moment() {
      return moment
    },
  },
  mounted() {
    this.getDataWorldOnChart()
    this.getDataVietNamLastDay()
  },
  created() {
    this.$store.dispatch('getSummaryInfo').then((data) => {
      this.summayData = _.cloneDeep(data.Global)
    })
  },
  methods: {
    getDaysRange(days) {
      var d = new Date()

      var day = new Date(d.getTime() - days * 24 * 60 * 60 * 1000)

      var toDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() - 1}`

      var fromDate = `${day.getFullYear()}-${
        day.getMonth() + 1
      }-${day.getDate()}`

      return {
        startDate: fromDate,
        endDate: toDate,
      }
    },
    getDataWorldOnChart() {
      const date = this.getDaysRange(7)
      this.$store.dispatch('getWorldDaysCases', date).then((data) => {
        data.forEach((element) => {
          const label = moment(element.Date).format('MM/DD')
          this.dataChartWorld.labels.push(label)
          this.dataChartWorld.datasets.push(element.TotalConfirmed)
        })
      })
    },
    getDataVietNamLastDay() {
      const date = this.getDaysRange(7)
      this.$store
        .dispatch('getVietnamCaseLastDay', date.endDate)
        .then((data) => {
          console.log(data)
        })
    },
  },
}
</script>
<style lang="scss">
@import './index.scss';
</style>
