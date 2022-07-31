import React from "react";
import { useSelector } from "react-redux";
import ForgotPassword from "../components/body/auth/ForgotPassword";
import NotFound from "../components/utils/NotFound/NotFound";

function forgotPassword() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return isLogged ? <NotFound /> : <ForgotPassword />;
}

export default forgotPassword;
