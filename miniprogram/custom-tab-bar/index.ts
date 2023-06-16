import { ErrorMessage } from "../enums/ErrorMessage"

// custon-tab-bar/index.ts
Component({
    data: {
        active:0,
        list:[{
            text:"首页",
            image:'../assets/images/tabBar/homeonSelected.png',
            selectedImage:'../assets/images/tabBar/homeSelected.png',
            path:'/pages/index/index'
        },
        {
            text:"点餐",
            image:'../assets/images/tabBar/storeOnSelected.png',
            selectedImage:'../assets/images/tabBar/storeSelected.png',
            path:'/pages/store/index'
        },
        {
            text:"订单",
            image:'../assets/images/tabBar/orderOnselected.png',
            selectedImage:'../assets/images/tabBar/orderSelected.png',
            path:'/pages/order/index'
        },
        {
            text:"我的",
            image:'../assets/images/tabBar/meOnSelected.png',
            selectedImage:'../assets/images/tabBar/meSelected.png',
            path:'/pages/me/index'
        } 
        ]
    },
    methods: {
        onChange(event:{detail:number}){
            this.setData({
                active:event.detail
            })
            wx.switchTab({
                url:this.data.list[event.detail].path
            });
        },
        //初始化 tabbar 组件
        init (){
            const currentPage = getCurrentPages().pop()
            if(!currentPage){
                throw new Error(ErrorMessage.INNER_ERROR)
            }
            this.setData(
                {
                    active: this.data.list.findIndex(item=>item.path === `/${currentPage.route}`)
                }
            )


        }


    }
})
