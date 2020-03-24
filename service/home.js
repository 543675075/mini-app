import request from './network.js'

export function homeData() {
  return request({
    url: 'home/multidata',
  })
}


