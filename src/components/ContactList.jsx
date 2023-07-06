import React from "react";

export default function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <h2 className="contacts-book__title">Contacts list</h2>
      ) : (
        contacts.map((contact) => <div key={contact.id}>{contact.userName}</div>)
      )}
    </div>
  );
}
