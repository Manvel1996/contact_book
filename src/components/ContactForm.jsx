import React, { useEffect, useState } from "react";

import uuid from "react-uuid";
import { useDispatch } from "react-redux";

import Input from "./UI/input/Input";
import Select from "./UI/select/Select";
import {
  emailControl,
  phoneControl,
  photoUrlControl,
  textControl,
} from "../controllers/FormControl";

import {
  addContact,
  editContact,
} from "../redux/features/contacts/ContactSlice";

import { CONTACT_STATUS, CONTACT_TYPE, PHONE_START } from "../constants/contactConstants";

import "../assets/styles/components/ContactForm.scss";

export default function ContactForm({ closeModal, editedContact, visible }) {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);

  const [surname, setSurname] = useState("");
  const [surnameErr, setSurnameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [phone, setPhone] = useState(PHONE_START);
  const [phoneErr, setPhoneErr] = useState(false);

  const [photoUrl, setPhotoUrl] = useState("");
  const [photoUrlErr, setPhotoUrlErr] = useState(false);

  const [status, setStatus] = useState("");
  const [type, setType] = useState(CONTACT_TYPE.ALL);

  useEffect(() => {
    if (editedContact) {
      setUserName(editedContact.userName);
      setSurname(editedContact.surname);
      setEmail(editedContact.email);
      setPhone(editedContact.phone);
      setPhotoUrl(editedContact.photoUrl);
      setStatus(editedContact.status);
      setType(editedContact.type);

      if (
        editedContact?.userName?.length >= 2 &&
        editedContact?.userName?.length <= 20
      ) {
        setUserNameErr(false);
      }

      if (
        editedContact?.surname?.length >= 2 &&
        editedContact?.surname?.length <= 20
      ) {
        setSurnameErr(false);
      }

      if (
        editedContact?.email?.length > 0 &&
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) &&
        email?.length < 30
      ) {
        setEmailErr(false);
      }

      if (
        /^[\+]?[(]?[0-9]{3}[)]?[\s]?[0-9]{2}[\s]?[0-9]{3}[\s]?[0-9]{3}$/.test(
          phone
        )
      ) {
        setPhoneErr(false);
      }

      if (
        photoUrl?.length > 0 &&
        /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
          photoUrl
        )
      ) {
        setPhotoUrlErr(false);
      }
    }
  }, [visible]);

  function clearForm() {
    setUserName("");
    setUserNameErr(false);
    setSurname("");
    setSurnameErr(false);
    setEmail("");
    setEmailErr(false);
    setPhone(PHONE_START);
    setPhoneErr(false);
    setPhotoUrl("");
    setPhotoUrlErr(false);
    setStatus("");
    setType(CONTACT_TYPE.ALL);
  }

  function submit(e) {
    e.preventDefault();

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

    if (
      photoUrl?.length > 0 &&
      !/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
        photoUrl
      )
    ) {
      setPhotoUrlErr(true);
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
      (photoUrl?.length > 0 &&
        !/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
          photoUrl
        ))
    )
      return;

    const newContact = {
      id: editedContact ? editedContact.id : uuid(),
      userName,
      surname,
      email,
      phone,
      photoUrl,
      status,
      type,
    };

    if (editedContact) {
      dispatch(editContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }

    clearForm();
    closeModal();
  }

  return (
    <form className="contact-form">
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
        label="Photo URL"
        id="photo-url-id"
        type="text"
        placeholder="Photo URL"
        onChange={(e) => photoUrlControl(e, setPhotoUrl, setPhotoUrlErr)}
        value={photoUrl}
        err={photoUrlErr}
        errText="The link should look like this https://photoUrl"
      />

      <div className="contact-form-selects">
        <Select
          value={status}
          onChangeSelect={(val) => setStatus(val)}
          defaultValue="STATUS"
          options={[
            { value: CONTACT_STATUS.ONLINE, name: CONTACT_STATUS.ONLINE },
            { value: CONTACT_STATUS.OFFLINE, name: CONTACT_STATUS.OFFLINE },
          ]}
        />

        <Select
          value={type}
          onChangeSelect={(val) => setType(val)}
          defaultValue="TYPE"
          options={[
            { value: CONTACT_TYPE.ALL, name: CONTACT_TYPE.ALL },
            { value: CONTACT_TYPE.FAVORITE, name: CONTACT_TYPE.FAVORITE },
          ]}
        />
      </div>

      <div className="contact-form-buttons">
        <button type="reset" className="button--red" onClick={clearForm}>
          Reset
        </button>

        <button type="submit" className="button--green" onClick={submit}>
          {editedContact ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
}
