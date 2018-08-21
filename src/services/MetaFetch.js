import AxiosClient from '@/services/axios_client'

export default {
  fetch (url) {
    return AxiosClient().post('/meta', {'url': url})
  }
}
