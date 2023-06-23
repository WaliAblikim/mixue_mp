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


type UserType = {
    id:string,
    mobile:number,
    gender?:'MALE'|'FEMALE'|'UNKNOWN'|number,
    brithday:string;
}