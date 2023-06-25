import request from "./request"
import { HomePageData } from "./types"

const home =()=>{
    return request<HomePageData> ('GET','/page/home')
}

export default {
    home
}