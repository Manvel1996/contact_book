import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  loginUser,
  checkIsAuth,
  authStatus,
} from "../redux/features/auth/AuthActions";
import { clearStatus } from "../redux/features/auth/AuthSlice";

import Input from "../components/UI/input/Input";

import { ROUTE } from "../constants/routConstants";

import "../assets/styles/pages/Login.scss";

export default function Login() {
  const [mailOrPhone, setMailOrPhone] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const dispatch = useDispatch();

  const status = useSelector(authStatus);
  const isAuth = useSelector(checkIsAuth);

  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      toast(status, { toastId: 1 });
      dispatch(clearStatus());
    }
    if (isAuth) {
      navigate(ROUTE.HOME);
    }
  }, [isAuth]);

  function submit(e) {
    e.preventDefault();

    if (mailOrPhone.trim().length < 2 || password.length < 5) {
      return setPasswordErr(true);
    }

    dispatch(loginUser({ mailOrPhone, password }));
    clearForm();
  }

  function clearForm() {
    setMailOrPhone("");
    setPassword("");
    setPasswordErr(false);
  }

  return (
    <div className="login">
      <form onSubmit={submit} className="login-form ">
        <h1 className="auth-title">Login</h1>

        <Input
          label="Phone or Email*"
          id="user-name-id"
          type="text"
          placeholder="Phone or Email"
          onChange={(e) => {
            setMailOrPhone(e.target.value);
            setPasswordErr(false);
          }}
          value={mailOrPhone}
        />

        <Input
          label="Password*"
          id="password-id"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordErr(false);
          }}
          value={password}
          err={passwordErr}
          errText="Incorrect login or password"
        />

        <div className="login-form-buttons">
          <button type="submit" className="button--green" onClick={submit}>
            Login
          </button>

          <button type="reset" className="button--red" onClick={clearForm}>
            Reset
          </button>
        </div>

        <Link to={ROUTE.REGISTER} className="form-link form-link--margin">
          Create new account ?
        </Link>
      </form>
    </div>
  );
}
