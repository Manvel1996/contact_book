import React from "react";
import ContactItem from "./ContactItem";

import "../assets/styles/components/ContactList.scss";

export default function ContactList({ contacts, removeContact, editContact }) {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <h2 className="contacts-book__title">Contacts list is empty</h2>
      ) : (
        contacts.map((contact) => (
          <ContactItem
            key={contact?.id}
            contact={contact}
            removeContact={removeContact}
            editContact={editContact}
          />
        ))
      )}
    </div>
  );
}
