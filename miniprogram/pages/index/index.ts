import pageApi from "../../api/page"
import navigator from "../../utilis/navigator"


// pages/index/index.ts
Page({

    /**
     * Page initial data
     */
    data: {
        swiperList:<SwiperData[]>[],
        IconNavigations: <IconNavigation[]>[]

    },

    /**
     * Lifecycle function--Called when page load
     */
    async onLoad() {
        const {swiper,iconNavigations} = await pageApi.home()
        this.setData({
            swiperList:swiper,
            IconNavigations:iconNavigations
        })
    },
    onIconNavigationTab(event:ItemParam){
        const {type, target} = event.currentTarget.dataset.item
        navigator.to(type,target)
    },
    goToLogin(){
        wx.navigateTo({url:'/pages/login/index'})
    },
    onPickup(){
        wx.switchTab({url:'/pages/store/index'})
    },
    onTakeaway(){
        wx.navigateTo({url:'/pages/login/index'})
    }
})