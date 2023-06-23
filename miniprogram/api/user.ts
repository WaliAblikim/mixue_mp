import request from "./request"

const current = () =>{
    return request<UserType>('GET','/users/current')
}

export default {
    current
}