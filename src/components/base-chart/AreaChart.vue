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
  },
  data() {
    return {
      data: {
        labels: this.labelsData,
        datasets: this.datasets,
      },
    }
  },

  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      var areaChart = this.$refs.chart.getContext('2d')
      new Chart(areaChart, {
        type: 'line',
        data: {
          labels: this.labelsData,
          datasets: [
            {
              label: 'Total Confirmed In The Word',
              data: this.datasets,
              fill: true,
              borderColor: '#7C83FD',
              borderWidth: 2,
              pointBorderWidth: 4,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 1,
              pointRadius: 2,
              backgroundColor: 'rgba(150, 186, 255, 0.4)',
            },
          ],
        },
        options: {
          legend: {
            position: 'bottom',
          },
          animation: {
            duration: 750,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: 'rgba(0,0,0,0.5)',
                  fontStyle: 'bold',
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  padding: 20,
                },
                gridLines: {
                  drawTicks: false,
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  zeroLineColor: 'transparent',
                },
                ticks: {
                  padding: 20,
                  fontColor: 'rgba(0,0,0,0.5)',
                  fontStyle: 'bold',
                },
              },
            ],
          },
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
