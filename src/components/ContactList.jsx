import React from "react";

import { useSelector } from "react-redux";

import ContactItem from "./ContactItem";
import { contacts } from "../redux/features/contacts/ContactsActions";

import "../assets/styles/components/ContactList.scss";

export default function ContactList() {
  const contactsList = useSelector(contacts);

  return (
    <div className="contact-list">
      {contactsList.length === 0 ? (
        <h2 className="contacts-book__title">Contacts list is empty</h2>
      ) : (
        contactsList.map((contact) => (
          <ContactItem key={contact?.id} contact={contact} />
        ))
      )}
    </div>
  );
}
