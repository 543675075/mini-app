import request from "./network.js"

export function detailData(iid){
  return request({
    url: 'detail',
    data: {
      iid
    }
  })
}