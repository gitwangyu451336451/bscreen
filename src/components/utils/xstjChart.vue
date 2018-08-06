<template>
 <div class="xslbChart" ref="xslbChart">

 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  mounted () {
      let chart = this.$echarts.init(this.$refs.xslbChart)
      chart.setOption({
		baseOption : {
			series : [
	          {
	        	  name : '缴费情况',
	        	  type:'pie',
	        	  radius:['50%','90%'],
	        	  avoidLabelOverlap: false,
	              label: {
	                  normal: {
	                      show: false,
	                      position: 'center'
	                  },
	                  emphasis: {
	                      show: true,
	                      textStyle: {
	                          fontSize: '30',
	                          fontWeight: 'bold'
	                      }
	                  }
	              },
	              labelLine: {
	                  normal: {
	                      show: false
	                  }
	              },
	              itemStyle:{
	                  normal:{
	                      borderWidth: 2,
//	                      borderColor: '#06203f'
	                      borderColor:'#06203f'
	                  }
	              },
	              data:[
	                  {value:335, name:'',selected:false,itemStyle:{
	                	  normal:{
	                		  color:'#09c4fb'
	                	  }
	                  }},
	                  {value:1548, name:'',itemStyle:{
	                	  normal:{
	                		  color:'#1897d6',
	                		  opacity:0.8
	                	  }
	                  }}
	              ]
	          }
            ]
		}
      })
  }
}
</script>

<style scoped lang="stylus">
.xslbChart
    height: 100%
    width: 100%
</style>
