type RequestMethod = "GET" | "POST"

type HomePageData =  {
    swiper: SwiperData[],
    iconNavigations: IconNavigation[]
}

type ErrorResponse = {
    code:number,
    message:string,
}

type RequestData = string | WechatMiniprogram.IAnyObject | ArrayBuffer