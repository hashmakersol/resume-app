import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";

import config from "../../../config.json";

function ActivationEmail() {
  const { activation_token } = useRouter();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            // `${config.API_ENPOINT}/user/activation`,
            "http://localhost:5001/user/activation",
            { activation_token }
          );
          setSuccess(res.data.msg);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div className='active_page'>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
    </div>
  );
}

export default ActivationEmail;
