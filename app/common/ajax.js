import server from './server.config'
import axios from 'axios'

const Ajax = {
  get(url, params) {
    return this.ajax('get', url, params)
  },
  post(url, params) {
    return this.ajax('post', url, params)
  },
  ajax(request, url, params) {
    let promise = new Promise(function(resolve, reject) {
      axios[request](server['dev']+'/api'+url, params).then(resp => {
        resolve({
          ok: true,
          data: resp.data
        })
      }, err => {
        resolve({
          ok: false
        })
      })
    })
    return promise
  }
}

module.exports = Ajax
