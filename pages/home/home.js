// pages/home/home.js
import {
  homeData
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    recommend: [],
    titles: ["流行","新款","精选"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    homeData().then(res => {
      console.log(res)
      const banner = res.data.data.banner.list //轮播图数据
      const recommend = res.data.data.recommend.list //推荐数据

      this.setData({
        banner,
        recommend
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})