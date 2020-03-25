// components/c-tab-control/c-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleControl(event){
      this.setData({
        num : event.target.dataset.index
      })
      this.triggerEvent("handleControl", this.data.num)
    }
  }
})
