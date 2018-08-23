<template>
  <div class='zslbChart' ref='zslbChart' :id="ids"></div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    },
    ids: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  data () {
    return {
      chart: ''
    }
  },
  computed: {
    option () {
      let option = {
        baseOption: {
          series: [
            {
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
                {
                  value: 12345,
                  name: (100-this.data.zb).toFixed(2) + '%'
                }
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
              data: [
                {
                  value: this.data.sd,
                  name: '',
                  itemStyle: {
                    normal: {
                      opacity: 0.5
                    }
                  }
                },
                {
                  value: this.data.wd,
                  name: '',
                  itemStyle: {
                    normal: {
                      opacity: 0.5
                    }
                  }
                }
              ]
            }
          ]
        }
      }
      return option
    }
  },
  methods: {
    reload () {
      this.chart.setOption(this.option, true)
    }
  },
  mounted () {
    // this.chart = this.$echarts.init(this.$refs.zslbChart)
    // let myChart = this.$echarts.init(document.getElementById('map'))
    console.log(this.ids)
    if (!this.ids) {
      return
    }
    this.chart = this.$echarts.init(document.getElementById(this.ids))
    this.chart.setOption(this.option)
  }
}
</script>

<style scoped lang='stylus'>
.zslbChart {
  position: absolute
  height: 0.8rem
  width: 100%
  top: 48%
  left: 50%
  transform: translate(-50%, -50%)
}
</style>
