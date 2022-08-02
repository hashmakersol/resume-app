import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchLogin,
  fetchUser,
  dispatchGetUser,
} from "../redux/actions/authAction";
import { GET_TOKEN } from "../redux/tokenSlice";

import Header from "../components/header/Header";
import Body from "../components/body/Body";
import axios from "axios";
import config from "../config.json";
function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post(
          `${config.API_ENPOINT}/user/refresh_token`,
          null
        );
        dispatch({ type: GET_TOKEN, payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);

  return (
    <>
      <div className='App'>
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;
