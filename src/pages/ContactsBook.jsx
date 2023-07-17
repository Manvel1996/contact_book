import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Pagination from "../components/UI/pagination/Pagination";

import { CONTACT_PAGE_GET_COUNT } from "../constants/contactConstants";

import {
  contactPageChange,
  getContacts,
} from "../redux/features/contacts/ContactSlice";

import "../assets/styles/pages/ContactsBook.scss";

export default function ContactsBook() {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const contactsList = useSelector(getContacts);

  function closeModal() {
    setVisible(false);
  }

  function pageChange(pageNumber) {
    dispatch(contactPageChange(pageNumber));
  }

  return (
    <div className="contacts-book">
      <Button onClick={() => setVisible(true)}>Add Contact</Button>

      <ContactList contactsList={contactsList} />

      {contactsList?.length > CONTACT_PAGE_GET_COUNT && (
        <Pagination
          totalItems={contactsList.length}
          itemsPerPage={CONTACT_PAGE_GET_COUNT}
          pageChange={pageChange}
        />
      )}

      <Modal visible={visible} setVisible={setVisible}>
        <ContactForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}
