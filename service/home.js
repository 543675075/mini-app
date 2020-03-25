import request from './network.js'

export function homeData() {
  return request({
    url: 'home/multidata',
  })
}

export function goodsData(type,page) {
  return request({
    url: 'home/data',
    data: {
      type,
      page
    }
  })
}

