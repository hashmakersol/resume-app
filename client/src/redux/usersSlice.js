import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users: [],
};

export const usersSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		GET_ALL_USERS: (state, action) => {
			users = action.payload;
		},
	},
});

export const { GET_ALL_USERS } = usersSlice.actions;

export default usersSlice.reducer;
