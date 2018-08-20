<template>
  <div class="xslbChart"
       ref="xslbChart">

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['data'],
  data () {
    return {}
  },
  computed: {
    option () {
      let data = []
      this.data.forEach((r, i) => {
        let d = {
          value: r.rs,
          name: '',
          selected: false,
          itemStyle: {
            normal: {
              color: i === 0 ? '#09c4fb' : i === 1 ? '#1897d6' : 'red'
            }
          }
        }
        data.push(d)
      })
      let option = {
        baseOption: {
          series: [
            {
              name: '缴费情况',
              type: 'pie',
              radius: ['50%', '90%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  //	                      borderColor: '#06203f'
                  borderColor: '#06203f'
                }
              },
              data: data
            }
          ]
        }
      }
      return option
    }
  },
  mounted () {
    let chart = this.$echarts.init(this.$refs.xslbChart)
    chart.setOption(this.option)
  }
}
</script>

<style lang="stylus" scoped>
.xslbChart {
  height: 100%;
  width: 100%;
}
</style>

// <style scoped lang="stylus">
.xslbChart {
  height: 100%;
  width: 100%;
}
</style>
