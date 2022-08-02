import ACTIONS from "./index";
import axios from "axios";
import config from "../../config.json";
export const fetchAllUsers = async (token) => {
  const res = await axios.get(`${config.API_ENPOINT}/user/all_infor`, {
    headers: { Authorization: token },
  });
  return res;
};

export const dispatchGetAllUsers = (res) => {
  return {
    type: ACTIONS.GET_ALL_USERS,
    payload: res.data,
  };
};
