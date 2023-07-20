import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../redux/features/auth/AuthSlice";

// import { checkIsAuth, registerUser } from "../redux/feauters/auth/AuthSlice";
// import { toast } from "react-toastify";

import { ROUTE } from "../constants/routConstants";

import Input from "../components/UI/input/Input";
import Select from "../components/UI/select/Select";

import { AUTH_GENDER } from "../constants/authConstants";
import { PHONE_START } from "../constants/contactConstants";

import {
  emailControl,
  passwordControl,
  phoneControl,
  textControl,
} from "../controllers/FormControl";

import "../assets/styles/pages/Register.scss";

export default function Register() {
  const [oldImg, setOldImg] = useState("");
  const [newImg, setNewImg] = useState("");

  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);

  const [surname, setSurname] = useState("");
  const [surnameErr, setSurnameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [phone, setPhone] = useState(PHONE_START);
  const [phoneErr, setPhoneErr] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordErr, setRepeatPasswordErr] = useState(false);

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

  function submit() {
    if (userName?.length < 2 || userName?.length > 20) {
      setUserNameErr(true);
    }

    if (surname?.length < 2 || surname?.length > 20) {
      setSurnameErr(true);
    }

    if (
      email?.length === 0 ||
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) ||
      email?.length >= 30
    ) {
      setEmailErr(true);
    }

    if (
      !/^[\+]?[(]?[0-9]{3}[)]?[\s]?[0-9]{2}[\s]?[0-9]{3}[\s]?[0-9]{3}$/.test(
        phone
      )
    ) {
      setPhoneErr(true);
    }

    if (password?.length < 5) {
      setPasswordErr(true);
    }

    if (password !== repeatPassword) {
      setRepeatPasswordErr(true);
    }

    if (
      userName?.length < 2 ||
      userName?.length > 20 ||
      surname?.length < 2 ||
      surname?.length > 20 ||
      email?.length === 0 ||
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) ||
      email?.length >= 30 ||
      !/^[\+]?[(]?[0-9]{3}[)]?[\s]?[0-9]{2}[\s]?[0-9]{3}[\s]?[0-9]{3}$/.test(
        phone
      ) ||
      password?.length < 5 ||
      password !== repeatPassword
    ) {
      return;
    }

    try {
      dispatch(
        registerUser({ userName, surname, email, phone, password, gender })
      );
      clearForm();
    } catch (error) {
      console.log(error);
    }
  }

  function clearForm() {
    setNewImg("");
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
  }

  return (
    <div className="register">
      <form onSubmit={(e) => e.preventDefault()} className="register-form">
        <h1 className="auth-title">Register</h1>

        <label className="upload-img">
          Upload image:
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              setNewImg(e.target.files[0]);
              setOldImg("");
            }}
          />
        </label>

        <div className="register-form-img">
          {/* {oldImg && (
            <img className="img--300" src={`http://localhost:5000/${oldImg}`} alt={oldImg.name} />
          )} */}

          {newImg && (
            <img
              className="img--300"
              src={URL.createObjectURL(newImg)}
              alt={newImg.name}
            />
          )}
        </div>

        <Input
          label="Name*"
          id="user-name-id"
          type="text"
          placeholder="Name"
          onChange={(e) => textControl(e, setUserName, setUserNameErr)}
          value={userName}
          err={userNameErr}
          errText="The Name must contain at least 2 characters and no more than 20"
        />

        <Input
          label="Surname*"
          id="surname-id"
          type="text"
          placeholder="Surname"
          onChange={(e) => textControl(e, setSurname, setSurnameErr)}
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
          onChange={(e) => passwordControl(e, setPassword, setPasswordErr)}
          value={password}
          err={passwordErr}
          errText="The password must contain at least 5 characters"
        />

        <Input
          label="Repeat password*"
          id="repeat-password-id"
          type="password"
          placeholder="Repeat password"
          onChange={(e) =>
            passwordControl(e, setRepeatPassword, setRepeatPasswordErr)
          }
          value={repeatPassword}
          err={repeatPasswordErr}
          errText="Password mismatch"
        />

        <Select
          value={gender}
          onChangeSelect={(val) => setGender(val)}
          defaultValue="Gender"
          options={[
            { value: AUTH_GENDER.OTHER, name: AUTH_GENDER.OTHER },
            { value: AUTH_GENDER.MALE, name: AUTH_GENDER.MALE },
            { value: AUTH_GENDER.FEMALE, name: AUTH_GENDER.FEMALE },
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
