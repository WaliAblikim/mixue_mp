import request from "./request";
import { UserType,userUpdateRequest } from "./types";

const current = () => {
  return request<UserType>("GET", "/users/current");
};

const updateCurrent = (userUpdateRequest: userUpdateRequest) => {
  return request<UserType>("PUT", "/users/current");
};

export default {
  current,
  updateCurrent,
};
