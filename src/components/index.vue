<template>
  <div class="wrapper">
  </div>
</template>

<script>
import { getCollege } from 'api/bscreen'
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
  created () {
    getCollege(1, 2, 3)
  },
  mounted () {}
}
</script>
<style lang='stylus' scoped>
</style>
