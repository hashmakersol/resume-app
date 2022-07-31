import React from "react";
import { useSelector } from "react-redux";
import Register from "../components/body/auth/Register";
import NotFound from "../components/utils/NotFound/NotFound";

function register() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return isLogged ? <NotFound /> : <Register />;
}

export default register;
