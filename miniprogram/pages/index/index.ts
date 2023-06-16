import pageApi from "../../api/page"


// pages/index/index.ts
Page({

    /**
     * Page initial data
     */
    data: {
        swiperList:<SwiperData[]>[]

    },

    /**
     * Lifecycle function--Called when page load
     */
    async onLoad() {
        const {swiper} = await pageApi.home()
        this.setData({
            swiperList:swiper
        })
 
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow() {
        this.getTabBar().init() 

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage() {

    }
})