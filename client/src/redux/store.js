import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/";
import { Provider } from "react-redux";

// if (typeof window !== "undefined") {
// 	const store = createStore(
// 		rootReducer,
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	);
// }

// const store = configureStore({
// 	reducer: {
// 		// Define a top-level state field named `todos`, handled by `todosReducer`
// 		todos: rootReducer,
// 		filters: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// 	},
// });

function DataProvider({ children }) {
	const [store, setStore] = React.useState();
	React.useEffect(() => {
		// setStore(
		// 	createStore(
		// 		rootReducer,
		// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		// 	)
		// );
		setStore(
			configureStore({
				reducer: {
					// Define a top-level state field named `todos`, handled by `todosReducer`
					todos: rootReducer,
					filters:
						window.__REDUX_DEVTOOLS_EXTENSION__ &&
						window.__REDUX_DEVTOOLS_EXTENSION__(),
				},
			})
		);
	}, []);

	return <Provider store={store}>{children}</Provider>;
}

export default DataProvider;
