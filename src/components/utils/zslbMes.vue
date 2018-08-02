<template>
 <div class="zslbObj">
     <p class="mt5 colorDefault">统招</p>
     <div class="mt5 zslbObj-bl">
         <span>2560</span><span>/3103</span>
     </div>
     <div class="mt12 zslbObj-ms">
         <span class="mr8">未到人数: 543(人)</span>
         占比: 17.50
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
