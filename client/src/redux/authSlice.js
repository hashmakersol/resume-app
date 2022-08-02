import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config.json";
const initialState = {
  user: [],
  isLogged: false,
  isAdmin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    dispatchLogin: () => {
      isLogged = true;
    },
    fetchUser: async (token) => {
      const res = await axios.get(`${config.API_ENPOINT}/user/infor`, {
        headers: { Authorization: token },
      });
      return res;
    },
    dispatchGetUser: (res) => {
      (user = res.data), (isAdmin = res.data.role === 1 ? true : false);
    },
  },
});

export const { dispatchLogin, fetchUser, dispatchGetUser } = authSlice.actions;

export default authSlice.reducer;
