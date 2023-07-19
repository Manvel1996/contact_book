import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import ContactsFilter from "../components/ContactsFilter";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Pagination from "../components/UI/pagination/Pagination";

import { CONTACT_PAGE_GET_COUNT } from "../constants/contactConstants";

import { contactPageChange } from "../redux/features/contacts/ContactSlice";
import {
  getContacts,
  getCurrentPage,
} from "../redux/features/contacts/ContactActions";

import "../assets/styles/pages/ContactsBook.scss";

export default function ContactsBook() {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const contactsList = useSelector(getContacts);
  const currentPage = useSelector(getCurrentPage);

  function closeModal() {
    setVisible(false);
  }

  function pageChange(pageNumber) {
    dispatch(contactPageChange(pageNumber));
  }

  const sliceStart = CONTACT_PAGE_GET_COUNT * (currentPage - 1);
  const contactsListSlice = contactsList.slice(
    sliceStart,
    sliceStart + CONTACT_PAGE_GET_COUNT
  );

  return (
    <div className="contacts-book">
      <ContactsFilter />
      <Button onClick={() => setVisible(true)}>Add Contact</Button>

      <ContactList contactsList={contactsListSlice} />

      {contactsList?.length !== 0 && <Pagination
        totalItems={contactsList?.length}
        itemsPerPage={CONTACT_PAGE_GET_COUNT}
        pageChange={pageChange}
        currentPage={currentPage}
      />}

      <Modal visible={visible} setVisible={setVisible}>
        <ContactForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}
