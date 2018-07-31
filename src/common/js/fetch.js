import axios from 'axios'

export default function fetch (config, option) {
  return new Promise((resolve, reject) => {
    console.log(config)
    // axios({
    //   method: 'post',
    //   url: url,
    //   params: option
    // }).then((err, data) => {
    //   if (!err) {
    //     resolve(data)
    //   } else {
    //     reject(err)
    //   }
    // })
    axios(config, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
