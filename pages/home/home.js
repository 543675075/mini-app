// pages/home/home.js
import {
  homeData,
  goodsData
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    recommend: [],
    titles: ["流行", "新款", "精选"],
    currentGoodsList: 'pop',
    goodsList: {
      ['pop']: {
        page: 1,
        goods: []
      },
      ['new']: {
        page: 1,
        goods: []
      },
      ['sell']: {
        page: 1,
        goods: []
      }
    },
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  //网络请求。。。。。。。。。。。。。。。。
    this._homeData()//轮播


    this._goodsData('pop')
    this._goodsData('new')
    this._goodsData('sell')

    
  },

  //网络请求方法封庄。。。。。。。。。。。


  //轮播和推荐数据
  _homeData() {
    homeData().then(res => {
      const banner = res.data.data.banner.list //轮播图数据
      const recommend = res.data.data.recommend.list //推荐数据

      this.setData({
        banner,
        recommend
      })
    })
  },

  //商品列表数据
  _goodsData(type){
    //获取页码
    const page = this.data.goodsList[type].page
    //发送请求
    goodsData(type, page).then(res => {
      const goods = res.data.data.list

      //1.1 先提取出原来的值
      const oldGoods = this.data.goodsList
      //1.2 把请求到的各种数据加入到oldGoods里
      oldGoods[type].goods.push(...goods)
      oldGoods[type].page += 1
     

      //1.3 新值存入data中
      this.setData({
        goodsList: oldGoods
      })
      
    })


  },
  //监听tab-control的scrollTop
  imgLoad(){

    wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect => {
      console.log(rect.top)
    }).exec()
  },
  //点击事件。。。。。。。。。。。。。。。。

  // 1.tab-control点击事件
  handleControl(event) {
    console.log(event)
    let currentGoodsList = ''
    switch (event.detail) {
      case 0:
        currentGoodsList = "pop"
        break
      case 1:
        currentGoodsList = "new"
        break
      case 2:
        currentGoodsList = "sell"
        break
    }
    this.setData({
      currentGoodsList
    })
  },

  // 2.返回顶部点击事件
  backTop(event){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

 
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this._goodsData(this.data.currentGoodsList)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})