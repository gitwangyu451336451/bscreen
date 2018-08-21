<template>
 <div class="zslbObj">
     <p class="mt5 colorDefault">{{data.name}}</p>
     <div class="mt5 zslbObj-bl">
         <span>{{data.sd}}</span><span>/{{data.yd}}</span>
     </div>
     <div class="mt12 zslbObj-ms">
         <span class="mr8">未到人数: {{data.wd}}(人)</span>
         占比: {{data.zb}}%
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  },
  props: ['data'],
  components: {}
}
</script>

<style scoped lang="stylus">
.zslbObj
    position: relative
    height:100%
    padding: 0.05rem 0 0.05rem .3rem
    text-align: left
    >p
        font-size: .16rem
    .zslbObj-bl
        line-height: 1
        >span:first-child
            font-size: .22rem
            color: white
        >span:last-child
            font-size: .14rem
            color: #adadad
    .zslbObj-ms
        color: #0080c0
        font-size: .14rem
        white-space: nowrap
.colorDefault
    color: #59c5fb
</style>
