import storeApi from "../../api/store";
import { Paging, Store } from "../../api/types";
import { StoreStatus } from "../../enums/StoreStatus";
Page({
  data: {
    paging: <Paging>{
      page: 1,
      size: 10,
      total: 0,
    },
    storeList: <Store[]>[],
    storeStatusDict : StoreStatus

  },
  onLoad() {
    this.fetchData();
  },
  async fetchData() {
    const { paging, data } = await storeApi.list();
    this.setData({
      storeList: data,
      paging,
    });
  },
});
