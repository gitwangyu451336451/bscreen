<template>
  <div class="contain_left">
    <div class="cl-title">
      <img src="static/stageData/bt_zstj.png">
      招生类别统计
    </div>
    <div class="cl-objs">
      <div class="cl-obj">
        <Row style="height: 100%;">
          <Col :span="14" style="height: 100%;">
            <zslbMes></zslbMes>
          </Col>
          <Col :span="10" style="height: 100%; position: relative">
            <zslbChart></zslbChart>
          </Col>
        </Row>
      </div>
      <div class="cl-obj">
        <Row style="height: 100%;">
          <Col :span="11" style="height: 100%;">
            <zslbMes></zslbMes>
          </Col>
          <Col :span="13" style="height: 100%; position: relative">
            <zslbChart></zslbChart>
          </Col>
        </Row>
      </div>
      <div class="cl-obj">
        <Row style="height: 100%;">
          <Col :span="10" style="height: 100%;">
            <zslbMes></zslbMes>
          </Col>
          <Col :span="14" style="height: 100%; position: relative">
            <zslbChart></zslbChart>
          </Col>
        </Row>
      </div>
      <div class="cl-obj">
        <Row style="height: 100%;">
          <Col :span="13" style="height: 100%;">
            <zslbMes></zslbMes>
          </Col>
          <Col :span="11" style="height: 100%; position: relative">
            <zslbChart></zslbChart>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import zslbMes from './utils/zslbMes'
import zslbChart from './utils/zslbChart'
export default {
  components: {zslbMes, zslbChart},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang='stylus' scoped>
.contain_left
  height: 100%
  .cl-title
    font-size: .16rem
    color: white
    height: .25rem
    line-height: .25rem
    background: url('/bscreen/static/stageData/leftone.png') no-repeat
    text-align: left
    img
      width: .14rem
      margin-left: .24rem
      margin-right: .16rem
  .cl-objs
    height: calc(100% - .25rem)
    > div
      height: calc(25% - .1rem)
      margin-top: 0.1rem
    > div:first-child
      background: url('/bscreen/static/stageData/l1.png') no-repeat
      background-size: 100% 100%
    > div:nth-child(2)
      background: url('/bscreen/static/stageData/l2.png') no-repeat
      background-size: 91% 100%
    > div:nth-child(3)
      background: url('/bscreen/static/stageData/l3.png') no-repeat
      background-size: 85% 100%
    > div:nth-child(4)
      background: url('/bscreen/static/stageData/l4.png') no-repeat
      background-size: 92% 100%
</style>
