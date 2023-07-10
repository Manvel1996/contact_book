import React, { useState } from "react";

import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";

import "../assets/styles/pages/ContactsBook.scss";

export default function ContactsBook() {
  const [visible, setVisible] = useState(false);

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className="contacts-book">
      <Button onClick={() => setVisible(true)}>Add Contact</Button>

      <ContactList />

      <Modal visible={visible} setVisible={setVisible}>
        <ContactForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}
