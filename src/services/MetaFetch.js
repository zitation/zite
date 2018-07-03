import AxiosClient from '@/services/AxiosClient'

export default {
  fetch (url) {
    return AxiosClient().post('/meta', {'url': url})
  }
}
