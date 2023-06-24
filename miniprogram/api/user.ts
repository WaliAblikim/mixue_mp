import request from "./request"

const current = () =>{
    return request<UserType>('GET','/users/current')
}

const updateCurrentUser = (userUpdateRequest:userUpdateRequest) =>{
    return request<UserType>('PUT','/users/current')
} 

export default {
    current,
    updateCurrentUser
}