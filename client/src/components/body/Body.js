import React from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ActivationEmail from "./auth/ActivationEmail";
import NotFound from "../utils/NotFound/NotFound";
import Link from "next/link";

import ForgotPass from "../body/auth/ForgotPassword";
import ResetPass from "../body/auth/ResetPassword";

import Profile from "../body/profile/Profile";
import EditUser from "../body/profile/EditUser";

import Home from "../body/home/Home";

import { useSelector } from "react-redux";

function Body() {
	const auth = useSelector((state) => state.auth);
	const { isLogged, isAdmin } = auth;
	return (
		<section>
			<>
				<Link href="/" component={Home} exact />

				<Link href="/login" component={isLogged ? NotFound : Login} exact />
				<Link href="/register" component={isLogged ? NotFound : Register} exact />

				<Link href="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
				<Link href="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

				<Link href="/user/activate/:activation_token" component={ActivationEmail} exact />

				<Link href="/profile" component={isLogged ? Profile : NotFound} exact />
				<Link href="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />
			</>
		</section>
	);
}

export default Body;
