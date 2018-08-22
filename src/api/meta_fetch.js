import axios from 'axios'

axios.create({
  baseURL: process.env.ROOT_API
})

export default {
  fetch (url) {
    return axios.post('/meta', {'url': url})
  }
}
