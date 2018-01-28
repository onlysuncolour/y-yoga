import server from './server.config'
import axios from 'axios'

const GET = function (url, params) {
  let promise = new Promise(function(resolve, reject) {
    axios.get(server['dev']+url, params).then(resp => {
      resolve(resp)
    }, err => {
      reject(err)
    })
  })
  return promise
}

const POST = function(url, params) {
  let promise = new Promise(function(resolve, reject) {
    axios.post(server['dev']+url, params).then(resp => {
      resolve(resp)
    }, err => {
      reject(err)
    })
  })
  return promise
}

module.exports = {GET, POST}
