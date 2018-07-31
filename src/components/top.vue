<template>
	<div class="wel_come_top">
		<div class="wel_come_left">
			<img style="height:100%;" src="static/stageData/yxxt_bglogin.png">
		</div>
		<div class="wel_come_center">
			<p>迎新统计大数据平台</p>
		</div>
		<div class="wel_come_right">
			<div class="come_right_one">
				<img src="static/stageData/yxxt_sz.png">
				<img src="static/stageData/yxxt_hf.png">
				<img src="static/stageData/yxxt_all_set.png">
			</div>
			<div class="come_right_two">
				<div class="come_data_two">
					<p>星期一</p>
					<label>2000.1.1</label>
				</div>
				<div class="come_data_one">
					<p>00:00:00</p>
				</div>
			</div>
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
.wel_come_top
	width: 100%
	height: 7%
	color: #dedede
	.wel_come_left
		margin-left: 42px
		margin-top: 0.5%
		height: calc(68% - 0.5%)
		width: 29%
		float:left
		text-align: left
	.wel_come_center
		width: calc(100% - 58% - 90px)
		float: left
		height: calc(68% - 0.5%)
		margin-top: 0.5%
		>p
			margin: 0px
			text-align: center
			font-size: 1.5em
	.wel_come_right
		margin-right: 42px
		margin-top: 0.5%
		height: calc(68% - 0.5%)
		width: 29%
		float: right
		.come_right_one
			display: inline-block
			height: 60%
			float: right
			margin-top: 1%
			width: 30%
			>img
				height: 100%
				float: right
				margin-left: 10%
				cursor: pointer
		.come_right_two
			float: right
			color: rgba(247,252,255,0.29)
			.come_data_two
				float: right
				font-size: 14px
				margin-right: 30px
				color: #6e747d
				.come_data_two p:nth-child(1)
					margin: 0px
					float: right
				.come_data_two p:nth-child(2)
					margin: 0px
			.come_data_one
				float: right
				font-size: 28px
				margin-right: 14px
				>p
					margin: 0px
</style>
