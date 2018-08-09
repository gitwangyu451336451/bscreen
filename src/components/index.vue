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
import * as api from 'api/bscreen'
import { ERR_OK } from 'api/config'
import { mapActions } from 'vuex'
export default {
  components: {top, bottom, contain},
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions([
      'setCollogeData',
      'setZslb',
      'setXstj'
    ]),
    init () {
      api.getCollege().then((res) => {
        if (res.status === ERR_OK) {
          this.setCollogeData(res.data)
        }
      })
      api.getZslb().then((res) => {
        if (res.status === ERR_OK) {
          this.setZslb(res.data)
        }
      })
      api.getXstj().then((res) => {
        if (res.status === ERR_OK) {
          this.setXstj(res.data)
        }
      })
    }
  },
  created () {
    this.init()
  },
  mounted () {}
}
</script>
<style lang='stylus' scoped>
.contents
	height: 100%
	min-width: 1024px
	min-height: 645px
	overflow-y: auto
	background: url('/bscreen/static/stageData/bg.png')
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
