import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: [],
	isLogged: false,
	isAdmin: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		LOGIN: (state, action) => {
			isLogged = true;
		},
		GET_USER: (state, action) => {
			(user = action.payload.user), (isAdmin = action.payload.isAdmin);
		},
	},
});

export const { LOGIN, GET_USER } = authSlice.actions;

export default authSlice.reducer;
