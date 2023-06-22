import { storeBehavior } from "../../behavior/storeBehavior"

// pages/login/index.ts
Page({
    behaviors:[storeBehavior],
    data: {
    },
      cancel(){
          wx.navigateBack()
      }
    
})