import React from "react";
import styles from "./notification.module.css";

export const showErrMsg = (msg) => {
	return <div className={styles.errMsg}>{msg}</div>;
};

export const showSuccessMsg = (msg) => {
	return <div className={styles.successMsg}>{msg}</div>;
};
