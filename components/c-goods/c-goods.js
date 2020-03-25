// components/c-goods/c-goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    iid:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleGoodsClick(e){
      const num = e.currentTarget.dataset.index
      const iid = this.data.goods[num].iid
      wx.navigateTo({
        url: '/pages/detail/detail?iid='+iid,
      })
    }
  }
})
