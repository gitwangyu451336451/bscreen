import fetch from '@/utils/fetch'
export function bscrenn () {
  return fetch({
    url: 'https://dsn.apizza.net/mock/a36657f269d8bc38b9979c1bbf019699/bscrenn',
    method: 'POST'
  })
}
