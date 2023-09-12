// pages/reserve/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        enterDay: '',
        leaveDay: '',
        rooms: [],
        roomConfirmAction: [{
                name: '确定'
            },
            {
                name: '取消'
            },
        ]
    },

    chooseRoom: function(event) {
        this.setData({
            roomConfirmVisible: true,
            chosenRoomType: event.currentTarget.dataset.roomType
        });
    },

    handleRoomConfirm: function({
        detail
    }) {
        if (detail.index == 0) {
            wx.setStorage({
                roomType: this.data['chosenRoomType'],
                enterDay: this.data.enterDay,
                leaveDay: this.data.leaveDay,
            })
            console.log('here')
            wx.navigateTo({
                url: '/pages/reserve/success/success',
            })

        }
        this.setData({
            roomConfirmVisible: false
        })
    }
})