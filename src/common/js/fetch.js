import axios from 'axios'

export default function fetch (config, option) {
  return new Promise((resolve, reject) => {
    axios(config, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
