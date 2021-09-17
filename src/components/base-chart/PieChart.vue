<template>
  <div class="chart-container">
    <canvas ref="chart" width="400" height="200"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'

export default {
  props: {
    labelsData: {
      type: Array,
    },
    datasets: {
      type: Array,
    },
    backgroundColor: {
      type: Array,
    },
  },
  data() {
    return {}
  },

  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      var pieChart = this.$refs.chart.getContext('2d')
      new Chart(pieChart, {
        type: 'doughnut',
        data: {
          labels: this.labelsData,
          datasets: [
            {
              data: this.datasets,
              backgroundColor: this.backgroundColor,
            },
          ],
        },
        options: {
          segmentShowStroke: true,
          segmentStrokeColor: 'rgba(0,0,0,0)',
          segmentStrokeWidth: 1,
          percentageInnerCutout: 50,
          animationSteps: 30,
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
