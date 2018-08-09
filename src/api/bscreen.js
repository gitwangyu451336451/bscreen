import fetch from 'common/js/fetch'
import getPath from 'common/js/url'

// const $HTTP = window.REQUEST_URL;
// 获取学院数据
export function getCollege () {
  // let data = {
  //   userId,
  //   type,
  //   code
  // }
  return getUrl().then((res) => {
    let url = `${res}/college_enroll_statu`
    return callBack(url)
  })
}

// 获取招生类别统计
export function getZslb () {
  return getUrl().then((res) => {
    let url = `${res}/zslb`
    return callBack(url)
  })
}

// 获取学生统计
export function getXstj () {
  return getUrl().then((res) => {
    let url = `${res}/xstj`
    return callBack(url)
  })
}
function callBack (url, data) {
  return fetch({
    url: url,
    method: 'get',
    data
  })
}

function getUrl () {
  return new Promise((resolve) => {
    localStorage.getItem('url') ? resolve(localStorage.getItem('url')) : getPath(function (res) {
      resolve(res)
    })
  })
}
