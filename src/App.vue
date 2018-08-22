<template>
  <div id="app" ref="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    zoom () {
      let width = 1920
      let height = 1080
      let x = window.innerWidth / width
      let y = window.innerHeight / height
      // 用于还原页面
      window.X = x
      window.Y = y
      // let app = this.$refs.app
      let body = document.querySelector('body')
      body.style.transform = `scale(${x}, ${y})`
      body.style.webkitTransform = `scale(${x}, ${y})`
      body.style.msTransform = `scale(${x}, ${y})`
      body.style.mozTransform = `scale(${x}, ${y})`
      body.style.oTransform = `scale(${x}, ${y})`
    }
  },
  mounted () {
    this.zoom()
    // 监听窗口发生变化
    window.addEventListener('resize', () => {
      this.zoom()
    })
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html{
  height: 100%;
}
body{
    font-family: "微软雅黑";
    background-size: 100% 100%;
    transform-origin: 0px 0px 0px;
    overflow: hidden;
    width: 1920px;
    height: 1080px;
    position: relative;
    background: #041133;
}
#app {
  position: fixed;
  top: 0;
	bottom: 0;
  width: 100%;
  /* overflow-x: scroll; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
