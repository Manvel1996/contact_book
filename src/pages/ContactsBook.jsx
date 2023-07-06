import React, { useState } from "react";

import ContactForm from "../components/ContactForm";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/MOdal";

import "../assets/styles/pages/ContactsBook.scss";
import ContactList from "../components/ContactList";

export default function ContactsBook() {
  const [visible, setVisible] = useState(false);
  const [contacts, setContacts] = useState([]);

  console.log(contacts);

  function closeModal() {
    setVisible(false);
  }

  function addContact(contact) {
    setContacts([contact, ...contacts]);
  }

  function editContact(contact) {
    setContacts(
      contacts.map((el) => {
        if (el.id === contact.id) {
          return contact;
        }
        return el;
      })
    );
  }

  function removeContact(id) {
    setContacts(contacts.filter((el) => el.id !== id));
  }

  return (
    <div className="contacts-book">
      <Button onClick={() => setVisible(true)}>Add Contact</Button>

      <ContactList contacts={contacts} />

      <Modal visible={visible} setVisible={setVisible}>
        <ContactForm
          closeModal={closeModal}
          addContact={addContact}
          editContact={editContact}
        />
      </Modal>
    </div>
  );
}
