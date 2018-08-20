import fetch from '@/utils/fetch'
export function bscrenn () {
  return fetch({
    url: 'https://dsn.apizza.net/mock/a36657f269d8bc38b9979c1bbf019699/bscrenn',
    // url: 'http://192.168.199.99:8086/enroll/statistics/bigDp',
    method: 'POST'
  })
}
