<template>
	<div class="bottom">
    <div id="demo">
      <div id="indemo">
        <div id="demo1">
          <a href="#"><img src="/jscss/demoimg/wall_s1.jpg" border="0" /></a>
          <a href="#"><img src="/jscss/demoimg/wall_s2.jpg" border="0" /></a>
          <a href="#"><img src="/jscss/demoimg/wall_s3.jpg" border="0" /></a>
          <a href="#"><img src="/jscss/demoimg/wall_s4.jpg" border="0" /></a>
          <a href="#"><img src="/jscss/demoimg/wall_s5.jpg" border="0" /></a>
          <a href="#"><img src="/jscss/demoimg/wall_s6.jpg" border="0" /></a>
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
  height: 2.55rem
#demo
  background: #FFF
  overflow:hidden
  border: 1px dashed #CCC
  width: 200px
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
