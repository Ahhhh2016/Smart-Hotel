// pages/me/coupons/coupons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageURL1: "/pages/me/coupons/image/早餐.jpg",
    imageURL2: "/pages/me/coupons/image/甜点.jpg",
    imageURL3: "/pages/me/coupons/image/洗衣机.jpg",
    option1: [
      { text: '未使用', value: 0 },
      { text: '全部', value: 1 },
      { text: '已使用', value: 2 }, 
      { text: '快过期', value: 2 }
    ],
    option2: [
      { text: '数量排序', value: 'a' },
      { text: '价格排序', value: 'b' },
    ],
    value1: 0,
    value2: 'a',
    active: 0,
    icon: {
      normal: '/pages/me/coupons/image/券.png',
      active: '/pages/me/coupons/image/券.png'
      }
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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