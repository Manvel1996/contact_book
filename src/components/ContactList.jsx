import React from "react";

import ContactItem from "./ContactItem";

import "../assets/styles/components/ContactList.scss";

export default function ContactList({
  contactsList,
  openModal,
  changeEditedContact,
}) {
  return (
    <div className="contact-list">
      {contactsList?.length === 0 ? (
        <h2 className="contact-list__title">Contacts list is empty</h2>
      ) : (
        contactsList.map((contact) => (
          <ContactItem
            key={contact?.id}
            contact={contact}
            openModal={openModal}
            changeEditedContact={changeEditedContact}
          />
        ))
      )}
    </div>
  );
}
