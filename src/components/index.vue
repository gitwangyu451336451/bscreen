<template>
<div class="contents">
	<!-- <img src="static/stageData/bg.png"> -->
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
	height: 100%
	min-width: 1024px
	min-height: 645px
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
