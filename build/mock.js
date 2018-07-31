//express 服务
const express = require('express')

exports.server = function() {
    let app = express()
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Content-Type")
        // res.header("Content-Type", "application/json;charset=utf-8")
        next()
       })
    //数据接口
    app.get('/college_enroll_statu',function(req, res) {
        let d = [{"college":"信息工程学院","bdl":"88.88","lqrs":"1301","bdrs":"1269"},
            {"college":"公共管理学院","bdl":"90.44","lqrs":"1301","bdrs":"1269"},
            {"college":"商学院","bdl":"87.73","lqrs":"1301","bdrs":"1269"},
            {"college":"国际学院","bdl":"91.95","lqrs":"1301","bdrs":"1269"},
            {"college":"建筑工程学院","bdl":"85.65","lqrs":"1301","bdrs":"1269"},
            {"college":"旅游学院","bdl":"87.67","lqrs":"1301","bdrs":"1269"},
            {"college":"机电工程学院","bdl":"86.80","lqrs":"1301","bdrs":"1269"},
            {"college":"艺术工程学院","bdl":"85.57","lqrs":"1301","bdrs":"1269"},
            {"college":"财经学院","bdl":"89.47","lqrs":"1301","bdrs":"1269"}]
        res.send(d)
    })
    app.get('/enroll_bdwc',function(req, res) {
        let d = {
            "wbl":"778",
            "ybl":"5652"
        }
        res.send(d)
    })
    app.get('/enroll_bks',function(req, res) {
        let d = {
            "bdrs":"3912",
            "lqrs":"631",
            "bdl":"82.5%"
        }
        res.send(d)
    })
    app.get('/enroll_jf',function(req, res) {
        let d = {
            "wbl":"1331",
            "ybl":"5099"
        }
        res.send(d)
    })
    app.get('/enroll_kaist',function(req, res) {
        let d = {
            "bdrs":"3912",
            "lqrs":"231",
            "bdl":"93.98%"
        }
        res.send(d)
    })
    app.get('/enroll_lstd',function(req, res) {
        let d = {
            "wbl":"4047",
            "ybl":"2383"
        }
        res.send(d)
    })
    app.get('/enroll_ssfp',function(req, res) {
        let d = {
            "wbl":"740",
            "ybl":"5690"
        }
        res.send(d)
    })
    app.get('/enroll_yjs',function(req, res) {
        let d = {
            "bdrs":"3912",
            "lqrs":"831",
            "bdl":"90.03%"
        }
        res.send(d)
    })
    app.get('/enroll_zsb',function(req, res) {
        let d = {
            "bdrs":"3912",
            "lqrs":"931",
            "bdl":"90.82%"
        }
        res.send(d)
    })
    app.get('/old',function(req, res) {
        let d = {
            "legend_data": [
              "全校统计",
              "专升本",
              "本科",
              "研究生",
              "专科"
            ],
            "series_all": [
               [{"name":"北京","value":140}, {"name":"江苏"}],
               [{"name":"上海","value":20}, {"name":"江苏"}],
               [{"name":"天津","value":30}, {"name":"江苏"}],
               [{"name":"广东","value":10}, {"name":"江苏"}],
               [{"name":"青海","value":40}, {"name":"江苏"}],
               [{"name":"宁夏","value":20}, {"name":"江苏"}],
               [{"name":"山西","value":20}, {"name":"江苏"}],
               [{"name":"浙江","value":20}, {"name":"江苏"}],
               [{"name":"台湾","value":10}, {"name":"江苏"}],
               [{"name":"西藏","value":160}, {"name":"江苏"}],
               [{"name":"安徽","value":20}, {"name":"江苏"}],
               [{"name":"福建","value":20}, {"name":"江苏"}],
               [{"name":"甘肃","value":20}, {"name":"江苏"}],
               [{"name":"广西","value":20}, {"name":"江苏"}],
               [{"name":"湖南","value":20}, {"name":"江苏"}],
               [{"name":"香港","value":20}, {"name":"江苏"}],
               [{"name":"澳门","value":20}, {"name":"江苏"}],
               [{"name":"云南","value":20}, {"name":"江苏"}],
               [{"name":"内蒙古","value":20}, {"name":"江苏"}],
               [{"name":"黑龙江","value":20}, {"name":"江苏"}],
               [{"name":"新疆","value":20}, {"name":"江苏"}]
            ]
          }
        res.send(d)
    })
    app.get('/welcome',function(req, res) {
        let d = [
            {"name":"统招","sd":"2560","yd":"3103","wd":"543","zb":"17.50"},
            {"name":"单独招生","sd":"2186","yd":"2328","wd":"140","zb":"6.02%"},
            {"name":"对口2+3","sd":"352","yd":"391","wd":"39","zb":"9.97%"},
            {"name":"对口招生","sd":"554","yd":"610","wd":"56","zb":"9.18%"}
        ]    
        res.send(d)
    })
    app.get('/welcome2',function(req, res) {
        let d = [
            {"zb":"96.38%","bl_s":"12721","lqrs":"13098"},
            {"zb":"97%","bl_s":"13098","lqrs":"14867"}
        ]
        res.send(d)
    })
    app.get('/welcome3',function(req, res) {
        let d = [
            {
                "names":"缴费","list":{
                    "ybrs":"5099","ybzb":"79.30","wbrs":"1331","wbzb":"20.70"
                }
            },
            {
                "names":"宿舍分配","list":{
                    "ybrs":"5690","ybzb":"88.49","wbrs":"740","wbzb":"11.51"
                }
            },
            {
                "names":"绿色通道","list":{
                    "ybrs":"4047","ybzb":"62.94","wbrs":"2383","wbzb":"37.06"
                }
            },
            {
                "names":"宿舍分配","list":{
                    "ybrs":"5652","ybzb":"87.90","wbrs":"778","wbzb":"12.10"
                }
            }
        ]
        res.send(d)
    })
    let server = app.listen(3000, function () { 
        let host = server.address().address
        let port = server.address().port
        console.log('Example app listening at http://%s:%s',host,port)
    })
}

