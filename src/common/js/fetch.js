import axios from 'axios'

export default function fetch (url, option) {
  return new Promise((resolve, reject) => {
    axios(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
