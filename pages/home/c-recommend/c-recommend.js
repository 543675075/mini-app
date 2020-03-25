// pages/home/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag : true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgLoad(){
      if(this.data.flag){
        this.triggerEvent("imgLoad")
        this.data.flag = false
      }
    }
  }
})
