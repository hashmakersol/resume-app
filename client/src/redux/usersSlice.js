import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	users: [],
};

export const usersSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		fetchAllUsers: async (token) => {
			const res = await axios.get("/user/all_infor", {
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
