type RequestMethod = "GET" | "POST" | "PUT"

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
    gender?:Gender,
    birthDay?:string,
}
type Gender = 'MALE'|'FEMALE'|'UNKNOWN'|number

type userUpdateRequest = {
    mobile?:number,
    gender?:Gender,
    birthDay?:string,
}