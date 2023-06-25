import { StoreStatus } from "../enums/StoreStatus";

type RequestMethod = "GET" | "POST" | "PUT";

type HomePageData = {
  swiper: SwiperData[];
  iconNavigations: IconNavigation[];
};

type ErrorResponse = {
  code: number;
  message: string;
};

type RequestData = string | WechatMiniprogram.IAnyObject | ArrayBuffer;

type UserType = {
  id: string;
  mobile: number;
  gender?: Gender;
  birthDay?: string;
};
type Gender = "MALE" | "FEMALE" | "UNKNOWN" | number;

type userUpdateRequest = {
  mobile?: number;
  gender?: Gender;
  birthDay?: string;
};
type ListResult<T> = {
    paging: Paging;
    data: Array<T>;
  };
  interface Paging {
    page: number;
    size: number;
    total: number;
  }
  
  type Location = {
    longtitude: number;
    langtitude: number;
  };
type Store = {
  id: string;
  name: string;
  address: string;
  openingTime: {
    start: string;
    end: string;
  };
  status: keyof typeof StoreStatus;
  location: Location;
  phone: string;
};
