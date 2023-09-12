Page({
  data: {
    islogin: false,
    user_nickname: null,
    avatar_url: null,
    order_list: [{ "image": "image/待付款.png", "title": "待支付" }, { "image": "image/时钟.png", "title": "待出行" }, { "image": "image/点评.png", "title": "待点评" }, { "image": "image/发票管理.png", "title": "我的发票" }],
    money_list: [{ "image": "image/JKSetUpJiFen.png", "title": "积分" }, { "image": "image/余额.png", "title": "余额" }],
    other_list: ["旅行足迹","我的特权","意见反馈", "设置"]
  },
  onLoad: function (options) {
    // 如果用户没有登录需要用户登录

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    var app = getApp()
    this.setData({
      islogin: app.globalData.islogin,
    })
    if (this.data.islogin) {
      this.requestServiceData()
    }
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})