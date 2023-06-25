import { appStore } from "../store/index"
import { ErrorResponse, RequestData, RequestMethod } from "./types";

const BASE_URL = 'https://mock.apifox.cn/m1/1646135-0-default'
const TOKEN_PREFIX = 'BEARER ';

const request = <T>(method:RequestMethod,uri:string,data?:RequestData) : Promise<T> =>{
return new Promise((resolve, reject)=>{
    wx.request({
        method,
        data,
        header:{
            'Authorization':TOKEN_PREFIX + appStore.token
        },
        url:BASE_URL+uri,
        success:(response)=>{
            if(response.statusCode !==200){
                handleError(response.data as ErrorResponse)
                reject(response.data)
            }
            resolve(response.data as T)
        },
        fail:(error)=>{
            reject({code:500, message:error.errMsg})
        }
    })
})
}
const handleError = (error:ErrorResponse)=>{
    if(error.code===401){
        appStore.logout()
    }
    wx.showToast({
        title:error.message,
        icon:'error'
    })
}
export default request