import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config.json";
const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    fetchAllUsers: async (token) => {
      const res = await axios.get(`${config.API_ENPOINT}/user/all_infor`, {
        headers: { Authorization: token },
      });
      return res;
    },
    dispatchGetAllUsers: (state, action) => {
      users = action.payload;
    },
  },
});

export const { fetchAllUsers, dispatchGetAllUsers } = usersSlice.actions;

export default usersSlice.reducer;
