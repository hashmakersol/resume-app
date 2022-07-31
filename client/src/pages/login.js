import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/body/auth/Login";
import NotFound from "../components/utils/NotFound/NotFound";

function login() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return isLogged ? <NotFound /> : <Login />;
}

export default login;
