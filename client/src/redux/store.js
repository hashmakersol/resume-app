// import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
// import rootReducer from "./reducers/";
// import { Provider } from "react-redux";
import auth from "./reducers/authReducer";
import token from "./reducers/tokenReducer";
import users from "./reducers/usersReducer";

// if (typeof window !== "undefined") {
// 	var store = createStore(
// 		rootReducer,
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	);
// }

const combinedReducer = combineReducers({
	auth,
	token,
	users,
});

const masterReducer = (state, action) => {
	if (action.type === HYDRATE) {
		// const nextState = {
		//     ...state, // use previous state
		//     counter: {
		//         count: state.counter.count + action.payload.counter.count,
		//     },
		//     users: {
		//         users: [...action.payload.users.users, ...state.users.users]
		//     }
		// }
		// return nextState;
	} else {
		return combinedReducer(state, action);
	}
};

export const makeStore = () =>
	configureStore({
		reducer: masterReducer,
	});

export const wrapper = createWrapper(makeStore, { debug: true });

// const store = configureStore({
// 	reducer: {
// 		// Define a top-level state field named `todos`, handled by `todosReducer`
// 		todos: rootReducer,
// 		filters: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// 	},
// });

// function DataProvider({ children }) {
// 	return <Provider store={store}>{children}</Provider>;
// }

// export default DataProvider;
