import React, { useState } from "react";

import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Pagination from "../components/UI/pagination/pagination";

import { contactPageChange } from "../redux/features/contacts/ContactsActions";

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

      <Pagination
        totalItems={1000}
        itemsPerPage={20}
        contactPageChange={contactPageChange}
      />
      <Modal visible={visible} setVisible={setVisible}>
        <ContactForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}
