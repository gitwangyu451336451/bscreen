<template>
<div class="contents">
	<top></top>
	<contain></contain>
	<bottom></bottom>
</div>
</template>

<script>
import top from './top'
import bottom from './bottom'
import contain from './contain'
import { ERR_OK } from 'api/config'
import { mapActions } from 'vuex'
import { bscrenn } from 'api/index' // 获取大屏所有数据接口
export default {
  components: {top, bottom, contain},
  methods: {
    ...mapActions([
      'setCollogeData',
      'setZslb',
      'setXstj',
      'setMaps'
    ]),
    // 获取初始化的数据
    _bscrenn () {
      bscrenn().then(res => {
        res = res.data
        if (res.state === ERR_OK) {
          // 设置右边栏
          this.setCollogeData(res.data.right)
          // 设置左边栏
          this.setZslb(res.data.left)
          // 设置底部
          this.setXstj(res.data.bottom)
          // 设置地图数据
          this.setMaps(res.data.map)
          this.$nextTick()
        }
      })
    }
  },
  created () {
    this._bscrenn()
    setInterval(() => {
      console.log('定时器')
      this._bscrenn()
    }, 300000)
  }
}
</script>
<style lang='stylus' scoped>
.contents
	height: 100%
	min-width: 1024px
	min-height: 645px
	overflow-y: auto
	background: url('/static/stageData/bg.png')
	>img
		position: absolute
		display: block
		width: 100%
		height: 100%
		left: 0
	>div
		position: relative
		box-sizing: border-box
</style>
