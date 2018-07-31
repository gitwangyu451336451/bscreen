import fetch from 'common/js/fetch'
import getPath from 'common/js/url'

// const $HTTP = window.REQUEST_URL;

export function getCollege (userId, type, code) {
  let data = {
    userId,
    type,
    code
  }
  getUrl().then((res) => {
    let url = `${res}/college_enroll_statu`
    return callBack(url, data)
  })
  // return callBack(url, data)
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
