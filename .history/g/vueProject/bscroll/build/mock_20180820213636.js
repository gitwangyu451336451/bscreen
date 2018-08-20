//express 服务
const express = require('express')

exports.server = function () {
  let app = express()
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    // res.header("Content-Type", "application/json;charset=utf-8")
    next()
  })
  //数据接口
  app.get('/college_enroll_statu', function (req, res) {
    let d = [{
        "college": "信息工程学院",
        "bdl": "88.88",
        "lqrs": "1301",
        "bdrs": "1269"
      },
      {
        "college": "公共管理学院",
        "bdl": "90.44",
        "lqrs": "1301",
        "bdrs": "1269"
      },
      {
        "college": "商学院",
        "bdl": "87.73",
        "lqrs": "1301",
        "bdrs": "1269"
      },
      {
        "college": "国际学院",
        "bdl": "91.95",
        "lqrs": "1301",
        "bdrs": "1269"
      },
      {
        "college": "建筑工程学院",
        "bdl": "85.65",
        "lqrs": "1301",
        "bdrs": "1269"
      },
      {
        "college": "旅游学院",
        "bdl": "87.67",
        "lqrs": "1301",
        "bdrs": "1269"
      },
      {
        "college": "机电工程学院",
        "bdl": "86.80",
        "lqrs": "1301",
        "bdrs": "1269"
      },
      {
        "college": "艺术工程学院",
        "bdl": "85.57",
        "lqrs": "1301",
        "bdrs": "1269"
      },
      {
        "college": "财经学院",
        "bdl": "89.47",
        "lqrs": "1301",
        "bdrs": "1269"
      }
    ]
    res.send(d)
  })
  app.get('/zslb', function (req, res) {
    let d = [{
        "name": "统招",
        "sd": "2560",
        "yd": "3103",
        "wd": "543",
        "zb": "17.50"
      },
      {
        "name": "单独招生",
        "sd": "2186",
        "yd": "2328",
        "wd": "140",
        "zb": "6.02%"
      },
      {
        "name": "对口2+3",
        "sd": "352",
        "yd": "391",
        "wd": "39",
        "zb": "9.97%"
      },
      {
        "name": "对口招生",
        "sd": "554",
        "yd": "610",
        "wd": "56",
        "zb": "9.18%"
      }
    ]
    res.send(d)
  })
  app.get('/xstj', function (req, res) {
    let d = [{
        "names": "缴费",
        "list": [{
            "name": "已办理",
            "rs": "5099",
            "zb": "79.30"
          },
          {
            "name": "未办理",
            "rs": "1331",
            "zb": "20.70"
          }
        ]
      },
      {
        "list": [{
            "name": "已办理",
            "rs": "5690",
            "zb": "88.49"
          },
          {
            "name": "未办理",
            "rs": "740",
            "zb": "11.51"
          }
        ],
        "names": "宿舍分配"
      },
      {
        "names": "绿色通道",
        "list": {
          "ybrs": "4047",
          "ybzb": "62.94",
          "wbrs": "2383",
          "wbzb": "37.06"
        }
      },
      {
        "names": "宿舍分配",
        "list": {
          "ybrs": "5652",
          "ybzb": "87.90",
          "wbrs": "778",
          "wbzb": "12.10"
        }
      }
    ]
    res.send(d)
  })
  let server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
  })
}
