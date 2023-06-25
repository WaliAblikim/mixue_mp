import request from "./request";
import { ListResult, Store } from "./types";

// type ListResult<T> = {
//     paging: Paging;
//     data: Array<T>;
//   };
//   interface Paging {
//     page: number;
//     size: number;
//     total: number;
//   }
  
//   type Location = {
//     longtitude: number;
//     langtitude: number;
//   };
// type Store = {
//   id: string;
//   name: string;
//   address: string;
//   openingTime: {
//     start: string;
//     end: string;
//   };
//   status: keyof typeof StoreStatus;
//   location: Location;
//   phone: string;
// };

const list = () => {
  return request<ListResult<Store>>("GET", "/stores");
};

export default {
  list,
};
