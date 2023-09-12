// pages/reserve/calendar/calendar.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    onOkSelected({
        detail
    }) {
        let {
            enter,
            leave
        } = detail
        enter = enter.replace(/-/g, '.')
        leave = leave.replace(/-/g, '.')
        wx.showToast({
            title: enter + ' - ' + leave,
            icon: 'none'
        })
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({
            enterDay: enter,
            leaveDay: leave,
            rooms: [
                {
                    type: '标准间',
                    num:30,
                    price: '200'
                },
                {
                    type: '双人间',
                    num: 20,
                    price: '200'
                },
                {
                    type: '钟点房',
                    num: 30,
                    price: '100'
                },
                {
                    type: '豪华房',
                    num: 3,
                    price: '500'
                }
            ]
        })
        wx.navigateBack()
    },
})