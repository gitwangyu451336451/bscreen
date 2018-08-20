<template>
  <div class="contain_left" @mouseover.stop="mouseover" @mouseout.stop="mouseout">
    <div class="cl-title">
      <img src="/static/stageData/bt_zstj.png">
      招生类别统计
    </div>
    <!-- 第一页数据 -->
    <div class="cl-objs" v-if="first.length>0 && marker">
      <div class="cl-obj" v-for="(item, i) in bl" :key="i">
        <Row style="height: 100%;">
          <Col :span="item.s1" style="height: 100%;">
            <zslbMes :data="first[i]"></zslbMes>
          </Col>
          <Col :span="item.s2" style="height: 100%; position: relative">
            <zslbChart :data="first[i]"></zslbChart>
          </Col>
        </Row>
      </div>
    </div>
    <!-- 第二页数据 -->
    <div class="cl-objs" v-if="second.length>0 && !marker">
      <div class="cl-obj" v-for="(item, i) in second" :key="i">
        <Row style="height: 100%;">
          <Col :span="bl[i].s1" style="height: 100%;">
            <zslbMes :data="second[i]"></zslbMes>
          </Col>
          <Col :span="bl[i].s2" style="height: 100%; position: relative">
            <zslbChart :data="second[i]"></zslbChart>
          </Col>
        </Row>
      </div>
    </div>
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
      marker: true,
      timer: ''
    }
  },
  methods: {
    mouseover () {
      clearInterval(this.timer)
    },
    setTime () {
      this.timer = setInterval(() => {
        this.marker = !this.marker
      }, 10000)
    },
    mouseout () {
      this.setTime()
    }
  },
  computed: {
    // 第一屏数据
    first () {
      if (this.getZslb.length > 4) {
        return this.getZslb.slice(0, 4)
      } else {
        return this.getZslb
      }
    },
    // 第二屏数据
    second () {
      if (this.getZslb.length > 4) {
        return this.getZslb.slice(3, this.getZslb.length - 1)
      } else {
        return []
      }
    },
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
