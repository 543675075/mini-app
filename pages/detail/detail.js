// pages/detail/detail.js
import { detailData} from '../../service/detail.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: '',
    swiperImage: [],
    title: '',
    price: '',
    oldPrice: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //获取传过来的参数iid
    this.setData({
      iid:options.iid
    })


    // 发送网络请求
    detailData(this.data.iid).then(res=>{
      console.log(res)
      // 取出轮播图的数据并保存
      const swiperImage = res.data.result.itemInfo.topImages
      //取出标题名字
      const title = res.data.result.itemInfo.title
      //取出价格
      const price = res.data.result.itemInfo.price
      const oldPrice = res.data.result.itemInfo.oldPrice
      //保存数据
      this.setData({
        swiperImage,
        title,
        price,
        oldPrice
      })

      

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})