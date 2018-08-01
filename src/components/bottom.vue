<template>
	<div class="bottom">
    <img src="static/stageData/bt.png">
    <Row>
      <Col span="7">
        <div class="cl-title">
          <img src="static/stageData/xs.png">
          学生统计
        </div>
      </Col>
    </Row>
    <div id="demo">
      <div id="indemo">
        <div id="demo1">
          <a href="#"><img src="/jscss/demoimg/wall_s1.jpg" border="0" />1</a>
          <a href="#"><img src="/jscss/demoimg/wall_s2.jpg" border="0" />2</a>
          <a href="#"><img src="/jscss/demoimg/wall_s3.jpg" border="0" />3</a>
          <a href="#"><img src="/jscss/demoimg/wall_s4.jpg" border="0" />4</a>
          <a href="#"><img src="/jscss/demoimg/wall_s5.jpg" border="0" />5</a>
          <a href="#"><img src="/jscss/demoimg/wall_s6.jpg" border="0" />6</a>
        </div>
        <div id="demo2"></div>
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
  created () {
    this.$nextTick(() => {
      let speed = 100
      let tab = document.getElementById('demo')
      let tab1 = document.getElementById('demo1')
      let tab2 = document.getElementById('demo2')
      tab2.innerHTML = tab1.innerHTML
      function Marquee () {
        if (tab2.offsetWidth - tab.scrollLeft <= 0) {
          tab.scrollLeft -= tab1.offsetWidth
        } else {
          tab.scrollLeft++
        }
      }
      let MyMar = setInterval(Marquee, speed)
      tab.onmouseover = function () {
        clearInterval(MyMar)
      }
      tab.onmouseout = function () {
        MyMar = setInterval(Marquee, speed)
      }
    })
  },
  components: {
  }
}
</script>

<style scoped lang="stylus">
.bottom
  position: relative
  height: 1.72rem
  margin: 0 .35rem
  .cl-title
    font-size: .16rem
    color: white
    height: .25rem
    line-height: .25rem
    background: #0c5789
    text-align: left
    img
      width: .14rem
      margin-right: .24rem
      margin-left: .16rem
  >img
    position: absolute
    width: 100%
    top: -.15rem
    left: 50%
    height: 100%
    transform: translateX(-50%)
#demo
  position: absolute
  top: .5rem
  left: .6rem
  overflow:hidden
  width: calc(100% - 1.2rem)
  height: calc(100% - .75rem)
#demo img
  border: 3px solid #F2F2F2
#indemo
  float: left
  width: 800%
#demo1
  float: left
#demo2
  float: left
</style>
