import fetch from '../common/js/fetch'

// const $HTTP = window.REQUEST_URL;

export function getHeader (userId, type, code) {
  let url = ''
  let data = {
    userId,
    type,
    code
  }
  return callBack(url, data)
}

function callBack (url, data) {
  return fetch({
    url: url,
    method: 'post',
    data
  })
}
