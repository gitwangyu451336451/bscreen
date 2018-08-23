<template>
 <div class="progress" ref="container">
    <!-- 有滚动条 -->
    <div v-show="!marker">
      <vue-seamless-scroll :data="data" class="progress-container" :class-option="classOption">
        <ul class="college-enroll-ul" ref="lists">
          <li v-for="(item,i) in data" :key="i">
            <div class="zz-content">
              <table style="width:100%;">
                <tbody>
                  <tr>
                    <td class="college-td">
                      <p class="college-name">{{item.college}}</p>
                    </td>
                    <td class="yq-td" :class="{'yq-td-last': data.length!==(i+1)}">
                      <div class="yq"></div>
                    </td>
                    <td class="info-td">
                      <div class="enroll-info">
                        <p class="enroll-bdrs">{{item.bdrs}}/{{item.lqrs}}人</p>
                        <div class="enroll-zz" :style="{width: item.bdl*0.65+'%'}"></div>
                        <p class="enroll-bdl">{{item.bdl}}%</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
    <!-- 没得滚动条 -->
    <ul class="college-enroll-ul" ref="list" v-show="marker">
      <li v-for="(item,i) in data" :key="i">
          <div class="zz-content">
              <table style="width:100%;">
                  <tbody>
                      <tr>
                          <td class="college-td">
                              <p class="college-name">{{item.college}}</p>
                          </td>
                          <td class="yq-td" :class="{'yq-td-last': data.length!==(i+1)}">
                              <div class="yq"></div>
                          </td>
                          <td class="info-td">
                              <div class="enroll-info">
                                  <p class="enroll-bdrs">{{item.bdrs}}/{{item.lqrs}}人</p>
                                  <div class="enroll-zz" :style="{width: item.bdl*0.65+'%'}"></div>
                                  <p class="enroll-bdl">{{item.bdl}}%</p>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </li>
    </ul>
 </div>
</template>

<script type="text/ecmascript-6">
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  data () {
    return {
      classOption: {
        step: 0.5,
        limitMoveNum: this.data.length
      },
      marker: false
    }
  },
  components: {
    vueSeamlessScroll
  },
  props: ['data'],
  watch: {
    data (val) {
      this._isScroll()
    }
  },
  methods: {
    _isScroll () {
      this.$nextTick(() => {
        let wrapperHeight = this.$refs.container.clientHeight
        let itemsHeight = this.$refs.lists.clientHeight
        let itemHeight = this.$refs.list.clientHeight
        console.log(wrapperHeight)
        console.log('渲染后的高度1', itemsHeight)
        console.log('渲染后的高度2', itemHeight)
        if (itemsHeight > wrapperHeight || itemHeight > wrapperHeight) {
          this.marker = false
        } else {
          this.marker = true
        }
        console.log(this.marker)
      })
    }
  }
}
</script>
<style scoped lang="stylus">
.progress{
  position: absolute;
  right: 0;
  top: 0.35rem;
  width: 100%;
  height: 97%;
  overflow hidden;
}
.progress-container{
  overflow hidden
  height 100%
}
.college-enroll-ul{
    margin:0px;
    padding:0px;
    list-style:none;
    margin-top: 15px;
    margin-left: 5px;
}
.college-enroll-ul li{
    margin-bottom: .22rem
}
.zz-content{
    text-align:center;
}
.college-name{
    float:right;
    color:#0084c5;
    font-size:14px;
}
.yq{
    width:7px;
    height:7px;
    border-radius:5px;
    border:1px solid #0084c5;
    margin-left:1px;
    margin: auto;
}
.enroll-info{
    float:left;
    width:100%;
    padding-top: 0.02rem
}
.enroll-bdrs{
    font-size:12px;
    margin-top: -19px;
    margin-left:-60%;
    color:#bfbfbf;
}
.xt{
    width:1px;
    height:30px;
    background-color:#d2d2d2;
    margin-left:auto;
    margin-right:auto;
    transform: scale(1.3);
}
.college-td{
    width:49%;
}
.yq-td{
    display: inline-block;
    position: relative;
    width:.12rem;
    margin-top: 1px;
    text-align: center
}
.yq-td-last:after{
    content: "";
    display: block;
    width: 1px;
    height: .24rem;
    background: white;
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
}
.info-td{
    width:49%;
}
.enroll-zz{
    width:100px;
    height:10px;
    background: -moz-linear-gradient(left,#09c4fb,#3873e7);
    background: -webkit-linear-gradient(left,#09c4fb,#3873e7);
    float:left;
}
.enroll-bdl{
    float:left;
    font-size:12px;
    margin-top:-5px;
    margin-left:6px;
    color:#ffffff;
}
tr,td{
    vertical-align: middle!important
}
</style>
