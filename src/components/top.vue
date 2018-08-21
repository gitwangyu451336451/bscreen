<template>
	<div class="wel_come_top">
		<Row style="height: 100%;">
			<Col span="8" class="header-logo">
				<img src="/static/stageData/yxxt_bglogin.png">
			</Col>
			<Col span="8" class="header-title">
				<!-- <p class="liuhhai">迎新统计大数据平台</p> -->
			</Col>
			<Col span="8" style="height: 100%;" class="header-date">
				<div class="come_right_two">
					<div class="come_data_one">
						<p>{{times.time}}</p>
					</div>
				</div>
				<div class="come_data_two" style="color: #6e747d">
					<p>{{times.week}}</p>
					<label>{{times.date}}</label>
				</div>
				<div class="come_right_one">
					<img src="/static/stageData/yxxt_all_set.png">
					<img src="/static/stageData/yxxt_hf.png">
					<img src="/static/stageData/yxxt_sz.png">
				</div>
			</Col>
		</Row>
		<div class="bg-liu"></div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      times: {}
    }
  },
  methods: {
    // 获取日期和时间
    getTimes () {
      let week = '星期' + '日一二三四五六'.charAt(new Date().getDay())
      let myDate = new Date()
      let date = myDate.getFullYear() + '.' + (myDate.getMonth() + 1) + '.' + myDate.getDate()
      let time = myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds()
      this.times = {
        week,
        date,
        time
      }
    }
  },
  created () {
    this.getTimes()
    setInterval(() => {
      this.getTimes()
    }, 1000)
  }
}
</script>

<style scoped lang="stylus">
.wel_come_top
	width: 100%
	height: .45rem
	color: #dedede
	background: linear-gradient(#011126 40%, #011126, #07345D)
	position relative
	.header-logo ,.header-title
		height: 100%
		> img
			position: absolute
			top: 50%
			left: .42rem
			transform: translateY(-50%)
		> p
			position: absolute
			font-size: 24px
			top: 50%
			left: 50%
			transform: translate(-50%, -50%)
			width: 100%
			white-space: normal
	.header-date
		display: flex
		align-items: center
		text-align: left
		> div
			flex: 1
			width: 50%
			> div
				display: inline-block
		> div:first-child
			font-size: 28px
			flex: 3
			color: rgba(247,252,255,0.29)
			text-align: right
			.come_data_one
				margin-right: .3rem
		> div:last-child
			flex: 2
			padding-right: .42rem
			img
				width: .24rem
				margin-right: .15rem
	.bg-liu
		background url('/static/stageData/liuhai.png') no-repeat
		position absolute
		height 100%
		width 100%
		top 0
</style>
