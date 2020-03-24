const baseUrl = 'http://106.54.54.237:8000/api/wh/'

export default function request(options){
 return new Promise((resolve,reject)=>{
   wx.request({
     url: baseUrl+options.url,
     method: options.method || 'get',
     data: options.data || {},
     success: resolve,
     fail: reject
   })
 })
}