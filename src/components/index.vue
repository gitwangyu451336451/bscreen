<template>
<div class="contents">
	<img src="static/stageData/yxxt_bgtp.png">
	<top></top>
	<!-- <div class="wel_comes_two">
		<div class="wel_conter_left">
			<div class="wel_left_one">
				<p>招生类别统计</p>
			</div>
			<div class="wel_left_two">
				<div class="left_two_s1">
					<p style="height: 6%;"></p>
				</div>
				<div class="wel_PD_width"></div>
				<div id="enroll_bks" class="left_two_s2"></div>
			</div>
			<div class="wel_left_there">
				<div class="left_two_s1">
					<p style="height: 6%;"></p>
				</div>
				<div class="wel_PD_width"></div>
				<div id="enroll_kaist" class="left_two_s2">
				</div>
			</div>
			<div class="wel_left_four">
				<div class="left_two_s1">
					<p style="height: 6%;"></p>
				</div>
				<div class="wel_PD_width"></div>
				<div id="enroll_yjs" class="left_two_s2"  style="margin-left: -3.5%;">
				</div>
			</div>
			<div class="wel_left_five">
				<div class="left_two_s1">
					<p style="height: 6%;"></p>
				</div>
				<div class="wel_PD_width"></div>
				<div id="enroll_zsb" class="left_two_s2">
				</div>
			</div>
		</div>
		<div class="wel_centre">
			<div class="wel_top_las"></div>
			<div class="wel_top_pist">
				<div class="top_pist_left_s1">
					<p>0%</p>
				</div>
				<div class="top_pist_left_s2">
					<p>报到率</p>
				</div>
				<div class="top_pist_left_s3">
					<p><label>0</label><span>报到人数</span><label>0</label><span>录取人数</span></p>
				</div>
			</div>
			<div class="wel_bottom_pist">
				<div style="height: 19%;"></div>
				<div class="top_pist_right_z1">
					<p>0%</p>
				</div>
				<div class="top_pist_right_z2">
					<p>录取率</p>
				</div>
				<div class="top_pist_right_z3">
					<p><label>0</label><span>录取人数</span><label>0</label><span>计划人数</span></p>
				</div>
			</div>
			<div id="enroll_province" class="wel_all_tom">
			</div>
			<div class="wel_all_base">
				<div class="all_base_one">
						<p>76%</p>
						<p>
							<b style="width: 100%;float: right;height: 18%;"></b>
							<label>男女比例</label>
							<span>24%</span>
						</p>
					</div>
			</div>
		</div>
		<div class="wel_conter_right">
			<div class="wel_right_one">
				<p></p>
				<p>学院统计</p>
			</div>
			<div id="enroll_college" class="wel_right_two">
			</div>
		</div>
	</div>
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
	</div> -->
	<bottom></bottom>
</div>
</template>

<script>
import { getCollege } from 'api/bscreen'
import top from './top'
import bottom from './bottom'
export default {
  components: { top, bottom },
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
	position: fixed
	font-size: 16px
	top: 0
	bottom: 0
	width: 100%
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
