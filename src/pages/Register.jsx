import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { checkIsAuth, registerUser } from "../redux/feauters/auth/AuthSlice";
// import { toast } from "react-toastify";

import { ROUTE } from "../constants/routConstants";

import Input from "../components/UI/input/Input";
import Select from "../components/UI/select/Select";

import { AUTH_GENDER } from "../constants/authConstants";
import { PHONE_START } from "../constants/contactConstants";

import {
  emailControl,
  phoneControl,
  surnameControl,
  userNameControl,
} from "../controllers/ContactForm";

import "../assets/styles/pages/Register.scss";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);

  const [surname, setSurname] = useState("");
  const [surnameErr, setSurnameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [phone, setPhone] = useState(PHONE_START);
  const [phoneErr, setPhoneErr] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordErr, setRepeatPasswordErr] = useState("");

  const [gender, setGender] = useState("");

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

  const submit = () => {
    try {
      dispatch(registerUser({ userName, password }));
    } catch (error) {
      console.log(error);
    }
  };

  function clearForm() {
    setUserName("");
    setUserNameErr(false);
    setSurname("");
    setSurnameErr(false);
    setEmail("");
    setEmailErr(false);
    setPhone(PHONE_START);
    setPhoneErr(false);
    setPassword("");
    setPasswordErr(false);
    setRepeatPassword("");
    setRepeatPasswordErr(false);
    setGender("");
    setType(CONTACT_TYPE.ALL);
  }

  return (
    <div className="register">
      <form onSubmit={(e) => e.preventDefault()} className="register-form">
        <h1 className="auth-title">Register</h1>

        <Input
          label="Name*"
          id="user-name-id"
          type="text"
          placeholder="Name"
          onChange={(e) => userNameControl(e, setUserName, setUserNameErr)}
          value={userName}
          err={userNameErr}
          errText="The Name must contain at least 2 characters and no more than 20"
        />

        <Input
          label="Surname*"
          id="surname-id"
          type="text"
          placeholder="Surname"
          onChange={(e) => surnameControl(e, setSurname, setSurnameErr)}
          value={surname}
          err={surnameErr}
          errText="The Surname must contain at least 2 characters and no more than 20"
        />

        <Input
          label="Email*"
          id="email-id"
          type="email"
          placeholder="Email"
          onChange={(e) => emailControl(e, setEmail, setEmailErr)}
          value={email}
          err={emailErr}
          errText="Invalid email address or more than 30 characters"
        />

        <Input
          label="Phone*"
          id="phone-id"
          type="tel"
          placeholder="Phone"
          onChange={(e) => phoneControl(e, setPhone, setPhoneErr)}
          value={phone}
          err={phoneErr}
          errText={`Write this way ${PHONE_START} 44 444 444`}
        />

        <Input
          label="Password*"
          id="password-id"
          type="password"
          placeholder="Password"
          onChange={(e) => phoneControl(e, setPhone, setPhoneErr)}
          value={password}
          err={passwordErr}
          errText="Wrong password"
        />

        <Input
          label="Repeat password*"
          id="repeat-password-id"
          type="password"
          placeholder="Repeat password"
          onChange={(e) => phoneControl(e, setPhone, setPhoneErr)}
          value={repeatPassword}
          err={repeatPasswordErr}
          errText="Wrong password"
        />

        <Select
          value={gender}
          onChangeSelect={(val) => setGender(val)}
          defaultValue="Gender"
          options={[
            { value: AUTH_GENDER.MALE, name: AUTH_GENDER.MALE },
            { value: AUTH_GENDER.FEMALE, name: AUTH_GENDER.FEMALE },
            { value: AUTH_GENDER.OTHER, name: AUTH_GENDER.OTHER },
          ]}
        />

        <div className="register-form-buttons">
          <button type="submit" className="button--green" onClick={submit}>
            Register
          </button>

          <button type="reset" className="button--red" onClick={clearForm}>
            Reset
          </button>
        </div>

        <Link to={ROUTE.LOGIN} className="form-link form-link--margin">
          do you have an account ?
        </Link>
      </form>
    </div>
  );
}
