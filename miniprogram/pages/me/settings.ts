import mobileApi from "../../api/mobile";
import { storeBehavior } from "../../behavior/storeBehavior";
import { appStore } from "../../store/index";

Page({
  behaviors: [storeBehavior],
  data: {
    mobile: appStore.currentUser?.mobile,
    gender: appStore.currentUser?.gender,
    birthDay: appStore.currentUser?.birthDay,
    loading: false,
  },
  onLoad() {
    this.setData({
      mobile: appStore.currentUser?.mobile,
      gender: appStore.currentUser?.gender,
      birthDay: appStore.currentUser?.birthDay,
    });
  },
  async onMobileChange(event: { detail: { code: string } }) {
    const mobile = await mobileApi.get(event.detail.code);
    this.setData({
      mobile,
    });
  },
  onGenderChange(event: { detail: Gender }) {
    this.setData({
      gender: event.detail,
    });
  },
  onBirthdayChange(event: { detail: { value: string } }) {
    this.setData({
      birthDay: event.detail.value,
    });
  },
  async save() {
    this.setData({
      loading: true,
    });
    await appStore.updateCurrentUser({
      mobile: this.data.mobile,
      gender: this.data.gender,
      birthDay: this.data.birthDay,
    });
    this.setData({
      loading: false,
    });
    wx.showToast({
      title: "保存完成",
    });
  },
  handleLogout() {
    appStore.logout();
    wx.navigateBack();
  },
});
