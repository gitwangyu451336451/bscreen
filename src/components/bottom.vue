<template>
	<div class="wel_comes_threr">
		<div class="wel_bom_one">
				<p>学生统计</p>
		</div>
		<div style="height:10%"></div>
		<div class="wel_comes_four">
			<a value="1"><img src="static/stageData/yxxt_zhd.png"></a>
			<div>
			<div class="comes_four_get" style="float: left;height: 100%;">
			</div>
			</div>
			<a value="1"><img src="static/stageData/yxxt_yhd.png"></a>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="stylus">
.wel_comes_threr
    height: 23.5%
    .wel_bom_one
        width: 100%
        height: 15%
        >p
            margin: 0px
            color: #fff
            float: left
            margin-left: 6%
            height: 100%
            font-size: 20px
            width: calc(100% - 6%)
            text-align: left
    .wel_comes_four
        height: 55%
        margin-left: 2.625em
        margin-right: 2.625em
        width:auto
        .wel_comes_four a img
            height: 100%
        .wel_comes_four>div
            margin: 0px
        .wel_comes_four>div>div>div:nth-child(1)
            float: left
            width: 21%
            height: 100%
        .wel_comes_four>div>div>div:nth-child(2)
            float: left
            width: 26.5%
            height: 100%
        .wel_comes_four>div>div>div:nth-child(3)
            float: left
            width: 28.3%
            height: 100%
        .wel_comes_four>div>div>div:nth-child(4)
            float: left
            width: 23.2%
            height: 100%
        .wel_comes_four>div
            float: left
            height: 100%
            width: calc(100% - 3% - 5.1em)
            overflow: hidden
        .wel_comes_four>div>div>div
            white-space: nowrap
            display:inline
        .wel_comes_four a:first-child
            float: left
            padding-left: 2.5em
            height: 100%
            cursor: pointer
            width: 1.5%
        .wel_comes_four a:last-child
            float: right
            padding-right: 2.5em
            height: 100%
            cursor: pointer
            width: 1.5%
</style>
