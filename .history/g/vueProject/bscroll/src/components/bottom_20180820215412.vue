<template>
  <div class="bottom"
       v-if="getXstj.length>0">
    <img class="bg"
         src="/static/stageData/bt.png">
    <img class="bleft"
         src="/static/stageData/yxxt_zhd.png">
    <img class="bright"
         src="/static/stageData/yxxt_yhd.png">
    <Row>
      <Col span="7">
      <div class="cl-title">
        <img src="/static/stageData/xs.png"> 学生统计
      </div>
      </Col>
    </Row>
    <div id="demo">
      <div id="indemo">
        <div id="demo1">
          <a href="#"
             v-for="(item, i) in getXstj"
             :key="'item'+i">
            <div>
              <p>{{item.names}}</p>
              <chart :data="item.list"></chart>
            </div>
            <div>
              <div>
                <p class="fr"
                   style="color: #0076b1">已办理</p>
                <p class="fr mr24"
                   style="color: #0076b1">未办理</p>
                <div style="clear: both"></div>
              </div>
              <table>
                <tr>
                  <th>状态</th>
                  <th>人数</th>
                  <th>占比</th>
                </tr>
                <tr v-for="(m,n) in item.list"
                    :key="'xstj'+n">
                  <td>已办理</td>
                  <td>{{m.rs}}</td>
                  <td>{{m.zb}}%</td>
                </tr>
              </table>
            </div>
            <div></div>
          </a>
        </div>
        <div id="demo2">
          <a href="#"
             v-for="(item, i) in getXstj"
             :key="'item1'+i">
            <div>
              <p>{{item.names}}</p>
              <chart :data="item.list"></chart>
            </div>
            <div>
              <div>
                <p class="fr"
                   style="color: #0076b1">已办理</p>
                <p class="fr mr24"
                   style="color: #0076b1">未办理</p>
                <div style="clear: both"></div>
              </div>
              <table>
                <tr>
                  <th>状态</th>
                  <th>人数</th>
                  <th>占比</th>
                </tr>
                <tr v-for="(m,n) in item.list"
                    :key="m">
                  <td>已办理</td>
                  <td>{{item.list.ybrs}}</td>
                  <td>{{item.list.ybzb}}%</td>
                </tr>
                <tr>
                  <td>未办理</td>
                  <td>{{item.list.wbrs}}</td>
                  <td>{{item.list.wbzb}}%</td>
                </tr>
              </table>
            </div>
            <div></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import chart from './utils/xstjChart'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getXstj'])
  },
  watch: {
    getXstj (val, old) {
      console.log(val.length > 0 && old.length <= 0)
      if (val.length > 0 && old.length <= 0) {
        this.$nextTick(() => {
          let speed = 100
          let tab = document.getElementById('demo')
          let w = tab.clientWidth / 4
          let tab1 = document.getElementById('demo1')
          let aObj = tab1.getElementsByTagName('a')
          for (let i = 0; i < aObj.length; i++) {
            aObj[i].style.width = w + 'px'
          }
          let tab2 = document.getElementById('demo2')
          let aObj2 = tab2.getElementsByTagName('a')
          for (let i = 0; i < aObj2.length; i++) {
            aObj2[i].style.width = w + 'px'
          }
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
      }
    }
  },
  mounted () { },
  components: { chart }
}
</script>

<style scoped lang="stylus">
.bottom {
  position: relative;
  height: 1.72rem;
  margin: 0 0.35rem;

  .cl-title {
    font-size: 0.16rem;
    color: white;
    height: 0.25rem;
    line-height: 0.25rem;
    background: url('/static/stageData/lefttwo.png') no-repeat;
    text-align: left;

    img {
      width: 0.14rem;
      margin-right: 0.24rem;
      margin-left: 0.16rem;
    }
  }

  >img.bg {
    position: absolute;
    width: 100%;
    top: -0.15rem;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
  }

  >img.bright {
    position: absolute;
    bottom: 0.35rem;
    right: 0.07rem;
    height: 0.8rem;
    transform: translateX(-50%);
    cursor: pointer;
  }

  >img.bleft {
    position: absolute;
    bottom: 0.35rem;
    left: 0.25rem;
    height: 0.8rem;
    transform: translateX(-50%);
    cursor: pointer;
  }
}

#demo {
  position: absolute;
  top: 0.5rem;
  // left: .4rem
  overflow: hidden;
  width: calc(100% - 0.8rem);
  // width: calc(100% - .7rem)
  // width: 100%
  margin: 0 0.4rem;
  height: calc(100% - 0.75rem);

  >img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
}

#demo img {
  border: 3px solid #F2F2F2;
}

#indemo {
  float: left;
  width: 800%;
  height: 100%;
}

#demo1, #demo2 {
  float: left;
  height: 100%;
  // width: 12.5%
  white-space: nowrap;

  a {
    display: inline-block;
    font-size: 0.12rem;
    color: white;
    // width: 25%
    height: 100%;

    // white-space: nowrap
    // float: left
    >div:last-child {
      height: 100%;
      width: 0.2rem;
      border-left: 1px solid #143C60;
      transform: rotate(15deg);
      float: left;
    }

    >div:first-child {
      width: 0.81rem;
      height: 100%;
      float: left;

      >p {
        height: 0.2rem;
        line-height: 0.2rem;
      }

      >div {
        height: calc(100% - 0.24rem);
      }
    }

    >div:nth-child(2) {
      width: calc(100% - 1.01rem);
      height: 100%;
      padding-right: 0.2rem;
      float: left;

      table {
        width: 100%;
        color: #408edb;
        margin-top: 0.05rem;
        text-align: right;

        td {
          color: white;
          height: 0.24rem;
          line-height: 0.24rem;
        }
      }

      >div>p {
        position: relative;
      }

      >div>p:first-child:before {
        content: '';
        display: block;
        position: absolute;
        width: 0.12rem;
        height: 0.12rem;
        left: -0.14rem;
        top: 50%;
        transform: translateY(-50%);
        background: #1897d6;
      }

      >div>p:nth-child(2):before {
        content: '';
        display: block;
        position: absolute;
        width: 0.12rem;
        height: 0.12rem;
        left: -0.14rem;
        top: 50%;
        transform: translateY(-50%);
        background: #09c4fb;
      }
    }
  }
}
</style>
