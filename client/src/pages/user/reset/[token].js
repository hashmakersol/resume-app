import React from "react";
import ResetPassword from "../../../components/body/auth/ResetPassword";

function token() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return isLogged ? <NotFound /> : <ResetPassword />;
}

export default token;
