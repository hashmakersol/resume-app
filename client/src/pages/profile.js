import React from "react";
import { useSelector } from "react-redux";
import Profile from "../components/body/profile/Profile";
import NotFound from "../components/utils/NotFound/NotFound";

function profile() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return isLogged ? <NotFound /> : <Profile />;
}

export default profile;
