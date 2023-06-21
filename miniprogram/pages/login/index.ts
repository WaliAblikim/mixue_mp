import tokenApi from "../../api/token"

// pages/login/index.ts
Page({
    data: {
    },
    login (event:{detail:{code:string}}) {
        tokenApi.create(event.detail.code)
      }
    
})