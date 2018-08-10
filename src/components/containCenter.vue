<template>
  <div class='contain-left' >
    <div class="top-wrapper">
      <div class="register">
        <div class="register-num">{{maps.register.num}}</div>
        <div class="register-text">报到率</div>
        <div class="register-bottom">
          <p>
            <label class="register-nums">{{maps.register.registernum}}</label>
            <span class="register-personal space">报到人数</span>
            <label class="register-nums">{{maps.register.enroll}}</label>
            <span class="register-personal">录取人数</span>
          </p>
        </div>
      </div>
      <div class="enroll">
        <div class="enroll-num">{{maps.enroll.num}}</div>
        <div class="enroll-text">录取率</div>
        <div class="enroll-bottom">
          <p>
            <label class="enroll-nums">{{maps.enroll.enrollnum}}</label>
            <span class="enroll-personal space">录取人数</span>
            <label class="enroll-nums">{{maps.enroll.plan}}</label>
            <span class="enroll-personal">计划人数</span>
          </p>
        </div>
      </div>
    </div>
    <div id='map'></div>
    <div class="man-fem">
      <p class="man-title">男女比例</p>
      <div class="man-content">
        <div class="man">{{maps.man}}</div>
        <div class="fem">{{maps.fem}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from './map.js'
import { mapGetters } from 'vuex'
require('echarts/lib/chart/map')
require('echarts/map/js/china')
let maxSize4Pin = 100
let minSize4Pin = 20
let max = 480
let min = 9
export default {
  data () {
    // 配置数据
    return {
      mapName: 'china',
      geoCoordMap: {},
      name_fontFamily: '等线',
      nameColor: 'rgb(255, 255, 255)'
    }
  },
  methods: {
    convertData (data) {
      let res = []
      for (let i = 0; i < data.length; i++) {
        let geoCoord = this.geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    },
    // 实例化地图数据
    initChart () {
      let myChart = this.$echarts.init(document.getElementById('map'))
      // 开启加载中
      myChart.showLoading()
      // 获取地图数据
      let mapFeatures = this.$echarts.getMap(this.mapName).geoJson.features
      myChart.hideLoading()
      mapFeatures.forEach(v => {
        // 地区名称
        var name = v.properties.name
        // 地区经纬度
        this.geoCoordMap[name] = v.properties.cp
      })
      myChart.setOption(this.option)
    }
  },
  mounted () {
    setTimeout(() => {
      this.initChart()
    }, 1000)
  },
  computed: {
    // 地图配置项
    option () {
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            let res = ''
            if (typeof(params.value) === 'number') {
              res = `${params.name}:<br>
                报到人数: ${params.value}
              `
            } else {
              res = `${params.name}:<br>
                报到人数: ${params.value[2]}
              `
            }
            return res
          }
        },
        visualMap: {
          show: true,
          min: 0,
          max: 200,
          left: '40',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            color: ['#04275d', '#f5b500', '#234c84', '#0d4295'] // 蓝绿
          }
        },
        geo: {
          show: true,
          map: this.mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#3B5077'
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          }
        },
        series: [
          {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: this.convertData(this.maps.maps),
            // 散点的大小
            symbolSize: function (val) {
              return val[2] / 10
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#05C3F9'
              }
            }
          },
          {
            type: 'map',
            map: this.mapName,
            geoIndex: 0,
            aspectScale: 0.75, // 长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#fff'
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#031525',
                borderColor: '#3B5077'
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            },
            animation: false,
            data: data
          },
          {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', // 气泡
            symbolSize: function (val) {
              var a = (maxSize4Pin - minSize4Pin) / (max - min)
              var b = minSize4Pin - a * min
              b = maxSize4Pin - a * max
              return a * val[2] + b
            },
            label: {
              normal: {
                show: true,
                formatter: '{@[2]}',
                textStyle: {
                  color: '#fff',
                  fontSize: 9
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#F62157' // 标志颜色
              }
            },
            zlevel: 6,
            data: this.convertData(this.maps.maps)
          }
        ]
      }
      return option
    },
    ...mapGetters(['maps'])
  }
}
</script>
<style lang='stylus' scoped>
.contain-left
  position relative
  width 100%
  height 110%
  #map
    height 80%
    background: url('/bscreen/static/stageData/map.png') no-repeat
    background-size contain
  .top-wrapper
    height 16%
    position relative
    .register
      left 0.45rem
      top 0.06rem
      width 370px
      height 100%
      text-align center
      position absolute
      background: url('/bscreen/static/stageData/map-left.png') no-repeat
      background-size 100% 100%
      background-color #041636
      z-index 1
      .register-num
        color #ffffff
        font-weight bold
        font-size 38px
        position relative
        top -30px
      .register-text
        color #19ccff
        font-size 28px
        position relative
        top -30px
      .register-personal
        color #327dea
        font-size 18px
      .register-nums
        font-size 30px
        color #ffffff
      .register-bottom
        position relative
        top -30px
      .space
        margin-right 9px
    .enroll
      position absolute
      right 23px
      background: url('/bscreen/static/stageData/map-right.png') no-repeat
      background-size 100% 100%
      height 80%
      padding 0 15px
      bottom 0
      .enroll-num
        color #ffffff
        font-weight bold
        font-size 30px
        position relative
        top -19px
      .enroll-text
        color #19ccff
        font-size 22px
        top -19px
        position relative
      .enroll-personal
        color #327dea
        font-size 15px
      .enroll-nums
        font-size 19px
        color #ffffff
      .enroll-bottom
        position relative
        top -19px
      .space
        margin-right 9px
  .man-fem
    position absolute
    right 38px
    bottom 7%
    width 200px
    .man-title
      text-align right
      color rgba(27,181,255,0.95)
      font-size 15px
    .man-content
      background url('/bscreen/static/stageData/man-fem.png') no-repeat
      height 77px
      &>div
        color #fff
        position absolute
        width 50%
        height 50%
      .fem
        top 60px
        line-height 30px
        left 30px
      .man
        bottom 0px
        right 0
</style>
