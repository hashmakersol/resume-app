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
	return <Home />;
}

export default Body;
