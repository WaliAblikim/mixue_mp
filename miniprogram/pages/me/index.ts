
Page({
    data: {
        paddingTop:0,
        menuList:[
            {title:"兑换码"},
            {title:"隐私服务"},
            {title:"用户服务协议"},
            {title:"经营信息公示"},
            {title:"问题反馈"},
            {title:"加盟咨询"},

        ]
    },
    onLoad(){
        const {bottom} = wx.getMenuButtonBoundingClientRect()
        this.setData({
            paddingTop:bottom
        });
    },
    login(){
        wx.navigateTo({url:'/pages/login/index'})
    }

})