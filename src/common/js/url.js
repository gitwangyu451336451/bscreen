import axios from 'axios'
const getPath = function (callback) {
  axios.get('static/config.json').then((res) => {
    localStorage.setItem('url', res.data.url)
    callback && callback(res.data.url)
  }).catch((error) => {
    console.log(error)
  })
}
export default getPath
