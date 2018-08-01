<template>
  <div class="contain_left">
    <img src="static/stageData/ct.png">
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang='stylus' scoped>
.contain_left
  position: relative
  height: 100%
  >img
    position: absolute
    top: 50%
    left: 50%
    height: 90%
    width: 100%
    transform: translate(-50%, -50%)
</style>
