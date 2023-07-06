import React, { useState } from "react";

import uuid from "react-uuid";

import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

import "../assets/styles/components/ContactForm.scss";
import InputErr from "./UI/inputError/InputErr";

export default function ContactForm({
  closeModal,
  addContact,
  editContact,
  editedContact,
}) {
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);

  const [surName, setSurName] = useState("");
  const [surNameErr, setSurNameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);

  const [photo, setPhoto] = useState("");
  const [status, setStatus] = useState("");

  function formControl() {
    if (
      userName.length > 2 &&
      surName.length > 2 &&
      (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) ||
        email.length === 0) &&
      phone.length > 2
    ) {
      return true;
    }
  }

  function clearForm() {
    setUserName("");
    setSurName("");
    setEmail("");
    setPhone("");
    setPhoto("");
    setStatus("");
  }

  function submit(e) {
    e.preventDefault();

    if (!formControl()) {
      return alert("qxx");
    }

    const newContact = {
      id: uuid(),
      userName,
      surName,
      email,
      phone,
      photo,
      status,
    };

    if (editedContact) {
      editContact(newContact);
    } else addContact(newContact);

    clearForm();
    closeModal();
  }

  return (
    <form className="form">
      <Input
        type="text"
        placeholder="Name"
        onChange={(e) => setUserName(e.target.value)}
        required={true}
        value={userName}
      />
      {userNameErr && (
        <InputErr>Name must contain at least 2 characters</InputErr>
      )}
      <Input
        type="text"
        placeholder="Surname"
        onChange={(e) => setSurName(e.target.value)}
        required={true}
        value={surName}
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="tel"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
        required={true}
        value={phone}
      />
      <Input
        type="text"
        placeholder="Photo URL"
        onChange={(e) => setPhoto(e.target.value)}
        value={photo}
      />

      <Select
        className="select"
        value={status}
        onChangeSelect={(val) => setStatus(val)}
        defaultValue="Status"
        options={[
          { value: true, name: "Online" },
          { value: false, name: "Offline" },
        ]}
      />

      <div className="form-btns">
        <button type="reset" className="btn--red" onClick={clearForm}>
          Reset
        </button>

        <button type="submit" className="btn--green" onClick={submit}>
          {editedContact ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
}
