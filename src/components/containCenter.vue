<template>
  <div class="contain-left" id="map"></div>
</template>

<script>
import { toolTipData, data } from "./map.js"
require("echarts/lib/chart/map")
require("echarts/map/js/china")
let maxSize4Pin = 100
let minSize4Pin = 20
let max = 480
let min = 9
export default {
  components: {},
  props: {},
  data() {
    // 配置数据
    return {
      mapName: "china",
      geoCoordMap: {},
      name_fontSize: 18,
      subname_fontSize: 15,
      name_fontFamily: "等线",
      nameColor: "rgb(55, 75, 113)",
      subname: "数据爬取自千栀网\n，\n上海、浙江无文理科录取人数",
      name_title: "中国人民大学2017年各省市计划录取人数"
    };
  },
  watch: {},
  computed: {},
  methods: {
    convertData(data) {
      let res = [];
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
    }
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("map"))
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
    let option = {
      title: {
        text: this.name_title,
        subtext: this.subname,
        x: "center",
        textStyle: {
          color: this.nameColor,
          fontFamily: this.name_fontFamily,
          fontSize: this.name_fontSize
        },
        subtextStyle: {
          fontSize: this.subname_fontSize,
          fontFamily: this.name_fontFamily
        }
      },
      tooltip: {
        trigger: "item",
        formatter: function(params) {
          if (typeof params.value[2] == "undefined") {
            var toolTiphtml = ""
            for (var i = 0; i < toolTipData.length; i++) {
              if (params.name == toolTipData[i].name) {
                toolTiphtml += toolTipData[i].name + ":<br>"
                for (var j = 0; j < toolTipData[i].value.length; j++) {
                  toolTiphtml +=
                    toolTipData[i].value[j].name +
                    ":" +
                    toolTipData[i].value[j].value +
                    "<br>"
                }
              }
            }
            console.log(toolTiphtml);
            // console.log(convertData(data))
            return toolTiphtml
          } else {
            var toolTiphtml = ""
            for (var i = 0; i < toolTipData.length; i++) {
              if (params.name == toolTipData[i].name) {
                toolTiphtml += toolTipData[i].name + ":<br>"
                for (var j = 0; j < toolTipData[i].value.length; j++) {
                  toolTiphtml +=
                    toolTipData[i].value[j].name +
                    ":" +
                    toolTipData[i].value[j].value +
                    "<br>"
                }
              }
            }
            console.log(toolTiphtml)
            // console.log(convertData(data))
            return toolTiphtml
          }
        }
      },
      visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: "left",
        top: "bottom",
        text: ["高", "低"], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
          color: ["#00467F", "#A5CC82"] // 蓝绿
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
            areaColor: "#031525",
            borderColor: "#3B5077"
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        }
      },
      series: [
        {
          name: "散点",
          type: "scatter",
          coordinateSystem: "geo",
          data: this.convertData(data),
          symbolSize: function(val) {
            return val[2] / 10;
          },
          label: {
            normal: {
              formatter: "{b}",
              position: "right",
              show: true
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: "#05C3F9"
            }
          }
        },
        {
          type: "map",
          map: this.mapName,
          geoIndex: 0,
          aspectScale: 0.75, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: false,
              textStyle: {
                color: "#fff"
              }
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#031525",
              borderColor: "#3B5077"
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          },
          animation: false,
          data: data
        },
        {
          name: "点",
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin", //气泡
          symbolSize: function(val) {
            var a =(maxSize4Pin - minSize4Pin) / (max - min)
            var b = minSize4Pin - a * min
            b = maxSize4Pin - a * max
            return a * val[2] + b
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 9
              }
            }
          },
          itemStyle: {
            normal: {
              color: "#F62157" //标志颜色
            }
          },
          zlevel: 6,
          data: this.convertData(data)
        },
        {
          name: "Top 5",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: this.convertData(
            data
              .sort(function(a, b) {
                return b.value - a.value;
              })
              .slice(0, 5)
          ),
          symbolSize: function(val) {
            return val[2] / 10;
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke"
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: "{b}",
              position: "right",
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: "yellow",
              shadowBlur: 10,
              shadowColor: "yellow"
            }
          },
          zlevel: 1
        }
      ]
    }
    myChart.setOption(option)
  },
  created() {}
}
</script>
<style lang='stylus' scoped>
.contain-left
  position: relative
  width: 100%
  height: 100%
</style>
