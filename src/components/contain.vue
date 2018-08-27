<template>
  <div class="contain">
      <Row style="height: 100%;">
        <Col span="7" style="height: 100%;">
            <containLeft></containLeft>
        </Col>
        <Col span="11" style="height: 100%;">
             <containCenter></containCenter>
        </Col>
        <Col span="6" style="height: 100%;">
            <containRight></containRight>
        </Col>
      </Row>
  </div>
</template>

<script>
import containCenter from './containCenter'
import containLeft from './containLeft'
import containRight from './containRight'
export default {
  components: {containCenter, containLeft, containRight},
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
.contain
    // height: calc(100% - 2.17rem)
    height: 5.46rem
    width: 100%
    padding: .25rem .35rem
</style>
