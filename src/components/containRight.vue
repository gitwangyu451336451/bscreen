<template>
  <div class="contain_right">
    <div class="cl-title">
      学院统计
      <img src="static/stageData/xy.png">
    </div>
    <img src="static/stageData/r1.png">
    <div class="cl-progress">
      <v-progress :data="dataProgress"></v-progress>
    </div>
  </div>
</template>

<script>
import progress from './utils/progress'
export default {
  components: {'v-progress': progress},
  props: {},
  data () {
    return {
      dataProgress: [
        {'name': '信息工程学院'},
        {'name': '信息工程学院'},
        {'name': '信息工程学院'},
        {'name': '信息工程学院'},
        {'name': '信息工程学院'},
        {'name': '信息工程学院'},
        {'name': '信息工程学院'},
        {'name': '信息工程学院'}]
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
    background: url('/bscreen/static/stageData/rightone.png') no-repeat
    img
      width: .14rem
      margin-right: .24rem
      margin-left: .16rem
  >.cl-progress
    margin-top: .35rem
</style>
