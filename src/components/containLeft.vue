<template>
  <div class="contain_left" @mouseover.stop="mouseover" @mouseout.stop="mouseout">
    <div class="cl-title">
      <img src="/static/stageData/bt_zstj.png">
      招生类别统计
    </div>
    <!-- 第一页数据 -->
    <div class="cl-objs" v-show="first.length>0">
      <div class="cl-obj" v-for="(item, i) in bl" :key="dom1[i]">
        <Row style="height: 100%;">
          <Col :span="item.s1" style="height: 100%;" v-if="first[i]">
            <zslbMes :data="first[i]"></zslbMes>
          </Col>
          <Col :span="item.s2" style="height: 100%; position: relative;" v-if="first[i]">
            <zslbChart :data="first[i]" :ids="dom1[i]" ref="zslbChart"></zslbChart>
          </Col>
        </Row>
      </div>
    </div>
    <!-- 第二页数据 -->
    <!-- <div class="cl-objs" v-show="second.length>0 && !marker">
      <div class="cl-obj" v-for="(item, i) in bl" :key="dom1[i]">
        <Row style="height: 100%;">
          <Col :span="item.s1" style="height: 100%;" v-if="second[i]">
            <zslbMes :data="second[i]"></zslbMes>
          </Col>
          <Col :span="item.s2" style="height: 100%; position: relative; background:pink" v-if="second[i]">
            <zslbChart :data="second[i]" :ids="dom2[i]"  ref="zslbChart"></zslbChart>
          </Col>
        </Row>
      </div>
    </div> -->
  </div>
</template>

<script>
import zslbMes from './utils/zslbMes'
import zslbChart from './utils/zslbChart'
import { mapGetters } from 'vuex'
export default {
  components: {zslbMes, zslbChart},
  props: {},
  data () {
    return {
      bl: [{s1: 14, s2: 10},
        {s1: 11, s2: 13},
        {s1: 10, s2: 14},
        {s1: 13, s2: 11}],
      marker: true, // 第一屏
      timer: '',
      dom1: ['item1', 'item2', 'item3', 'item4'],
      first: []
    }
  },
  methods: {
    mouseover () {
      clearInterval(this.timer)
    },
    setTime () {
      this.timer = setInterval(() => {
        // 数据多才会发生切换
        if (this.getZslb.length > 4) {
          this.marker = !this.marker
          if (this.marker) {
            this.first = this.getZslb.slice(0, 4)
          } else {
            this.first = this.getZslb.slice(4, this.getZslb.length)
          }
        } else {
          this.first = this.getZslb.slice(0, 4)
        }
        this.$nextTick(() => {
          this.$refs.zslbChart.forEach(item => {
            item.chart.setOption(item.option)
          })
        })
      }, 10000)
    },
    mouseout () {
      this.setTime()
    }
  },
  watch: {
    // 数据发生变化后清除定时器
    getZslb (val) {
      clearInterval(this.timer)
      this.first = this.getZslb.slice(0, 4)
      this.$nextTick(() => {
        this.$refs.zslbChart.forEach(item => {
          item.chart.setOption(item.option)
        })
      })
      this.setTime()
    }
  },
  computed: {
    ...mapGetters(['getZslb'])
  },
  created () {
    this.setTime()
  }
}
</script>
<style lang='stylus' scoped>
.contain_left
  height: 100%
  overflow hidden
  position relative
  .cl-title
    font-size: .16rem
    color: white
    height: .25rem
    line-height: .25rem
    background: url('/static/stageData/leftone.png') no-repeat
    text-align: left
    img
      width: .14rem
      margin-left: .24rem
      margin-right: .16rem
  .cl-objs
    height: calc(100% - .25rem)
    width 100%
    position absolute
    > div
      height: calc(25% - .1rem)
      margin-top: 0.1rem
    > div:first-child
      background: url('/static/stageData/l1.png') no-repeat
      background-size: 100% 100%
    > div:nth-child(2)
      background: url('/static/stageData/l2.png') no-repeat
      background-size: 91% 100%
    > div:nth-child(3)
      background: url('/static/stageData/l3.png') no-repeat
      background-size: 85% 100%
    > div:nth-child(4)
      background: url('/static/stageData/l4.png') no-repeat
      background-size: 92% 100%
</style>
