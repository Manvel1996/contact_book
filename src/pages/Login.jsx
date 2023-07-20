import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// import { checkIsAuth, loginUser } from "../redux/features/auth/AuthSlice";
// import { toast } from "react-toastify";
import Input from "../components/UI/input/Input";

import { passwordControl } from "../controllers/FormControl";

import { ROUTE } from "../constants/routConstants";

import "../assets/styles/pages/Login.scss";

export default function Login() {
  const [mailOrPhone, setMailOrPhone] = useState("");
  const [mailOrPhoneErr, setMailOrPhoneErr] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const dispatch = useDispatch();
  //   const { status } = useSelector((state) => state.auth);
  //   const isAuth = useSelector(checkIsAuth);

  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (status) {
  //       toast(status);
  //     }
  //     if (isAuth) {
  //       navigate("/");
  //     }
  //   }, [status, navigate, isAuth]);

  function submit() {
    try {
      dispatch(loginUser({ userName, password }));
      clearForm();
    } catch (error) {
      setMailOrPhoneErr(true);
      setPasswordErr(true);
    }
  }

  function clearForm() {
    setMailOrPhone("");
    setMailOrPhoneErr(false);
    setPassword("");
    setPasswordErr(false);
  }

  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()} className="login-form ">
        <h1 className="auth-title">Login</h1>

        <Input
          label="Name*"
          id="user-name-id"
          type="text"
          placeholder="Name"
          onChange={(e) => setMailOrPhone(e.target.value)}
          value={mailOrPhone}
          err={mailOrPhoneErr}
          errText="Err can't login"
        />

        <Input
          label="Password*"
          id="password-id"
          type="password"
          placeholder="Password"
          onChange={(e) => passwordControl(e, setPassword, setPasswordErr)}
          value={password}
          err={passwordErr}
          errText="The password must contain at least 5"
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
