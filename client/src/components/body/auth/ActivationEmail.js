import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "../../utils/notification/Notification";

import config from "../../../config.json";

function ActivationEmail() {
	const router = useRouter();
	const [err, setErr] = useState("");
	const [success, setSuccess] = useState("");
	const [activationToken, setActivationToken] = useState();

	useEffect(() => {
		if (router.asPath !== router.route) {
			setActivationToken(router.query.activation_token);
		}
	}, [router]);

	useEffect(() => {
		if (activationToken) {
			const activationEmail = async () => {
				try {
					debugger;
					const res = await axios.post(`${config.API_ENPOINT}/user/activation`, {
						activationToken,
					});
					setSuccess(res.data.msg);
				} catch (err) {
					err.response.data.msg && setErr(err.response.data.msg);
				}
			};
			activationEmail();
		}
	}, [activationToken]);

	return (
		<div className="active_page">
			{err && showErrMsg(err)}
			{success && showSuccessMsg(success)}
		</div>
	);
}

export default ActivationEmail;
