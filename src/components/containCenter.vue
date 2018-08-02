<template>
  <div class="contain-left" id="map" ref="map"></div>
</template>

<script>
require('echarts/lib/chart/map')
require('echarts/map/js/china')
export default {
  components: {},
  props: {},
  data () {
  // 配置数据
    return {
      mapName: 'china',
      geoCoordMap: {},
      name_fontSize: 18,
      subname_fontSize: 15,
      name_fontFamily: '等线',
      nameColor: 'rgb(55, 75, 113)',
      subname: '数据爬取自千栀网\n，\n上海、浙江无文理科录取人数',
      name_title: '中国人民大学2017年各省市计划录取人数'
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {
    // console.log(this.$echarts)
    // this.$echarts.sho
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
    console.log(this.geoCoordMap)
  },
  mounted () {}
}
</script>
<style lang='stylus' scoped>
.contain-left
  position: relative
  width 100%
  height: 100%
  >img
    position: absolute
    top: 50%
    left: 50%
    height: 90%
    width: 100%
    transform: translate(-50%, -50%)
</style>
