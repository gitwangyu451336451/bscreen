import axios from 'axios'

export default function fetch (config, option) {
  return new Promise((resolve, reject) => {
    axios(config).then((res) => {
      resolve(res)
    })
  })
}
