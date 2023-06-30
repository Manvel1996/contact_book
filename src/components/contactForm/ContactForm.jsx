import React, { useState } from "react";
import Input from "../UI/input/Input";


export default function ContactForm({ editContact }) {
  const [contact, setContact] = useState({});

  const [userName, setUserName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, SetPhoto] = useState("");
  const [status, setStatus] = useState("");

  return (
    <form>
      <Input
        type="text"
        placeholder="Name"
        onChange={(e) => setUserName(e.target.value)}
        required={true}
      />
      <Input
        type="text"
        placeholder="Surname"
        onChange={(e) => setSurName(e.target.value)}
        required={true}
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
        required={true}
      />
      <Input
        type="text"
        placeholder="Photo URL"
        onChange={(e) => SetPhoto(e.target.value)}
      />

     
    </form>
  );
}
