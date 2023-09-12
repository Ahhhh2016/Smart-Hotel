Page({
  data:{
    logintopheight:0,//上面图片的高
    name_focus:false,
    pass_focus:false,
    user_name:null,
    user_pass:null,
    send_time:60,
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.render_control();
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  // 渲染控制
  render_control:function(){
    
  }
})