<template>
 <div class="zslbChart" ref="zslbChart"></div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      chart: '',
      option: {
      baseOption: {
        series: [{
          name: '',
          type: 'pie',
          radius: ['70%', '71%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: 'center',
              fontSize: 18,
              color: '#59c5fb',
              fontFamily: 'SFUIDisplay-ULtralight'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#1896d5'
            }
          },
          data: [
            {value: 12345, name: '84%'}
          ]
        },
        {
          type: 'pie',
          radius: '90%',
          center: ['50%', '50%'],
          color: ['rgb(8,197,251,0.3)', '#06203f'],
          avoidLabelOverlap: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 234,
            name: '',
            itemStyle: {
              normal: {
                opacity: 0.5
              }
            }
          },
          {
            value: 45,
            name: '',
            itemStyle: {
              normal: {
                opacity: 0.5
              }
            }
          }]
        }]
      }
    }
    }
  },
  methods: {
    reload () {
      this.chart.setOption(this.option,true)
    }
  },
  mounted () {
    this.chart = this.$echarts.init(this.$refs.zslbChart)
    this.chart.setOption(this.option)
  }
}
</script>

<style scoped lang="stylus">
.zslbChart
    position: absolute
    height: .8rem
    width: 100%
    top: 48%
    left: 50%
    transform: translate(-50%, -50%)
</style>
