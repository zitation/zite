import AxiosClient from '@/api/axios_client'

export default {
  fetch (url) {
    return AxiosClient().post('/meta', {'url': url})
  }
}
