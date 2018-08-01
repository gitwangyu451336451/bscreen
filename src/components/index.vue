<template>
<div class="contents">
	<!-- <img src="static/stageData/yxxt_bgtp.png"> -->
	<top></top>
	<contain></contain>
	<bottom></bottom>
</div>
</template>

<script>
import { getCollege } from 'api/bscreen'
import top from './top'
import bottom from './bottom'
import contain from './contain'
export default {
  components: {top, bottom, contain},
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () {
    getCollege(1, 2, 3)
  },
  mounted () {}
}
</script>
<style lang='stylus' scoped>
.contents
	// position: fixed
	// font-size: 16px
	// top: 0
	// bottom: 0
	// width: 100%
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
