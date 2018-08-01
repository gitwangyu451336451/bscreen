<template>
  <div class="contain_right">
    <div class="cl-title">
      学院统计
      <img src="static/stageData/xy.png">
    </div>
    <img src="static/stageData/r1.png">
  </div>
</template>

<script>
export default {
  components: {},
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
.contain_right
  position: relative
  height: 100%
  >img
    position: absolute
    right: 0
    top: .35rem
    width: 100%
    height: 100%
  >.cl-title
    font-size: .16rem
    color: white
    height: .25rem
    line-height: .25rem
    background: #0c5789
    text-align: right
    img
      width: .14rem
      margin-right: .24rem
      margin-left: .16rem
</style>
